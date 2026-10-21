---
title: Hermes Agent
category: AI 工具
---

# Hermes Agent

Hermes Agent 是 Nous Research 的开源 AI 助手，可连接模型来回答问题和处理任务。本篇使用其官方 Hermes Desktop 桌面应用。

> 适用环境：Windows 11 22H2 或更新版本，使用官方 MSIX 桌面包。本文为待人工验证的草稿，实际软件版本待补。

## 1. 检查系统与模型条件

1. 打开 Windows“设置 → 系统 → 关于”，查看系统版本是否满足要求。
2. 准备所选模型提供方支持的账号授权或 API key，并确认有可用模型和额度。

模型由所连接的提供方提供；安装 Hermes 不代表已经获得模型访问权限或免费额度。

## 2. 下载并安装

1. 打开 [Nous Research 的 Hermes 官方网站](https://hermes-agent.nousresearch.com/)，在 **Hermes Desktop App** 区域选择 Windows 下载。
2. 使用 Windows 的 **App Installer（应用安装程序）** 打开下载的 `.appinstaller` 文件，按提示安装。
3. 安装后，从开始菜单打开 Hermes。

该桌面包已包含运行所需的环境。如果下载的不是 `.appinstaller` 文件，先对照官方安装说明确认包类型。

## 3. 连接提供方并选择模型

1. 首次启动时，按引导连接模型提供方；已跳过引导的，可进入 **Settings → Providers**。
2. 选择提供方，按其支持的方式登录账号或填写 API key。
3. 进入 **Settings → Model → Main model**，选择已连接的提供方和可用模型，点击 **Apply** 保存。

需要填写 API key 时，从所选提供方的官方控制台获取，勿把密钥发送到聊天框中。

## 4. 首次对话并验证

在聊天输入框发送：

```text
请用中文解释“人工智能助手”是什么，限两句话。不要访问文件、运行命令或调用其他工具。
```

确认收到完整回复，没有认证、额度或模型不可用的报错。随后重新打开应用，检查能否找到刚才的对话。

完成后可确认基本对话和历史记录可用。遇到问题时，记录错误提示、模型提供方和软件版本。

## 来源与验证状态

- 官方资料：[下载入口](https://hermes-agent.nousresearch.com/)、[安装说明](https://hermes-agent.nousresearch.com/docs/getting-started/installation)、[Windows 安装条件](https://hermes-agent.nousresearch.com/docs/user-guide/windows-native)、[桌面使用与模型设置](https://hermes-agent.nousresearch.com/docs/user-guide/desktop)。
- 产品身份核对：[Nous Research 官方仓库](https://github.com/NousResearch/hermes-agent)。资料核对日期：2026-10-21。
- 安装、提供方授权、模型选择、首次对话和历史记录均待人工验证；尚无实际操作记录。
