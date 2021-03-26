const Discord = require("discord.js");
const User = require("../modals/user");
require('dotenv').config();
const prefix = process.env.prefix;
module.exports={
    name : 'add',
    discription : 'Sets currently playing music duration',
    usage : `${prefix}add/a <name> <link>`,
    execute(message,args){
    if(args.length <= 1){
        return message.reply(`Command usage ${this.usage}`);
    }
    User.findOne({id : message.author.id}).then((data)=>{
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
                }).catch(err=>{
                    console.log('Err',err.message);
                    message.reply(`Reason : ${err.message}`)
                });
            })
    })
    }
}