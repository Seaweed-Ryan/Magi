module.exports = { 
	name: 'ban',
	description: 'banned',
	execute(message, args){
        
		
    var member = message.mentions.users.first();
		if (!member){  
			message.channel.send("Specify a member");
		}
		else	
		{	
		const memberTarget = message.guild.members.cache.get(member.id);
		
    // Kick
    memberTarget.ban().then((member) => {
        // Successmessage
        message.channel.send(":wave: " + member.displayName + " has been successfully banned :point_right: ");
    }).catch(() => {
                   if (!message.member.hasPermission(['KICK_MEMBERS','BAN_MEMBERS'])) {
            message.reply("You cannot ban members");
        } else if (memberTarget.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
            message.reply("You cannont ban this member");
        }    
    });
	}
	}
}
