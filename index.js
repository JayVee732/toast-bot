'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000, function () {
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.get("/", (request, response) => {
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

	if (topic === "Toast") {
		channel.send('Time for.....');
		channel.send('<a:LucasRotisserieToast:817507437526515762> - T  O  A  S  T  -  Z  O  N  E - <a:LucasRotisserieToast:817507437526515762>');
	}
}

async function userTimeOut(value) {
	const guild = client.guilds.cache.get(process.env.GUILDID)	
	guild.members.fetch(process.env.USERID).then(member => {
		console.log(member);

		member.timeout(value)
		.then(console.log)
		.catch(console.error);
	});

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

// Timeout for Sunday
//cron.schedule('0 0 * * 7', () => {
cron.schedule('40 21 * * 4', () => {
	//userTimeOut(1440 * 60 * 1000);
	console.log('Entering method.')
	userTimeOut(5 * 1000);
//}, { timezone: "US/Central" });
}, { timezone: "Europe/Dublin" });
