const Discord = require("discord.js");
require('dotenv').config();
const prefix = process.env.prefix;
module.exports={
    name : 'queue',
    discription : 'Show the queue',
    usage : `${prefix}queue`,
    aliases:["q"],
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
        const queue = message.client.player.getQueue(message);
        if(queue.tracks.length===0){
            const msg=new Discord.MessageEmbed()
            .setColor('#FFA500')
            .setTitle(`Queue is Empty Add some Music`)
            return message.channel.send(msg);
        }
        const tracks= queue?.tracks?.map((data,i)=>{
            return `${data.title}`;
        })
        const msg=new Discord.MessageEmbed()
            .setColor('#FFA500')
            .addFields(
                tracks?.map((hi,i) =>{
                    const hh= {name : i+1,value:hi}
                    return hh;
                })
            )
        return message.channel.send(msg).catch(err=>{
            console.log('Err',err.message);
            message.reply(`Reason : ${err.message}`)
        });

    }
}