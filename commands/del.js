module.exports={
    name : 'del',
    discription : 'Delete the message you want to enter',
    usage : "!del <amount>",
    execute(message,args){
        const amount = parseInt(args[0])+1;

	    if (isNaN(amount)) {
		    return message.reply('that doesn\'t seem to be a valid number.');
	    }
        message.channel.bulkDelete(amount,true).catch(err=>{
            console.log('Err',err.message);
            message.reply(`There Was An Error Deleing zthe Meassages Reason : ${err.message}`)
        })
    }
}