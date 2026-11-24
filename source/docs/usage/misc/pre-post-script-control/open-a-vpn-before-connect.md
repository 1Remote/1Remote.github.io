# Open a VPN before connect

Some servers can only be reached through a VPN. Then you have to open the tunnel first, wait until it is up, and only then start the remote session. {{appname}} can do the waiting for you: open the VPN in **`Script before connect`** and close it in **`Script after disconnected`**.

The example uses OpenVPN (its program is called openvpn-gui). The idea works with any VPN that can be started from a command line.

![The two script fields](img/vpn-scripts.jpg)

## The script before connect: open the VPN and wait

`open_vpn.ps1`:

```powershell
# SERVER_HOST looks like "192.168.50.10:3389"
$address, $port = $env:SERVER_HOST.Split(':')

# tells the running openvpn-gui to connect the config "myconnection.ovpn"
& "C:\Program Files\OpenVPN\bin\openvpn-gui.exe" --command connect myconnection.ovpn

function Test-Port($hostname, $port, $timeoutMs = 2000) {
    $client = New-Object System.Net.Sockets.TcpClient
    try {
        $result = $client.BeginConnect($hostname, $port, $null, $null)
        if ($result.AsyncWaitHandle.WaitOne($timeoutMs)) { return $client.Connected }
        return $false
    } catch { return $false } finally { $client.Close() }
}

Write-Host "Waiting for the VPN..." -NoNewLine
$i = 0
while (-not (Test-Port $address $port)) {
    if ($i++ -ge 60) {
        Write-Error "The server $address is still not reachable after 60 tries."
        exit 1   # any code other than 0 stops the connection
    }
    Write-Host -NoNewLine ' .'
    Start-Sleep -Seconds 1
}
Write-Host ""
Write-Host "The VPN is up, connecting to $address"
exit 0
```

What it does:

1. It reads the address and the port of the server from `SERVER_HOST`, one of the [variables every script gets](overview.md#environment-variables). So the same script works for every server.
2. It asks the running openvpn-gui to connect `myconnection.ovpn`. Replace the name with your config file; the `.ovpn` file is enough, openvpn-gui finds it in its config folder. The command only talks to openvpn-gui, so openvpn-gui has to run (it starts automatically with Windows when OpenVPN was installed with that option).
3. It tries to reach the server port up to 60 times, each try waits up to 2 seconds and is followed by a pause of 1 second, so it gives up after about 3 minutes at most. As soon as the server answers, the script ends with exit code `0` and {{appname}} connects. After 60 tries it ends with exit code `1`, and {{appname}} shows `Script ExitCode = 1, connection abort!` instead of connecting.

## The script after disconnected: close the VPN

`close_vpn.ps1`:

```powershell
& "C:\Program Files\OpenVPN\bin\openvpn-gui.exe" --command disconnect myconnection.ovpn
```

## Set it up

1. Save both scripts, for example in `D:\scripts\`.
2. Open the server with **`Edit`**, pick `open_vpn.ps1` as **`Script before connect`** and `close_vpn.ps1` as **`Script after disconnected`** (click **`Select`**).
3. Click **`Test`** next to the first script: {{appname}} tells you what it will run, runs the script (its window shows a dot for every try) and then shows `The exit code of the script = 0` when the server answered.
4. Leave **`Hide script window`** unticked for this script: it waits for the VPN, and with a hidden window you can not see whether the VPN is still coming up or the script hangs.
5. Click **`Save`**.

!!! note
    If other people use the same server from the shared database, the scripts run for them too, and fail when they do not have `D:\scripts\open_vpn.ps1`. Put the scripts on all those PCs, or keep the server in a database only you use.

{% include 'footer.md' %}
