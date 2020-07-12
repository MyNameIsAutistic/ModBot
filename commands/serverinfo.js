exports.run = async(bot, message, args) =>{
const discord = require('discord.js')
const e = new discord.MessageEmbed()
.setColor("RANDOM")
.addField("Total Members",[`${message.guild.members.cache.size}`],true)
.addField("                              Guild ID",[`${message.guild.id}`],true)
.addField("                              Server Name",[`${message.guild.name}`],true)
.addField("\nTotal Bots",[`${message.guild.members.cache.filter(member => !member.user.bot).size}`],true)
.addField("                               Roles Count",[`This server has ${message.guild.roles.cache.size} roles`],true)
.addField("Emoji Count",[`This server has ${message.guild.emojis.cache.size} emojis`],true)
.setImage(message.guild.iconURL())
.setAuthor(`${message.author.tag}`, message.author.avatarURL())
message.channel.send(e)
}

  module.exports.config = {
    name: "serverinfo",
    description: "Shows server info.",
    usage: "+serverinfo",
    accessableby: "Members",
    aliases: []
} 