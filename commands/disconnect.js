require('dotenv').config();
const prefix=process.env.prefix;

module.exports={
    name : 'disconnect',
    discription : 'Disconnect from the voice channel',
    usage : "!disconnect , !dc",
    aliases:["dc"],
    execute(message,args){
       
    }
}