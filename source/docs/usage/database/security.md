> A chain is only as strong as it's weakest link is a metaphor

## Security

Since {{appname}} is designed for snappy and fast experience, it is not easy to make a balance between convenience and safety. Since users are probably IT people with high security awareness, we decided to pay more attention to convenience, leaving security to the system, security software, and good user habits to protect. Therefore, we will only provide the most basic information security, and will not provide functions such as activation lock.

### Why {{appname}} doesn't need a activation password

Since this program is a resident background app that starts a session through the launcher (Alt + M). If you have to enter a password every time you turn on the launcher, the experience will be greatly reduced. Or if the password is only required when the program is started, then the security cannot actually be properly guaranteed. Taking these into account, we believe that it is better for security guaranteed by the system, security software, and good user habits in long-term solution. As long as the user realizes that he should lock the system when he/she leaves the computer, 1Remote does not have to put add any activation protect.And if the user does not have such security awareness, then even if we adds the activation password, the information may still be leaked through other ways.

### What we provide

For the data sync / sharing reason, {{appname}} only provide a basic string encryption in database (account, password, etc.). So it is recommended to enable hard disk encryption (like [Bitlocker](https://docs.microsoft.com/en-us/windows/security/information-protection/)) to ensure that event when the {{appname}} database is leaked or the hard disk is cracked physically, the theft will get nothings.

## Summary

- Lock Windows when you left your computer.
- Backup your data frequently.
- (Recommended) Enabled bitLocker.

{% include 'footer.md' %}
