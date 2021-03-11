const Discord = require("discord.js");

module.exports={
    name : 'remove',
    discription : 'remove the perticular song from queue',
    usage : "!remove or !rm",
    aliases:["rm"],
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
    if(!args.length){
        return message.reply(`Enter Track value`);
    }
    const rmTrack=message.client.player.getQueue(message).tracks[args[0]-1];
    const track=message.client.player.remove(message,rmTrack);
        const msg=new Discord.MessageEmbed()
            .setColor('#FFA500')
            .setTitle(`Removed ${track.title} Successfully`)
        return message.channel.send(msg);

    }
}