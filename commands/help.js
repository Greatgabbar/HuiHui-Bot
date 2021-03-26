require('dotenv').config();
const prefix=process.env.prefix;

module.exports={
    name : 'help',
    discription : 'Show all the available commanads with discription',
    usage : `${prefix}help`,
    aliases:["h"],
    execute(message,args){
        const data=[];
        const commands=message.client.commands;
        if(!args.length){
            data.push('Here\'s a list of all my commands:');
            data.push(commands.map(command => `${command.name}`).join('\n'));
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
            return message.author.send(data,{split : true}).then(()=>{
                if(message.channel.type==="dm"){
                    message.reply('I\'ve sent you a DM with list of commands!');
                }
            }).catch((err)=>{
                message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
            })
        }
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
	        return message.reply('that\'s not a valid command!');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${command.usage}`);
        console.log(`**Usage:** ${command.usage}`)

        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        message.channel.send(data, { split: true }).catch(err=>{
            console.log('Err',err.message);
            message.reply(`Reason : ${err.message}`)
        });
    }
}