 exports.run = async(bot, message, args) =>{
     if(message.author.bot) return;
 if(!message.member.hasPermission('BAN_MEMBERS'))
    return message.channel.send('You can not use this command.');
    var member = message.mentions.members.first();
    member.ban().then((member) => {
        message.channel.send(":wave: Bye " + member.displayName + "! They have been successfully banned.");
    }).catch(() => {
        message.channel.send("Access Denied");
    });
 } 
module.exports.config = {
    name: "ban",
    description: "Bans a member.",
    usage: "+ban",
    accessableby: "Members",
    aliases: []
}