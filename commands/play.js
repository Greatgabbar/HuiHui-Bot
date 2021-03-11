const ytdl = require('ytdl-core-discord');

module.exports={
    name : 'play',
    discription : 'play the perticular source in your voice channel',
    usage : "!play <link>",
    execute : async (message,args)=>{
        if (!message.member.voice.channel) {
            return message.reply(`You Have to be in the voice channel to use this command !`);
       }
       if(!args){
        return message.reply(`You Have to provide song link!`);
       }
       console.log(args);
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play(await ytdl(`${args}`), { type : 'opus' });
        dispatcher.on('start',()=>{
            console.log('Audio playing Started');
        });

        dispatcher.on('finish',()=>{
            dispatcher.destroy();
            console.log('Audio Stoppped');
            connection.close();
        })
        
        dispatcher.on('error',console.error);
    }
}