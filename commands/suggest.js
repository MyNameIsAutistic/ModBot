const Discord = require("discord.js") 
const { Command } = require("discord.js-commando") 
exports.run = async(bot, message, args) =>{
  const args1 = args.join(" ");
    
  const sChannel = message.guild.channels.cache.find(channel => channel.name === "suggestions");
      if(!sChannel) {
        return message.channel.send("You don't have a channel with name `suggestions`") 
      }  
    message.channel.send("Your suggestion has been submitted.")
    const suggestembed = new Discord.MessageEmbed()
      .setFooter("Yes or no? It's your choice.")
      .setTimestamp()
      .setTitle(`Suggested by:\n${message.author.tag}`)
      .setThumbnail(`${message.author.avatarURL({format: 'png', dynamic: true})}`)
      .setDescription(`**Suggestion**:\n${args1}`)
      .setColor('PURPLE');
    sChannel.send(suggestembed).then(async msg => {
      await msg.react("✅");
      await msg.react("❌"); 
      });
    }
  module.exports.config = {
    name: "suggest",
    description: "Suggest something.",
    usage: "+suggest",
    accessableby: "Members",
    aliases: []
} 