module.exports={
    name : 'pause',
    discription : 'To pause the music',
    usage : "!pause",
    execute(message,args){
        if (!message.member.voice.channel) {
            return message.reply(`You Have to be in the voice channel to use this command !`);
       }
    if(!message.guild.me.voice.channel){
        return message.reply(`I am not in any Voice channel use !play to invite me!`);
    }
        const check=message.client.player.pause(message);
        check ? message.channel.send(`Pause Successfully!`).then(data=>{
            return data.react(`👍`);
        }) : message.channel.send(`There is a problem in Pausing the music`).then(data=>{
            return data.react(`👎`);
        }).catch(err=>{
            console.log('Err',err.message);
            message.reply(`Reason : ${err.message}`)
        });
    }
}