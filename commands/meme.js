module.exports = {
    name: 'meme',
    description: 'shows a meme!',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if(!question) {
            let answers = [
            'https://static.thehoneycombers.com/wp-content/uploads/sites/4/2020/03/Best-funny-Coronavirus-memes-2020-Honeycombers-Bali-9.jpg',
            'https://www.secureworldexpo.com/hs-fs/hubfs/meme-password.gif?width=521&name=meme-password.gif',
            'https://img.buzzfeed.com/buzzfeed-static/static/2020-12/3/20/campaign_images/1782bce46867/33-memes-about-online-classes-that-will-make-all--2-14488-1607027587-18_dblbig.jpg?resize=1200:*',
            'https://2.bp.blogspot.com/-b1YUrXVdNk8/XqwkdV6XaKI/AAAAAAAAO8c/bWSCzgwleMofZ_yhPGgwutjxvjpjCq2KgCLcBGAsYHQ/s1600/corona.jpg',
            'https://pics.me.me/musical-ly-shuts-down-tik-tok-36882659.png',
            'https://m.buro247.sg/images/rsz_lets-see-whos-really-behind-covid-19-zoom-meme.jpg',
            'https://i.imgflip.com/31lp5p.jpg',
            'https://fourloko.com/best-memes-of-2020/images/25a.png',
            'https://i.pinimg.com/originals/30/b9/fd/30b9fd484e9838047a306556b9b0f08c.png',
            'https://media.wwltv.com/assets/WTLV/images/5c881363-09ae-4e8f-be14-2b7a6b85f70a/5c881363-09ae-4e8f-be14-2b7a6b85f70a_750x422.jpg',
            'https://i.imgflip.com/3vqyz0.jpg',
            'https://i.guim.co.uk/img/media/a48763efc6a7f237fa557100fb11aa001b2960c2/0_42_745_447/master/745.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4b735df9900efe62ab2752e6a28fafbb'
        ];
            let response = answers[Math.floor(Math.random() * answers.length)];
            message.channel.send(`${message.author.username}, Heres your meme!`)
            message.channel.send(response)
        }
    }
}; 
