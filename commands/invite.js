exports.run = async(bot, message, args) =>{
if(message.author.bot) return;
const discord = require('discord.js')
const embed = new discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Invite')
.setDescription('So you want an invite, huh? Well, I can give you both of my invites! \n \n Bot Invite: I\'m a premium bot, you can\'t get me for free. \n \n Support Server Invite: https://discord.gg/QkzbWVh')
message.channel.send(embed)
}

module.exports.config = {
    name: "invite",
    description: "Shows the bot invite..",
    usage: "+help",
    accessableby: "Members",
    aliases: []
} 