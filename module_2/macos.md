---
prev: /module_2/
next: ./windows
---

# macOS

Welcome! In our opinion, you are using the best available operating system for working with web and mobile.

## Requirements

-   A 64-bit Intel CPU
-   macOS 10.12 (or higher)
-   Administrative Privileges
-   A Bourne-compatible shell for installation (e.g. bash or zsh)

## Pre-requisite

_Installing homebrew: If you already have homebrew, you may skip to the [next section](#install-required-software)._

Type **command + space** and type terminal and press **Enter**.

In the terminal window, enter the following and press **Enter**:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

This script should take no more than 10 minutes. Grab a drink if you're feeling thirsty.

Once it completes, you should see this:

```bash
Your-Mac:~ $
```

Without closing the window, you may continue on to the next step.

## Install Required Software

In the terminal, copy and paste the following command into your terminal and press **Enter**:

```bash
brew install nodejs@12 yarn awscli && brew cask install android-sdk android-studio visual-studio-code
```

This will take about 15 minutes.

## Install React Native-specific Programs

In the same terminal window, enter the following command and press **Enter**:

```bash
yarn global add expo-cli
```

This should take about 5 minutes. Once this completes, you are ready to start the next module.
