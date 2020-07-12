exports.run = async(bot, message, args) =>{
 if(message.content.startsWith("+kick")) {

    if(!message.member.hasPermission('KICK_MEMBERS'))
    return message.channel.send('You can not use this command.');
    var member = message.mentions.members.first();
    member.kick().then((member) => {
        message.channel.send(":wave: Bye " + member.displayName + "! They have been successfully kicked.");
    }).catch(() => {
        message.channel.send("Access Denied");
    });
}
};

module.exports.config = {
    name: "kick",
    description: "Kicks a member.",
    usage: "+kick",
    accessableby: "Members",
    aliases: []
} 