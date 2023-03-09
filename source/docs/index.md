# {{name}}

{{name}} is a remote access manager and connection launcher for Windows OS. It comes integrated with a number of different protocols but also provides extensibility options via existing CLI tools implementing any kind of protocol.

<img src="https://raw.githubusercontent.com/1Remote/PRemoteM/Doc/DocPic/maindemo.png" width="800" />

## Features

- OTB support for **RDP, SSH, VNC, Telnet, SFTP, FTP, RemoteApp, Local App**
- Quick and convenient remote **session launcher**
- **Multi-screen** and **HiDPI** supported RDP connection
- Multi-address and Multi-account for your session, **auto switching address if one is not available**
- Detailed connection configuration: **tags, icons, colors**, connection scripts etc.
- Multiple languages, themes and **tabbed interface**
- Connection import from mRemoteNG or .rdp file
- Customizable protocols, choose your favorite tools for each protocol (**e.g. WinSCP for SFTP / TigerVNC for VNC**)
- Sync your sessions between several machines via Dropbox, Google Drive, OneDrive, etc.
- **Sharing sessions in a small team** via MySQL.
- Portable mode supported.

## Installation

!!! warning "Requirements"
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

### Quick start

1. Open 1Remote.exe, open the main window.

2. Click "+" button then fill address\username\password... and save

3. 
   - Double click to open connection in main window.
   - Press <kbd>Alt</kbd> + <kbd>M</kbd> Open the launcher, type keyword to find your server, <kbd>Enter</kbd> to start session

## Make 1Remote Stronger

If you like this app, please help us make it stronger by doing any of the following:

1. [Simply star it on github](https://github.com/1Remote/1Remote/)
2. [Help translation](https://github.com/1Remote/1Remote/wiki/Help-wanted:-Translation)
3. [Buy a coffee](https://ko-fi.com/VShawn)
4. [Join DEV](DEVELOP.md)

{% include 'footer.md' %}
