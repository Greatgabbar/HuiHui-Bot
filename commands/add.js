const Discord = require("discord.js");
const User = require("../modals/user");

module.exports={
    name : 'add',
    discription : 'Sets currently playing music duration',
    usage : "!add/a <name> <link>",
    execute(message,args){
        if (!message.member.voice.channel) {
            return message.reply(`You Have to be in the voice channel to use this command !`);
       }

    if(!message.guild.me.voice.channel){
        return message.reply(`I am not in any Voice channel use !play to invite me!`);
    }
    if(!args.length){
        return message.reply(`Command usage ${this.usage}`);
    }
    const track=message.client.player.nowPlaying(message);
    User.findOne({id : track.requestedBy.id}).then((data)=>{
        if(data){
            data.playlist.push({name : args[0] ,link: args[1]});
            return data.save().then((gg)=>{
            const msg=new Discord.MessageEmbed()
            .setColor('#FFA500')
            .setTitle(`Playlist Saved SuccessFully`)
                return message.channel.send(msg).then(data=>{
                    return data.react(`👍`);
                });
            })
        }
        const playlist=[];
        playlist.push({
            name : args[0] ,
            link: args[1]
        });
        const user=new User({
            name : message.author.username,
            id : message.author.id,
           playlist : playlist 
        })
        user.save().then((gg)=>{
            const msg=new Discord.MessageEmbed()
            .setColor('#FFA500')
            .setTitle(`Playlist Saved SuccessFully`)
                return message.channel.send(msg).then(data=>{
                    return data.react(`👍`);
                });
            })
    })
    }
}