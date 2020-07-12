
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["meme", "dankmemes", "memes", "me_irl", "dankmeme", "comedyheaven"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random)

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`Here's a meme from subreddit r/${random}!`)
    .setURL(`http://reddit.com/r/${random}`)
    .setColor('RED')

    message.channel.send(embed);
}

module.exports.config = {
    name: "meme",
    description: "fun!",
    usage: "+meme",
    accessableby: "Members",
    aliases: []
} 