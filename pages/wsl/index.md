---
title: WSL
category: 开发工具与平台
---

# WSL

WSL（适用于 Linux 的 Windows 子系统）可以在 Windows 中运行 Linux。本篇安装 Ubuntu，并完成第一次命令操作。

> 适用环境：Windows 11，或 Windows 10 2004 及以上（内部版本 19041 及以上）；需要联网和管理员权限。本文为待人工验证的草稿，实际 WSL 与 Ubuntu 版本待补。

## 1. 检查电脑和已有环境

1. 按 `Win+R`，输入 `winver` 并回车，确认 Windows 版本满足上述条件。
2. 从开始菜单打开 **PowerShell**，检查是否已经安装 Linux 发行版：

```powershell
wsl --list --verbose
```

如果列表中已有 Ubuntu，直接从开始菜单打开它，跳到第 3 节。若有其他发行版，先保留现状，确认是否还需要 Ubuntu；不要重置或注销已有发行版。

如果提示尚未安装 WSL 或没有发行版，继续下一节；若弹出按键安装提示，可先关闭窗口。其他错误先记录，再查官方排错说明。

## 2. 安装 Ubuntu 并重启

1. 保存正在编辑的文件。
2. 在开始菜单搜索 **PowerShell**，右键选择 **以管理员身份运行**，确认权限提示。
3. 执行：

```powershell
wsl --install -d Ubuntu
```

等待下载和安装完成，按提示重启电脑。该命令会启用所需 Windows 功能并安装 Ubuntu；新装发行版默认使用 WSL 2。

## 3. 创建 Linux 用户

1. 新安装时，重启后从开始菜单打开 **Ubuntu**，等待首次初始化完成。
2. 首次启动会提示填写 Linux 用户名，例如 `learner`，并设置密码。这是 Ubuntu 内的账号，与 Windows 账号分开。
3. 输入密码时屏幕不会显示字符或星号，属于正常现象；按回车后再次输入相同密码。
4. 看到等待输入命令的提示符后，执行：

```bash
echo "Hello, WSL!"
```

应看到 `Hello, WSL!`。若使用已有 Ubuntu，直接使用原来的 Linux 账号，不会重新创建用户。

## 4. 验证 WSL 版本

重新打开 Windows 的 PowerShell，执行：

```powershell
wsl --list --verbose
```

新安装的 Ubuntu 应出现在列表中，`VERSION` 列应为 `2`。若安装报错，记录错误码并查[官方排错说明](https://learn.microsoft.com/en-us/windows/wsl/troubleshooting#installation-issues)，不要重置发行版。

## 来源与验证状态

- 官方资料：[安装 WSL](https://learn.microsoft.com/en-us/windows/wsl/install)、[创建 Linux 用户](https://learn.microsoft.com/en-us/windows/wsl/setup/environment)、[WSL 基本命令](https://learn.microsoft.com/en-us/windows/wsl/basic-commands)。
- 资料核对日期：2026-10-21。系统条件、命令和密码不回显说明已核对；功能启用、下载、重启、用户创建和运行均待人工验证。
