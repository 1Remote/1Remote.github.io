You can set up a SSH tunnel by:

1. download and start Kitty portable
2. enter a hostname and a name in "Saved Sessions/New Folder"
3. click "Connection" -> "SSH" -> "Tunnels"
4. enter a source port, for example 777
5. enter a destination, for example "192.168.1.2:80" - a web interface that is reachable from the host we connect to
6. click "Add"
7. go back to "Session" and click "Save (d)"

    Now there is a new file in `..\kitty-portable-win32-0.74.4.13-36\data\config\Sessions\`

8. Open 1Remote and add a SSH server with the hostname and name you entered in step 2, in `KiTTY Session` field, select the file you created in step 7.

Thanks to @BurtGummer from: https://github.com/1Remote/1Remote/issues/483 for providing the solution.
