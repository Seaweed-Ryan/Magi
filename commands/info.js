module.exports = {
	name: 'info',
	description: 'System Information',
	execute(message, args,client){
		const Discord = require('discord.js');
		var member = message.mentions.users.first();
		if(!member) {
			message.channel.send("Specify an User");
		}else {
		var pfp = member.avatarURL();
		const date = member.createdAt;
		const newDate = date.toLocaleDateString();
		var id = member.tag;
		const nickname = member.username;
		const moment = require('moment');
		const servj = moment.utc(member.joinedAt).format('DD/MM/YY'); 
		const info = new Discord.MessageEmbed()
			.setColor('#ffdab9')
			.setTitle('User Info')
			.setAuthor(''+nickname,'https://mpng.subpng.com/20190416/bf/kisspng-image-emoji-portable-network-graphics-computer-ico-discord-icons-tumblr-5cb5c4a86a43e8.7232674115554162324353.jpg')
			.setThumbnail(''+pfp)
			.addFields(
				{ name: 'Created On', value: ''+newDate, inline: true},
				{ name: 'User Tag' , value: ''+id, inline: true},		
				{ name: 'Joined On' , value: ''+servj},
				)
			.setTimestamp()
			.setFooter('Magi v1.00', 'https://www.pikpng.com/pngl/b/161-1610441_free-danganronpa-transparent-chiaki-chiaki-nanami-sprites-clipart.png');
		message.channel.send(info);
	}
}	

}
