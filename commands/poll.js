exports.run = async(bot, message, args) =>{
  const { MessageEmbed } = require('discord.js')
  const text = args.join(" ")
  const channel = message.guild.channels.cache.find(channel => channel.name == "polls")
if(!channel) {
message.channel.send("There must be a channel called polls to use this command!")
}
if(!text) {
  message.channel.send("You need to say text for me to put in a poll!")
}
const e = new MessageEmbed()
.setColor("RANDOM")
.setTitle(`New poll from ${message.member.user.tag}!`)
.setDescription(`The poll is: ${text}`)
.setFooter("Vote yes or no!")
message.channel.send("Poll created!")
const eSent = channel.send(e).then(async msg => {
      await msg.react("✅");
      await msg.react("❌"); 
      })
}

module.exports.config = {
    name: "poll",
    description: "Makes a poll.",
    usage: "+poll",
    accessableby: "Members",
    aliases: []
} 