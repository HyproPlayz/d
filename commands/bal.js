const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: 'bal',
    description: 'msdddda',
    aliases:['balance'],
    execute(message, args) {
        if (db.get(`user_${message.author.id}.bal`) === null) {
            message.reply('You need to create an account using -start first')
        }
        let user = message.mentions.users.first();
        if(user){
            db.get(`user_${user.id}.bal`);
            let bal = db.get(`user_${user.id}.bal`);
            let balembed = new Discord.MessageEmbed()
                .setTitle(`${user.username}s Balance`)
                .setDescription(`${bal} epik coins`)
                .setThumbnail('https://coinsandsteel.com/images/assets/png/coin@1x.png')
                .setColor('BLUE')
                .setTimestamp()
            message.channel.send(balembed)
        }
        else {
            let bal = db.get(`user_${message.author.id}.bal`);
            let embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username}s Balance`)
                .setDescription(`${bal} epik coins`)
                .setThumbnail('https://coinsandsteel.com/images/assets/png/coin@1x.png')
                .setColor('BLUE')
                .setTimestamp()
            message.channel.send(embed)
        }
    }
}