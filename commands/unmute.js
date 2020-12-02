module.exports = {
	name: 'unmute',
	description: 'unmute',
	execute(message,args){
		const target = message.mentions.users.first();
                const memberTarget = message.guild.members.cache.get(target.id);
		if 

		   (!message.member.hasPermission(['KICK_MEMBERS','BAN_MEMBERS'])) {
           message.reply("You cannot unmute members ||you lack the permission to do so||");
        }
		 if (memberTarget.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
           message.reply("You cannot unmute this member ||user is of a role </= to you|| ");}
		
		 if(target)
		{
			let mainRole = message.guild.roles.cache.find(role => role.name === 'quinxes');
			let muteRole = message.guild.roles.cache.find(role =>role.name === 'Mute');

			let memberTarget = message.guild.members.cache.get(target.id);
			memberTarget.roles.add(mainRole.id);
			memberTarget.roles.remove(muteRole.id);

		message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
		
		}
		
		 if(!target)
		{
			message.channel.send("Can't find the above member"); 
			}

	}			
}

					

	

