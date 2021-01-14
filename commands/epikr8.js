module.exports = {
    name: 'epikr8',
    description: 'Shows how epik you are!',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if(!question) return message.reply('You need to specify a user!.');
        else {
            let answers = [
            '69%',
            '90%',
            '99%',
            '70%',
            '100%!!',
            '89%'
        ];
            let response = answers[Math.floor(Math.random() * answers.length)];

            let embed = new Discord.MessageEmbed()
                .setTitle('EPIKR8')
                .setColor('#0000ff')
                .setThumbnail(message.author.avatarURL())
                .addField('You are: ', response);
            message.channel.send(embed);
        }
    }
}; 
