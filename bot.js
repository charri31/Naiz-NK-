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
    	message.reply('Im sorry! This is the best I can do! \n\ Is that alright?');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Hana?') {
    	message.reply('☼ **H A N A** ☼');
    	message.reply('o Tribe Color: White/Red');
    	message.reply('o Location: Unknown');
    	message.reply('o Characteristics: Tolerant | Benign | Pacifists');
    	message.reply('A splinter sect of the Kha that broke off many generations ago. They were a culmination of Xaela and Raen who followed a set of teachings emphasizing pacifism and peace. The tribe was mostly wiped out by the Garlean Empire approximately 15 years ago.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Adarkim?') {
    	message.reply('☼ **A D A R K I M** ☼');
    	message.reply('o Tribe Color: Unknown');
    	message.reply('o Location: Unknown');
    	message.reply(' Characteristics: War-like | Hostile');
    	message.reply('The largest of the Xaela tribes.  While not the most skilled at battle, they overwhelm with numbers, taking losses in stride, knowing that a future victory over a weaker tribe will replenish their ranks.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Angura?') {
    	message.reply('☼ **A N U G R A** ☼');
    	message.reply('o Tribe Color: Unknown');
    	message.reply('o Location: Unknown');
    	message.reply('o Characteristics: Stationary');
    	message.reply('A small tribe which keeps mainly to the mountainous region of northeastern Othard. The glare reflected by the everlasting glaciers upon which they travel has rendered thier skin color a deep rusty tone.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Arulaq?') {
    	message.reply('☼ **A R U L A Q** ☼');
    	message.reply('o Tribe Color: Unknown');
    	message.reply('o Location: Unknown');
    	message.reply('o Characteristics: [ Unknown ]');
    	message.reply('A tribe thought lost 200 years ago. Only recently discovered once again living in a secluded valley in the mountainous north.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Avagnar?') {
    	message.reply('☼ **A V A G N A R** ☼');
    	message.reply('o Tribe Color: Unknown');
    	message.reply('o Location: None');
    	message.reply('o Characteristics: [ Unknown ]');
    	message.reply('A tribe defeated and absorbed by the __Adarkim__. Several of the proud tribe members still secretly use its ancestral name, knowing that it could mean death if they are discovered.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Bairon?') {
    	message.reply('☼ **B A I R O N** ☼');
    	message.reply('o Tribe Color: Unknown');
    	message.reply('o Location: Southern Desert');
    	message.reply('o Characteristics: Nomadic');
    	message.reply('A middle-sized tribe of the southern deserts and masters of survival in the driest of climes. They are all trained from a very young age to collect and drink their own bodily fluids, allowing them the ability to venture deep into places no other tribe will.');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
