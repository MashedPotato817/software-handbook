---
title: npm
category: 开发工具与平台
---

# npm

npm 用来安装软件包和命令行工具。本篇先安装 Node.js 和 npm，再以 DeepSeek Harness 为例安装、检查和启动一个工具。

> 适用环境：Windows 11，x64 或 ARM64。采用 Node.js 24 LTS；本文为面向国内网络的推荐路径，待人工验证。

## 1. 下载并安装 Node.js

1. 打开 [Node.js 官方下载页](https://nodejs.org/en/download)，选择 **24 LTS**（长期支持版本）和 **Windows**。
2. 在 Windows“设置 → 系统 → 关于”查看系统类型，选择 **x64** 或 **ARM64**，下载 **Windows Installer (.msi)**。
3. 官网下载较慢时，可在 [npmmirror 的 Node.js 24 镜像目录](https://npmmirror.com/mirrors/node/latest-v24.x/)查找相同版本和架构的 `.msi` 文件。它是第三方镜像；若未同步官网所选版本，回到官网获取，不选择目录中的早期版本。
4. 双击安装包，按提示安装，安装位置和组件保持默认。npm 会随 Node.js 一起安装。

已有 Node.js 时先运行下一节的版本检查；不要直接覆盖原有开发环境。

## 2. 检查版本

安装完成后，关闭旧终端，在开始菜单搜索并重新打开 **PowerShell**，依次运行：

```powershell
node --version
npm.cmd --version
```

第一条应显示 `v24.x.x`，第二条应显示 npm 版本号。本文使用 `npm.cmd`，避免 PowerShell 优先执行同名 `.ps1` 脚本。

## 3. 安装一个工具

在 PowerShell 中执行：

```powershell
npm.cmd install -g @deepseek-ai/dsh --registry=https://registry.npmmirror.com
dsh.cmd --version
```

`-g` 表示为当前 npm 环境安装工具，之后可在不同文件夹中启动。`--registry` 只为本次安装选择 npmmirror，不会永久修改下载源。第二条命令应显示 Harness 版本号。

镜像只负责软件包下载；安装脚本仍可能从其他网站获取文件。出现下载失败时，先记录报错里的网址，不要直接关闭证书检查或使用来历不明的安装脚本。

## 4. 启动并验证

在文件资源管理器中，新建并打开一个 `AI练习` 文件夹；在地址栏输入 `powershell` 并按回车，然后运行：

```powershell
dsh.cmd web
```

保持 PowerShell 窗口开启，在浏览器打开它打印的本机地址。看到网页只表示服务启动；模型设置和首次对话继续按 [DeepSeek Harness 手册](../deepseek-harness/index.md)完成。结束时回到 PowerShell 按 `Ctrl+C`。

若找不到 `npm.cmd` 或 `dsh.cmd`，先重新打开 PowerShell；仍失败时记录完整报错。镜像没有对应版本时，对照工具官方发布信息核对，不安装同名替代包。

## 来源与验证状态

- 资料：[Node.js 下载](https://nodejs.org/en/download)、[npm 安装说明](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)、[全局安装](https://docs.npmjs.com/downloading-and-installing-packages-globally/)、[npmmirror 镜像说明](https://npmmirror.com/)、[Harness 官方仓库](https://github.com/deepseek-ai/deepseek-harness)。
- 核对日期：2026-10-21。安装、命令启动与无代理国内网络下载均待人工验证；未在当前电脑安装或修改 npm 配置。
