module.exports = {
    name: 'cat',
    description: 'Random cat image!',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if(!question){
            let answers = [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3EN_alD3NbpIqKADmcdvYOYsSZytzjhn1-g&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3EN_alD3NbpIqKADmcdvYOYsSZytzjhn1-g&usqp=CAU',
                'https://i.pinimg.com/originals/f3/bd/84/f3bd8497e15399201b634714ec5ed390.jpg',
                'https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg',
                'https://fsb.zobj.net/crop.php?r=DIRnAiiiyJkFkfpMsvWknlEIXkuYLfYvI-s3DG3Afrdgn54EWiIqaNqyjomP1mJo8-iAIaZo8J6kdNhqsDwLm8b90xiYYxYOirvHOlW-SCHgqgsNsidIfDxCmtJjgK5LfIQkKEU3uxI1Yv1H',
                'https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif',
                'https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg',
                'https://i.pinimg.com/564x/4b/6f/ec/4b6fec352ad65acf6c1265201432dfa1.jpg',
                'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F26%2Ftiny-white-kitten-873941684-2000.jpg',
                'https://nerdist.com/wp-content/uploads/2020/07/maxresdefault.jpg',
        ];
            let response = answers[Math.floor(Math.random() * answers.length)];
            message.channel.send(`${message.author.username}, Heres your cat pic!`)
            message.channel.send(response)
        }
    }
}; 
