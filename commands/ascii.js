exports.run = async(bot, message, args) =>{
const figlet = require('figlet');
        if(!args[0]) return message.channel.send('Please provide some text');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Please provide text shorter than 2000 characters')

            message.channel.send('```' + data + '```')
        })
    }

module.exports.config = {
    name: "ascii",
    description: "Makes ASCII text.",
    usage: "+ascii",
    accessableby: "Members",
    aliases: []
} 