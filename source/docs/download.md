---
hide: [toc, navigation]
---

# Download

Latest Version: 0.7.2.8

## Requirements

- [Windows10 17763 and above](https://support.lenovo.com/us/en/solutions/ht502786)
- [.NET 6 Desktop Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/6.0/runtime)

!!! note
    You can clone and build with `ReleaseNet48` if you are likely to run this app on Windows 7.

## Installation

!!! note
    - The exe version of {{appname}} on GitHub is **completely free** for personal use.
    - For Microsoft Store build, you may need to pay for a lifetime license.

|                |                        {{appname}} <br/> Preview build                         |            Old PRemoteM <br/> Stable EXE build             |                 Old PRemoteM <br/> Microsoft Store build                  |
| :------------- | :----------------------------------------------------------------------------: | :--------------------------------------------------------: | :-----------------------------------------------------------------------: |
| Auto update    |                                       ⛔                                        |          ⛔  <br/> You have to update it manually           |              ✅ <br/>  You can update it from store or WinGet              |
| Other features |                               ✅ + 💥New Features                                |                             ✅                              |                                     ✅                                     |
| Price          |                                      Free                                      |                            Free                            |                    About 💲1.99 (For store maintaining)                    |
| Download       | [From GitHub Nightly](https://github.com/1Remote/1Remote/releases/tag/Nightly) | [From GitHub](https://github.com/1Remote/1Remote/releases) | [Microsoft Store](https://www.microsoft.com/store/productId/9PNMNF92JNFP) |
| Installer      |                     `choco install 1remote --version=0.4`                      |                  `choco install premotem`                  |                         `winget install premotem`                         |

<!-- - Using [Winget](https://github.com/microsoft/winget-cli): `winget install premotem`
- [Chocolatey](https://chocolatey.org/packages/premotem): `choco install premotem` -->

💥New Features in Preview:

- [x] [MySQL support](https://1remote.github.io/usage/database/data-synchronization/#by-using-mysql)
- [x] [Custom servers order by drag](https://1remote.github.io/usage/overview/#sorting)
- [x] [Multi-Credentials for RDP\VNC\SHH...(e.g. keep root and normal-user credentials in one server)](https://1remote.github.io/usage/alternative-credential/#addedit)
- [x] Multi-Address for RDP\VNC\SHH... (e.g. 192.168.0.100 for LAN, and xxx.xx.xxx.xx for WAN)
- [x] [Auto switching between multi-addresses (you don't have to select the address manually)](https://1remote.github.io/usage/alternative-credential/#auto-switching-address)
- [x] [Servers sharing within team (e.g. share servers with your colleagues)](https://1remote.github.io/usage/team/team-sharing/)

{% include 'footer.md' %}
