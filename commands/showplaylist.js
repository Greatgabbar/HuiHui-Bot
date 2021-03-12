const Discord = require("discord.js");
const User = require("../modals/user");

module.exports={
    name : 'showplaylist',
    discription : 'Sets currently playing music duration',
    usage : "!showplaylist/sp",
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
        });
    })
    }
}