# 1Remote Quick Start

## Adding Servers

### Manually Adding a Server

1. Click the `+` button in the upper-right corner of the main window.
2. Choose a protocol, such as RDP, SSH, or VNC, at the top of the pop-up window.
3. Enter the server's name, label, notes (supports Markdown), and other information.
4. (Optional) Customize the server icon (system-built or manually uploaded) and highlight color (default is no highlight, setting a highlight color will highlight the server in the list and connection process).
5. (Optional) Configure scripts for the server, such as opening VPN before starting remote desktop, or closing VPN after closing remote desktop. Scripts support cmd, PowerShell, and Python.
6. Continue entering server address, port, username, password, and other information, and select your desired connection settings.
7. Click the `Save` button to complete adding the server and return to the homepage.

### Importing Servers from mRemoteNG

1. In mRemoteNG, right-click on the server and choose "Export to File...". Set the "File Format" to "mRemoteNG CSV" in the pop-up window, and click the `OK` button in the lower-right corner to export.
2. In 1Remote, click the `+` button in the upper-right corner of the main window, and choose "import mRemoteNG csv". Select the CSV file you just exported in the pop-up dialog, and click "Open" to complete the import.

### Importing Servers from RDP Files

1. In MSTSC.exe, click "Show Options" to expand the window, click the `Save As...` button under "Connection settings", and save as an RDP file.
2. In 1Remote, click the `+` button in the upper-right corner of the main window, and choose "import *.rdp". Select the RDP file you just saved in the pop-up dialog, and click "Open" to complete the import.

## Starting Remote Connections

### Starting from the main window

1. Servers are displayed in the main window as cards or lists. Double-click a server to open the corresponding remote session.
2. You can also check the checkbox in front of each server, and then click the `Connect` button at the bottom of the main window to start multiple remote sessions at once.
3. If you have labeled the servers, you can right-click the label in the label list above the main window, and click the `Connect` button to start multiple remote sessions at once.

### Starting from the Launcher

1. If you have enabled the Launcher feature, you can use the default shortcut <Alt> + <M> to open the quick start window of the server.
2. Servers are arranged in order of recent use in the Launcher window. Use the up and down arrow keys to select the desired server, or search for the desired server directly by entering keywords.
3. After selecting the server, press the <Enter> key to start the remote session.

## Managing Servers

### Basic Management

1. Servers are displayed in the main window as cards or lists. You can click the `Settings` button in the upper-right corner of the interface to expand the menu and choose "Toggle Cards/List" to switch the display mode of servers.
2. In list mode, click on the header above the list to sort the servers.
3. When you hover your mouse over a server, the corresponding `Settings` button will be displayed. Clicking on this button will display a menu where you can connect to, edit, create a replica, delete, copy the server address and account password, etc. (Note: If you connect to a MySQL server with read-only permissions, you will not be able to edit, copy, or delete server information stored in that database.)
4. You can also directly enter the edit interface by right-clicking on a server with your mouse.
5. By selecting multiple servers using the checkboxes and clicking the `Edit` button at the bottom of the main window, you can enter the batch editing interface to perform uniform editing operations on multiple servers. With proper server labels, you can easily select all servers under a specific label and modify their addresses or account passwords in bulk.

### Data Backup and Synchronization

- Data export: By selecting multiple servers using the checkboxes and clicking the `Export` button at the bottom of the main window, you can export the server information to a JSON file. (Note that the exported data is stored in plain text, so please handle it with care.)
- Database backup: Click the `Settings` button in the top right corner of the main window, expand the menu, select the `Options` button, and go to the Database tab. Find the database named "Local" and you can see its storage path. You can manually enter this path to backup the database.
- Database synchronization: If you use multiple devices, you can back up the database to the cloud and set the synchronization path on each device, so that you can share server information across different devices.
    1. First, move the "Local" database file to the sync folder. Synology NAS, OneDrive, Google Drive, and other cloud storage services can be used as sync service providers.
    2. Click the Edit `button` to the right of the "Local" database in the `Database` tab, then click the `Select` button in the pop-up window and choose the database file you moved to the sync folder. Save the changes.
    3. The app will check whether the database file has changed every once in a while. If changes are detected, the file will be automatically synchronized to the database.
    4. (Note: This app does not use concurrency locks on the data, so if you modify the database on multiple devices at the same time, data loss may occur. Please try to avoid this situation.)

### Adding Multiple Databases

1Remote supports various data sources such as local SQLite databases and online MySQL databases. You can connect to multiple databases at the same time, which allows you to store different server information in different databases and connect to different databases on different devices for flexible data management.

A typical use case is when you need to manage your personal servers (e.g. blog server, online photo server), as well as several servers in your team for work. You may face the following challenges:

- Your personal server can only be managed by yourself.
- The team's servers need to be shared among several colleagues.
- Only you and your boss can add and modify servers, while other colleagues can only use the servers listed.

This is where configuring multiple databases becomes useful:

- Your personal server information is stored in the default "Local" database, which only you can see and use.
- The team's servers are stored in a MySQL database named "Team." You and your boss can connect with an administrator account to add and modify servers, while other colleagues can only read the server list with a read-only account. Specifically:
    1. Install MySQL. In this article, we use the Synology package to install and deploy MySQL.
    2. Create a new database in MySQL. Here, we create a database named session_ai, which doesn't need to have any tables.
    3. Create a new account named session_admin in MySQL and grant it all privileges to the session_ai database.
    4. On the "Database" tab page in the "Setting" section of 1Remote, click the `Add` button in the upper right corner to add a new MySQL database.
    5. Go back to the main page of 1Remote and click the `+` button in the upper right corner to add a new server configuration to the newly added database.
    6. Create a new account named session_user in MySQL and only grant it select permission to the session_ai database. Distribute this account to your team members so that they can read the server configuration stored in the session_ai database but cannot view or modify their passwords.
    7. Noted: 1Remote updates data by querying periodically. Therefore, when you modify server information, other users may need to wait for several seconds before they can get the latest data.

## Customization

- Change language: "Setting" -> "General" -> "Language"
- Change theme: "Setting" -> "Theme" -> "Theme". On this page, you can also customize your favorite color scheme.
- Change SSH color scheme: "Setting" -> "Protocol" -> "SSH" -> "KiTTY" -> "Themes"
