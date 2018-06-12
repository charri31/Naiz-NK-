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
    	message.reply('\n\ Im sorry! This is the best I can do! \n\ Is that alright?');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Hana?') {
    	message.reply('\n\ ☼ **H A N A** ☼ \n\ o Tribe Color: White/Red \n\ o Location: Unknown \n\ o Characteristics: Tolerant | Benign | Pacifist \n\ A splinter sect of the Kha that broke off many generations ago. \n\ They were a culmination of Xaela and Raen who followed a set of teachings emphasizing pacifism and peace. The tribe was mostly wiped out by the Garlean Empire approximately 15 years ago.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Adarkim?') {
    	message.reply('\n\☼ **A D A R K I M** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: War-like | Hostile\n\The largest of the Xaela tribes.\n\While not the most skilled at battle, they overwhelm with numbers, taking losses in stride, knowing that a future victory over a weaker tribe will replenish their ranks.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Angura?') {
    	message.reply('\n\☼ **A N U G R A** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: Stationary\n\A small tribe which keeps mainly to the mountainous region of northeastern Othard.\n\The glare reflected by the everlasting glaciers upon which they travel has rendered thier skin color a deep rusty tone.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Arulaq?') {
    	message.reply('\n\☼ **A R U L A Q** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: [ Unknown ]\n\A tribe thought lost 200 years ago. Only recently discovered once again living in a secluded valley in the mountainous north.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Avagnar?') {
    	message.reply('\n\☼ **A V A G N A R** ☼\n\o Tribe Color: Unknown\n\o Location: None\n\o Characteristics: [ Unknown ]\n\A tribe defeated and absorbed by the __Adarkim__.\n\Several of the proud tribe members still secretly use its ancestral name, knowing that it could mean death if they are discovered.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Bairon?') {
    	message.reply('\n\☼ **B A I R O N** ☼\n\o Tribe Color: Unknown\n\o Location: Southern Desert\n\o Characteristics: Nomadic\n\A middle-sized tribe of the southern deserts and masters of survival in the driest of climes.\n\They are all trained from a very young age to collect and drink their own bodily fluids, allowing them the ability to venture deep into places no other tribe will.');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
