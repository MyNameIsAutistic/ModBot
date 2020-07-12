exports.run = async(bot, message, args) =>{
  if(message.author.bot) return;
message.channel.send("UwU");
}

module.exports.config = {
    name: "face",
    description: "OwO",
    usage: "+face",
    accessableby: "Members",
    aliases: []
} 