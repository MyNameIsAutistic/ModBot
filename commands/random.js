const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["discordbots", "Discord_Bots", "SwitchDestroying", "SwitchHaxxing", "SwitchHacks", "softwaregore"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random)

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`Here's a hot post from the subreddit r/${random}!`)
    .setURL(`http://reddit.com/r/${random}`)
    .setColor('RED')
    message.channel.send(embed);
}

module.exports.config = {
    name: "random",
    description: "Shows a hot post from a random subreddit.",
    usage: "+random",
    accessableby: "Members",
    aliases: []
} 