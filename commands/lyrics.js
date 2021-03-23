const ytdl = require('ytdl-core-discord');
const fetch= require('node-fetch');
const findlyrics=require('../util/lyrics');
const key= process.env.KEY;
module.exports={
    name : 'lyrics',
    discription : 'send the lyrics of current playing song',
    usage : "!lyrics",
    aliases:["l"],
    execute : async (message,args)=>{
        if (!message.member.voice.channel) {
            return message.reply(`You Have to be in the voice channel to use this command !`);
       }
       const track=message.client.player.nowPlaying(message);
       const lyrics=await findlyrics(track.title);
       const arr = lyrics.match(/.{1,2048}/g); // Build the array

           if(lyrics===null){
               const msg={
                   color: "#FFA500",
                   title : "Lyrics Not found"
               }
               return message.channel.send({embed : msg});
           }
           for (let chunk of arr) { // Loop through every element
            let msg={
                color : '#FFA500',
                title: "lyrics",
                description: chunk,
            }
            await message.channel.send({ embed : msg }); // Wait for the embed to be sent
          }
    }
}