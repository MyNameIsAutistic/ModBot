exports.run = (bot, message, args) => {
    if(message.author.id != "710193783576461312") return;
    if(!args[0]) {
        return message.channel.send("Please provide code for me to run!");
    }
    try {
        const code = args.join(" ");
        let evaled = eval(code);
        if(typeof evaled != "string") {
            evaled = require("util").inspect(evaled);
        }
    } catch (err) {
        return message.channel.send({embed: {
            color: 7948427,
            description: `**Error:**\n`
            + `\`There was an error while compiling your code: ${err}\``,
       
        }});
    }
    return message.channel.send({embed: {
        color: 7948427,
        description: `**Success:**\n`
            + `\`Your code compiled successfully!\``,
    }});
}

module.exports.config = {
  name: "eval",
  description: "Runs code.",
  usage: "+eval",
  accessableby: "Members",
  aliases: []
}