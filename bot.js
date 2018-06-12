const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Good morning, Naiz') {
    	message.reply('Good morning to you too!');
  	}
});

client.on('message', message => {
    if (message.content === 'Naiz, can I have a hug?') {
    	message.reply(':blobkissheart: Im sorry! This is the best I can do!');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
