# Command line

`1Remote.exe` accepts a few arguments. You can use them in a shortcut, in a script or in the **Run** box (++win++ + ++r++), for example to start a remote session with one double-click.

!!! note
    If {{appname}} is already running, a second start does not open a second copy: the arguments are handed over to the running copy and the new process closes at once. So `1Remote.exe "My Server"` connects from the running {{appname}}, and starts {{appname}} first when it is not running.

    One dash or two makes no difference: `--install` and `-install` are the same argument.

## Start a connection

| Argument           | What it does                                                                                                                      |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `"<server name>"`  | Connects to the server with exactly this name; upper and lower case does not matter. Put the name in quotes when it contains spaces. If several servers have this name, all of them are started. |
| `ULID:<server id>` | Connects to the server with this id. The id is a ULID (Universally Unique Lexicographically Sortable Identifier) that stays the same when the server is renamed, so {{appname}} uses it in the desktop shortcuts it creates. It is the same value a script gets as `SERVER_ID`. |
| `#<tag>`           | Connects to all servers with this tag, for example `#work`.                                                                       |

Several arguments start several sessions at once:

```bat
1Remote.exe "My Server" #work
```

Add `--start-minimized` to keep the main window closed and only open the sessions:

```bat
1Remote.exe "My Server" --start-minimized
```

An argument that matches no server (a typo, for example) is ignored; {{appname}} does not show a message for it.

!!! tip
    You do not know the id of a server? Right-click a desktop shortcut that {{appname}} created for it, choose *Properties* and read the *Target* field: the part after `ULID:` is the id.

## Change a setting

| Argument                       | What it does                                                                                                   |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `--install-desktop-shortcut`   | Creates the shortcut `1Remote.lnk` on your desktop. An existing one is replaced.                               |
| `--uninstall-desktop-shortcut` | Deletes that shortcut.                                                                                         |
| `--install-startup`            | Turns on **`Run automatically at OS startup(minimized)`** (the same as the option in **Options -> General -> Startup**). |
| `--uninstall-startup`          | Turns it off.                                                                                                  |
| `--install`                    | Same as `--install-desktop-shortcut --install-startup`.                                                        |
| `--uninstall`                  | Same as `--uninstall-desktop-shortcut --uninstall-startup`.                                                    |

When {{appname}} is not running and you pass only arguments from this table, it changes the setting and closes without opening its window.

## Start without a window

| Argument           | What it does                                                                   |
| ------------------ | ------------------------------------------------------------------------------ |
| `--start-minimized` | Starts {{appname}} in the background: the main window stays closed, only the tray icon shows. The launcher (++alt++ + ++m++) works as usual. Double-click the tray icon to open the main window. |

Without arguments, {{appname}} starts with its main window, or brings the window of the running copy to the front.

## Desktop shortcut for connections

{{appname}} can create shortcuts on your desktop that start one server, several servers or all servers of a tag. The shortcuts use the arguments from this page, you do not have to type them: see [Desktop shortcut for connections](desktop-shortcut-for-connection.md).

{% include 'footer.md' %}
