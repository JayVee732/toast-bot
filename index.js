'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000, function () {
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
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
		topic: `Topical free for all, bring ${topic}.`,
	});

	if (topic === "Toast") {
		channel.send('Time for T O A S T');
	}
	else if (topic === "Pizza") {
		channel.send('Return to Pizza');
	}
}

client.login(TOKEN);

// Change to Toast Zone at 00:00 on Friday
//cron.schedule('0 0 * * 5', function () {
cron.schedule('42 21 * * *', function () {
	console.log('Time for T O A S T');
	changeChannel('🍞-toast-zone-🍞', 'Toast');
});

// Change to Pizza Zone at 00:00 on Saturday
//cron.schedule('0 0 * * 6', function () {
cron.schedule('43 21 * * *', function () {
	console.log('Return to Pizza');
	changeChannel('🍕-pizza-zone-🍕', 'Pizza');
});
