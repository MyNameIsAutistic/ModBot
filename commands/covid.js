const axios = require('axios');
const { MessageEmbed } = require('discord.js')
  exports.run = async (bot, message, args) =>{
    const baseUrl = "https://corona.lmao.ninja/v2";

    let url;
    let response;
    let corona;
    try {
        url = args[0] ? `${baseUrl}/countries/${args[0]}`:`${baseUrl}/all`
        response = await axios.get(url)
        corona = response.data
    } catch (error) {
        return message.channel.send(`***${args[0]}*** doesn't exist, or data isn't being collected`)
    }
      
    console.log(corona)

    const embed = new MessageEmbed()
      .setTitle(args[0] ? `${args[0]} Stats` : 'Total Corona Cases World Wide')
      .setColor('#fb644c')
      .setThumbnail(args[0] ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
      .addFields(
        {
          name: 'Total Cases:',
          value: corona.cases.toLocaleString(),
          inline: true
        },
        {
          name: 'Total Deaths:',
          value: corona.deaths.toLocaleString(),
          inline: true
        },
        {
          name: 'Total Recovered:',
          value: corona.recovered.toLocaleString(),
          inline: true
        },
        {
          name: 'Active Cases:',
          value: corona.active.toLocaleString(),
          inline: true
        },
        {
          name: '\u200b',
          value: '\u200b',
          inline: true
        },
        {
          name: 'Critical Cases:',
          value: corona.critical.toLocaleString(),
          inline: true
        },
        {
          name: 'Today Recoveries:',
          value: corona.todayRecovered.toLocaleString().replace("-", ""),
          inline: true
        },
        {
          name: 'Todays Deaths:',
          value: corona.todayDeaths.toLocaleString(),
          inline: true
        })

      message.channel.send(embed)
      console.log(corona.countryInfo.flag)
  }

    module.exports.config = {
    name: "covid",
    description: "Shows COVID-19 data.",
    usage: "+covid",
    accessableby: "Members",
    aliases: []
} 