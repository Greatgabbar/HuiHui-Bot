const ytdl = require('ytdl-core-discord');

module.exports={
    name : 'play',
    discription : 'play the perticular source in your voice channel',
    usage : "!play <link>",
    aliases:["p"],
    execute : async (message,args)=>{
        if (!message.member.voice.channel) {
            return message.reply(`You Have to be in the voice channel to use this command !`);
       }

       if(!args){
        return message.reply(`You Have to provide song link!`);
       }
       console.log(args);
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
            message.client.player.play(message,args.join(' '),true);
    }
}