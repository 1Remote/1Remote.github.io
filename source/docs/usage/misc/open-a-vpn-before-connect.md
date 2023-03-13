Maybe your server needs a VPN connection before you can connect to it. 1Remote can help you open a VPN connection before connecting to the server.

> One of my windows servers is behind VPN. So I have to connect the VPN tunnel first, wait until it's connected, then run the RDP connection. I'm trying to automate this with 1Remote using OpenVPN 2.5.8.

You can open vpn in `Script before connect` 
and close it in `Script after disconnected`

![image](img/vpn-scripts.jpg)

open-vpn.ps1:

```shell
"C:\Program Files\OpenVPN\bin\openvpn-gui.exe" --command myconnection.ovpn

Write-Host "Checking VPN connection" -NoNewLine
$i = 0
while(1) {
  Write-Host -NoNewLine ' .'
  $portOpened = Test-Port $Env:PRM_HOST $Env:PRM_PORT | ? { $_.PortOpened } 
  if ($portOpened -or $i -gt 60) { break } else { Start-Sleep 1; $i++}
} 
if ($i -gt 60) { Write-Error 'timeout' }
```

close-vpn.ps1:

```shell
"C:\Program Files\OpenVPN\bin\openvpn-gui.exe" --command disconnect myconnection.ovpn
```
