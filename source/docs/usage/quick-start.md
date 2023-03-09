# 1Remote Quick Start

## Installation

!!! warning **`Requirements"
    - [Windows10 17763 and above](https://support.lenovo.com/us/en/solutions/ht502786)
    - [.NET 6 Desktop Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/6.0/runtime)

Use one of the following methods to install the application:

- [GitHub release](https://github.com/1Remote/1Remote/releases)
- [Microsoft Store](https://www.microsoft.com/store/productId/9PNMNF92JNFP)
<!-- - Using [Winget](https://github.com/microsoft/winget-cli): `winget install premotem`
- [Chocolatey](https://chocolatey.org/packages/premotem): `choco install premotem` -->

!!! note
    You can clone and build with `ReleaseNet48` if you are likely to run 1Remote on Windows 7.
<!-- ## Pricing
Free for personal use.
Team and Enterprise pricing available. -->

## Adding Servers

### Manually Adding a Server

1. Click the `+` button in the upper-right corner of the main window.
2. Choose a protocol, such as RDP, SSH, or VNC, at the top of the pop-up window.
3. Enter the server's name, label, notes (supports Markdown), and other information and save.

## Starting Remote Connections

### Starting from the main window

1. Servers are displayed in the main window as cards or lists. Double-click a server to open the corresponding remote session.
2. You can also check the checkbox in front of each server, and then click the `Connect` button at the bottom of the main window to start multiple remote sessions at once.
3. If you have labeled the servers, you can right-click the label in the label list above the main window, and click the `Connect` button to start multiple remote sessions at once.

### Starting from the Launcher

1. If you have enabled the Launcher feature, you can use the default shortcut ++alt++ + ++m++ to open the quick start window of the server.
2. Servers are arranged in order of recent use in the Launcher window. Use the up and down arrow keys to select the desired server, or search for the desired server directly by entering keywords.
3. After selecting the server, press the ++enter++ key to start the remote session.

## Customization

- Change language: **`Setting`** -> **`General`** -> **`Language"
- Change theme: **`Setting`** -> **`Theme`** -> **`Theme". On this page, you can also customize your favorite color scheme.
- Change SSH color scheme: **`Setting`** -> **`Protocol`** -> **`SSH`** -> **`KiTTY`** -> **`Themes"
