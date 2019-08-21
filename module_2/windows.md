---
prev: ./macos
next: false
---

# Windows

## Requirements

-   Windows 10 and above
-   Administrative Privileges

## Pre-requisite

Press the keys **Win + X** and select **Windows Powershell (Admin)**. Press **Yes** on the next screen.

In the **Administrator: Windows Powershell** window, enter the following and press **Enter**:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

After that, close the window.

## Install Required Software

Press the keys **Win + X** and select **Windows Powershell (Admin)**. Press **Yes** on the next screen.

In the **Administrator: Windows Powershell** window, enter the following and press **Enter**:
Type the following into the box:

```powershell
choco install nodejs yarn android-sdk androidstudio vscode awscli --yes
```

The code should take about 30 minutes to run.

After the command completes, you should see similar to this screen. It is OK if it does not look the same:

```
Chocolatey installed 7/7 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log)

Installed:
 - nodejs v12.8.1
 - nodejs.install v12.8.1
 - yarn v1.17.3
 - androidstudio v3.4.2.0
 - android-sdk v26.1.1
 - awscli v1.16.221
```

Close the window once it is completed. You should see this screen once its completed:

```powershell
PS C:\WINDOWS\system32>
```

## Install React Native-specific Programs

Press the keys **Win + X** and select **Windows Powershell (Admin)**. Press **Yes** on the next screen.

In the **Administrator: Windows Powershell** window, enter the following and press **Enter**:
Type the following into the box:

```powershell
yarn global add expo-cli
```

This should take about 15 minutes. Once this completes, you are ready to start the next module.
