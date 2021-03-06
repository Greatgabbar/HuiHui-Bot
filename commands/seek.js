const Discord = require("discord.js");
require('dotenv').config();
const prefix = process.env.prefix;
module.exports={
    name : 'seek',
    discription : 'Sets currently playing music duration',
    usage : `${prefix}seek <time>`,
    execute(message,args){
        if (!message.member.voice.channel) {
            return message.reply(`You Have to be in the voice channel to use this command !`);
       }

    if(!message.guild.me.voice.channel){
        return message.reply(`I am not in any Voice channel use !play to invite me!`);
    }
    if(!args.length){
        return message.reply(`Command usage ${this.usage}`);
    }
    const track=message.client.player.nowPlaying(message);
    console.log(track);
message.client.player.seek(message,args[0]*1000);
        const msg=new Discord.MessageEmbed()
            .setColor('#FFA500')
            .setTitle(`+${args[0]}`)
        return message.channel.send(msg).then(data=>{
            return data.react(`👍`);
        }).catch(err=>{
            console.log('Err',err.message);
           return message.reply(`Reason : ${err.message}`)
        });

    }
}