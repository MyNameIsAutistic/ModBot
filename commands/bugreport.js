const Discord = require("discord.js") 
const { Command } = require("discord.js-commando") 
exports.run = async(bot, message, args) =>{
  const args1 = args.join(" ");
  const mainGuild = bot.guilds.cache.find(guild => guild.name === "ModBot Support")
  const messageGuild = message.guild
  const messageChannel = message.channel
    
  const sChannel = mainGuild.channels.cache.find(channel => channel.name === "bug-reports");
   messageChannel.send("Your bug report has been submitted for review.")
    const suggestembed = new Discord.MessageEmbed()
      .setFooter("Bug Report")
      .setTimestamp()
      .setTitle(`Bug Report by:\n${message.author.tag}`)
      .setThumbnail(`${message.author.avatarURL({format: 'png', dynamic: true})}`)
      .setDescription(`**Bug Report**:\n${args1}`)
      .setColor('PURPLE');
    sChannel.send(suggestembed)
}  
  module.exports.config = {
    name: "bugreport",
    description: "Report a bug.",
    usage: "+bugreport",
    accessableby: "Members",
    aliases: []
} 