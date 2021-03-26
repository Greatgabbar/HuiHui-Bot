module.exports={
    name : 'ping',
    discription : 'My bot ping status',
    usage : `${prefix}!ping`,
    execute(message,args){
        message.channel.send('Pinging...').then(sent => {
            sent.edit(`Roundtrip latency: ${sent.createdTimestamp - message.createdTimestamp}ms`);
            sent.react('🤖');
        }).catch(err=>{
            console.log('Err',err.message);
            message.reply(`Reason : ${err.message}`)
        });
    }
}