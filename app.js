const fs= require('fs');
const mongoose = require('mongoose');
const Discord = require('discord.js');
const http=require('http');
const client = new Discord.Client();
const {Player}=require('discord-player');
client.player =  new Player(client,{leaveOnEnd:false,leaveOnEndCooldown:60000});
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();
require('dotenv').config();
const server=http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  });
const prefix = process.env.prefix;
mongoose.connect(process.env.dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
      console.log('connected')
  });

require('./event')(client);
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//adding the set {commamnd_name , command_data} to the commands collection
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.once('ready', () => {
    client.user.setActivity('ED baba',{type:"LISTENING"});
	console.log('Ready!');
});



client.on('message',async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    // if (!client.commands.has(commandName)) return;
    const command= client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if(!command) return;
    if (command.args && !args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name , new Discord.Collection());
    }
    const date = new Date();
    const timestamps=cooldowns.get(command.name);
    const cooldownAmount=( command.cooldown || 3)*1000;
    if (timestamps.has(message.author.id)) {
        
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        
        if (date < expirationTime) {
            const timeLeft = (expirationTime - date) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
        }
    }
    timestamps.set(message.author.id, date);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    // --------------- not checked yet have to check the validity of the above cooldow poart -------------
    
    try {
        command.execute(message, args,client);
    } catch (error) {
        // console.error(error.message);
	    message.reply(`there was an error trying to execute that command! ${error}`);
    }
    
});
client.login(process.env.TOKEN);
server.listen(process.env.PORT||3000);
