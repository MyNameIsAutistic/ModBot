 exports.run = async(bot, message, args) =>{
   const config = require("../config.json")
   const prefix = config.prefix
    if (!args[0])
      return message.channel.send(
        `You did not specify the time in seconds you wish to set this channel's slow mode too!`
      );
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    let reason = message.content.slice(
      prefix.length + 9 + args[0].length + 1
    );
    if (!reason) {
      reason == "No reason provided!";
    }
    message.channel.setRateLimitPerUser(args[0], reason);
    message.channel.send(
      `Set the slowmode of this channel to **${args[0]}** with the reason: **${reason}**`
    );
  }

    module.exports.config = {
    name: "slowmode",
    description: "Set the channel slowmode.",
    usage: "+slowmode",
    accessableby: "Members",
    aliases: []
}  