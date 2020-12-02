module.exports = { 
	name: 'kick',
	description: 'get the boot',
	execute(message, args){
        
		
    var member = message.mentions.users.first();
		if (!member){  
			message.channel.send("Specify a member");
		}
		else	
		{	
		const memberTarget = message.guild.members.cache.get(member.id);
		
    // Kick
    memberTarget.kick().then((member) => {
        // Successmessage
        message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
    }).catch(() => {
                   if (!message.member.hasPermission(['KICK_MEMBERS','BAN_MEMBERS'])) {
            message.reply("You cannot kick members ||you lack the permissions to do so||");
        } else if (memberTarget.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
            message.reply("You cannot kick this member ||user is of a role </= to you|| ");
        }    
    });
	}
	}
}
