The APP protocol allows you to start an external EXE program using 1Remote.

By passing the parameters to the program, you can customize the startup configuration of the program.

Then you can start the software you need from our launcher.

## Examples

Here are some examples of using the App protocol, you can also customize the required startup configuration according to your own needs.

### Open bing.com with Chrome

![image](https://user-images.githubusercontent.com/10143738/141422024-0600d2ba-03e1-4633-acf6-e3777ca5ed27.png)

### Cmake

![cmake](img/cmake.jpg)

### Open NoMachine with credential `Test.nxs`

[![image](https://user-images.githubusercontent.com/10143738/141422142-f2762440-edca-4e01-bf5f-85bb454c263b.png)](./Protocol:-APP:-NoMachine)

## How to use(NoMachine case)

Since the latest version of NoMachine no longer provides a session starting method of the command line by password, in 1Remote we define the App protocol to indirectly implement the NoMachine session.

1. Make sure the target machine can be connected with NoMachine. Right click and export the `.nxs` file of target machine.

    ![](https://raw.githubusercontent.com/1Remote/1Remote/Doc/DocPic/NoMachine/1.jpg)

2. In 1Remote, add a new configuration of `APP` type.
   - Fill the path of NXPlayer.exe into the EXE path field
   - Fill the path of `.nxs` file into the parameter field
   - Save

    ![](https://raw.githubusercontent.com/1Remote/1Remote/Doc/DocPic/NoMachine/2.jpg)

3. Then you can quickly start your NoMachine session from 1Remote.

    ![](https://raw.githubusercontent.com/1Remote/1Remote/Doc/DocPic/NoMachine/3.jpg)

!!! tip
    This is also applicable to other command parameters supported session launcher, such as PUTTY, WinSCP, etc.

    Even you can use this method to add one other programs (such as Word, NotePad, etc.) to 1Remote for a quick start.

{% include 'footer.md' %}
