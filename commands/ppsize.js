exports.run = async(bot, message, args) =>{
  const { MessageEmbed } = require('discord.js')
  const size = ["=", "==", "===", "====", "=====", "======", "=======", "========", "========="]
  const random = size[Math.floor(Math.random() * size.length)];
  const e = new MessageEmbed()
  .setColor("PINK")
  .setTitle("Your PP Size")
  .setDescription(`8${random}D`)
  .setFooter("PP Size Machine")
  .setTimestamp()
  message.channel.send(e)
}

module.exports.config = {
    name: "ppsize",
    description: "Shows your ppsize.",
    usage: "+ppsize",
    accessableby: "Members",
    aliases: []
}