---
title: DeepSeek Harness
category: AI 工具
---

# DeepSeek Harness

DeepSeek Harness 可以连接 AI 模型处理文件和编写代码。本篇用 npm 安装，再在浏览器中打开本机运行的网页界面，连接 DeepSeek 完成首次使用。

> 适用环境：Windows 11，x64 或 ARM64，Node.js 24 LTS。Harness 仍为预览版；本文为面向国内网络的推荐路径，待人工验证。

## 1. 准备

- 按 [npm 手册](../npm/index.md)准备 Node.js 和 npm；已完成其中的 Harness 安装示例，可跳过下一节的安装命令。
- 在 [DeepSeek 开放平台](https://platform.deepseek.com/)创建 API key，确认 API 余额可用。模型调用按 API 计费，不使用桌面应用的登录或赠送额度流程。
- 新建 `AI练习` 文件夹，在其中保存 `练习.txt`，内容写“这是我的第一个 AI 助手练习。”。

## 2. 安装并启动网页

打开 PowerShell，执行：

```powershell
npm.cmd install -g @deepseek-ai/dsh --registry=https://registry.npmmirror.com
dsh.cmd --version
```

确认显示版本号。然后在文件资源管理器中打开 `AI练习`，在地址栏输入 `powershell` 并回车，在新窗口运行：

```powershell
dsh.cmd web
```

保持窗口开启，在浏览器打开终端打印的本机地址，不需要自己填写端口或部署到公网。

## 3. 设置模型与工作区

1. 打开 **Settings → Models**，填写自己的 DeepSeek API key 并保存；密钥不要发进对话框。
2. 点击 **Choose workspace**，添加并选择刚才的 `AI练习`。工作区就是 AI 处理文件的文件夹；选好后才能使用对话输入框。
3. 新建对话，确认使用 DeepSeek 模型，再发送下一节的练习。

## 4. 首次使用与排错

发送：“请只读取当前工作区中的练习.txt，用一句话概括内容。不要修改文件，也不要安装或运行任何程序。”

确认回复与原文相符，没有认证或余额报错，文件未变化。用完后在 PowerShell 按 `Ctrl+C` 停止服务；再次使用时，在练习文件夹中运行 `dsh.cmd web`。

- 网页打不开：确认终端仍在运行，并使用它本次打印的地址。
- 无法输入：先选择工作区；模型报错时检查 API key、余额和模型设置。
- 下载失败：记录具体网址。单次镜像参数不保证覆盖所有依赖和首次启动的额外下载。

## 来源与验证状态

- 原桌面版原稿提供：**Wu Jiabao**（`deepseek harness.txt`）；本篇 npm 与网页路径依据官方资料改写。
- 官方资料：[项目中文说明](https://github.com/deepseek-ai/deepseek-harness/blob/master/README.zh.md)、[网页快速入门](https://deepseek-harness.github.io/deepseek-harness/en/guide/quickstart)、[模型设置](https://deepseek-harness.github.io/deepseek-harness/en/guide/providers)。
- 核对日期：2026-10-21；官方 npm 与镜像当前均为 `0.2.1-rc.2`。安装、网页启动、模型回复和无代理国内网络全过程均待人工验证。
