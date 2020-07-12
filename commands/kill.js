exports.run = async(bot, message, args) =>{
  if (message.author.bot) return;
  const ways = ["stab", "gunshot", "assassin", "surgery", "identityTheft"];
  const member = message.mentions.members.first()
  const randomWay = ways[Math.floor(Math.random() * ways.length)];
  if(!member) return message.reply("You must mention someone for me to kill!")
  if(randomWay == "stab")
    message.reply(`🔪 I have stabbed ${member}!`)
  else if(randomWay == "gunshot")
    message.reply(`🔫 I have shot ${member}!`)
  else if(randomWay == "assassin")
    message.reply(`🏹 I have hired an assassin to kill ${member}!`)
  else if(randomWay == "surgery")
    message.reply(`😷 I have performed a deadly surgery with a 99.999% death rate on ${member}!`)
  else if(randomWay == "identityTheft")
message.reply(`🎭 I have stole ${member}\'s identity and hired a hitman to go to their address!`)
}

module.exports.config = {
    name: "kill",
    description: "Kills a member.",
    usage: "+kill",
    accessableby: "Members",
    aliases: []
} 