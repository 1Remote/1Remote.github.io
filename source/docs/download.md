---
hide: [toc, navigation]
---

# Download


<div class="class-none-zh-cn">
    <h2 id="make-1remote-stronger">Make 1Remote Stronger</h2>
    <p>If you like <b>1Remote</b>, help us make it stronger by doing any of the following:</p>
    <ol>
        <li><a href="https://github.com/1Remote/1Remote">Simply star the repository</a></li>
        <li><a href="https://1remote.github.io/usage/misc/help-translation/">Help translation</a></li>
        <li><a href="https://github.com/1Remote/1Remote/blob/main/DEVELOP.md">Join DE</a></li>
        <li>
            <p><a href="https://ko-fi.com/VShawn">Buy me a coffee</a></p>
            <p style="opacity: 0.6;font: -webkit-mini-control;">（Thank you all for your generous donations. I apologize for not listing the names of the donors here. The donations will be used for various expenses related to app development, such as server costs, domain registration, Windows Hello hardware for testing, luckin coffee, electricity bills, late-night takeaway, etc. :)</p>
        </li>
    </ol>
</div>

<div class="class-zh-cn">
    <h2 id="make-1remote-stronger">帮助改进项目</h2>
    <p>若你有意愿参与到 <b>1Remote</b>, 的改进，这些是你可以做的：</p>
    <ol>
        <li><a href="https://github.com/1Remote/1Remote">给个 star 让更多人看到这个项目</a></li>
        <li><a href="https://1remote.github.io/usage/misc/help-translation/">帮助翻译</a></li>
        <li><a href="https://github.com/1Remote/1Remote/blob/main/DEVELOP.md">参与开发</a></li>
        <li><a href="https://jq.qq.com/?_wv=1027&amp;k=iF8dguHU" rel="nofollow">加入 QQ 群讨论 (168542318)</a></li>
        <li>请我喝杯咖啡
            <p align="center">
                <img style="max-width: 500px;" src="https://raw.githubusercontent.com/1Remote/PRemoteM/Doc/DocPic/others/donate.jpg" />
            </p>
            <p style="opacity: 0.6;font: -webkit-mini-control;">（感谢大家慷慨捐赠，请恕我在此不列出捐赠者名单，捐赠将用于APP开发相关的指出。以下是一些典型用例：服务器、域名、测试用的Windows hello硬件、瑞幸咖啡、空调电费、夜宵外卖等😀）</p>
        </li>
    </ol>
</div>

## Installation

Latest Version: 1.0.0

|                |                        {{appname}} <br/> Preview build                         |             {{appname}} <br/> Stable EXE build             |                  {{appname}}<br/> Microsoft Store build                   |
| :------------- | :----------------------------------------------------------------------------: | :--------------------------------------------------------: | :-----------------------------------------------------------------------: |
| Auto update    |                                       ⛔                                        |                             ⛔                              |                                     ✅                                     |
| Other features |                               ✅ + 💥New Features                                |                             ✅                              |                                     ✅                                     |
| Price          |                                      Free                                      |                            Free                            |                              ~~💲1.99~~ Free                               |
| Download       | [From GitHub Nightly](https://github.com/1Remote/1Remote/releases/tag/Nightly) | [From GitHub](https://github.com/1Remote/1Remote/releases) | [Microsoft Store](https://www.microsoft.com/store/productId/9PNMNF92JNFP) |
| Installer      |                            `choco install 1remote`                             |                  `choco install 1remote`                   |                         `winget install 1remote`                          |

<!-- - Using [Winget](https://github.com/microsoft/winget-cli): `winget install premotem`
- [Chocolatey](https://chocolatey.org/packages/premotem): `choco install premotem` -->

!!! warning
    - Require Windows10 17763 and above to run this app.
    - Windows7, Windows8, Windows Server 2008 and Windows Server 2012 are not supported to run this app.

<!-- !!! note
    - The exe version of {{appname}} on GitHub is **completely free** for personal use.
    - ~~For Microsoft Store build, you may need to pay for a lifetime license.~~ (As our previous income is now able to cover the recent maintenance costs(server\domain name\ etc.), this app will resume free downloads now) -->

💥New Features:

- [x] [MySQL support](https://1remote.github.io/usage/database/data-synchronization/#by-using-mysql)
- [x] [Custom servers order by drag](https://1remote.github.io/usage/overview/#sorting)
- [x] [Multi-Credentials for RDP\VNC\SHH...(e.g. keep root and normal-user credentials in one server)](https://1remote.github.io/usage/alternative-credential/#addedit)
- [x] Multi-Address for RDP\VNC\SHH... (e.g. 192.168.0.100 for LAN, and xxx.xx.xxx.xx for WAN)
- [x] [Auto switching between multi-addresses (you don't have to select the address manually)](https://1remote.github.io/usage/alternative-credential/#auto-switching-address)
- [x] [Servers sharing within team (e.g. share servers with your colleagues)](https://1remote.github.io/usage/team/team-sharing/)
- [x] [Quick connect from launcher](https://1remote.org/usage/launcher/quick-connect/)
- [x] [allow creating desktop shortcut for connections](https://1remote.org/usage/misc/desktop-shortcut-for-connection/#individual-servers)
- [x] Windows Hello verification before sensitive operations

{% include 'footer.md' %}
