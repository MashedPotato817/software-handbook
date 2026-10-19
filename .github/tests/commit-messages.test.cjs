const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const workflowPath = path.join(__dirname, '../workflows/commit-messages.yml');
const workflow = fs.readFileSync(workflowPath, 'utf8');
const script = workflow.replace(/\r\n/g, '\n').split('script: |\n')[1]
  .split('\n').map(line => line.replace(/^ {12}/, '')).join('\n');
const run = new (Object.getPrototypeOf(async function () {}).constructor)(
  'github', 'context', 'core', script,
);

async function check(messages, total = messages.length) {
  const failures = [];
  const errors = [];
  const commits = messages.map((message, index) => ({
    sha: (index + 1).toString(16).padStart(40, '0'), commit: { message },
  }));
  const github = {
    rest: { pulls: { listCommits() { throw new Error('Use pagination'); } } },
    paginate: async () => commits,
  };
  const context = {
    repo: { owner: 'example', repo: 'handbook' },
    payload: { pull_request: { number: 3, commits: total } },
  };
  await run(github, context, {
    error: value => errors.push(value), setFailed: value => failures.push(value), info() {},
  });
  return { failures, errors };
}

test('accepts documented types, lowercase scopes, Chinese text and CRLF', async () => {
  for (const type of ['docs', 'fix', 'feat', 'style', 'ci', 'chore', 'refactor', 'test', 'perf']) {
    const result = await check([`${type}(git-workflow): 更新 Git 说明\r\n\r\n- 已核对资料与验证结果`]);
    assert.equal(result.failures.length, 0, type);
  }
  assert.equal((await check(['docs: 更新教程\n\n- 补充适用环境'])).failures.length, 0);
});

test('rejects missing type, invalid type/scope and English-only or empty subjects', async () => {
  for (const title of ['更新AI-Codex', 'build: 更新教程', 'Docs: 更新教程',
    'docs(Codex): 更新教程', 'docs(git_workflow): 更新教程', 'docs: add Codex', 'docs: ']) {
    assert.equal((await check([`${title}\n\n- 已核对资料`])).failures.length, 1, title);
  }
});

test('requires a nonempty Chinese bullet in the commit body', async () => {
  for (const body of ['', '\n\n- ', '\n\n- Add documentation', '\n\n补充安装步骤']) {
    assert.equal((await check([`docs: 更新教程${body}`])).failures.length, 1, body);
  }
});

test('explains that a Chinese title with no commit body is not a title-language failure', async () => {
  const result = await check(['docs(codex): 新增 Windows 安装与首次使用试写稿']);
  assert.equal(result.failures.length, 1);
  assert.equal(result.errors.length, 1);
  assert.match(result.errors[0], /提交正文为空/);
  assert.doesNotMatch(result.errors[0], /标题应|标题主体/);
  assert.match(result.failures[0], /不是 PR 说明/);
  assert.match(result.failures[0], /无需关闭或新建 PR/);
});

test('distinguishes title format, title language and body format errors', async () => {
  const format = await check(['更新教程\n\n- 已核对资料']);
  assert.match(format.errors[0], /标题格式不符/);
  assert.doesNotMatch(format.errors[0], /标题主体缺少中文|提交正文/);
  const language = await check(['docs: update handbook\n\n- 已核对资料']);
  assert.match(language.errors[0], /标题主体缺少中文/);
  assert.doesNotMatch(language.errors[0], /标题格式不符|提交正文/);
  const body = await check(['docs: 更新教程\n\n已核对资料']);
  assert.match(body.errors[0], /提交正文格式不符/);
  assert.doesNotMatch(body.errors[0], /提交正文为空|标题/);
});

test('preserves native git revert messages, including merge reverts', async () => {
  for (const ending of ['.', ', reversing\nchanges made to ' + 'b'.repeat(40) + '.']) {
    const result = await check([`Revert "docs: 更新教程"\n\nThis reverts commit ${'a'.repeat(40)}${ending}`]);
    assert.equal(result.failures.length, 0);
  }
  assert.equal((await check(['Revert "fake"\n\nNo revert reference'])).failures.length, 1);
});

test('rejects the three titles currently present in PR #3', async () => {
  const result = await check(['更新AI-Codex',
    'Add CI workflow for Jekyll site with Docker\n\nSet up GitHub Actions for Jekyll site CI using Docker.',
    'Delete .github/workflows/jekyll-docker.yml']);
  assert.equal(result.failures.length, 1);
  assert.equal(result.errors.length, 3);
});

test('checks commits after the first API page and reports the failing commit', async () => {
  const messages = Array(100).fill('docs: 更新教程\n\n- 已核对资料');
  messages.push('invalid');
  const result = await check(messages);
  assert.equal(result.failures.length, 1);
  assert.equal(result.errors.length, 1);
  assert.match(result.errors[0], /invalid/);
});

test('fails closed when the API does not provide every PR commit', async () => {
  assert.equal((await check([])).failures.length, 1);
  assert.equal((await check(['docs: 更新教程\n\n- 已核对资料'], 251)).failures.length, 1);
});
