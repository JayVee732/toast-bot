# Toast Bot

![GPL-3.0 license](https://img.shields.io/github/license/jayvee732/toast-bot.svg)

The server bot that was used on The Midnight: Official Discord (now known as [The Mall](https://discord.gg/themall)) to automate changing over the main channel (Pizza Zone) on a Friday to Toast Zone.

## OK, but why?

It's a long story based on server lore where the head admin wants to one day open a boutique toast shop, so why not model our place which is already a shopping centre into having a toast shop

## Is this even still in use?

No, we have "retired" our beloved Toast Bot as of the rebranding of our server away from being the offical Discord for the band [The Midnight](https://themidnight.bandcamp.com/), but never say never. I don't want to archive this project anyway since we might pick it back up at some stage to help with other server functions, but as it currently stands, we're not using it.

# Installation

1. git clone https://github.com/JayVee732/toast-bot
2. cd toast-bot
3. touch .env, follow the instructions in [Environment Variables](#environment-variables)
4. node index.js

## Environment Variables
- CHANNELID = The Discord Channel ID you wish to update.
- TOKEN = The Discord App Token you are using with your application.
- START_TIME = When the process should change the channel to Toast Zone
- END_TIME = When the process should revert back to Pizza Zone.
- USERID = Used with the bot account to write the message from 'Toast Bot'.
- GUILDID = The Discord Guild that the bot is associated with.
