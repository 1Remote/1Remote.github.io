> A chain is only as strong as its weakest link.

## Security

{{appname}} does **not** have an activation password: it runs in the background and starts sessions from the launcher (++alt++ + ++m++), and that only works well if nothing asks for a password every time (the reasons are at the end of this page). What it does instead, and what you should do yourself, is listed on this page.

## What {{appname}} does for your passwords

### Obfuscation in the database

Passwords, private key paths and so on are not stored as plain text in the database, but they are only obfuscated: the key used for that is the same in every copy of {{appname}}, it is not tied to your Windows account or to a password of yours. Somebody who gets hold of your database file (or of a json export, which is plain text anyway) can therefore read the passwords with a little work.

So the real protection is the protection of the files:

- Turn on hard disk encryption such as [BitLocker](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/), so a stolen disk does not hand out your servers.
- Lock Windows when you leave the computer.
- When you share a database with a team, do it with database permissions: a read-only account can connect to the servers but can not edit, delete or copy the credentials from inside {{appname}} (see [Team sharing](/usage/team/team-sharing/)). Remember that such an account can still read the database itself.

### Secondary verification

You can make {{appname}} ask for proof that it is really you before it shows a password. Turn it on in **Options -> General -> Security -> `Windows credentials verification is required to view passwords`**. It is off by default.

When it is on, {{appname}} asks you to verify before:

- a password is shown in clear (the eye button next to a password field),
- a password is copied to the clipboard (**`Copy password to clipboard`** in the server menu),
- servers are exported to a json file.

The verification uses **Windows Hello** (fingerprint, face or PIN) when your PC has it set up, otherwise the Windows credential dialog asks for your Windows user name and password. Turning the option off asks for the verification first, so nobody can switch it off without passing it.

!!! note
    The verification only guards the ways to *look at* a password listed above. Connecting to a server never asks for it, and the verification does not change how the passwords are stored.

### Credentials Vault

The **Credentials Vault** (its own page in **Options**) is a list of named accounts, each with a user name and a password or a private key. Every database you use (every *data source*, see [Use online database](/usage/database/use-online-database/)) has its own list. In the server editor, click the **`Credentials Vault`** button and pick an entry instead of typing the account: the server then *refers to* that entry.

Change the password of the entry once, and every server that refers to it uses the new password from the next connection on. That is the point of the vault: when a password changes, you fix it in one place instead of server by server.

## Why {{appname}} does not have an activation password

{{appname}} runs in the background and starts a session from the launcher (Alt + M). If you had to enter a password every time you open the launcher, the launcher would lose its point. And a password that is only asked once, at start, protects little. So we leave the protection to the system, to security software and to your habits: lock the computer when you leave it, and 1Remote needs no activation password. A user who does not lock the computer would not be safe with an activation password either, because the passwords can leak in other ways.

## Summary

- Lock Windows when you leave your computer.
- Enable hard disk encryption such as BitLocker.
- Turn on the secondary verification if other people use your Windows account.
- Back up your data frequently.

{% include 'footer.md' %}
