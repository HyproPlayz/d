module.exports = {
    name: 'dog',
    description: 'Random dog image!',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if(!question){
            let answers = [
                'https://www.rd.com/wp-content/uploads/2019/01/shutterstock_673465372.jpg',
                'https://i.pinimg.com/736x/ae/c4/53/aec453161b2f33ffc6219d8a758307a9.jpg',
                'https://i.pinimg.com/originals/f9/00/33/f90033e42c74825a591c36fc49077e15.jpg',
                'https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV5llqLXAM3vC95Xsw32gu5AcdlGIzK7L0QA&usqp=CAU',
                'https://i.pinimg.com/originals/4e/10/80/4e10808a0b59997d74fe33df89239c8c.jpg',
                'https://p.favim.com/orig/2018/08/14/cuties-cute-dog-cute-animals-Favim.com-6160332.jpg',
                'https://www.rover.com/blog/wp-content/uploads/2015/09/teddy-bear-dog-960x540.jpg',
        ];
            let response = answers[Math.floor(Math.random() * answers.length)];
            message.channel.send(`${message.author.username}, Heres your dog pic!`)
            message.channel.send(response)
        }
    }
}; 
