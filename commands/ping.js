module.exports={
    name : 'ping',
    discription : 'My bot ping status',
    usage : "!ping",
    execute(message,args){
        message.channel.send('Pinging...').then(sent => {
            sent.edit(`Roundtrip latency: ${sent.createdTimestamp - message.createdTimestamp}ms`);
            sent.react('🤖');
        });
    }
}