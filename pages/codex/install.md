# Codex / ChatGPT：Windows 安装与首次使用

> 状态：试写稿。已于 2026-10-19 核对下方官方资料；尚未在新设备上按本文完成安装、登录和首次使用验证。
>
> 适用环境：Windows，具体系统版本与设备要求以官方安装页面为准；最低系统构建号尚待人工核对。
>
> 初稿：HGXdev；维护者依据官方资料修订。

## 引言

本篇介绍 ChatGPT 桌面应用的官方安装与账号登录路径。应用中可以选择 ChatGPT 进行对话，也可以选择 Codex 处理开发任务；桌面应用入口与 Codex CLI、IDE 扩展应区分。

目标是完成安装、登录，再分别检查需要使用的功能。本篇不涉及第三方模型服务或 CC Switch 配置。

## 正文

### 1. 准备环境

- 确认设备满足官方安装页面列出的系统要求。
- 准备可登录的 ChatGPT 账号；尚无账号时按官方登录页面提示注册。
- 确认网络可以访问官方安装入口与 OpenAI 服务。安装下载和应用登录使用的服务不同，应分别检查访问情况。

### 2. 从官方入口安装

打开 [OpenAI 官方 Windows 应用说明](https://learn.chatgpt.com/docs/windows/windows-app)，点击其中的 Windows 下载入口，运行下载的安装程序并按提示完成安装。需要管理员批准或 Microsoft 账号时，按实际安装提示处理。

根据[官方 Windows 部署说明](https://learn.chatgpt.com/docs/enterprise/windows-deployment)，安装或更新时可能出现 Microsoft Store 组件，但用户无需自行浏览商店。具体流程以安装提示为准，是否打开商店不作为安装成功的判断条件。

如果已经使用 Windows 的 `winget`，也可以在 PowerShell 中运行官方文档提供的命令；它与上面的下载安装路径任选一种即可：

```powershell
winget install --id 9PLM9XGG6VKS -s msstore
```

按实际提示完成后，从开始菜单打开应用。下载入口和更新信息以官方页面为准。

### 3. 登录并选择功能

1. 打开应用，按界面提示登录 ChatGPT 账号。
2. 如需普通问答，选择 ChatGPT，再选择 Chat。
3. 如需开发任务，从 ChatGPT 下拉菜单中选择 Codex。按官方快速开始的流程创建项目或打开文件夹，让任务有明确的工作位置。

上述入口依据[官方快速开始](https://learn.chatgpt.com/docs/quickstart?setup=app)整理，界面名称可能随版本变化。若当前账号或客户端没有对应入口，先记录应用版本、界面和提示，再对照官方资料核对；不要直接判断为安装失败。

### 4. 验证

安装与登录完成后，按实际要使用的功能检查：

| 检查对象 | 操作 | 预期结果 |
| --- | --- | --- |
| 应用与账号 | 从开始菜单打开应用并完成登录 | 应用正常打开，能够进入新对话界面 |
| ChatGPT 对话 | 选择 ChatGPT → Chat，发送“请用一句话介绍你能做什么” | 收到正常文字回复 |
| Codex 开发任务 | 选择 Codex，打开一个测试文件夹，发送“只列出当前文件夹中的文件；若为空就说明为空，不要修改文件” | 返回与目录内容相符的结果，目录内容未被修改 |

只使用 ChatGPT 时，完成前两项即可；需要 Codex 时，再完成第三项。能够打开应用不等于登录或任务执行成功。

验证后请记录 Windows 版本、应用版本、验证日期、实际使用的功能和结果。本文当前没有这些人工复现记录，不能据此认定安装流程已经验证。

### 5. 遇到问题时

- **安装下载失败**：记录安装入口、错误提示和时间，检查该下载入口及 Microsoft 分发服务是否可访问。
- **登录或加载失败**：检查账号提示和 OpenAI 服务访问情况；保留错误信息，区分账号、网络与安装问题。
- **Codex 任务未成功**：确认选择了 Codex 和正确的测试文件夹，检查任务记录中的提示。普通聊天回复不能替代 Codex 任务验证。

## 参考资料

- [OpenAI：Windows 桌面应用](https://learn.chatgpt.com/docs/windows/windows-app)：官方安装入口、Windows 使用说明与可选的 winget 命令。
- [OpenAI：快速开始](https://learn.chatgpt.com/docs/quickstart?setup=app)：账号登录、ChatGPT / Codex 功能选择和首次任务。
- [OpenAI：Windows 部署说明](https://learn.chatgpt.com/docs/enterprise/windows-deployment)：安装方式与 Microsoft Store 组件说明。

## 简单注释

- **ChatGPT 账号**：本篇采用官方账号登录流程；其他认证或第三方服务配置不在本文范围内。
- **待验证**：资料核对、链接检查和站点构建不等于实际完成软件安装或任务执行。
