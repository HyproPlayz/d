module.exports = {
    name: 'scan',
    description: 'IMPOSTOR?',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if (!question) return message.reply('Who are you talking about? ping someone after the command');
        else {
            let answers = [
                'An impostor!',
                'crewmate'
            ];
            let response = answers[Math.floor(Math.random() * answers.length)];

            let embed = new Discord.MessageEmbed()
                .setTitle('ARE YOU AN IMPOSTOR OR CREWMATE?')
                .setColor('#551177')
                .setThumbnail(message.author.avatarURL())
                .addField(`SCAN REQUESTED BY ${message.author.username}`, ':D')
                .addField('You are: ', response);
            message.channel.send(embed);
        }
    }
}; 
