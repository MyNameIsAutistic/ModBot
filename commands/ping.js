exports.run = async (client, message, args) => {
 const Discord = require('discord.js')
  if(message.author.bot) return;
        message.channel.send("Pinging...").then(m =>{
            var ping = m.createdTimestamp - message.createdTimestamp;

            var embed = new Discord.MessageEmbed()
            .setTitle(`🏓 Pong!`)
            .setDescription(`The bot's ping is ${ping} ms.`)
            .setColor("RANDOM")

            m.delete()
            message.channel.send(embed)
        });
    }

module.exports.config = {
    name: "ping",
    description: "Gives you the bot ping.",
    usage: "+ping",
    accessableby: "Members",
    aliases: []
} 