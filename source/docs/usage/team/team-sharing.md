# Team sharing

A typical use case is when you need to manage your personal servers (e.g. blog server, online photo server), as well as several servers in your team for work. You may face the following challenges:

!!! warning "Challenges"
        - Your personal servers are not willing to share with others.
        - Your team's servers need to be shared among several colleagues.
        - Only you and your boss can add and modify servers, while other colleagues can only view the servers listed, they are not able to edit them or see the password.

In this case, how can you manage your servers flexibly? 1Remote provides a solution for this problem: you can connect to multiple databases at the same time, and different access permissions can be set for different people:

- Your personal server information is stored in the default **`Local`** database, which only you can see and use.
- The team's servers are stored in a MySQL database named **`Team.`** You and your boss can connect with an administrator account to add and modify servers, while other colleagues can only read the server list with a read-only account.

![create accounts](img/team-sharing-create-account.jpg)