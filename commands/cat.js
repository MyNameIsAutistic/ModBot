const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["cats"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random)

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`Here's a cat from subreddit r/${random}!`)
    .setURL(`http://reddit.com/r/${random}`)
    .setColor('RED')
    message.channel.send(embed);
}

module.exports.config = {
    name: "cat",
    description: "fun cats!",
    usage: "+cat",
    accessableby: "Members",
    aliases: []
} 