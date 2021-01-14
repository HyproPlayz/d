module.exports = {
    name: 'danganronpa',
    description: 'shows a dangan character',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if(!question){
            let answers = [
                'https://i.pinimg.com/originals/6c/71/65/6c7165d8d518baf50a8cf188b9776766.jpg',
                'https://i.pinimg.com/originals/52/71/d8/5271d8d46896636b26e93c064bed701e.gif',
                'https://data.whicdn.com/images/341597259/original.jpg',
                'https://www.anime-planet.com/images/characters/hajime-hinata-56010.jpg?t=1468902805',
                'https://pm1.narvii.com/6990/8dcfe0bdbc5a66a75072df73ea852aa1bb793950r1-318-500v2_00.jpg',
                'https://i.pinimg.com/736x/ac/45/14/ac4514ae78fd03bfb9b44fd70ad3a08a.jpg',
                'https://i.pinimg.com/originals/c4/8b/d6/c48bd6f784b148fce671316851639b27.jpg',
                'https://static.wikia.nocookie.net/danganronpa/images/3/39/Danganronpa_V3_CG_-_Kaede_Akamatsu_reading_the_Monopad.png/revision/latest/scale-to-width-down/340?cb=20180313092904',
                'https://i.ytimg.com/vi/aYIYEEl6NFM/maxresdefault.jpg'
        ];
            let response = answers[Math.floor(Math.random() * answers.length)];
            message.channel.send(`${message.author.username}, Heres your Danganronpa character!`)
            message.channel.send(response)
        }
    }
}; 
