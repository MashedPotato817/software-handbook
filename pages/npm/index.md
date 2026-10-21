---
title: npm
category: 开发工具与平台
---

# npm

npm 用于安装和管理 JavaScript 项目需要的代码包。本篇安装随 Node.js 提供的 npm，并创建第一份项目说明文件。

> 适用环境：Windows 11（64 位），首次安装 Node.js。本文为待人工验证的草稿，实际安装版本待补。

## 1. 下载 Node.js

1. 打开 [Node.js 官方下载页](https://nodejs.org/en/download)。
2. 选择标有 **LTS** 的版本，即长期支持版本；系统选择 **Windows**。
3. 在“设置 → 系统 → 关于”查看系统类型，按处理器选择 **x64** 或 **ARM64**。
4. 下载 **Windows Installer (.msi)** 安装包。

Node.js 是运行 JavaScript 程序的环境。npm 随它一起安装，不需要单独下载安装包。

## 2. 安装并检查版本

1. 双击 `.msi` 文件，阅读许可协议并按提示安装；安装位置和组件保持默认。
2. 完成后关闭旧终端，在开始菜单搜索并重新打开 **PowerShell**。
3. 依次执行下面的命令：

```powershell
node --version
npm.cmd --version
```

两条命令都应显示版本号。本文在 PowerShell 中统一使用 `npm.cmd`。

若提示找不到命令，先确认安装完成且已重新打开 PowerShell，再记录错误内容。

## 3. 创建一个练习项目

1. 在文件资源管理器中打开“文档”，新建一个空文件夹 `npm-practice`。
2. 进入该文件夹，在地址栏输入 `powershell` 并按回车，打开位于此文件夹的 PowerShell。
3. 执行下面的命令，使用默认信息初始化项目：

```powershell
npm.cmd init -y
```

这里的 `-y` 表示采用默认回答。命令应在当前文件夹生成 `package.json`，用于记录项目名称、版本和所需代码包等信息。

## 4. 验证结果

回到文件资源管理器，用记事本打开 `package.json`，确认能看到 `name`、`version` 等字段。完成后即可按具体项目的教程继续操作。

## 来源与验证状态

- 官方资料：[安装 Node.js 和 npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)、[Node.js 下载](https://nodejs.org/en/download)、[npm init](https://docs.npmjs.com/cli/v11/commands/npm-init/)。
- 资料核对日期：2026-10-21。安装器、版本检查和项目初始化均待人工验证。
