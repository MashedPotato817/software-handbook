# Git：Windows 安装、必要配置与验证

> 状态：试写草稿，待维护者修改和人工安装验证。
>
> 适用环境：Windows 10 / 11，使用 Git for Windows 安装程序；下文命令在 PowerShell 中运行。

## 引言

Git 是一个版本管理工具，可以记录文件的修改历史、回看旧版本，也方便多人协作。它不仅能管理代码，也能管理 Markdown 文档。

本篇帮助你完成安装，设置提交时使用的姓名和邮箱，并检查配置结果。

## 正文

### 1. 准备与下载

在开始菜单搜索并打开 **PowerShell**，输入下面的命令，按回车：

```powershell
git --version
```

如果出现 `git version ...`，说明已有 Git，可以直接查看第 3 步。首次安装且提示找不到 `git` 时，继续下载安装；已安装过却报错时，先查看文末的“简单注释”。

打开 [Git 官方 Windows 下载页](https://git-scm.com/install/windows)，在 **Standalone Installer** 下选择安装程序：

- Intel / AMD 电脑选择 **x64 Setup**。
- ARM 电脑选择 **ARM64 Setup**。

不确定电脑类型时，在 Windows 的“设置 → 系统 → 关于”中查看“系统类型”。本篇使用 `.exe` 安装程序。

### 2. 安装

双击下载的 `.exe`。如果出现 Windows 权限确认，确认文件来自上面的官方入口后允许运行。

点击 **Next** 继续；首次安装时，安装位置和组件可以保持默认。遇到下面的设置时，按表选择：

| 设置 | 本篇建议 | 用途 |
| --- | --- | --- |
| 默认文本编辑器 | `Use Notepad as Git's default editor` | 用 Windows 记事本编辑 Git 要求填写的信息 |
| 新仓库的初始分支名 | 选择自定义分支名，填入 `main` | 以后新建仓库使用 `main` |
| PATH 环境设置 | `Git from the command line and also from 3rd-party software` | 让 PowerShell 等程序能够找到 Git |

其余设置首次安装可以保持默认，继续到 **Install**。安装结束后点击 **Finish**。

关闭之前打开的终端窗口，再重新打开 PowerShell，运行：

```powershell
git --version
```

应看到 `git version` 开头的版本信息，具体版本号以实际安装结果为准。

### 3. 必要配置

Git 提交会记录作者的姓名和邮箱。先把下面的示例值换成你自己的信息，再逐行运行：

```powershell
git config --global user.name "你的名字或昵称"
git config --global user.email "your-email@example.com"
```

姓名可以使用昵称。如果后续要用 GitHub，邮箱可使用 GitHub 账户中已添加并验证的邮箱，或账户提供的 `noreply` 邮箱。参见 [GitHub 提交邮箱设置说明](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address)。

命令成功时通常没有输出，接着检查结果。

### 4. 验证

在 PowerShell 中逐行运行：

```powershell
git --version
git config --global --get user.name
git config --global --get user.email
```

核对三项结果：

- 第一条显示 Git 版本。
- 第二条显示你设置的名字或昵称。
- 第三条显示你设置的邮箱。

姓名或邮箱不正确时，修改第 3 步的对应值并重新运行，再检查一次。三项符合预期后，本篇的安装和作者信息配置目标即已完成。

## 参考资料

- [菜鸟教程：Git 安装配置](https://www.runoob.com/git/git-install-setup.html)：中文入门和补充学习资料。
- [Pro Git 中文版：初次运行 Git 前的配置](https://git-scm.com/book/zh/v2/起步-初次运行-Git-前的配置)：了解作者信息和配置范围。
- [GitHub：设置 Git 用户名](https://docs.github.com/en/get-started/git-basics/setting-your-username-in-git)：核对姓名配置方法。
- [Git for Windows 安装器源码](https://github.com/git-for-windows/build-extra/blob/main/installer/install.iss)：本文安装选项的核对依据。

## 简单注释

- **Git 和 GitHub**：Git 是本机的版本管理工具，GitHub 是托管仓库的平台。安装 Git 本身不需要注册 GitHub。
- **`--global`**：设置对当前 Windows 用户生效，作为各仓库的默认值；单个仓库可以有自己的配置。姓名和邮箱会写入提交记录，它们不是登录密码。
- **仍提示找不到 `git`**：先关闭终端再重新打开；也可从开始菜单打开 Git Bash，运行 `git --version`。若 Git Bash 能运行而 PowerShell 不能，记录报错，核对安装时的 PATH 选项。
