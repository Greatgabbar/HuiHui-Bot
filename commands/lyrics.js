const ytdl = require('ytdl-core-discord');
const fetch= require('node-fetch');
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
       console.log(track);
       fetch(`https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?apikey=${key}&q_track=${track.title}&q_artist=${track.author}`)
       .then(res=>res.json())
       .then(data=>{
           console.log(data);
           if(data.message.header.status_code===404){
               const msg={
                   color: "#FFA500",
                   title : "Lyrics Not found"
               }
               return message.channel.send({embed : msg});
           }
           const msg={
               color : '#FFA500',
               title: "lyrics",
               description: data.message.body.lyrics.lyrics_body,
           }
           return message.channel.send({embed : msg});
       }).catch(err=>{
           console.log(err);
       })
    }
}