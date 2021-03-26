const ytdl = require('ytdl-core-discord');
const User = require('../modals/user');
require('dotenv').config();
const prefix = process.env.prefix;
module.exports={
    name : 'playplaylist',
    discription : 'play the perticular saved playplaylist in your voice channel',
    usage : `${prefix}playplaylist/pp <playlist name>`,
    aliases:["pp"],
    execute : async (message,args)=>{
        if (!message.member.voice.channel) {
            return message.reply(`You Have to be in the voice channel to use this command !`);
       }

       if(!args){
        return message.reply(`You Have to provide correct name of playlist!`);
       }
    //    const voiceChannel= await message.member.voice.channel;
    //    const connection= await voiceChannel.join();
    //    await console.log(message.client.voice.connections);
    //     const dispatcher = connection.play(await ytdl(`${args}`), { type : 'opus' });
    //     // const dispatcher=connection.play(`${args}`);
    //     dispatcher.on('start',()=>{
    //         console.log('Audio playing Started');
    //     });

    //     dispatcher.on('finish',()=>{
    //         dispatcher.destroy();
    //         console.log('Audio Stoppped');
    //         connection.disconnect();
    //     })
        
    //     dispatcher.on('error',console.error);
    User.findOne({id : message.author.id}).then(data=>{
        if(data){
            const arr=data.playlist.filter(gg=>gg.name===args[0]);
            console.log(arr);
            if(!arr.length){
                console.log(1);
                const msg={
                    color : '#FFA500',
                    title : `Please Enter the correct Name !`
                }; 
                return message.reply({embed : msg}).then(data=>{
                    return data.react(`👍`);
                });
            }
            console.log(2);
            return message.client.player.play(message,arr[0].link,true);
        }else{
            const msg={
                color : '#FFA500',
                title : `You dont Have Any Playlist Saved!!`
            };
            return message.channel.send({embed : msg}).then(data=>{
                return data.react(`👍`);
            }).catch(err=>{
                console.log('Err',err.message);
                message.reply(`Reason : ${err.message}`)
            });
        }
    }).catch(err=>{
        console.log(err);
    })
    }
}