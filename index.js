'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000, function () {
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.get("/", (response) => {
    response.statusCode = 200;
  	response.setHeader('Content-Type', 'text/plain');
  	response.end('Hello World');
});

const { Client, GatewayIntentBits  } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const TOKEN = process.env.TOKEN;
const cron = require('node-cron');
let channelId = process.env.CHANNELID;

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

function changeChannel(name, topic) {
	let channel = client.channels.cache.get(channelId);
	channel.edit({
		name: name,
		topic: `Your entry point to the server, this is a great place to introduce yourself and hang out. Bring ${topic}!`,
	});

	if (topic === "toast") {
		channel.send('Time for.....');
		channel.send('<a:LucasRotisserieToast:817507437526515762> - T  O  A  S  T  -  Z  O  N  E - <a:LucasRotisserieToast:817507437526515762>');
	}
}

client.login(TOKEN);

// Change to Toast Zone at 00:00 on Friday
cron.schedule(process.env.START_TIME, () => {
	changeChannel('🍞｜toast-zone', 'toast');
}, { timezone: "Europe/Dublin" });

// Change to Pizza Zone at 00:00 on Saturday
cron.schedule(process.env.END_TIME, () => {
	changeChannel('🍕｜pizza-zone', 'pizza');
}, { timezone: "Europe/Dublin" });

