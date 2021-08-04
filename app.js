require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

const today = new Date();
const wkday = today.getDay();

bot.login(TOKEN);

bot.on('ready', () => {
	console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', (msg) => {
	if (msg.content.includes('toast')) {
		friday(msg);
	}
});

function friday(msg) {
	if (wkday == 5) {
		msg.reply('Time for T O A S T!');
	} else {
		msg.reply('You may eat toast, but it is not time for T O A S T yet.');
	}
}
