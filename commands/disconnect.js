const Discord = require('discord.js');

require('dotenv').config();
const prefix=process.env.prefix;

module.exports={
    name : 'disconnect',
    discription : 'Disconnect from the voice channel',
    usage : `${prefix}disconnect , ${prefix}dc`,
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
        const msg= new Discord.MessageEmbed()
            .setColor('#008000')
            .setTitle("Disconnected Successfully!")
        message.channel.send(msg).then(data=>{
            return data.react(`👍`);
        }).catch(err=>{
            console.log('Err',err.message);
            message.reply(`Reason : ${err.message}`)
        });
    }
}