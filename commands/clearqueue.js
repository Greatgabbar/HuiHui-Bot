const Discord = require("discord.js");

module.exports={
    name : 'clearqueue',
    discription : 'Clear the queue',
    usage : `${prefix}clearqueue or !cq`,
    aliases:["cq"],
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

    message.client.player.clearQueue(message);
        const msg=new Discord.MessageEmbed()
            .setColor('#FFA500')
            .setTitle(`Queue Cleared Successfully`)
        return message.channel.send(msg).catch(err=>{
            console.log('Err',err.message);
           return message.reply(`Reason : ${err.message}`)
        });

    }
}