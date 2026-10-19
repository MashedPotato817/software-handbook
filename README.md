# 软件与工具使用手册

面向需要安装软件、配置工具或学习平台使用方法的 **PC 新手读者**，整理中文安装与入门指南。

首批教程以 Windows 为主，其他系统按实际需要补充；优先覆盖安装全流程、必要配置和验证，后续补充简单使用技巧。

内容范围包括 **常用与专业软件**、**开发工具与平台** 和 **AI 工具** 三大类。

- **常用与专业软件**：包括但不限于 **Office**、**Adobe** 等常用软件的安装和激活，以及 **AutoCAD**、**draw.io**、**Keil**、**MATLAB** 等专业软件的安装和激活。
- **开发工具与平台**：包括但不限于 **Visual Studio Code**、**PyCharm** 等代码编辑器与集成开发环境，以及 **Git**、**npm** 等开发工具和 **GitHub** 等平台的使用方法。
- **AI 工具**：包括但不限于 **DeepSeek Harness**、**OpenCode**、**Codex**、**Claude Code** 等 AI 工具的使用方法，并可按实际需求扩展。

## 当前状态

项目处于框架建立和试写阶段，已有 [Git 手册草稿](pages/git/index.md) 和 [Codex / ChatGPT 手册草稿](pages/codex/index.md)，目前均以 Windows 安装与入门为主，待维护者修改和人工验证。上面列出的工具与平台是计划覆盖的范围，不表示对应教程已经完成。

新增手册或补充章节可使用项目级 [内容贡献工作流技能](.agents/skills/software-handbook-content-workflow/SKILL.md)，先形成带来源和验证状态的草稿，再由维护者审阅与人工验证；提交和发布按 [Git 工作流技能](.agents/skills/software-handbook-git-workflow/SKILL.md) 执行。

## 编写与发布

- 本地 Markdown 是内容的权威原稿，GitHub 仓库用于保存版本和审阅改动。
- GitHub Pages 用于提供公开阅读入口。
- Pages 采用 Jekyll，从正式主线 `main` 的根目录发布；首页按三大类导航，每个工具或平台默认对应一个完整手册页面。
- 仓库默认分支和 Pages 发布分支均为 `main`；后续修改在工作分支完成，经 PR 审阅合并到 `main` 后自动发布。
- 现有紧凑文档布局包括左侧分类导航、中间正文、右侧自动文章目录。每个工具在侧栏保留一个入口，安装、配置、使用和验证通过页内二、三级标题组织。新增工具时将完整手册写入其 `index.md`，在 YAML 头部填写工具名称 `title` 与三大类之一的 `category`，并在根目录 `index.md` 中维护单个首页入口。
- 飞书文档作为另一阅读入口；初期手动发布定稿，正文修改统一回到 Markdown。
- Pages 阅读入口已发布：[在线阅读](https://mashedpotato817.github.io/software-handbook/)。`main` 的 Jekyll 构建、部署、首页导航、教程链接及 CSS、JS 资源访问已验证；初步页面预览已由维护者查看，完整手机排版和浏览器交互仍待人工验证，教程安装流程也仍待人工验证。飞书的实际发布地址尚未提供。

## 仓库说明

- `README.md`：用途、范围、当前状态与阅读入口。
- `AGENTS.md`：AI 协作边界与验证要求。
- `CONTRIBUTING.md`：内容贡献和审阅方式。
- `pages/`：按软件或平台建立目录，完整手册默认放在各目录的 `index.md`；有实际内容时再创建对应文件。
- 根目录 `index.md`：面向读者的三大类导航首页。
- `_config.yml`：Jekyll 站点路径、Markdown 页面配置及发布排除项。
- `_layouts/default.html`、`assets/css/site.css`、`assets/js/navigation.js`：共用阅读布局、响应式样式与自动文章目录，不参与教程正文编写。

## 参与贡献

贡献前请阅读 [贡献说明](CONTRIBUTING.md)。使用 AI 协作时同时遵循 [协作约定](AGENTS.md)。

支持协作者通过工作分支提交 PR，也支持外部贡献者通过 Fork 提交 PR，由仓库维护者最终审阅和合并。

## 许可证

MIT License
