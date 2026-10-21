---
title: Visual Studio Code
category: 开发工具与平台
---

# Visual Studio Code

Visual Studio Code（简称 VS Code）用于编辑文本和代码。本篇完成 Windows 安装，并保存第一份文本文件。

> 适用环境：Windows 10 / 11（64 位）。本文为待人工验证的草稿，实际安装版本待补。

## 1. 下载

1. 打开 [VS Code 官方 Windows 安装说明](https://code.visualstudio.com/docs/setup/windows)。
2. 点击 **Visual Studio Code User setup**，下载当前账号使用的安装包。
3. 确认文件名以 `VSCodeUserSetup-` 开头，后缀为 `.exe`。

User setup 只为当前 Windows 账号安装，通常不需要管理员权限。

## 2. 安装并打开

1. 双击安装包，阅读许可协议并继续。
2. 安装位置和其他选项保持默认，按提示完成安装。
3. 从开始菜单打开 **Visual Studio Code**，看到编辑器主窗口即完成启动。

## 3. 新建并保存文本

1. 在文件资源管理器中打开“文档”，新建 `vscode-practice` 文件夹。
2. 回到 VS Code，点击 **File → Open Folder**（文件 → 打开文件夹），选择该文件夹。
3. 若出现信任提示，确认这是刚才自己创建的练习文件夹后，再信任并继续。
4. 按 `Ctrl+N` 新建文件，输入 `Hello, VS Code!`。
5. 按 `Ctrl+S`，把文件保存为该文件夹中的 `hello.txt`。

左侧资源管理器应出现 `hello.txt`，标签页中的未保存圆点应消失。

## 4. 验证保存结果

1. 关闭 `hello.txt` 标签页，再从左侧资源管理器打开它。
2. 确认仍能看到 `Hello, VS Code!`。
3. 在 Windows 文件资源管理器中打开练习文件夹，确认存在 `hello.txt`。

完成后即可开始编辑本地文件；后续按学习内容安装所需语言工具。

## 来源与验证状态

- 官方资料：[Windows 安装](https://code.visualstudio.com/docs/setup/windows)、[下载与系统条件](https://code.visualstudio.com/download)、[文件夹信任](https://code.visualstudio.com/docs/editing/workspaces/workspace-trust)、[保存文件](https://code.visualstudio.com/docs/editing/codebasics#_save-auto-save)。
- 资料核对日期：2026-10-21。已核对官方说明，安装、文件夹信任提示和保存操作均待人工验证。
