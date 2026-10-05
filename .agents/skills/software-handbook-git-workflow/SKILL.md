---
name: software-handbook-git-workflow
description: 在 software-handbook 仓库中创建工作分支、准备提交、推送、Pull Request、合并、回滚或核对 Git 协作规范时使用。单纯编写或阅读教程内容时不必加载。
license: MIT
metadata:
  version: "1.0.0"
  source: "https://github.com/MashedPotato817/git-workflow"
  source-version: "1.0.0"
  source-commit: "9202502f0f535a75b5924d41442a3fd19957caa2"
---

# 手册仓库 Git 协作流程

本技能适用于本仓库，基于通用 git-workflow 适配。维护对象是 Markdown 手册及已存在的站点配置；本地 Markdown 是权威原稿，GitHub Pages 和飞书文档是阅读入口。

技能说明、示例和“检查通过”都不构成操作授权。以用户本次任务、已有授权和根目录 `AGENTS.md` 为准；不要把流程建议当成自行提交、推送、发布或合并的许可。

## 开始与分支

1. 阅读根目录 `AGENTS.md`、`README.md`、`CONTRIBUTING.md` 和相关现有内容，说明本次改动范围。
2. 检查仓库状态：

   ```powershell
   git status
   git branch -vv
   git remote -v
   git log --oneline --graph --decorate -15
   ```

3. 核对工作区及暂存区中的无关改动，保留它们；同一文件混有其他改动、无法区分范围时先询问。
4. 先确认当前工作分支是否适合本任务；适合则复用，不重复创建。没有适用分支时，从确认过状态的 `main` 创建工作分支，不在 `main` 日常编辑。分支使用英文小写短横线和类型前缀，例如 `docs/update-handbook`、`fix/broken-link`、`feat/site-navigation`。
5. 无远端时按本地流程工作，不执行 `pull`、`push` 或 `gh pr`，不自行添加远端。有远端时先核对地址和分支跟踪关系；需要更新本地 `main` 时，先确认工作区状态允许、当前在 `main` 且跟踪关系正确，再用 `git pull --ff-only`。分叉、冲突或缺少上游时先报告，不以 reset 或强推覆盖。
6. 若用户要求首次初始化，初始提交可以建立 `main`；之后再使用工作分支。不要重复初始化已有仓库。

## 按任务验证

只运行与改动有关、仓库实际具备的检查，不为小范围文档改动新建测试、脚本或依赖。

| 改动 | 应核对的结果 |
| --- | --- |
| 教程正文 | 官方资料来源、适用系统与版本、命令和截图；实际操作验证与待验证步骤分开记录 |
| Markdown 链接或图片 | 相对路径目标、锚点、图片及阅读效果；新增教程后核对首页入口 |
| 导航或 Jekyll 配置 | 配置存在时检查构建结果、页面显示、链接、手机排版；部署后检查实际网址 |
| 协作规范或 skill | 规则与 AGENTS 一致，引用有效，命令适用于当前仓库状态 |

检查 `git diff --check`，并区分本次改动与已有无关问题：报告无关问题，保留原状，提交检查可限定已确认路径。此命令不检查未跟踪文件；新增文件需实际读取并检查，获准提交后定向暂存，再用 `git diff --cached --check`。提交授权包含完成该提交所需的定向暂存，不另行询问。

构建通过不等于教程安装成功，页面本地可读不等于已经发布。当前没有站点配置或验证脚本时，如实说明，不编造构建命令或成功结果。

## 提交范围与消息

用户授权提交后，列明文件，用 `git add -- <已确认路径>` 暂存；不要使用 `git add .` 或 `git add -A`。

提交前检查暂存文件列表和实际差异：

```powershell
git diff --cached --name-only
git diff --cached --check
git diff --cached
```

- 普通 `git commit` 会包含整个暂存区，必须确认其中只有本次获准提交的改动。
- 若暂存区已有无关文件，保留其状态。只有整文件已获授权、工作区版本也已审阅时，才可使用 `git commit --only -- <已确认路径>` 限定提交范围。它提交指定文件的工作区版本，而非仅暂存版本；新增未跟踪文件须先定向暂存。部分行授权不能用这种方式代替范围核对。
- 无法安全隔离提交范围时先询问，不擅自撤销别人的暂存。
- 分支上可以保存未完成的实验，但须已获提交授权，并在消息中说明尚未完成或未验证的状态。
- 提交后用 `git show --stat HEAD` 和 `git status` 核对提交内容与剩余改动。

