const Discord = require('discord.js')

const bot = new Discord.Client();


const db = require('quick.db')

const fs = require('fs');

const cooldown = new Set();

const prefix = '-';

const { CanvasSenpai } = require("canvas-senpai")

const canva = new CanvasSenpai();

const ms = require('parse-ms')

bot.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command)
}



bot.login("Nzg5ODM3MTQyMjEzNjU2NjMw.X933KQ.hX4pfniBFRH2MXnvZnIdp1M9Iz0")

bot.once('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.user.setActivity(`${bot.guilds.cache.size} Servers`, {
        type: "WATCHING",
        url: "https://www.twitch.tv/hyprosucks"
    });
});

bot.on('guildMemberAdd', async member => {
    let welcomeRole = member.guild.roles.cache.find(role => role.name === 'member');
 
    member.roles.add(welcomeRole);
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    if (!channel) return;
 
   let data = await canva.welcome(member, { link: "https://i.pinimg.com/originals/4c/8e/26/4c8e267ee4446e733bb17564337083f7.jpg",blur:true })
 
    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
 
    channel.send(
      `Welcome to the server, ${member.user.username}!,Hope you become a good member!`,
      attachment
    );   
   });
bot.on("message", async message => {
    if (!message.guild) return;
    if (message.author.bot) return;



    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();



    if (message.content.startsWith(`${prefix}hypro`)) {
        message.channel.send('is epik')
    } else if (message.content.startsWith(`${prefix}youtube`)) {
        message.channel.send('https://www.youtube.com/channel/UCXAR-8KK45nCHxgYQBYjjEw?view_as=subscriber%27');
    } else if (message.content.startsWith(`${prefix}pinkray`)) {
        message.channel.send('is the dumbest shes making hunt command lmao');
    } else if (command === 'epikest') {
        message.channel.send('Hypro obviously :D')
    } else if (command === 'hypro') {
        message.channel.send('is epik')
    } else if (command === 'pinkray') {
        message.channel.send('is the dumbest')
    } else if (command === 'navy') {
        message.channel.send('isnt that the kpop addict your talking about? ')
    } else if (command === 'nm') {
        message.channel.send('haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    } else if (command === 'kick') {
        bot.commands.get('kick').execute(message, args)
    } else if (command === 'fury') {
        message.channel.send('696969696969699696969699696969696969 IQ Among Us player')
    } else if (command === 'galaxymistissmart') {
        message.channel.send('Why u cappin?')
    } else if (command === 'adi') {
        message.channel.send('IF U DONT PLAY MINECRAFT RN I WILL GO DIE SO U BETTER PLAY')
    } else if (command === 'sparklinghero') {
        message.channel.send('im pro')
    } else if (command === 'furyyt') {
        message.channel.send('https://www.youtube.com/channel/UCiTXSSJ3CgBXoOAETRB2FyA%27')
    } else if (command === 'rtk') {
        message.channel.send('for some reason he likes to say boooooooooooooooooooooooooooo!!!!!')
    } else if (command === 'hajime') {
        message.channel.send('K  I  N  D')
    } else if (command === 'mumamiadopted') {
        message.channel.send('Yeah')
        message.channel.send('You:Oh')
    } else if (message.content.startsWith(`${prefix}8ball`)) {
        bot.commands.get('8ball').execute(message, args)
    } else if (message.content.startsWith(`${prefix}epikr8`)) {
        bot.commands.get('epikr8').execute(message, args)
    } else if (command === 'commands') {
        bot.commands.get('commands').execute(message, args)
    } else if (command === 'addbot') {
        message.channel.send('https://epikbot.mobirisesite.com/')
    } else if (command === 'dumb') {
        message.channel.send('more like GalaxyMist lol :smirk:')
    } else if (command === 'vote') {
        message.channel.send('VOTE : https://discordbotlist.com/bots/epikbot/upvote')
        message.channel.send('BOT WEBSITE : https://epikbot.mobirisesite.com/')
        message.channel.send('ADD BOT: https://discord.com/oauth2/authorize?client_id=789837142213656630&scope=bot&permissions=2147483647')
        message.channel.send('OFFICIAL SERVER:https://discord.gg/MaqPUQMCsE')
    } else if (message.content.startsWith(`${prefix}scan`)) {
        bot.commands.get('scan').execute(message, args)
    } else if (message.content.startsWith(`${prefix}emoji`)) {
        bot.commands.get('emoji').execute(message, args)
    } else if (command === 'requestcommandsrules') {
        message.channel.send('no general chat in this channel!')
    } else if (message.content.startsWith(`${prefix}beg`)) {
        bot.commands.get('beg').execute(message, args)
    } else if (message.content.startsWith(`${prefix}cat`)) {
        bot.commands.get('cat').execute(message, args)
    } else if (message.content.startsWith(`${prefix}meme`)) {
        bot.commands.get('meme').execute(message, args)
    } else if (message.content.startsWith(`${prefix}animepfp`)) {
        bot.commands.get('animepfp').execute(message, args)
    } else if (message.content.startsWith(`${prefix}freddy`)) {
        message.channel.send('Freddy: i like ya cut g')
    } else if (message.content.startsWith(`${prefix}dog`)) {
        bot.commands.get('dog').execute(message, args)
    } else if (message.content.startsWith(`${prefix}danganronpa`)) {
        bot.commands.get('danganronpa').execute(message, args)
    } else if (message.content.startsWith(`${prefix}say`)) {
        const args = message.content.slice(4).split(" ")
        const saymessage = args.join(" ")
        message.channel.send(saymessage)
        message.delete().catch(O => { })
    } else if (command === 'joshgamer') {
        message.channel.send('is noob')
    } else if (message.content.startsWith(`${prefix}userinfo`)) {
        bot.commands.get('userinfo').execute(message, args)
    } else if (message.content.startsWith(`${prefix}serverinfo`)) {
        bot.commands.get('serverinfo').execute(message, args)
    } else if (message.content.startsWith(`${prefix}botstats`)) {
        let botembed = new Discord.MessageEmbed()
            .setTitle(message.author.username, message.author.avatarURL)
            .setDescription('Heres some info about this bot!')
            .setColor('RANDOM')
            .setThumbnail(bot.user.avatarURL)
            .addField('Username', bot.user.username)
            .addField('ID', bot.user.id)
            .addField('Discriminator', bot.user.discriminator)
            .addField('Created At', bot.user.createdAt)
            .setFooter(`executed in ${message.guild.name}`, message.guild.iconURL)
        message.channel.send(botembed)
    } else if (message.content.startsWith(`${prefix}mute`)) {
        const target = message.mentions.users.first();
        if (target) {
            const ms = require('ms');
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
            let memberTarget = message.guild.members.cache.get(target.id);
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('Couldnt find that user!');
        }
    } else if (message.content.startsWith(`${prefix}unmute`)) {
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
            let memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.roles.remove(muteRole.id)
            memberTarget.roles.add(mainRole.id)
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else {
            message.channel.send('Couldnt find that user!');
        }
    } else if (message.content.startsWith(`${prefix}kick`)) {
        message.react('✅');
        bot.commands.get('kick').execute(message, args)
    } else if (message.content.startsWith(`${prefix}ban`)) {
        message.react('✅');
        bot.commands.get('ban').execute(message, args)
    } else if (message.content.startsWith(`${prefix}purge`)) {
        message.react('✅');
        bot.commands.get('purge').execute(message, args)
    } else if (message.content.startsWith(`${prefix}hunt`)) {
        bot.commands.get('hunt').execute(message, args)
    } else if (message.content.startsWith(`${prefix}bal`)) {
        bot.commands.get('bal').execute(message, args)
    } else if (message.content.startsWith(`${prefix}start`)) {
        bot.commands.get('start').execute(message, args)
    } else if (message.content.startsWith(`${prefix}heist`)) {
        bot.commands.get('heist').execute(message, args)
    } else if (message.content.startsWith(`${prefix}buy`)) {
        bot.commands.get('buy').execute(message, args)
    } else if (message.content.startsWith(`${prefix}weather`)) {
        bot.commands.get('weather').execute(message, args)
    } else if (message.content.startsWith(`${prefix}attack`)) {
        bot.commands.get('attack').execute(message, args)
    } else if (message.content.startsWith(`${prefix}profile`)) {
        bot.commands.get('profile').execute(message, args)
    } else if (message.content.startsWith(`${prefix}rob`)) {
        let user = message.mentions.users.first()
        let userbal = await db.fetch(`user_${user.id}.bal`)
        let testChance = Math.random() * 100;
        let random = Math.floor(Math.random() * (1000 - 500) + 900)
        if (userbal === null) {
            return message.channel.send('Person you tried to rob didnt create an account using -start')
        }
        else if (userbal < 10000) {
            return message.channel.send('That person has to have atleast 5000 epik coins to rob.')
        }
        else {
            if ((testChance -= 50) < 0) {
                message.channel.send(`**${message.author.username}** BRUH YOU GOT CAUGHT HAHA THATS ${random} EPIK COINS TAKEN FROM YOU 😂`);
                db.add(`user_${user.id}.bal`, random);
                db.subtract(`user_${message.author.id}.bal`, random);
            } else {
                message.channel.send(`${message.author.username} you robbed ${user.username} and got away with ${random} epik coins!🤑`);
                db.subtract(`user_${user.id}.bal`, random);
                db.add(`user_${message.author.id}.bal`, random);
            }
        }
    } else if (message.content.startsWith(`${prefix}daily`)) {
        if (cooldown.has(`daily_${message.author.id}`)) {
            message.channel.send('You have to wait until tomorrow!')
        }
        else {
            bot.commands.get('daily').execute(message, args)
            cooldown.add(`daily_${message.author.id}`)
            setTimeout(() => {
                cooldown.delete(`daily_${message.author.id}`)
            }, 8.64e+7)
        }
    } else if (message.content.startsWith(`${prefix}hourly`)) {
        if (cooldown.has(`daily_${message.author.id}`)) {
            message.channel.send('You have to wait an hour!')
        }
        else {
            bot.commands.get('daily').execute(message, args)
            cooldown.add(`daily_${message.author.id}`)
            setTimeout(() => {
                cooldown.delete(`daily_${message.author.id}`)
            }, 3.6e+6)
        }
    } else if (message.content.startsWith(`${prefix}weekly`)) {
        if (cooldown.has(`daily_${message.author.id}`)) {
            message.channel.send('You have to wait a week!')
        }
        else {
            bot.commands.get('daily').execute(message, args)
            cooldown.add(`daily_${message.author.id}`)
            setTimeout(() => {
                cooldown.delete(`daily_${message.author.id}`)
            }, 6.048e+8)
        }
    } else if (message.content.startsWith(`${prefix}work`)) {
        bot.commands.get('work').execute(message, args)
    } else if (message.content.startsWith(`${prefix}reset`)) {
        bot.commands.get('reset').execute(message, args)
    } else if (message.content.startsWith(`${prefix}give`)) {
        let user = message.mentions.users.first();

        if (!user) return message.channel.send('You need to specify a user.')

        let yourstart = db.get(`user_${message.author.id}.bal`)

        let pingstart = db.get(`user_${user.id}.bal`)

        if (!pingstart) return message.channel.send('The user doesnt have an account by using -start')

        if (!yourstart) return message.channel.send('You dont have an account, Get an account with -start')

        if (!yourstart === message.author.id) return message.channel.send('You cant give money to yourself.')

        if (!args[1]) return message.channel.send('You need to specify how much you want to give')

        if (isNaN(args[1])) return message.channel.send('That is not a valid number!')

        if (args[1] < 0) return message.channel.send('You need to give more than 0 epik coins.')

        db.subtract(`user_${message.author.id}.bal`, args[1])

        db.add(`user_${user.id}.bal`, args[1])

        return message.channel.send(`Added **${args[1]}** to ${user.username}`)
    } else if (message.content.startsWith(`${prefix}invite`)) {
        message.channel.send('https://discord.com/oauth2/authorize?client_id=789837142213656630&scope=bot&permissions=2147483647')
    } else if (message.content.startsWith(`${prefix}server`)) {
        message.channel.send('https://discord.gg/vxB6xTVeub')
    } else if (message.content.startsWith(`${prefix}warn`)) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("You should have admin perms to use this command!")
        }

        const user = message.mentions.members.first()

        if (!user) {
            return message.channel.send("Please Mention the person to who you want to warn - warn @mention <reaosn>")
        }
        if (message.mentions.users.first().bot) {
            return message.channel.send("You can not warn bots")
        }
        if (message.author.id === user.id) {
            return message.channel.send("You can not warn yourself")
        }
        if (message.guild.owner.id === user.id) {
            return message.channel.send("You jerk, how can you the  warn server owner -_-")
        }
        const reason = args.slice(1).join(" ")

        if (!reason) {
            return message.channel.send("Please provide reason to warn - warn @mention <reason>")
        }
        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
        if (warnings === 20) {
            return message.channel.send(`${message.mentions.users.first().username} already reached his/her limit with 3 warnings`)
        }
        if (warnings === null) {
            db.set(`warnings_${message.guild.id}_${user.id}`, 1)
            user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
            await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)//DO NOT FORGET TO USE ASYNC FUNCTION
        }
        else if (warnings !== null) {
            db.add(`warnings_${message.guild.id}_${user.id}`, 1)
            user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
            await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`) 
        }
    } else if (message.content.startsWith(`${prefix}countwarn`)) {
        const user = message.mentions.members.first() || message.author
        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
        if(warnings === null) warnings = 0;
        message.channel.send(`${user} has **${warnings}** warning(s)`)
    } else if (message.content.startsWith(`${prefix}clearwarns`)) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("You should have admin perms to use this command!")
        }

        const user = message.mentions.members.first()

        if (!user) {
            return message.channel.send("Please Mention the person to who you want to warn - warn @mention <reaosn>")
        }
        if (message.mentions.users.first().bot) {
            return message.channel.send("You can not clear warns for bots")
        }
        if (message.guild.owner.id === user.id) {
            return message.channel.send("The server owner doesnt have any warns")
        }
        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
        if(warnings === null){
            message.channel.send('This person has no warns(gud boi)')
        }
        else{
            db.delete(`warnings_${message.guild.id}_${user.id}`)
            message.channel.send(`Cleared warns for ${user}`)
        }
    }
});