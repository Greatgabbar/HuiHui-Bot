const Discord = require("discord.js");
const User = require("../modals/user");

module.exports={
    name : 'removeplaylist',
    discription : 'Remove The Playlist',
    usage : `${prefix}removeplaylist/rp <playlist name>`,
    aliases:["rp"],
    execute(message,args){
        if(args.length < 1){
            return message.reply(`Command usage ${this.usage}`);
        }
    User.findOne({id : message.author.id}).then((data)=>{
        if(!data){
           const msg={
                color : '#FFA500',
                title : `You dont Have Any Playlist Saved!!`
            };
            return message.channel.send({embed : msg}).then(data=>{
                return data.react(`👍`);
            });
        }else{
            let i;
            for(i=0;i<data.playlist.length;i++){
                if(data.playlist[i].name===args[0]){
                    break;
                }
            }
            if(data.playlist.length===i){
                const msg={
                    color : '#FFA500',
                    title : `Enter The Correct name`
                };
                return message.channel.send({embed : msg}).then(data=>{
                    return data.react(`👍`);
                });
            }else{
                data.playlist.splice(i,1);
                console.log(data.playlist);
                data.save().then(()=>{
                    const msg={
                        color : '#FFA500',
                        title : `${args[0]} deleted`
                    };
                    return message.channel.send({embed : msg}).then(data=>{
                        return data.react(`👍`);
                    });
                });
            }
        }
    }).catch((errr)=>{
        console.log(errr);
    })
    }
}