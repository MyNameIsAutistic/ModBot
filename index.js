var express = require("express");
var app = express();
const discord = require("discord.js");
var config = require("./config.json");
const bot = new discord.Client();
const token = process.env.TOKEN;
const fs = require('fs');
var commandlist = [];
const keepAlive = require('./server');

app.get('/', (request, response) => {
     response.sendStatus(200);
});

fs.readdir("./commands", async(error, test) =>{
  if(error){
    return console.log("Error Reading Files");
  }
  test.forEach(async(file) => {
    if(!file.endsWith(".js")) return;
   let filename = `./commands/${file}`;
    var commandFile = await require('filename');
    commandlist.push({
      file: commandFile,
      name: file.split(".")[0]
    });
  });
});

bot.on("ready", async() => {
console.log("Ready!")
bot.user.setActivity("yo you should say %help to check out my commands 😉", { "type": "STREAMING" })
});

bot.on("message", async (message) => {
  console.log("A message was sent");
 if(message.author.bot || !message.content.startsWith(config.prefix)) return;
 console.log(`A message with the prefix was sent: ${message.content}`)
const args = await message.content.slice(config.prefix.length).toLowerCase().split(/\s+/);
 const commandName = await args[0].toLowerCase();
 args.shift();
 const command = commandlist.findIndex((cmd) => cmd.name === commandName);
 if(command ==-1) return;
 commandlist[command].file.run(client, message, args);
});



keepAlive();
bot.login(token);