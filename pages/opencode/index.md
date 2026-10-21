---
title: OpenCode
category: AI 工具
---

# OpenCode

OpenCode 是 Anomaly 的开源 AI 编程助手。本篇用 npm 安装 OpenCode 2 命令行版，连接 DeepSeek 官方 API，完成第一次对话。

> 适用环境：Windows 11，x64 或 ARM64，Node.js 24 LTS。本文为面向国内网络的推荐路径；Windows npm 安装尚待实测。

## 1. 准备

- 按 [npm 手册](../npm/index.md)准备 Node.js 和 npm。
- 在 [DeepSeek 开放平台](https://platform.deepseek.com/)创建 API key，确认 API 余额可用；模型由 DeepSeek 提供，调用按其 API 计费。
- 新建一个 `AI练习` 文件夹，作为本次练习目录。

## 2. npm 安装并启动

在开始菜单打开 PowerShell，运行：

```powershell
npm.cmd install -g @opencode/cli --registry=https://registry.npmmirror.com
opencode.cmd --version
```

看到版本号后，在文件资源管理器中打开 `AI练习`，在地址栏输入 `powershell` 并回车，运行：

```powershell
opencode.cmd
```

## 3. 连接 DeepSeek

1. 在 OpenCode 输入框输入 `/connect`，搜索并选择 **DeepSeek**，填写自己的 DeepSeek API key。
2. 再输入 `/models`，选择 DeepSeek 下当前账号可用的模型。
3. 确认界面显示刚才选择的 DeepSeek 模型。密钥只填在提供方连接流程，不发到聊天框中。

## 4. 首次对话与排错

发送：“请用中文解释项目文件夹是什么，限两句话。不要读取或修改文件，不要运行命令。”

确认收到完整回复，没有认证、余额或模型不可用报错；在 DeepSeek 平台核对调用记录。退出后，再次使用时在练习文件夹中运行 `opencode.cmd`。

- 找不到命令：重新打开 PowerShell，再检查版本。
- 下载或安装失败：记录网址与错误，镜像不保证覆盖额外下载；对照官方 Windows CLI 下载说明确认，不改用同名 npm 包。
- 模型报错：检查 DeepSeek 密钥、API 余额和模型选择；版本号不是模型连接验证。

## 来源与验证状态

- 官方资料：[OpenCode 2 安装](https://opencode.ai/v2/docs/)、[提供方与模型选择](https://opencode.ai/v2/docs/providers/)、[DeepSeek 接入](https://api-docs.deepseek.com/guides/coding_agents/)、[Anomaly 官方仓库](https://github.com/anomalyco/opencode)。
- 核对日期：2026-10-21；官方 npm 与 npmmirror 当前均为 `@opencode/cli 2.1.2`，发布包含 Windows x64/ARM64 平台包和安装逻辑。官网仍有“Windows package managers are not supported”提示，与包信息不一致；本文 npm 路径保留待实测状态。
- 安装、启动、模型回复和无代理国内网络全过程均待人工验证，未以发布包存在代替安装成功。
