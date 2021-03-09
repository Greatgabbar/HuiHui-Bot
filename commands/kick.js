module.exports={
    name : 'kick',
    discription : 'Kick the user u mention',
    usage : "!kick <user>",
    execute(message,args){
        const taggedUser=message.mentions.users.first();
        console.log(taggedUser);
        message.channel.send(`You Are trying to kick ${taggedUser.username}`);
    }
}