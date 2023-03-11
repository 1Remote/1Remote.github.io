

![image](https://user-images.githubusercontent.com/10143738/143996440-1ca72471-278d-44b4-8b99-cbcc7b54da58.png)

## What is Protocol Runner

**`Protocol Runner`** Runner is the program that 1Remote uses to open the remote session.

Currently, 1Remote offering some built-in runner for all of the supported protocols:

- RDP Runner based on [Remote Desktop ActiveX control](https://docs.microsoft.com/en-us/windows/win32/termserv/remote-desktop-activex-control)
- SSH Runner is [KiTTY](http://www.9bis.net/kitty/#!index.md),
- VNC Runner based on [VNCSharp](https://github.com/humphd/VncSharp)
- SFTP Runner based on [SSH.NET](https://github.com/sshnet/SSH.NET)
- FTP Runner based on [FluentFTP](https://github.com/robinrodricks/FluentFTP)

And you can customize the runners for some of the protocols

## Customize your runner

1Remote supports custom external `Runner`, as long as the external program supports run passing startup parameters through command line or environment variables.

Here are some examples:

### WinSCP

To demonstrate, here we add WinSCP as a SFTP runner.

!!! note
    WinSCP is a free SFTP, SCP, Amazon S3, WebDAV, and FTP client for Windows, it can open new session through command line.

    ```
    winscp.exe sftp://username:password@example.com:22/
    winscp.exe ftps://username:password@ftp.example.com/
    ```

1. First you have to install WinSCP on your computer;

2. In the setting page of 1Remote，click `Protocol` -> `SFTP` -> `＋`, and set the name of the new Runner;

    ![image](./img/winscp-add1.jpg)

3. Click `select` button, select WinSCP.exe path

4. Click `i` button, the Macros will be prompted.

    ![image](./img/winscp-add2.jpg)

5. Set CMD parameter

    since the demo is `sftp://username:password@example.com:22/`

    then we set parameter to `sftp://%PRM_USERNAME%:%PRM_PASSWORD%@%PRM_HOSTNAME%:%PRM_PORT%`

6. Change the default Runner to WinSCP

    ![image](./img/winscp-end.jpg)

7. Then all the SFTP session will be opened by WinSCP

    ![image](./img/winscp-run.jpg)

