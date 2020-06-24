const config = require('../config.json')
const index = require('../index.js')
const bot = index.bot
exports.run = async(client, message, args) =>{
bot.on("message", message => {
  const args = message.content.split(" ").slice(1);
 
  if (message.content.startsWith(config.prefix + "eval")) {
    if(message.author.id !== config.ownerID) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
      message.delete()
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
})};
