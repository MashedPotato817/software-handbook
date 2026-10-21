---
title: Claude Code
category: AI 工具
---

# Claude Code

Claude Code 是 Anthropic 的 AI 编程助手。本篇用 npm 安装命令行版，连接 DeepSeek 官方 API，完成一次文件读取练习；使用的模型是 DeepSeek。

> 适用环境：Windows 11，x64 或 ARM64，Node.js 24 LTS。本文为面向国内网络的推荐路径，待人工验证。

## 1. 准备

- 先按 [npm 手册](../npm/index.md)安装 Node.js 和 npm，并按 [Git 手册](../git/index.md)准备 Git for Windows。
- 登录 [DeepSeek 开放平台](https://platform.deepseek.com/)，创建 API key（调用模型的密钥），确认 API 余额可用。它与聊天网页账号的免费使用额度不同，调用按 DeepSeek 的计费规则扣费。
- 新建 `AI练习` 文件夹，在其中保存 `练习.txt`，内容写“这是我的第一个 AI 编程助手练习。”。

## 2. npm 安装

在开始菜单打开 **PowerShell**，运行：

```powershell
npm.cmd install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com
claude.cmd --version
```

看到版本号后继续。镜像不一定覆盖安装脚本的额外下载；失败时记录报错网址，先核对下载问题。

## 3. 连接 DeepSeek 并启动

在文件资源管理器中打开 `AI练习`，在地址栏输入 `powershell` 并回车。将以下命令依次粘贴到这个窗口；提示输入密钥时粘贴自己的 DeepSeek API key，输入不回显：

```powershell
$env:ANTHROPIC_BASE_URL = 'https://api.deepseek.com/anthropic'
$env:ANTHROPIC_AUTH_TOKEN = [System.Net.NetworkCredential]::new('', (Read-Host 'DeepSeek API key' -AsSecureString)).Password
$env:ANTHROPIC_MODEL = 'deepseek-flash[1m]'
$env:ANTHROPIC_DEFAULT_OPUS_MODEL = 'deepseek-flash[1m]'
$env:ANTHROPIC_DEFAULT_SONNET_MODEL = 'deepseek-flash[1m]'
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL = 'deepseek-flash'
$env:CLAUDE_CODE_SUBAGENT_MODEL = 'deepseek-flash'
$env:CLAUDE_CODE_EFFORT_LEVEL = 'max'
claude.cmd
```

这些设置只对当前 PowerShell 及从它启动的程序生效。下次重新打开窗口时，需要再次设置并启动；不要把密钥发到聊天框或提交到仓库。

首次出现文件夹信任提示时，确认是自己的练习目录后再继续。此路径使用 DeepSeek API；若仍要求 Anthropic 登录，先记录提示并核对环境设置，不把登录成功当作 DeepSeek 连接成功。

## 4. 首次使用与排错

发送：“请只读取当前文件夹中的练习.txt，用一句话概括内容。不要修改文件，也不要安装或运行任何程序。”

确认收到与原文相符的回复，文件未变化，并在 DeepSeek 平台核对调用记录。版本号只能证明程序能启动，不能证明模型已连接。

- 密钥或余额报错：检查 DeepSeek API key、API 余额和模型可用性。
- 找不到命令：重新打开 PowerShell；保留报错，不修改系统执行策略。
- 退出后重用：重新完成第 3 节。首次练习只批准自己理解的读取操作。

## 来源与验证状态

- 官方资料：[Claude Code 安装](https://code.claude.com/docs/en/setup#install-with-npm)、[DeepSeek 接入与 Windows 配置](https://api-docs.deepseek.com/guides/coding_agents/)、[npmmirror](https://npmmirror.com/)。
- 核对日期：2026-10-21；官方 npm 与镜像当前均为 `2.1.306`，包要求 Node.js 22+，本文统一使用 24 LTS。安装、启动、模型回复和无代理国内网络全过程均待人工验证。
