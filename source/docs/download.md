---
hide: [toc, navigation]
---

# Download


<div class="class-none-zh-cn">
    <h2 id="make-1remote-stronger">Make 1Remote Stronger</h2>
    <p>If you like <b>1Remote</b>, help us make it stronger by doing any of the following:</p>
    <ol>
        <li><a href="https://github.com/1Remote/1Remote">Simply star the repository</a></li>
        <li><a href="https://1remote.github.io/usage/misc/help-translation/">Help translate</a></li>
        <li><a href="https://github.com/1Remote/1Remote/blob/main/DEVELOP.md">Join DEV</a></li>
        <li>
            <p><a href="https://ko-fi.com/VShawn">Buy me a coffee</a></p>
            <p style="opacity: 0.6;font-size: 0.85em;">（Thank you all for your generous donations. I apologize for not listing the names of the donors here. The donations will be used for various expenses related to app development, such as server costs, domain registration, Windows Hello hardware for testing, luckin coffee, electricity bills, late-night takeaway, etc. :)</p>
        </li>
    </ol>
</div>

<div class="class-zh-cn">
    <h2 id="make-1remote-stronger-zh-cn">帮助改进项目</h2>
    <p>若你有意愿参与到 <b>1Remote</b> 的改进，这些是你可以做的：</p>
    <ol>
        <li><a href="https://github.com/1Remote/1Remote">给个 star 让更多人看到这个项目</a></li>
        <li><a href="https://1remote.github.io/usage/misc/help-translation/">帮助翻译</a></li>
        <li><a href="https://github.com/1Remote/1Remote/blob/main/DEVELOP.md">参与开发</a></li>
        <li><a href="https://jq.qq.com/?_wv=1027&amp;k=iF8dguHU" rel="nofollow">加入 QQ 群讨论 (168542318)</a></li>
        <li>请我喝杯咖啡
            <p align="center">
                <img style="max-width: 500px;" src="/zh-cn/donate.jpg" />
            </p>
            <p style="opacity: 0.6;font-size: 0.85em;">（感谢大家慷慨捐赠，请恕我在此不列出捐赠者名单，捐赠将用于APP开发相关的支出。以下是一些典型用例：服务器、域名、测试用的Windows hello硬件、瑞幸咖啡、空调电费、夜宵外卖等😀）</p>
        </li>
    </ol>
</div>

## Installation

Latest Version: 1.3.1

<!--
    Editor notes (not shown on the page):
    1. The version line above is read by the stable build of 1Remote when it
       starts and then once an hour (Ui/View/AboutPageViewModel.cs, it searches
       this page for "latest", "version:" and the number that follows). Keep the
       line as a plain paragraph and do not write the same two words with a
       colon anywhere above it.
    2. Do not write the zip file names of a GitHub release on this page. The
       same check also matches the app name in lower case, a hyphen, a number
       and later "-net" on the same line; a wrong match makes the app report a
       new version that does not exist.
    3. Released 2026-10-16. Sources for the facts below: the GitHub release
       assets of 1.3.1 and of Nightly, .github/workflows/build-on-dev-push.yml,
       Ui/AppInit.cs, Ui/Ui.csproj (SupportedOSPlatformVersion 10.0.19041.0).
-->

Released on 2026-10-16. What changed in each version is listed on the [releases page on GitHub](https://github.com/1Remote/1Remote/releases).

!!! warning "System requirements"
    - The app is built for Windows 10 version 2004 (build 19041) and newer, so it also runs on Windows 11 and Windows Server 2022 or newer. Older Windows 10 versions are not tested.
    - Windows 7, Windows 8 and Windows 8.1 are not supported: the app needs .NET 9 or newer, and these runtimes do not run on those systems.

### Which build should I use?

|                     | Stable build                                                                                                                                                | Nightly build                                                                                                                                                   | Microsoft Store build                                                               |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| What it is         | The latest released version.                                                                                                                               | A new build for almost every change merged into the source code. It has the newest features and fixes before they are released.                                   | The stable build, packaged for the Store.                                            |
| Stability         | Tested.                                                                                                                                                    | Use it to try a new feature or to check whether a bug is fixed. Expect surprises.                                                                               | Tested.                                                                             |
| How you get updates | The app shows a red dot next to its **About** menu entry when a newer version is out. You download and unpack the new package yourself.                      | Same as the stable build.                                                                                                                                       | The Store updates the app for you.                                                  |
| Download           | [GitHub releases](https://github.com/1Remote/1Remote/releases/latest) (the newest release, not the one called "Nightly")                                  | [GitHub release "Nightly"](https://github.com/1Remote/1Remote/releases/tag/Nightly)                                                                             | [Microsoft Store](https://apps.microsoft.com/detail/9pnmnf92jnfp)                   |
| Install from a terminal | —                                                                                                                                                     | —                                                                                                                                                               | `winget install 1remote`                                                            |
| Price              | Free                                                                                                                                                       | Free                                                                                                                                                            | Free                                                                                |

You can turn the update check off in **Options -> General -> Misc -> Do not check for new version**.

### Stable build: which package should I download?

Every stable release offers six zip packages: one for each of .NET 9, .NET 10 and .NET 11, in two variants each.

| Variant (part of the file name)       | Size        | What your PC needs                                                                                                                                                  |
| :------------------------------------ | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.recommended.zip` and the other packages without `self-contained` | about 20 MB | The .NET Desktop Runtime of the same version as the package: a `-net10-` package needs .NET 10, a `-net9-` package needs .NET 9 and a `-net11-` package needs .NET 11. A newer runtime is not enough. |
| `self-contained`                      | about 90 MB | Nothing. The runtime is inside the package.                                                                                                                         |

If you are not sure which one to take: download the `.recommended.zip` package (it is the .NET 10 one) and install the [.NET 10 Desktop Runtime](https://dotnet.microsoft.com/download/dotnet/10.0), choose *Windows Desktop Runtime 10.0 (x64)*, or run `winget install Microsoft.DotNet.DesktopRuntime.10`.

### Run it

1. Unpack the zip into a folder your user account may write to, for example `D:\Tools\1Remote`, and start `1Remote.exe`. There is no installer.
2. On the first start the app asks where it should keep your data:
    - **Portable mode**: settings and the database are stored in the program folder (`1Remote.json`, `1Remote.db`), so you can copy the whole folder to another PC or a USB drive.
    - **AppData**: settings and the database are stored in `%AppData%\1Remote`.

    To switch the mode later, rename the marker file in the program folder: `FORCE_INTO_PORTABLE_MODE` stands for portable mode, `FORCE_INTO_APPDATA_MODE` for AppData.
3. To upgrade, close the app, unpack the new package into the same folder and overwrite the old files. Your data is kept.

### Nightly build

The release called "Nightly" on GitHub always holds the newest builds. Download the asset with the newest date in its name. Only .NET 10 packages are built for Nightly: a small one that needs the .NET 10 Desktop Runtime, and a `self-contained` one. The 20 newest builds of each kind are kept, older ones are removed automatically.

{% include 'footer.md' %}
