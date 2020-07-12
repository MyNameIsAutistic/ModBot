const Discord = require("discord.js");
var config = require("./config.json");
var bot = new Discord.Client();
const token = process.env.TOKEN;
const fs = require('fs');
const Enmap = require('enmap');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Stolen Code.com'));

app.listen(port, () => console.log(`Bot is listening at http://localhost:${port}`));


require("./util/eventHandler")(bot)

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
        return console.log("[LOGS] Cannot find commands!")
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type == "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)
})

bot.on("guildCreate", guild => {
  guild.owner.send({
    embed: {
      color: 'RANDOM',
      title: 'Thanks.',
      description: 'The creators of ModBot Premium thank you for adding ModBot Premium to your server and helping the bot grow!'
    }
  })
});

bot.login(token);