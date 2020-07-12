const Discord = module.require("discord.js")
const weather = require("weather-js")

module.exports.run = async (bot, message, args) => {

    weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) {
        if(err) message.channel.send(err)

        if(result.length === 0) {
            message.channel.send("**please enter a valid location**")
            return;
        }

        var current = result[0].current 
        var location = result[0].location 
        let embed = new Discord.MessageEmbed()
           .setDescription(`**${current.skytext}**`) 
           .setAuthor(`Weather for ${current.observationpoint}`) 
           .setThumbnail(current.imageUrl) 
           .setColor(0x00AE86) 
           .addField("Timezone", `UTC${location.timezone}`, true)
           .addField("Temperature", `${current.temperature} C`, true)
           .addField("Feels like", `${current.feelslike} Degrees C`, true)
           .addField("Winds", current.winddisplay, true)
           .addField("Humidity", ` ${current.humidity}%`, true)
           .addField("Day", `${current.day}`, true)
           .addField("Date", `${current.date}`, true)
           
           message.channel.send(embed)

    });

    message.delete();
    
    }

    module.exports.config = {
    name: "weather",
    description: "Shows the weather for a specified location.",
    usage: "+weather",
    accessableby: "Members",
    aliases: []
} 