# SSH tunnel

An SSH tunnel forwards a port of your PC through the SSH server to another host, so you can reach that host as if it were on your own network. Example: a web interface on `192.168.1.2:80` that only the SSH server can reach becomes available as `http://localhost:777` on your PC.

The built-in SSH runner of {{appname}} is PuTTY, and PuTTY can open such tunnels. {{appname}} creates the PuTTY session for every server by itself, so you can not set the tunnel in PuTTY's own window. Instead you put the tunnel into a *session file* and name that file in the server entry: **`PuTTY session file`**.

## The session file

The session file is a text file in the format KiTTY (a PuTTY variant) uses to save sessions: one setting per line, written as `Setting\Value\`. For a tunnel you only need the setting `PortForwardings`. Save this as `tunnel-777.txt`, for example with Notepad:

```
PortForwardings\L777=192.168.1.2:80\
```

Read `L777=192.168.1.2:80` as: listen on local port `777` and forward it to `192.168.1.2:80`. Several forwardings are separated by commas:

| Entry                      | Meaning                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------- |
| `L777=192.168.1.2:80`      | Local forwarding: `localhost:777` on your PC leads to `192.168.1.2:80`.                |
| `D1080`                    | Dynamic forwarding (SOCKS proxy): programs that use `localhost:1080` as proxy go through the SSH server. |
| `R8080=localhost:80`       | Remote forwarding: port `8080` on the SSH server leads to port `80` of your PC.        |

A full line with three forwardings:

```
PortForwardings\L777=192.168.1.2:80,D1080,R8080=localhost:80\
```

!!! note
    The backslashes matter: one after the setting name and one at the end of the line. If the file does not follow this format, {{appname}} answers `Invalid KiTTY session config file.` when you select it.

## Set it up

1. Open the SSH server with **`Edit`**.
2. Make sure **`Selected runner`** is still `Follow the global settings` or `Built-in PuTTY`; the field **`PuTTY session file`** is only shown for the built-in runner.
3. Click **`Select`** next to **`PuTTY session file`** and pick the text file.
4. Click **`Save`** and connect. The tunnel is open as long as the session is open; open `http://localhost:777` in a browser to use it.

Every other setting of the file is applied to the session too (colours, key bindings, bell, and so on), with one exception: the address, the port, the user name and the private key always come from the server entry in {{appname}}, never from the file.

## Get such a file from KiTTY

You do not need KiTTY to write the file, but it helps when you want more than the tunnel. [KiTTY](https://9bis.net/kitty/) is a PuTTY variant that can save a session into a file:

1. Download KiTTY portable and start it.
2. Type a name under *Host Name (or IP address)* and *Saved Sessions*, and click **`Save`**. The host name does not matter, {{appname}} replaces it.
3. Click **`Connection`** -> **`SSH`** -> **`Tunnels`**, enter *Source port* `777` and *Destination* `192.168.1.2:80`, click **`Add`**, and click **`Save`** again on the *Session* page.
4. KiTTY now has a file with the name of the session in its `Sessions` folder (in the portable version: `kitty\…\data\config\Sessions\`). That is the file to pick in step 3 above.

Thanks to @BurtGummer, who described the KiTTY way in [issue 483](https://github.com/1Remote/1Remote/issues/483).

{% include 'footer.md' %}
