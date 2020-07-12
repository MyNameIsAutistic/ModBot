exports.run = async(bot, message, args) =>{
  if(message.author.bot) return;
const discord = require('discord.js');
const embed = new discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Command List')
.setDescription('Here\'s my list of commands! \n +help \n -This list of commands! \n +invite \n -Gives you the bot invite and support server invite. \n +meme \n -gives you a dAnK mEmE \n +ping \n -Shows bot ping. \n +kick \n -Kicks a member. \n +ban \n -Bans a member. \n +say \n -Makes the bot say something. \n +hello \n -The bot says hello! \n +random \n -Shows a hot post from a random subreddit. \n +serverinfo \n -The bot will show info about the server. \n +userinfo \n -The bot will show info about a member. \n +cat \n -fun! cats! \n +uptime \n -Shows bot uptime. \n +suggest \n -Suggest something. \n +ascii \n -Make ASCII art. \n +pokedex \n -Shows info about a pokemon. \n +8ball \n -Ask any question, and get an answer! \n +covid \n Shows COVID-19 data. \n +mute \n -Mutes a member. \n +unmute \n -Unmutes a member. \n +bugreport \n Reports bugs. \n +clear \n -Clears messages. \n +kill \n -Kills a member. \n +poll \n -Creates a poll. \n +slowmode \n -Sets the slowmode for the channel. \n +warn \n -Warns a user. \n +privacy \n -Shows the privacy policy. \n +ppsize \n -Shows your ppsize.')
message.channel.send(embed)
}
module.exports.config = {
    name: "help",
    description: "Shows the bot commands.",
    usage: "+help",
    accessableby: "Members",
    aliases: []
} 