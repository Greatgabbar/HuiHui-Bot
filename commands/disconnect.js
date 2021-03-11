const { Guild } = require('discord.js');

require('dotenv').config();
const prefix=process.env.prefix;

module.exports={
    name : 'disconnect',
    discription : 'Disconnect from the voice channel',
    usage : "!disconnect , !dc",
    aliases:["dc"],
    execute(message,args){
        if (!message.member.voice.channel) {
            return message.reply(`You Have to be in the voice channel to use this command !`);
       }
    //    if(message.member.voice.channel!==message.client.voice.channel){
    //     return message.reply(`You Have to be in the same voice channel of the bot`);
    //    }
    if(!message.guild.me.voice.channel){
        return message.reply(`I am not in any Voice channel use !play to invite me!`);
    }
        message.member.voice.channel.leave();
        message.channel.send(`Disconnected Successfully!`).then(data=>{
            return data.react(`👍`);
        })
    }
}