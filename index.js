'use strict';

require('dotenv').config();
const { Client, Intents, TextChannel } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const TOKEN = process.env.TOKEN;
const cron = require('node-cron');

let today = new Date();
let channelId = '869922821839650860';
let channel = client.channels.cache.get(channelId);

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

function changeChannel(name, topic) {
	channel.edit({
		name: name,
		topic: `Topical free for all, bring ${topic}.`,
	});
}

client.login(TOKEN);

// Change to Toast Zone at 00:00 on Friday
cron.schedule('0 0 * * 5', function () {
	console.log('Time for T O A S T');
	channel.send('Time for T O A S T');
	changeChannel('🍞-toast-zone-🍞', 'Toast');
});

// Change to Pizza Zone at 00:00 on Saturday
cron.schedule('* * * * *', function () {
	//cron.schedule('0 0 * * 6', function () {
	console.log('Return to Pizza');
	channel.send('Return to Pizza');
	changeChannel('🍕-pizza-zone-🍕', 'Pizza');
});
