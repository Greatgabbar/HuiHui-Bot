const Discord = require("discord.js");

module.exports={
    name : 'skip',
    discription : 'skip the Currently playing song',
    usage : "!skip or !s",
    aliases:["s"],
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
message.client.player.skip(message);
        const msg=new Discord.MessageEmbed()
            .setColor('#FFA500')
            .setTitle(`Skipped Successfuly`)
        return message.channel.send(msg).then(data=>{
            return data.react(`👍`);
        });

    }
}