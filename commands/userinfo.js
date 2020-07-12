exports.run = async(bot, message, args) =>{
  const member = message.mentions.users.first()
  if(!member)return message.channel.send(`Please mention a user!`);
  else {
const discord = require("discord.js")
const user = member.user
const e = new discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${message.author.tag}`, message.author.avatarURL())
.setImage(member.avatarURL())
.setFooter("Note: All timestamps are in GMT+0000 (Coordinated Universal Time). To show it for your timezone, search the timestamp with the word \'gmt+0000\' after it.")
.addField("UserID",[`${member.id}`],true)
.addField("                              Username and Tag",[`${member.tag}`],true)
.addField("                                                            Account Creation Date",[`${member.createdAt}`],true)
message.channel.send(e)
}};
  module.exports.config = {
    name: "userinfo",
    description: "Shows info about your account.",
    usage: "+userinfo",
    accessableby: "Members",
    aliases: []
} 