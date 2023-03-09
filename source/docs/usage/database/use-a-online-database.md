
# Use a online database

1Remote supports various data sources such as local SQLite databases and online MySQL databases. You can connect to multiple databases at the same time. which allows you to store different server information in different databases and connect to different databases on different devices for flexible data management.

You can:

- Connect to the MySQL database running on you company server to access the servers for work when you are in your office.
- Connect to the MySQL database on your NAS to manage your personal servers when you back home.

## Add MySQL

Here is how to add a MySQL database:

This is where configuring multiple databases becomes useful:

- Your personal server information is stored in the default **`Local`** database, which only you can see and use.
- The team's servers are stored in a MySQL database named **`Team.`** You and your boss can connect with an administrator account to add and modify servers, while other colleagues can only read the server list with a read-only account.
Specifically:
    1. Install MySQL. In this article, we use the Synology package to install and deploy MySQL.
    2. Create a new database in MySQL. Here, we create a database named session_ai, which doesn't need to have any tables.
    3. Create a new account named session_admin in MySQL and grant it all privileges to the session_ai database.
    4. On the **`Database`** tab page in the **`Setting`** section of 1Remote, click the **`Add`** button in the upper right corner to add a new MySQL database.
    5. Go back to the main page of 1Remote and click the **`+`** button in the upper right corner to add a new server configuration to the newly added database.
    6. Create a new account named session_user in MySQL and only grant it select permission to the session_ai database. Distribute this account to your team members so that they can read the server configuration stored in the session_ai database but cannot view or modify their passwords.
    7. Noted: 1Remote updates data by querying periodically. Therefore, when you modify server information, other users may need to wait for several seconds before they can get the latest data.