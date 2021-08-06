'use strict';

require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = process.env.TOKEN;

let today = new Date();
let wkday = today.getDay();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
	if (msg.content.toLowerCase().includes('toast mode')) {
		postFridayMessage(msg);
		changeChannel('🍞-toast-zone-🍞', 'Toast');
	} else if (msg.content.toLowerCase().includes('pizza time')) {
		changeChannel('🍕-pizza-zone-🍕', 'Pizza');
	}
});

function postFridayMessage(msg) {
	if (wkday == 5) {
		msg.channel.send('Time for T O A S T!');
	} else {
		msg.channel.send(
			'You may eat toast, but it is not time for T O A S T yet.'
		);
	}
}

function changeChannel(name, topic) {
	let general = client.channels.cache.get('869922821839650860');
	general.edit({
		name: name,
		topic: `Topical free for all, bring ${topic}.`,
	});
}

client.login(TOKEN);
