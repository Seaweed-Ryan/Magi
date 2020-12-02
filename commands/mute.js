const ms = require('ms');
module.exports = {
	name: 'mute',
	description: 'mutes a member',
	execute(message, args){

		const target = message.mentions.users.first();
			if(!target){
			message.channel.send("Can't find the above Member");
			}


		if 

		   (!message.member.hasPermission(['KICK_MEMBERS','BAN_MEMBERS'])) {
           message.reply("You cannot mute members ||you lack the permission to do so||");
        }
		 if (message.guild.members.cache.get(target.id).hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
           message.reply("You cannot mute this member ||user is of a role </= to you|| ");}
		
else
		{
			let mainRole = message.guild.roles.cache.find(role => role.name === 'quinxes');
			let muteRole = message.guild.roles.cache.find(role =>role.name === 'Mute');

			let memberTarget = message.guild.members.cache.get(target.id);
			
			if(!args[1]){
			memberTarget.roles.remove(mainRole.id);
			memberTarget.roles.add(muteRole.id);


		message.channel.send(`<@${memberTarget.user.id}> has been muted`);
				return;
			}
try {

			memberTarget.roles.remove(mainRole.id);
			memberTarget.roles.add(muteRole.id);
			message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
}
catch(err)
{ 
	message.channel.send("Incorrect syntax, Format should be -mute @user duration(eg :2m, 30s , 1h)");
}

			setTimeout(function() {
				memberTarget.roles.remove(muteRole.id);
				memberTarget.roles.add(mainRole.id);
			});


			

		
		}
		
			
		

	}

	}		


					

	