提交标题使用 `<type>(<可选scope>): <中文主体>`。type 为小写，scope 为英文小写短横线；产品名、命令等技术标识符保留原文。

| 类型 | 用途 |
| --- | --- |
| `docs` | 教程、导航文字、说明及协作规范 |
| `fix` | 错误步骤、失效链接或配置缺陷 |
| `feat` | 用户要求的站点功能 |
| `style` | 页面样式 |
| `ci` | 构建或部署工作流 |
| `chore` | 其他维护 |
| `refactor`、`test`、`perf` | 对应的重构、测试与性能改动 |

正文用中文 `-` 分点记录改动目的、主要变化、资料来源和实际验证结果。没有执行的检查标明未验证。示例标题：`docs(git): 补充首次提交说明`、`fix(github): 修正 Pages 设置入口`。

PowerShell 中使用多次 `-m` 传递短正文；较长正文先写无 BOM UTF-8 文件，再用 `git commit -F` 或 `gh pr create --body-file`。不要把字面量 `\n` 当换行，也不要通过默认编码的管道传递中文正文。

较长提交信息示例，仅在获准提交、暂存区范围已核对时执行：

```powershell
$gitMessageText = @'
docs(workflow): 调整协作流程

- 明确提交范围与验证要求
'@
$gitMessagePath = [System.IO.Path]::GetTempFileName()
[System.IO.File]::WriteAllText($gitMessagePath, $gitMessageText, [System.Text.UTF8Encoding]::new($false))
git commit -F $gitMessagePath
```

## 推送、PR 与合并

- 当前任务已授权哪一步，就完成哪一步；提交授权不自动包含推送、PR、发布或合并。已有明确授权不用重复询问。
- 配置远端前确认用户提供的地址。个人仓库工作分支可推送备份，但须已获授权；不会定期自动推送。
- 默认通过 Pull Request 审阅，PR 描述用中文分点写改动、来源、验证和待确认事项。内容未定稿时用 Draft PR；定稿状态和审阅结论如实记录。
- 合并前核对目标仓库、PR、base/head 分支、最新提交、实际检查及用户的明确合并授权。用户说“检查通过”“继续”不等于单独授权合并。
- 使用普通 merge，保留分支历史和合并节点。GitHub PR 选择 merge；获准本地合并时使用 `git merge --no-ff`，不以 squash 或 rebase merge 代替。合并标题与正文沿用提交格式。
- 请求失败或输出不明确时，先读取远端当前状态，再决定是否重试，不重复创建 PR 或合并。
- 只有实际更新 Pages 发布源或触发部署的操作才核对发布授权。例如 Pages 从 `main` 发布时，已获授权的其他工作分支推送和 Draft PR 创建无需额外确认发布；更新 `main` 前核对已知的自动部署是否在授权范围内。尚未配置 Pages 时，不声称已经发布。
- 飞书正文修订先回到本地 Markdown；同步飞书需在授权范围内执行，并单独核对发布结果。

## 同步、冲突与回滚

同步主线到工作分支时先检查干净状态。需要保留合并节点且已获授权时，使用普通合并，消息可写 `chore(branch): 同步 main 最新改动`；不要自动改写分支历史。

冲突先阅读双方意图，不能机械选择一方。解决后重新核对受影响内容和验证结果。

回滚、reset、rebase、amend、删除分支和强推须有对应授权；强推和改写历史执行前确认具体对象。撤销已发布提交优先采用 `git revert` 保留历史，其生成的 `Revert "…"` 标题保持原样。

## 交付

简要列出修改文件、原因、资料来源、验证结果、未完成事项及推荐的下一条 Git 命令。明确区分未提交、已本地提交、已推送、已合并、已发布的实际状态。

原始技能版权及 MIT 条款见本目录 [LICENSE](LICENSE)。
