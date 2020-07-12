exports.run = async(bot, message, args) =>{
const { MessageEmbed } = require('discord.js')
const e = new MessageEmbed()
.setColor('PURPLE')
.setTitle('Privacy Policy')
.setDescription('We do not collect any data from our users, besides your username and tag. We store your username and tag as it is our only way to identify a user and do things like Direct Message a certain user when a command is ran. If you are uncomfortable with us storing your name and tag, please Direct Message "Coop#3058" to remove your name and tag from our databases.')
message.channel.send (e)
}

module.exports.config = {
    name: "privacy",
    description: "Shows the privacy policy.",
    usage: "+privacy",
    accessableby: "Members",
    aliases: []
}