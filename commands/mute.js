exports.run = async(bot, message, args) =>{
  if(message.author.bot || !message.member.hasPermission('MUTE_MEMBERS')) {
  return message.reply("You are either a bot, or do not have sufficient permissions.");
  }
  const user = message.mentions.members.first()
  const guild = message.guild
  const role1 = guild.roles.cache.find(role => role.name === "Muted")
  const { MessageEmbed } = require('discord.js')
  if(!role1) {
    message.reply("There must be a role called Muted to use this command!")
  }
  if(user.roles.cache.find(role => role.name === "Muted")) {
    return message.reply("That user is already muted!");
  }
  user.roles.add(role1)
  const e = new MessageEmbed()
  e.setColor("RED")
  e.addField("User Muted",[`${user.user.tag}`],true)
  e.addField("Moderator",[`${message.author}`],true)
  e.setTimestamp()
  e.setFooter("Details of Mute")
  message.channel.send(e)
  message.reply('Those are the details of the mute.')
}

  module.exports.config = {
    name: "mute",
    description: "Mute someone.",
    usage: "+mute",
    accessableby: "Members",
    aliases: []
} 