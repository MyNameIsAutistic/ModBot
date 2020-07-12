  exports.run = async(bot,message,args) =>{
const ms = require('ms');
const moment = require("moment");
require("moment-duration-format");
    var milliseconds = parseInt((bot.uptime % 1000) / 100),
        seconds = parseInt((bot.uptime / 1000) % 60),
        minutes = parseInt((bot.uptime / (1000 * 60)) % 60),
        hours = parseInt((bot.uptime / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        message.channel.send(":chart_with_upwards_trend: I've been running for** " + hours + " **hours, **" + minutes + "** minutes and **" + seconds + "." + milliseconds + "** seconds!");
  }

module.exports.config = {
    name: "uptime",
    description: "Shows bot uptime.",
    usage: "+uptime",
    accessableby: "Members",
    aliases: []
} 