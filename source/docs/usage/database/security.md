> A chain is only as strong as it's weakest link is a metaphor

## Security

Since 1Remote is designed for snappy and fast experience, it is not easy to make a balance between convenience and safety. Since users are probably IT people with high security awareness, we decided to pay more attention to convenience, leaving security to the system, security software, and good user habits to protect. Therefore, we will only provide the most basic information security, and will not provide functions such as activation lock.

### Why 1Remote don't need a activation password

Since this program is a resident background app that starts a session through the launcher (Alt + M). If you have to enter a password every time you turn on the launcher, the experience will be greatly reduced. Or if the password is only required when the program is started, then the security cannot actually be properly guaranteed. Taking these into account, we believe that it is bette for security guaranteed by the system, security software, and good user habits in long-term solution. As long as the user realizes that he should lock the system when he/she leaves the computer, 1Remote does not have to put add any activation protect.And if the user does not have such security awareness, then even if we adds the activation password, the information may still be leaked through other ways.

### What we provide

For the data sync / sharing reason, 1Remote only provide a basic string encryption in database (account, password, etc.). So it is recommended to enable hard disk encryption (like [Bitlocker](https://docs.microsoft.com/en-us/windows/security/information-protection/)etc.) to ensure that event when the 1Remote database is leaked or the hard disk is cracked physically, the theft will get nothings.

## Summary

- Lock Windows when you left your computer.
- Backup your data frequently.
- (Recommended) Enabled bitLocker.

## 简体中文

### 信息安全

1Remote 设计的初衷在于希望用户能随时随地快速地开启新的远程会话，于是我们很难平衡便利性与安全性。考虑到 1Remote 的使用群体应当是对计算机安全有一定认知的业内人士，于是我们决定更多关注于**便利性**，而将安全性交给系统、安全软件、良好的用户习惯来保护。因此 1Remote 将只提供最基本的信息安全保障，不提供类似于启动密码之类的功能。

#### 为何没有做开机密码？

由于本程序是一个常驻后台，通过启动器（Alt + M）启动会话的远程管理工具，如果每次开启启动器都要输入密码，那么使用体验将大打折扣。而如果仅在程序启动时要求密码，那么安全性其实并未能够得到妥善保障。考虑到这些，我们认为安全性由系统、安全软件、良好的用户习惯保障才是长远之计。只要用户意识到在自己离开计算机时应当锁定系统，那么 1Remote 就不必为自己再加一层枷锁。而若用户没有这样的安全意识，那么就算 1Remote 加入了启动密码，信息仍有可能从其他方式被泄露。

#### 我们提供的加密功能

考虑到数据同步、共享等因素，我们只提供了数据库的中基础数据的加密功能（账号、密码等）这并不完全保险，推荐开启硬盘加密(like [Bitlocker](https://docs.microsoft.com/en-us/windows/security/information-protection/)etc.) 。以确保即便 1Remote 数据库被泄露，或计算机硬盘遭到物理破解时，盗窃者依旧无法获取到其中的机密。

#### 总结

- 确保每次离开电脑后，系统都会被锁。
- (**推荐**) 开启 BitLocker in Windows 10。
