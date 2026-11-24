# Runner

A **runner** is the program that opens the session. {{appname}} brings a built-in runner for every protocol, and for VNC, SSH, Telnet, Serial, SFTP and FTP you can add external programs as runners, for example WinSCP for SFTP or TightVNC for VNC. RDP, RemoteApp and APP always use the built-in runner.

## Built-in runners

| Protocol                    | Built-in runner                                                                                                            |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| RDP                         | The Remote Desktop ActiveX control of Windows, the same control `mstsc.exe` uses. The session shows inside the {{appname}} window. |
| RemoteApp                   | `mstsc.exe`, started with a temporary `.rdp` file.                                                                        |
| SSH, Telnet, Serial         | **`Built-in PuTTY`**: a copy of [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/) that ships with {{appname}} and shows its window inside the {{appname}} window. |
| VNC                         | **`Built-in VNC`**: [VncSharpCore](https://github.com/humphd/VncSharpCore), a VNC client library.                           |
| SFTP                        | **`Built-in SFTP`**: [SSH.NET](https://github.com/sshnet/SSH.NET) with the file manager of {{appname}}.                    |
| FTP                         | **`Built-in FTP`**: [FluentFTP](https://github.com/robinrodricks/FluentFTP) with the file manager of {{appname}}.          |
| APP                         | Starts the program of the APP entry, inside the {{appname}} window or in its own window.                                   |

## The Protocol settings page

Click **`Options`** -> **`Protocol`** and pick a protocol on the left. The page lists one card per runner of that protocol. On the **`Built-in PuTTY`** card you can choose another `putty.exe`, the font, the font size, the theme and the character set of the terminal.

At the bottom, **`<protocol> Default Runner`** names the runner that new servers of this protocol use. The **`+`** button next to it adds an external runner; it asks for a name first.

## Add an external runner: WinSCP for SFTP

WinSCP is a free SFTP, SCP and FTP client. It opens a session from the command line:

```bat
winscp.exe sftp://username:password@example.com:22/
```

The walkthrough adds a second SFTP runner for WinSCP. (A new installation already comes with a WinSCP runner, see [Ready-made runners](#ready-made-runners); the point here is to show the steps.)

1. Install WinSCP.

2. Click **`Options`** -> **`Protocol`** -> **`SFTP`** -> the **`+`** button, and type a name for the new runner, for example `My WinSCP`.

    ![Add a runner](./img/winscp-add1.jpg)

3. Click **`Select`** and pick `WinSCP.exe`. When the name of the exe is one that {{appname}} knows for this protocol and the argument fields are still empty, {{appname}} fills them in. Known are `WinSCP.exe`, `filezilla.exe`, `putty.exe`, `kitty.exe`, `wt.exe`, `tvnviewer.exe`, `vncviewer.exe`, `uvnc.exe` and `VpxClient.exe`. (The APP protocol has its own, longer list, see [APP](especial/app.md#presets).)

4. Fill in the two argument fields (the next section explains the macros):

    - **`Login with password`**: `sftp://%1RM_USERNAME%:%1RM_PASSWORD%@%1RM_HOSTNAME%:%1RM_PORT%`
    - **`Login with ssh private key`**: `sftp://%1RM_USERNAME%@%1RM_HOSTNAME%:%1RM_PORT% /privatekey=%1RM_PRIVATE_KEY_PATH%`

    Type `%` in a field to get the list of macros. For VNC, Telnet, Serial and FTP runners there is only one field, **`Cmd parameter`**.

    ![Parameter fields](./img/winscp-add2.jpg)

    !!! note
        The screenshots on this page show an older version. The macros were renamed since then (`%USERNAME%` became `%1RM_USERNAME%`, and so on), and the arguments are now edited in bigger boxes without the `(i)` button. Runners you set up with the old names keep working, {{appname}} renames the macros when it loads them.

5. Tick **`Hosting`** to show WinSCP inside an {{appname}} tab, as in the screenshot at the end. Some programs do not allow that; leave **`Hosting`** unticked when the program does not start, it then opens in its own window.

6. In **`SFTP Default Runner`** at the bottom, pick `My WinSCP`.

    ![Default runner](./img/winscp-end.jpg)

7. From now on every SFTP server opens with WinSCP.

    ![WinSCP hosted](./img/winscp-run.jpg)

## Use another runner for one server only

Open the server with **`Edit`**. **`Selected runner`** is set to `Follow the global settings`; pick another runner there to use it for this server only. Or right-click the server in the main window and choose **`Connect (via My WinSCP)`** without changing anything.

## Fields of an external runner

| Field                                                                 | Meaning                                                                                                                                         |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **`Exe path`**                                                        | The program to start.                                                                                                                           |
| **`Cmd parameter`**<br>**`Login with password`**<br>**`Login with ssh private key`** | The command line arguments. For SSH and SFTP runners there are two fields: {{appname}} uses the first when the server logs in with a password, the second when the server uses a private key. |
| **`Environment variables`**                                           | Name and value pairs set for the program, for example `VNC_PASSWORD` = `%1RM_PASSWORD%`. The value may contain macros.                           |
| **`Hosting`**                                                         | Show the program inside an {{appname}} tab (see step 5 above).                                                                                   |
| **`Special Characters`**                                              | Replacements for the user name and the password, for programs that need special characters encoded. For `WinSCP.exe` the list is filled in for you: `@` becomes `%40`, ` ` becomes `%20`, and so on. |

The two buttons on the card header copy the runner as text (**`Share`**) and delete the runner.

## Macros

Before the program starts, {{appname}} replaces every macro by the value of the server. Which macros exist depends on the protocol; type `%` in an argument field to see the list.

| Macro                    | Replaced by                                                             | Protocols            |
| ------------------------ | ----------------------------------------------------------------------- | -------------------- |
| `%1RM_HOSTNAME%`         | The address of the server.                                             | all                  |
| `%1RM_PORT%`             | The port.                                                              | all                  |
| `%1RM_USERNAME%`         | The user name.                                                         | all                  |
| `%1RM_PASSWORD%`         | The password.                                                          | all                  |
| `%1RM_PRIVATE_KEY_PATH%` | The path of the private key.                                            | SSH, SFTP            |
| `%SSH_VERSION%`          | `1` or `2`, the *SSH Version* of the server.                            | SSH                  |
| `%STARTUP_AUTO_COMMAND%` | The *Auto command* of the server.                                      | SSH                  |
| `%STARTUP_PATH%`         | The *Startup path* of the server.                                      | SFTP, FTP            |

## Ready-made runners

A new installation comes with these external runners. Their exe paths are the paths the authors had on their PCs, not necessarily yours (`D:\PuTTY.exe` for the `PuTTY` runner, for example), so click **`Select`** to point them to your installation. Delete the ones you do not need.

| Protocol | Name             | Program                                    | Arguments (login with password)                                                                                                   | Own window or tab |
| -------- | ---------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| VNC      | UltraVNC         | `C:\Program Files (x86)\uvnc\vncviewer.exe` | `%1RM_HOSTNAME%:%1RM_PORT% -password %1RM_PASSWORD%`                                                                                | own window        |
| VNC      | TightVNC         | `C:\Program Files\TightVNC\tvnviewer.exe`   | `%1RM_HOSTNAME%::%1RM_PORT% -password=%1RM_PASSWORD% -scale=auto`<br>(also sets the variable `VNC_PASSWORD`)                       | tab               |
| SFTP     | WinSCP           | `C:\Program Files (x86)\WinSCP\WinSCP.exe`  | `sftp://%1RM_USERNAME%:%1RM_PASSWORD%@%1RM_HOSTNAME%:%1RM_PORT%`<br>private key: `sftp://%1RM_USERNAME%@%1RM_HOSTNAME%:%1RM_PORT% /privatekey=%1RM_PRIVATE_KEY_PATH%` | own window |
| SSH      | PuTTY            | `D:\PuTTY.exe`                             | `-ssh %1RM_HOSTNAME% -P %1RM_PORT% -l %1RM_USERNAME% -pw %1RM_PASSWORD% -%SSH_VERSION% -cmd "%STARTUP_AUTO_COMMAND%"`             | own window        |
| SSH      | Windows Terminal | `wt.exe`                                   | `-w 1 new-tab --title "%1RM_HOSTNAME%" --suppressApplicationTitle plink -ssh %1RM_HOSTNAME% -P %1RM_PORT% -%SSH_VERSION% -C -X -no-antispoof -l %1RM_USERNAME% -pw %1RM_PASSWORD%`<br>private key: the same line with `-i %1RM_PRIVATE_KEY_PATH%` instead of `-pw %1RM_PASSWORD%` | own window |

The Windows Terminal runner needs `plink.exe` from [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) in the `PATH`. The `PuTTY` runner (named `Putty` up to version 1.3.1) has a wrong text in **`Login with ssh private key`**: it is a copy of the Windows Terminal line, which does not work for PuTTY. Servers that log in with a private key work after you replace it by `-ssh %1RM_HOSTNAME% -P %1RM_PORT% -l %1RM_USERNAME% -i %1RM_PRIVATE_KEY_PATH% -%SSH_VERSION%`.

!!! warning
    The ready-made arguments pass the password to the program on the command line. Other users of the PC can read the command lines of running programs in Task Manager.

{% include 'footer.md' %}
