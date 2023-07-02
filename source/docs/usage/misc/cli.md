# CLI Usage

The 1Remote also supports CLI commands. This documentation provides an overview of the available CLI commands and their usage.

## Installation and Uninstallation

To install or uninstall the 1Remote tool, use the following commands:

- `--install`: Performs the installation of the 1Remote tool.
- `--uninstall`: Removes the 1Remote tool and its associated files.

## Desktop Shortcut Management

You can manage the desktop shortcut for the 1Remote tool using the following commands:

- `--install-desktop-shortcut`: Installs the desktop shortcut for quick access to the 1Remote tool.
- `--uninstall-desktop-shortcut`: Removes the desktop shortcut.

## Startup Entry Management

The CLI provides commands to manage the registry startup entry for the 1Remote tool:

- `--install-startup`: Sets the 1Remote tool to start automatically on system boot by adding a registry startup entry.
- `--uninstall-startup`: Removes the registry startup entry for the 1Remote tool.

## Running the App Minimized

If you want to run the 1Remote app in a minimized state, use the following command:

- `--start-minimized`: Launches the 1Remote app minimized.

## Executing Connections or Focusing Tags

You can execute specific connections or focus on tags using the following command formats:

- `ULID:<connection-id>`: Runs the 1Remote app and immediately executes and/or focuses on the connection with the specified ID.
- `<connection-name>`: Runs the 1Remote app and immediately executes and/or focuses on the connection with the specified name.
- `#<tag-name>`: Runs the 1Remote app and immediately start the connections associated with the specified tag.

You can also create shortcuts for ULID, connection name, and tags by right-clicking on a connection in the GUI interface.