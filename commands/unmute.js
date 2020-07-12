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
  if(!user.roles.cache.find(role => role.name === "Muted")) {
    return message.reply("That user is not muted!");
  }
  user.roles.remove(role1)
  const e = new MessageEmbed()
  .setColor("GREEN")
  .addField("User Unmuted",[`${user.user.tag}`],true)
  .addField("Moderator",[`${message.author}`],true).setTimestamp()
  .setFooter("Details of Unmute")
  message.channel.send(e)
  message.reply('Those are the details of the unmute.')
}

  module.exports.config = {
    name: "unmute",
    description: "Unmute someone.",
    usage: "+unmute",
    accessableby: "Members",
    aliases: []
} 