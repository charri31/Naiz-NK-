const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Good morning, Naiz') {
    	message.reply('Sain öglöö!');
  	}
});
client.on('message', message => {
    if (message.content === 'Naiz, can you bring me a coffee?') {
    	message.reply('Ah... well... I can try!');
  	}
});
client.on('message', message => {
    if (message.content === 'I need coffee.') {
    	message.reply('Would you like me to find you some?');
  	}
});
client.on('message', message => {
    if (message.content === 'I tea coffee.') {
    	message.reply('Would you like me to find you some?');
  	}
});
client.on('message', message => {
    if (message.content === 'Yes please, Naiz.') {
    	message.reply('Alrighty! Let me see what I can find!');
  	}
});
client.on('message', message => {
    if (message.content === 'Thank you, Naiz.') {
    	message.reply('Sure thing!');
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
client.on('message', message => {
    if (message.content === 'Who are the Bayaqud?') {
    	message.reply('\n\☼ **B A Y A Q U D** ☼\n\o Tribe Color: Unknown\n\o Location: West Edge\n\o Characteristics: Stationary\n\A tribe of the Steppe’s western edges.\n\The women of the tribe will traditionally take several husbands, as did the tribe\'s founding matron 2000 years ago.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Bolir?') {
    	message.reply('\n\☼ **B O L I R** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: Trade-based\n\A small tribe that earns its living by collecting the dung of the beastkin herds which roam the Steppe.\n\The dung is dried, turned into charcoal in temporary kilns, and sold to other tribes.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Borlaaq?') {
    	message.reply('\n\☼ **B O R L A A Q** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: War-like | Nomadic\n\o Tribe Relations: Ill-regarded by the Buduga\n\A tribe of all women. \n\While breeding with men from other tribes is allowed, if a male is born into the tribe, he is given up within a year of birth.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Buduga?') {
    	message.reply('\n\☼ **B U D U G A** ☼\n\o Tribe Color: Moss | Forest | Morbol Green\n\o Location: Azim Khaat | The Dawn Throne\n\o Characteristics: War-Like | Hostile\n\A tribe of all males.\n\Their ranks are increased through battle and kidnapping from other tribes. Currently, they hold an alliance with the Oronir, and are governed by Magnai Khan');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Dalamiq?') {
message.reply('\n\☼ **D A L A M I Q** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: Stationary\n\One of only a few Xaela tribes which has abandoned the nomadic lifestyle and built a small village on an islet in the middle of a two-malm-wide span of the great inner river. It is said they once worshipped the now-fallen lesser moon.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Iriq?') {
    	message.reply('\n\☼ **I R I Q** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: War-like | Nomadic\n\A tribe that follows the Borlaaq.\n\They take on any male children given up by the female warriors and raise them as their own.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Jhungid?') {
    	message.reply('\n\☼ **J H U N G I D** ☼\n\o Tribe Color: Unknown\n\o Location: Eastern Coast\n\o Characteristics: War-like | Hostile\n\o Tribe Relations: In constant conflict with the Kharlu \n\The second largest Xaela tribe and mortal enemies with the Kharlu.\n\They will spend the greater part of the year subjugating smaller tribes to swell their own ranks in preparation for an annual battle with the Kharlu--the winner gaining control over a large part of the eastern coastlands.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Kharlu?') {
    	message.reply('\n\☼ **K H A R L U** ☼\n\o Tribe Color: Unknown\n\o Location: Eastern Coast\n\o Characteristics: War-like | Hostile\n\o Tribe Relations: In constant conflict with the Jhungid\n\The third largest Xaela tribe and mortal enemies with the Jhungid.\n\Like their warring brethren, Kharlu will spend the greater part of the year subjugating smaller tribes to swell their own ranks in preparation for an annual battle with the Jhungid--the winner gaining control over a large part of the eastern coastlands.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Khatayin?') {
    	message.reply('\n\☼ **K H A T A Y I N** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: Nomadic\n\A tribe which largely remains unseen. \n\For nine moons of the year, they hunt goats within the mountains, while the remaining three are spent at the foot of the great north range, where they survive off the dried meat they stocked.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Malqir?') {
message.reply('\n\☼ **M A L Q I R** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: Nomadic\n\A western Steppe tribe characterized by its unique ritual for choosing its leader.\n\Instead of the usual test of brawn, they enact a game of Kharaqiq--a chess-like game played on a circular board divided into three rings.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Mankhad?') {
message.reply('\n\☼ **M A N K H A D** ☼\n\o Tribe Color: Unknown\n\o Location: Steppe Coasts\n\o Characteristics: Nomadic\n\A costal tribe which fights with blow-darts made from bones dipped in the poison of the pufferfish. \n\So practiced with the pipes are the tribe, that they can disable a target from 200 paces.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Mierqid?') {
message.reply('\n\☼ **M I E R Q I D** ☼\n\o Tribe Color: Unknown\n\o Location: Deserts\n\o Characteristics: Nomadic | Desert-dwellers\n\A desert tribe.\n\Over the course of a year, they travel between over a hundred secret buried caches of supplies restocked with each annual visit.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Noykin?') {
message.reply('\n\☼ **N O Y K I N** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: Nomadic | Beast-tamers\n\Master trainers of the wild horses which populate the majority of Steppe. \n\It is said that the horsewives of the Noykin can break any beast if given but a week.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Olkund?') {
message.reply('\n\☼ **O L K U N D** ☼\n\o Tribe Color: Charcoal | Soot Black\n\o Location: Unknown\n\o Affinity: War-like | Nomadic\n\Selective breeding has seen the average height of the central Steppe-dwelling Olkund tribe males reach over two and a half yalms. \n\The females, for whatever reason, remain of an average height.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Dazkar?') {
message.reply('\n\☼ **D A Z K A R** ☼\n\o Tribe Color: Seafoam Green\n\o Location: Unknown\n\o Characteristics: Nomadic\n\Household duties such as cooking, cleaning, and childrearing are handled by the males of the Dazkar who, other than when on the move, rarely ever leave their familial yurts.\n\Female Dazkar are tasked with hunting, and are known across the Steppe as being some of the most accurate archers in the realm.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Oronir?') {
message.reply('\n\☼ **O R O N I R** ☼\n\o Tribe Color: Gold | Honey Yellow\n\o Location: Azim Khaat\n\o Characteristics: War-like | Domineering\n\Lead by Magnai Khan\n\All members of the Oronir tribe believe themselves to be direct descendants of Azim, God of the Sun. Currently they reside alongside the Buduga within The Dawn Throne.\n\**Celebrations:** In a bout known as Azim Bokh, members of the Oronir are pitted against each other in show of physical skill, determining among them who is most fit-- or least fit, to lead.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Oroq?') {
message.reply('\n\☼ **O R O Q** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: Benign | Steppe-dwellers\n\The Oroq create sleds made of reeds dipped in horse fat to help move their possessions and young children about the inner grasslands.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Qerel?') {
message.reply('\n\☼ **Q E R E L** ☼\n\o Tribe Color: Unknown \n\o Location: Unknown- Formally Qerel Iloh\n\o Characteristics: War-like | Trophy hunters | Steppe-dwellers\n\The warriors of this tribe all wear complete suits of armor crafted from the bones of Baras which they kill with their own hands upon their coming of age.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Torgud?') {
message.reply('\n\☼ **T O R G U D** ☼\n\o Tribe Color: Unknown \n\o Location: Unknown\n\o Characteristics: Desert-dwellers | Vibrant Paint | Naked\n\This desert tribe does not wear any clothes. Instead they cover their bodies almost entirely in a white paint created from mud, lime, and bone meal. The paint helps to reflect the relentless desert sun.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Tumet?') {
message.reply('\n\☼ **T U M E T** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: War-like | Nomadic\n\The children of the Tumet, upon seeing their tenth summer, are tied to a sacred tree while the remainder of the tribe packs up and moves to their next location. \n\Those children who manage to break free from their bonds and catch up with the tribe at that next location, are given a name and allowed into the tribe.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Ugund?') {
message.reply('\n\☼ **U G U N D** ☼\n\o Tribe Color: Unknown \n\o Location: Unknown\n\o Characteristics: Nomadic\n\When members of this tribe die, their heads are removed from their bodies and placed in a jar of fermented goat milk. \n\Once the liquid has been \'drunk\' by the head, it is then buried under an anthill so that the tiny workers can carry the spirit to the afterlife. The journey is thought to be a terrible one, the road filled with ghosts of the damned, so ensuring the spirit is drunk helps ease the journey.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Uyagir?') {
message.reply('\n\☼ **U Y A G I R** ☼\n\o Tribe Color: Snow White \n\o Location: Uyagir caves\n\o Characteristics: Benign | Shaman | Cave-dwellers\n\One of a handful of Xaela tribes which have given up the nomadic lifestyle. \n\The Uyagir reside in a system of limestone caves on the northern edge of the southern deserts which are believed to have been dug by a race of giant oliphant-like beetles which were placed on the land by the gods to punish the elder tribes that had grown too greedy.\n\While the Uyagir do not openly profess their talents, it is believed that their markings within the caverns fortell the paths of those that seek them.'); 
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Dhoro?') {
message.reply('\n\☼ **D H O R O** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: Benign | Reclusive\n\An elusive tribe that avoids contact with most other tribes. \n\Lookouts are posted all about their camps with orders to flee given the moment an outsider is spotted.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Orben?') {
message.reply('\n\☼ **O R B E N** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: Benign | Nomadic | Water-dwellers\n\A tribe that rides up and down the great inner river on boats woven from reeds and reinforced with scales from their own skin.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Ejinn?') {
message.reply('\n\☼ **E J I N N** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: Benign | Nomadic | Water-dwellers\n\A river tribe that chooses to swim from place to place rather than walk or take boats. \n\It is said that members can hold their breaths for up to a quarter bell, and will often migrate while almost completely submerged in order to avoid contact with hostile tribes.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Dotharl?') {
message.reply('\n\☼ **D O T H A R L** ☼\n\o Tribe Color: Void | Storm Blue\n\o Location: Dotharl Khaa\n\o Characteristics: War-like | Hostile | Spiritual\n\Lead by Sadu Khatun.\n\An extremely violent tribe with members who revel in massacre and are taught from a young age not to fear death. \n\While they are quick to attack other tribes, mortality rates are high, ensuring that their numbers never grow too high.\n\They are known among the other tribes for being one of few that believe in the soul\'s reincarnation, and revel in battle that their souls may burn brighter.\n\**Celebrations:** Revered as both Hunters and Warriors, the Dotharl will honor the Dusk Mother with a display of their archery skill-- the furthest arrow loosed with the truest aim being the most meritable.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Hotgo?') {
message.reply('\n\☼ **H O T G O** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: Benign | Vibrant Paint\n\A tribe recently massacred by the Dotharl. \n\The only members surviving are those who left the tribe to travel on their own and were not present during the killing. The Hotgo were known for their vibrant face paints which members would constantly change depending on their current mood.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Sagahl?') {
message.reply('\n\☼ **S A G A H L** ☼\n\o Tribe Color: Unknown \n\o Location: Unknown\n\o Characteristics: Tolerant\n\A tribe which sees all beastkin as equals with man, therefore refuses to eat or use them as beasts of burden. \n\As a result, the diet of the Sagahl mainly consists of steppe shrubs and vilekin.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Kahkol?') {
message.reply('\n\☼ **K A H K O L** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown - [ Formally Kahkol Iloh ]\n\o Characteristics: Variatible\n\A tribe composed of orphans and refugees from tribes defeated or destroyed. \n\Many choose to combine the name of their old tribe with Kahkol.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Kha?') {
message.reply('\n\☼ **K H A** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: Tolerant\n\Unlike most of the Xaela, the Kha live on the fringes of the Xaela lands. \n\They actively seekcontact with non Auri peoples, introducing many aspects of those cultures into their own.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Mol?') {
message.reply('\n\☼ **M O L** ☼\n\o Tribe Color: Rust Red\n\o Location: Mol Iloh\n\o Characteristics: Benign | Shaman | Peacekeepers\n\A small tribe of devout worshippers of the elder gods. \n\The Mol will consult with their deities via ugdan [shaman] before making any tribe-related decisions, from the direction of their next migration, to the beasts they will hunt each day for food.\n\**Celebrations:** When the children come of age, a race is held on horseback through the grasslands to display the prowess of both young rider and steed to the gods.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Gesi?') {
message.reply('\n\☼ **G E S I** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: War-like\n\The Gesi are masters of the slingspear- a mid-sized javelin carved from mammoth bone.\n\Instead of being thrown by hand, the spear is flung with a leather sling to improve range, speed, and killing power.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Kagon?') {
message.reply('\n\☼ **K A G O N** ☼\n\o Tribe Color: Unknown\n\o Location: Desert\n\o Characteristics: Nomadic | Nocternal | Pale | Desert-dwellers\n\A nocturnal desert tribe who worship Nhaama, Goddess of the Moon and mortal enemy of Azim, God of the Sun. \n\Believing that to step into the sun is to succumb to the evils of Azim, they spend the daylight hours in their tents, only emerging to hunt and migrate at night. The result is an uncharacteristically pale skin for a group of people living in an almost eternally fair-weather locale.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Goro?') {
message.reply('\n\☼ **G O R O** ☼\n\o Tribe Color: Salmon Pink\n\o Location: Unknown\n\o Characteristics: War-like | Nomadic | Beast-tamer\n\The Goro believe horses to be perfect beings.\n\Each male and female, upon their coming of age, is married to a horse of the opposite sex. Reproductive mates are chosen by lots. The bonds between horse and companion and likened to that of a deep, longlasting friendship. \n\\n\**Did you know?** There is a Fate chain in the Steppe where you can learn about the Goro and see them in action! Look for The Dataqi Chronicles!');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Gharl?') {
message.reply('\n\☼ **G H A R L** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: Benign | Nomadic | Steppe-dwellers\n\Before each migration, the Gharl will fill a sacred urn with the soil of the place they just camped. \n\This soil is then dumped upon arriving at the next location. This tradition has been carried out for thousands of years, leading people to believe that most the steppe is now all of one soil.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Dataq?') {
message.reply('\n\☼ **D A T A Q** ☼\n\o Tribe Color: Ink Blue\n\o Location: Sea of Blades\n\o Characteristics: Tolerant | Nomadic | Steppe-dwellers\n\The Dataq cover quite possibly the most area in their migrations. \n\They rarely stop in one area for longer than a few bells. Sleeping is all done in the saddle, and tents are only used when the rains are heavy and unbearable.\n\\n\**Did you know?** There is a Fate chain in the Steppe where you can learn about the Dataq and see them in action! Look for The Dataqi Chronicles!');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Haragin?') {
message.reply('\n\☼ **H A R A G I N** ☼\n\o Tribe Color: Unknown\n\o Location: The Coasts\n\o Characteristics: Benign | Nomadic | Water-dwellers\n\The legends of this coastal tribe tell of a group of their ancestors who crafted a giant ship and sailed out across the endless eastern ocean. \n\The explorers are said to have returned with tales of a terrible island covered in massive grey monoliths and inhabited by fire-breathing steel demons.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Ura?') {
message.reply('\n\☼ **U R A** ☼\n\o Tribe Color: Unknown \n\o Location: Unknown\n\o Characteristics: Benign | Nomadic\n\This mountain-dwelling tribe is one of the few which instead of hunting, mine the precious ores of the peaks and trade them with the Steppe tribes for food.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Moks?') {
message.reply('\n\☼ **M O K S** ☼\n\o Tribe Color: Unknown \n\o Location: Unknown\n\o Characteristics: Unknown\n\A tribe __invisible__ for the fact that its members are spread out across many different tribes (unbeknownst to those tribes). Communication between its members is done on the rare occasion when two tribes meet, through an ancient set of hand signals only recognizable by those who know what they are looking for.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Geneq?') {
message.reply('\n\☼ **G E N E Q** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: Nomadic\n\In addition to the standard language used by most of the Xaela in cross-tribe communication, the Geneq employ a complex system of whistles and clicks which resemble the cloud and wavekin of the steppe.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Horo?') {
message.reply('\n\☼ **H O R O** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: Benign | Nomadic\n\To those who live the meager lifestyles of the Steppedwellers, being overweight is a symbol of affluence and power. \n\To appear heavier than one in their station, the members of Horo will drink copious amounts of water to bloat their bellies.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Himaa?') {
message.reply('\n\☼ **H I M A A** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: Benign | Nomadic\n\For reasons unknown, one out of every three pregnancies amongst the Himaa result in twins. \n\As a result, over half the tribe\'s members have a doppelganger. This can prove as an advantage during attacks, as it confuses the enemy into believing the dead have risen.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Malaguld?') {
message.reply('\n\☼ **M A L A G U L D** ☼\n\o Tribe Color: Unknown\n\o Location: Unknown\n\o Characteristics: Benign | Tolerant | Nomadic\n\One of the only tribes that accept Raen--those that have been exiled, or those who have fled persecution--into their circle.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Urumet?') {
message.reply('\n\☼ **U R U M E T** ☼\n\o Tribe Color: Unknown \n\o Location: Desert\n\o Characteristics: Benign | Nomadic | Desert-dwellers\n\This desert tribe has the queer custom of travelling with their elders carried upon their shoulders. \n\It is believed that in the flat desert, this gives the tribe the advantage of being able to see farther.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Qalli?') {
message.reply('\n\☼ **Q A L L I** ☼\n\o Tribe Color: Unknown \n\o Location: Unknown\n\o Characteristics: Benign | Nomadic | Melodic | Steppe-dwellers\n\Also known as the \'Songbirds of the Steppe\'. \n\The Qalli communicate through song, attaching a ♪ melody to their words ♪ to further add emotion to the meaning.');
  	}
});
client.on('message', message => {
    if (message.content === 'Who are the Qestir?') {
message.reply('\n\☼ **Q E S T I R** ☼\n\o Tribe Color: Lilac Purple\n\o Location: Reunion and ???\n\o Characteristics: Benign | Stationary | Lower Masks\n\This tribe refuses to speak, believing that all words are lies, and that one\'s actions are the purest form of communication. \n\Before the ages of 6-10, a Qestiri child is raised away from Reunion, and never hears \'spoken\' language unless another tribe comes to trade with theirs. They are unable to speak because they have never learned to physically make the sounds. Upon their first visit to Reunion during this age period, they are exposed to spoken language during the trade activities that take place there. Writing is used by Qestiri merchants for trade activities in Reunion and other forms of vocal expression (such as laughing) occur as normal. Qestir who go against their tradition and choose to attempt/learn to speak are not expelled from the tribe outright, however if it is revealed to other Qestir that they spoke, they would be labeled by the tribe as a liar and known as untrustworthy.\n\\n\Reunion was established by the Qestir. One rumor has it that a Qestir child took ill and died due to the tribe being unable to precure medicine. Thus Reunion was founded in an effort to prevent situations like that from occuring to any tribe again. It was established as a place where all Xaela may come together as one, regardless of tribe. \n\To fight in Reunion is forbidden, and breakers of this law are banished. Qestir abstain from the Naadam, remaining neutral to benefit their efforts in Reunion. They are capable of fighting, however: Qestir are seen around Reunion armed with longbows.\n\Merchants wishing to trade in Reunion must prove themselves to the Qestiri overseers of the market there. The Qestir have control over what may be sold in Reunion, and others working with them monitor merchants for pricing fairness.');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
