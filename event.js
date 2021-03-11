const Discord = require("discord.js");

module.exports=(client)=>{
        client.player
        
        // Send a message when a track starts
        .on('trackStart', (message, track) => {
           console.log(track);
           const msg= new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`Now playing ${track.title}...`)
            .setURL(`${track.url}`)
            .setAuthor(`${track?.author}`)
            .setThumbnail(`${track.thumbnail}`)
            .setFooter(`views :- ${track.views} , Requested By : ${track.requestedBy.username}`,'https://cdn.discordapp.com/avatars/816994233557844039/c261a88ff85eee96010919fc8fe1b1e7.png')
            return message.channel.send(msg).then((data)=>{
                return data.react(`👍`);
            });
        })
        
        // Send a message when something is added to the queue
        .on('trackAdd', (message, queue, track) => message.channel.send(`${track.title} has been added to the queue!`))
        .on('playlistAdd', (message, queue, playlist) => message.channel.send(`${playlist.title} has been added to the queue (${playlist.tracks.length} songs)!`))
        
        // Send messages to format search results
        .on('searchResults', (message, query, tracks) => {
        
            const embed = new Discord.MessageEmbed()
            .setAuthor(`Here are your search results for ${query}!`)
            .setDescription(tracks.map((t, i) => `${i}. ${t.title}`))
            .setFooter('Send the number of the song you want to play!')
            message.channel.send(embed);
        
        })
        .on('searchInvalidResponse', (message, query, tracks, content, collector) => {
        
            if (content === 'cancel') {
                collector.stop()
                return message.channel.send('Search cancelled!')
            }
        
            message.channel.send(`You must send a valid number between 1 and ${tracks.length}!`)
        
        })
        .on('searchCancel', (message, query, tracks) => message.channel.send('You did not provide a valid response... Please send the command again!'))
        .on('noResults', (message, query) => message.channel.send(`No results found on YouTube for ${query}!`))
        
        // Send a message when the music is stopped
        .on('queueEnd', (message, queue) => message.channel.send('Music stopped as there is no more music in the queue!'))
        .on('channelEmpty', (message, queue) => message.channel.send('Music stopped as there is no more member in the voice channel!'))
}
