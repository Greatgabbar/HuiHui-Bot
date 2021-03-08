require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.prefix;

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.TOKEN);

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    
	if (message.content === '!ping') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Chinni I love You');
	}
	else if(message.content === `${prefix}server`) {
		message.channel.send(`This Server Nmae is ${message.guild.name} \n Total Members ${message.guild.region}`);
	}
	else if(message.content === `${prefix}user-info`) {
		message.channel.send(`info :- ${message.author.username} & ${message.author.tag}`);
	}
});