module.exports={
    name : 'avatar',
    discription : 'Show the avatar of tagged users',
    execute(message,args){
        if (!message.mentions.users.size) {
            message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
            return;
        }
        const tagList=message.mentions.users.map((data)=>{
            return `Avatar : ${data.displayAvatarURL({format:'png',dynamic:true})}`
        })
        message.channel.send(tagList);
    }
}