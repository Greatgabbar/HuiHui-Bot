const Discord = require("discord.js");
const User = require("../modals/user");
require('dotenv').config();
const prefix = process.env.prefix;
module.exports={
    name : 'showplaylist',
    discription : 'Sets currently playing music duration',
    usage : `${prefix}showplaylist/sp`,
    aliases:["sp"],
    execute(message,args){
    User.findOne({id : message.author.id}).then((data)=>{
        let msg;
        if(!data){
            msg={
                color : '#FFA500',
                title : `You dont Have Any Playlist Saved!!`
            };
        }else{
            msg={
                color : '#FFA500',
                title : `${data.name}'s playlist`,
                fields : data.playlist.map((data,i)=>{
                    return {
                        name : data.name,
                        value : data.link
                    }
                })
            }
        }
        return message.channel.send({embed : msg}).then(data=>{
            return data.react(`👍`);
        }).catch(err=>{
            console.log('Err',err.message);
           return message.reply(`Reason : ${err.message}`)
        });
    })
    }
}