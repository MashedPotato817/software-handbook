---
title: Hermes Agent
category: AI 工具
---

# Hermes Agent

Hermes Agent 是 Nous Research 的开源 AI 助手。本篇安装官方 Hermes Desktop 桌面包，连接 DeepSeek 官方 API，完成第一次对话。

> 适用环境：Windows 11 22H2 或更新版本。本文为面向国内网络的推荐路径，待人工验证。

## 1. 准备

1. 打开 Windows“设置 → 系统 → 关于”，确认版本满足要求。
2. 在 [DeepSeek 开放平台](https://platform.deepseek.com/)创建 API key，确认 API 余额可用；模型调用按 DeepSeek 的 API 计费。

Hermes 官方安装文档没有提供 npm 安装路径，本篇保留包含运行环境的桌面包，无需先安装 Node.js。

## 2. 下载并安装

1. 打开 [Nous Research 的 Hermes 官方网站](https://hermes-agent.nousresearch.com/)，在 **Hermes Desktop App** 区域选择 Windows 下载。
2. 用 Windows 的 **App Installer（应用安装程序）** 打开 `.appinstaller` 文件，按提示安装。
3. 完成后，从开始菜单打开 Hermes。

下载的不是 `.appinstaller` 时，先对照官方安装说明确认包类型。官方包和更新仍需要联网下载，国内可访问性待实测；不要为使用 npm 而安装同名非官方包。

## 3. 连接 DeepSeek

1. 首次启动时按引导进入提供方设置；已跳过引导的，打开 **Settings → Providers**。
2. 选择 **DeepSeek**，填写自己的 DeepSeek API key；若界面要求 Base URL，填写 `https://api.deepseek.com`。
3. 进入 **Settings → Model → Main model**，选择 DeepSeek 和账号可用的模型，点击 **Apply** 保存。

密钥填写在提供方设置中，不要发送到聊天框。首次练习使用新对话，确认显示的是 DeepSeek；若提示辅助任务仍使用其他提供方，将对应辅助模型设为继承主模型后再继续。

## 4. 首次对话与排错

发送：“请用中文解释人工智能助手是什么，限两句话。不要访问文件、运行命令或调用其他工具。”

确认收到完整回复，没有密钥、余额或模型报错；在 DeepSeek 平台核对调用记录。重新打开 Hermes，确认能找到刚才的对话。

- 下载失败：记录包地址和错误提示，按官方安装说明核对，不关闭系统安全检查。
- 模型报错：核对 DeepSeek API key、API 余额和当前模型；能打开应用不等于模型已连接。

## 来源与验证状态

- 官方资料：[安装说明](https://hermes-agent.nousresearch.com/docs/getting-started/installation)、[Windows 条件](https://hermes-agent.nousresearch.com/docs/user-guide/windows-native)、[桌面设置](https://hermes-agent.nousresearch.com/docs/user-guide/desktop)、[DeepSeek 接入](https://api-docs.deepseek.com/quick_start/agent_integrations/hermes/)。
- 核对日期：2026-10-21。安装、启动、提供方设置、模型回复及无代理国内网络全过程均待人工验证，实际软件版本待补。
