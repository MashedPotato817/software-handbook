# 软件与工具使用手册

面向需要安装软件、配置工具或学习平台使用方法的 **PC 新手读者**，整理中文安装与入门指南。

首批教程以 Windows 为主，其他系统按实际需要补充；优先覆盖安装全流程、必要配置和验证，后续补充简单使用技巧。

内容范围包括 **常用与专业软件**、**开发工具与平台** 和 **AI 工具** 三大类。

- **常用与专业软件**：draw.io、Origin、嘉立创 EDA、OBS Studio，覆盖制图、科研数据处理、电子设计与录屏。
- **开发工具与平台**：Visual Studio Code、Python、Git、npm、Linux（WSL），覆盖编辑器、编程环境与基础开发工具。
- **AI 工具**：Claude Code、DeepSeek Harness、Codex、OpenCode、Hermes Agent，优先采用 npm 安装和 DeepSeek 官方 API，覆盖必要设置与首次使用；Hermes 保留官方桌面安装包。

本轮暂不编写 Office 系列、MATLAB、AutoCAD、Proteus、Multisim、Keil 和 Adobe 系列（Photoshop / Premiere Pro）。

## 当前状态

项目处于试写阶段，已有 14 篇精简入门手册草稿，具体入口见[手册首页](index.md)。内容以 Windows 安装与首次使用为主，draw.io 和嘉立创 EDA 采用网页版；各篇均待人工验证，具体环境要求见正文。

AI 手册采用面向国内网络的推荐路径：npm 命令使用单次 npmmirror 镜像参数，模型优先直连 DeepSeek；Codex 同时保留 ChatGPT 官方登录路径。镜像不保证覆盖所有额外下载，ChatGPT 路径仍需访问 OpenAI 服务；无代理国内网络下的安装、启动和模型回复均待人工验证。

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
