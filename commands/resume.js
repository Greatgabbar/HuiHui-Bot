require('dotenv').config();
const prefix = process.env.prefix;
module.exports={
    name : 'resume',
    discription : 'To resume the music',
    usage : `${prefix}resume`,
    execute(message,args){
        if (!message.member.voice.channel) {
            return message.reply(`You Have to be in the voice channel to use this command !`);
       }
    if(!message.guild.me.voice.channel){
        return message.reply(`I am not in any Voice channel use !play to invite me!`);
    }
        const check=message.client.player.resume(message);
        check ? message.channel.send(`Resume Successfully!`).then(data=>{
            return data.react(`👍`);
        }) : message.channel.send(`There is a problem in resuming the music`).then(data=>{
            return data.react(`👎`);
        }).catch(err=>{
            console.log('Err',err.message);
           return message.reply(`Reason : ${err.message}`)
        });
    }
}