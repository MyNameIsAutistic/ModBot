exports.run = async(bot, message, args) =>{
if(message.author.bot)
return;
 const sayMessage = args.join(" ");
    message.delete();
    message.channel.send(sayMessage)
}

  module.exports.config = {
    name: "say",
    description: "Makes the bot say something.",
    usage: "+say",
    accessableby: "Members",
    aliases: []
} 