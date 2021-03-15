const ytdl = require('ytdl-core-discord');

module.exports={
    name : 'play',
    discription : 'play the perticular song in your voice channel',
    usage : "!play <link>",
    aliases:["p"],
    execute : async (message,args,client)=>{
        if (!message.member.voice.channel) {
            return message.reply(`You Have to be in the voice channel to use this command !`);
       }

       if(!args){
        return message.reply(`You Have to provide song link!`);
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
          return client.player.play(message,args.join(' '),true).catch(err=>{
            console.log('Err',err.message);
            message.reply(`Reason : ${err.message}`)
        });
    }
}