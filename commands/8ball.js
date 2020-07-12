const discord = require('discord.js')
const answers = ["Nope.", "Definitley not.", "According to my calculations, my answer is NO!", "Yes, or no. I don't know. I'm just a pile of code.", "Maybe.", "HOW AM I SUPPOSED TO KNOW?!?!?!?!?", "Yes.", "Definitley!", "Yup!"];
exports.run = async(bot, message, args) =>{
  const args1 = args.join(" ")
const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
const e = new discord.MessageEmbed()
.setColor("BLACK")
.setAuthor("Magic 8Ball", "https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/d9/2b/f0/d92bf04f-df4d-8ace-a850-3418a6827d25/pr_source.png/246x0w.png")
.setFooter("This is just a pile of code, most likely whatever the bot says won\'t happen.")
.addField("Question",[`${args1}`],true)
.addField("\n Answer",[`${randomAnswer}`],true)
message.channel.send(e)
}

module.exports.config = {
    name: "8ball",
    description: "just for fun, ask any question!",
    usage: "+8ball",
    accessableby: "Members",
    aliases: []
} 