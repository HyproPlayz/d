module.exports = {
    name: 'kick',
    description: 'ban',
    execute(message, args) {
        const member = message.mentions.users.first();
        if (member) {
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send('User has been kicked.');
        } else {
            message.channel.send('You couldnt kicked that user!');
        }
    }
}