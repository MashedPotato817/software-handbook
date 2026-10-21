---
title: OBS Studio
category: 常用与专业软件
---

# OBS Studio

OBS Studio 用于录制屏幕和音视频。本篇只完成一次保存在电脑上的短录屏。

> 适用环境：Windows 10/11，使用官网 Windows 安装包。本文为待人工验证的草稿，实际安装版本待补。

## 1. 下载并安装

1. 打开 [OBS Studio 官方下载页](https://obsproject.com/download)，选择 **Windows**。
2. 点击 **Download Installer** 下载安装程序。
3. 双击安装程序，安装位置没有特别要求时保留默认值；完成安装后打开 OBS Studio。

## 2. 完成必要设置

1. 首次打开时运行“自动配置向导”；如果没有出现，选择“工具 → 自动配置向导”。
2. 用途选择“仅优化录制，我将不会进行直播”（**Optimize just for recording, I will not be streaming**）。
3. 继续向导，保留适合本机的建议设置并应用。
4. 打开“设置 → 输出”，查看“录像”部分的保存路径，确认是自己能找到、仍有可用空间的文件夹。

## 3. 添加屏幕和声音

1. 保留主界面已有的场景。“场景”用来组织录制内容，“来源”决定实际录入哪些画面。
2. 在“来源”区域点击 **+**，选择“显示器采集（Display Capture）”，新建来源。
3. 在来源属性中选择要录制的显示器，确认预览能看到目标桌面，再确认保存。
4. 查看“混音器”：播放一段电脑声音、对麦克风说一句话，观察对应音量条是否移动。
5. 不需要某路声音时，点击该路扬声器图标静音；需要声音却没有音量变化时，在“设置 → 音频”中选择实际使用的设备。

录制整块显示器会包含其上的窗口和通知，开始前先关闭不想录入的内容。

## 4. 录制并验证

1. 点击右侧“开始录制（Start Recording）”。
2. 切换到准备演示的窗口，移动鼠标或输入几行文字，录制约 20 秒。
3. 回到 OBS，点击“停止录制（Stop Recording）”，等待停止完成。
4. 选择“文件 → 显示录像（Show Recordings）”，打开刚生成的视频。
5. 播放检查：画面来自正确显示器、操作过程完整、需要保留的声音能听清，且没有不应录入的窗口。

## 来源与验证状态

- 官方资料：[下载与系统要求](https://obsproject.com/download)、[快速入门](https://obsproject.com/kb/quick-start-guide)。
- 补充核对：[官方论坛管理员说明录制向导选项](https://obsproject.com/forum/threads/auto-configuration-wizard-discouraging-start.136803/)、[官方论坛版主说明录像位置](https://obsproject.com/forum/threads/can-you-add-open-records-folder-button.94674/)。
- 资料核对日期：2026-10-21；下载页和论坛可访问，快速入门正文自动访问返回 502，本次参照官方搜索缓存，待人工重新打开复核。
- 安装、来源设置、音频采集和录像回放均待人工验证，尚无实际录制记录。
