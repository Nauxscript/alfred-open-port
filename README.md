# Alfred-Open-Port

<p align="center"><img width=12.5% src="https://github.com/Nauxscript/alfred-open-port/blob/main/src/icon.png"></p>

<h3 align="center">Alfred-Open-Port</h3>

<p align="center"><img src="https://github.com/Nauxscript/alfred-open-port/blob/main/assets/preview.gif"></p>

a Workflow to open local listened port easily. 

快速打开本地端口工作流。

## Usage
  - Press enter (↵): open the port in `localhost` prefix.
  - Press ctrl + enter (⌃ ↵): open the port in intranet ip prefix.
  - Press cmd + enter (⌘ ↵): open the port in `127.0.0.1` prefix.
  - Press opt + enter (⌥ ↵): delete the stored port.
  - 回车键（↵）：直接在 `localhost` 打开端口。
  - ctrl 键 + 回车键（⌃ ↵）：在当前内网 ip 打开端口。
  - cmd 键 + 回车键（⌘ ↵）：在 `127.0.0.1` 打开端口
  - opt 键 + 回车键 (⌥ ↵): 删除当前端口记录.

## Environment Variables

- `myPorts`: Set `myPorts` in the environment variables to set commonly used port numbers, such as `8080, 9527, 4343` so that they are displayed by default when entering workflow keywords, reducing input. note: you cannot delete the port set in environment variables by pressing opt + enter.

- `notificationEnabled`: To set up notification prompts, set ﻿notificationEnabled in the environment variables. Once enabled, a prompt will appear every time a specified port is accessed.

- `myPorts`: 在环境变量中设置 `myPorts` 来设置常用的端口号，如 `8080,9527,4343`，以便在输入工作流关键字时默认显示这些端口号，减少输入。注意：你无法删除通过 opt 键 + 回车键 删除在环境变量中设置的端口号。

- `notificationEnabled`: 在环境变量中设置 `notificationEnabled` 来设置打开提示，开启后每次访问所选端口好都会提示。

![](https://github.com/Nauxscript/alfred-open-port/blob/main/assets/variables.jpg)

# License

[MIT](./LICENSE) License © 2022 [Nauxscript](https://github.com/Nauxscript)