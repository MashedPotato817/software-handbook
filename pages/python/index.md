---
title: Python
category: 开发工具与平台
---

# Python

Python 是一种编程语言，可用于编写小程序和处理数据。本篇完成 Windows 首次安装，并运行一句输出文字的代码。

> 适用环境：Windows 10 / 11（x64 或 ARM64），首次安装 Python。本文为待人工验证的草稿，实际安装版本待补。

## 1. 下载

1. 打开 [Python 官方 Windows 下载页](https://www.python.org/downloads/windows/)。
2. 找到 **Latest Python install manager**，进入安装管理器页面。
3. 下载 **Installer (MSIX)**。本篇使用安装管理器统一安装和启动 Python。

如果电脑已有 Python、Anaconda 等环境，先保留现状，确认原来使用的版本后再决定是否新增安装。

## 2. 安装并首次启动

1. 双击下载的 `.msix` 文件，在 Windows 安装窗口中点击 **Install**（安装）。
2. 等待安装完成。首次打开可能出现配置检查，按屏幕说明确认；遇到不清楚的提示时先记录内容。
3. 在开始菜单搜索并打开 **PowerShell**，输入下面的命令后按回车：

```powershell
python
```

首次启动时，安装管理器会在需要时安装默认 Python 版本。等待出现版本信息和 `>>>` 提示符。

`>>>` 表示已经进入 Python，可以逐行输入代码；不要把它也复制进去。

## 3. 运行第一句代码

在 `>>>` 后输入以下代码，按回车：

```python
print("Hello, Python!")
```

看到 `Hello, Python!` 后，输入 `quit()` 并按回车，返回 PowerShell。

## 4. 检查版本

在 PowerShell 中执行：

```powershell
python --version
```

应显示 `Python 3.x.x`。若仍打开商店或提示找不到命令，记录提示并参照官方排错说明，不重复安装或删除原有环境。

## 来源与验证状态

- 官方资料：[Windows 下载](https://www.python.org/downloads/windows/)、[安装管理器与 Windows 使用说明](https://docs.python.org/3/using/windows.html)、[交互运行与退出](https://docs.python.org/3/tutorial/interpreter.html)。
- 资料核对日期：2026-10-21。采用当前官方安装管理器路径；下载、配置检查、首次运行与版本检查均待人工验证。
