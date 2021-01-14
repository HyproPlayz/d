module.exports = {
    name: 'userinfo',
    description: 'userinfo command',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");
            let userembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('USER INFO')
            .setThumbnail(message.author.avatarURL())
            .addField(`USERNAME`,`${message.author.username}`)
            .addField(`USER ID`,`${message.author.id}`)
            .addField(`USER TAG`,`${message.author.tag}`)
            message.channel.send(userembed);
    }
}; 
