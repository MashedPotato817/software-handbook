---
title: Codex / ChatGPT
category: AI 工具
author: HGXdev
---

# Codex / ChatGPT

Codex 是 OpenAI 的编程智能体。本篇用 npm 安装 **Codex CLI（命令行版）**，再选择 DeepSeek 模型或 ChatGPT 官方账号登录；npm 不会安装 ChatGPT 桌面应用。

> 适用环境：Windows 11，x64 或 ARM64，Node.js 24 LTS。本文为待人工验证的草稿；初稿：**HGXdev**，维护者依据官方资料改写。

## 1. 准备并安装

先按 [npm 手册](../npm/index.md)准备 Node.js 和 npm，在 PowerShell 中运行：

```powershell
npm.cmd install -g @openai/codex --registry=https://registry.npmmirror.com
codex.cmd --version
```

看到版本号后，新建并打开 `AI练习` 文件夹，在资源管理器地址栏输入 `powershell` 并回车。后续启动命令都在这个窗口中运行。

## 2. 选择模型与认证路径

两条路径任选一条，然后完成第 3 节。**安装用镜像不代表模型服务也可直接访问。**

### 路径 A：DeepSeek 国内模型

准备 [DeepSeek 开放平台](https://platform.deepseek.com/)的 API key 和可用 API 余额。此路径由 DeepSeek 提供模型并按 API 计费，不消耗 ChatGPT 套餐额度。

1. 首次安装时运行 `codex.cmd`，到欢迎或登录界面后按 `Ctrl+C` 退出，使 Codex 创建自己的配置目录；已有配置时无需重复此步。
2. 完全退出正在运行的 Codex CLI、IDE 会话和 ChatGPT 桌面应用，避免它们继续读取旧设置。在 PowerShell 执行 [DeepSeek 官方接入教程](https://api-docs.deepseek.com/quick_start/agent_integrations/codex/)提供的配置命令：

```powershell
irm https://cdn.deepseek.com/api-docs/codex-deepseek-setup-en.ps1 | iex
```

3. 菜单选择 **1**（`deepseek-flash`），按脚本提示填写自己的 DeepSeek API key；确认配置完成，再运行 `codex.cmd`。
4. 查看界面或输入 `/status`，确认提供方和模型是 DeepSeek，再进行练习。

该命令会下载并运行 DeepSeek 的配置脚本，修改 `%USERPROFILE%\.codex\config.toml` 等设置，同一配置也会影响桌面端和 IDE。脚本将旧配置备份到 `%USERPROFILE%\.codex\backup-deepseek\`，其中可能含密钥，请妥善保管。恢复时先退出相关客户端，再运行同一命令选择 **9**，按提示确认恢复脚本执行前的配置。

### 路径 B：ChatGPT 官方登录

需要具有 Codex 使用权限的 ChatGPT 账号，按账号套餐和额度使用。此路径仍需访问 OpenAI 登录与模型服务，并满足其服务地区要求，不属于国内直连模型路径。

使用过路径 A 时，先按上面的恢复步骤选择 **9**，重新打开 PowerShell。确认原来使用的配置已恢复后，执行：

```powershell
codex.cmd login
codex.cmd
```

按浏览器提示完成 **Sign in with ChatGPT**，返回终端；输入 `/status`，确认是预期的 ChatGPT 账号和 OpenAI 模型。如果恢复后仍是其他提供方，先核对原配置，不把登录成功当作已切换模型。

只需要 ChatGPT 桌面应用时，使用 [OpenAI 官方 Windows 安装入口](https://learn.chatgpt.com/docs/windows/windows-app)；本篇的 npm 命令安装的是 Codex CLI。

## 3. 首次使用与排错

确认当前目录是 `AI练习`，发送：“只列出当前文件夹中的文件；若为空就说明为空，不要修改文件或运行其他程序。”

确认结果与文件资源管理器一致，目录未变化，没有认证或额度报错。记录所选路径、模型、版本和结果；路径 A 可同时在 DeepSeek 平台核对调用记录。

- 下载失败：记录网址和报错，镜像不保证覆盖额外文件下载。
- 路径 A 报错：核对 DeepSeek API key、余额及配置脚本输出。
- 路径 B 登录失败：记录官方账号提示，分别核对 OpenAI 登录页和模型服务访问；不使用 DeepSeek 密钥替代 ChatGPT 登录。

## 来源与验证状态

- 官方资料：[Codex CLI](https://learn.chatgpt.com/docs/codex/cli)、[认证与状态检查](https://learn.chatgpt.com/docs/auth)、[DeepSeek 接入、备份与恢复](https://api-docs.deepseek.com/quick_start/agent_integrations/codex/)、[npmmirror](https://npmmirror.com/)。
- 核对日期：2026-10-21；官方 npm 与镜像当前均为 `0.163.0`。未运行配置脚本；安装、启动、两条路径的模型回复和无代理国内网络验收均待人工验证。
