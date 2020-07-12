  exports.run = async(bot, message, args) =>{
  const config = require("../config.json")
if(message.author.bot || message.author.id !== config.ownerID) return;
message.channel.createWebhook("Example Webhook", "https://i.imgur.com/p2qNFag.png")
.then(webhook => webhook.edit("Example Webhook", "https://i.imgur.com/p2qNFag.png")
.then(wb => message.author.send(`Here is your webhook https://canary.discordapp.com/api/webhooks/${wb.id}/${wb.token}`)).catch(console.error))
}

    module.exports.config = {
    name: "createwebhook",
    description: "Creates a webhook.",
    usage: "+createwebhook",
    accessableby: "Members",
    aliases: []
}