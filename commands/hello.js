exports.run = async(bot, message, args) =>{
  if(message.author.bot) return;
message.channel.send("Hello! I am ModBot Premium. \n Type +help for my commands!");
}

module.exports.config = {
    name: "hello",
    description: "see for urself ;D",
    usage: "+hello",
    accessableby: "Members",
    aliases: []
} 