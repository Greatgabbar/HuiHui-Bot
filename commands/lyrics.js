const ytdl = require('ytdl-core-discord');
const fetch= require('node-fetch');
const findlyrics=require('../util/lyrics');
const { split } = require('ffmpeg-static');
require('dotenv').config();
const prefix = process.env.prefix;
module.exports={
    name : 'lyrics',
    discription : 'send the lyrics of current playing song',
    usage : `${prefix}lyrics`,
    aliases:["l"],
    execute : async (message,args)=>{
        if (!message.member.voice.channel) {
            return message.reply(`You Have to be in the voice channel to use this command !`);
       }
       const track=message.client.player.nowPlaying(message);
       const lyrics=await findlyrics(track.title);
           if(lyrics===null){
               const msg={
                   color: "#FFA500",
                   title : "Lyrics Not found"
               }
               return message.channel.send({embed : msg});
           }
        //    const msg={
        //     color: "#FFA500",
        //     title : "Lyrics Not found",
        //     discription : lyrics
        // }
          return await message.channel.send(lyrics,{split:true}).then((ms)=>{
               ms.react('🧑‍🎤');
           }).catch((err)=>{
               console.log(err);
               return message.reply(`There is sme error in executing this command`);
           });
    }
}