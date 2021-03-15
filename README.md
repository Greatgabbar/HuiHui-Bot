<h1 align="center">
    <img style = "border-radius : 50%" alt="Logo" src="./logo.png" width="200px" /> 
</h1>

<h3 align="center">
  HuiHui
</h3>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Commands</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 💻 What The Heck is HuiHui

- <p style="color: red;">HuiHui is a free Discord music bot written in js using discord.js that delivers high-quality music to your Discord server. The music bot is made to be easy plug in to your Discord server with no configuration. 
 

## 🎵 Music commands
```
play <name/URL>, play music in a voice channel.
pause, pause the current music.
resume, puts the current music back on.
queue, see the next songs in queue.
pp <name>, to play the saved playlists.
add <name> <link>, To add playlist in our database.
shuffle, to mix the queue.
nowplaying, see music in progress.
skip, skip to next music.
stop, stop all music.
disconnect, To disconnect HuiHui from Voice channel.
```

## 💡 General commands
```
ping, see the bot latency.
help, see the list of available commands.
debug, see number of voice connections.
```

## 🚀 Technologies

- NodeJS
- DiscordJs
- ffmpeg
- ytdl-core
- sodium

## 💻 Getting started

- For Quick Demo Just [Click here](https://discord.com/oauth2/authorize?client_id=816994233557844039&scope=bot) and invite to your server

### Requirements

- Admin of the Server 😆
### If You want to run in development mode

**Clone the project and access the folder**

<!-- you can put the commands inside the three grave accents -->

```bash
$ git clone https://github.com/Greatgabbar/HuiHui-Bot.git
$ cd HuiHui-Bot
```

**Follow the steps below**

- For configuration

create .env file in root folder of project
```
    TOKEN: 'TOKEN',
    prefix: 'PREFIX',
    CLIENTSECRET: 'CLIENTSECRET',
    CLIENTID : 'CLIENTID',
    dburl : 'dburl'
```
- `TOKEN,CLIENTSECRET,CLIENTID`, of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.
- `prefix`, the prefix that will be set to use the bot.
- `dburl`, link of MongoDB cluster to store data.

<!-- you can put the commands inside the three grave accents -->

```bash
npm i
node app.js
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork EliasGcf/NOME_DO_REPO
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd NOME_DO_REPO

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

<!-- You can delete the license if you don't want it -->

