const Discord = require("discord.js");
require('dotenv').config();
const prefix = process.env.prefix;
module.exports={
    name : 'nowplaying',
    discription : 'status of Currently playing song',
    usage : `${prefix}nowplaying or !np`,
    aliases:["np"],
    execute(message,args){
        if (!message.member.voice.channel) {
            return message.reply(`You Have to be in the voice channel to use this command !`);
       }
    if(!message.guild.me.voice.channel){
        return message.reply(`I am not in any Voice channel use !play to invite me!`);
    }
    const track = message.client.player.nowPlaying(message);
    const filters = [];
    Object.keys(message.client.player.getQueue(message).filters).forEach((filterName) => message.client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: track.title },
            fields: [
                { name: 'Channel', value: track.author, inline: true },
                { name: 'Requested by', value: track.requestedBy.username, inline: true },
                { name: 'From playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                { name: 'Views', value: track.views, inline: true },
                { name: 'Duration', value: track.duration, inline: true },
                // { name: 'Filters activated', value: filters.length + '/' + message.client.filters.length, inline: true },

                { name: 'Volume', value: message.client.player.getQueue(message).volume, inline: true },
                // { name: 'Repeat mode', value: message.client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
                // { name: 'Currently paused', value: message.client.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },

                { name: 'Progress bar', value: message.client.player.createProgressBar(message, { timecodes: true }), inline: true }
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        }
    }).catch(err=>{
        console.log('Err',err.message);
        message.reply(`Reason : ${err.message}`)
    });
}
}