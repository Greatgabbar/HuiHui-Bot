module.exports={
    name : 'kick',
    discription : 'Kick the user u mention',
    usage : `${prefix}kick <user>`,
    execute(message,args){
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        const taggedUser=message.mentions.users.first();
        console.log(taggedUser);
        message.channel.send(`You Are trying to kick ${taggedUser.username}`).catch(err=>{
            console.log('Err',err.message);
            message.reply(`Reason : ${err.message}`)
        });
    }
}