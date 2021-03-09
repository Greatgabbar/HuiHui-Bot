require('dotenv').config();
const fs= require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();
const prefix = process.env.prefix;
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//cooldown code

if(!cooldowns.has(command.name)){
    cooldowns.set(command.name , new Discord.Collection());
}
const date = new Date();
const timestamps=cooldown.get(command.name);
const cooldownAmount=( command.cooldown || 3)*1000;
if (timestamps.has(message.author.id)) {
	
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

	if (now < expirationTime) {
		const timeLeft = (expirationTime - now) / 1000;
		return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
	}
}
timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
// --------------- not checked yet have to check the validity of the above cooldow poart --------------

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.TOKEN);

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    // if (!client.commands.has(commandName)) return;
    const command= client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if(!command) return;
    if (command.args && !args.length) {
     	return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    const command=client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
	    console.error(error);
	    message.reply('there was an error trying to execute that command!');
    }

});