module.exports = {
	name: 'host',
	description: 'System Information',
	execute(message, args,client){
		const Discord = require('discord.js');
			let days = Math.floor(client.uptime / 86400000);
     			 let hours = Math.floor(client.uptime / 3600000) % 24;
     			 let minutes = Math.floor(client.uptime / 60000) % 60;
      			let seconds = Math.floor(client.uptime / 1000) % 60;
		var duration = (days +"d"+ hours + "h"+ minutes +"m"+seconds +"s"); 		
		const host = new Discord.MessageEmbed()
		.setColor('#ffdab9')
		.setAuthor('Lineage OS 9  | Android Pie', 'https://www.pngkit.com/png/full/386-3869668_how-to-update-android-gingerbread-lineage-os-logo.png')
		.setTitle('Hosted on Termux Linux Environment')
		.setDescription('__System Information __')
		.addFields(
			{ name: 'CPU', value: 'Qualcomm MSM8226 Quad Core @ 1.190 GHz' },
			{ name: 'Memory', value: '1364 MiB', inline: true },
			{ name: 'OS', value: 'Android 9 armv71', inline: true },
			{ name: 'Kernel', value: '3.4.113-ga042d77', inline: true },)
		.addFields(
			{ name: 'Uptime' , value: duration , inline: true},
			{ name: 'Github', value: 'Coming Soon', inline: true },
		)

		.setThumbnail('https://preview.redd.it/4p6p3b5o70541.png?width=640&crop=smart&auto=webp&s=87ff9136ddc51e77683d149c42d7249103ab3a67')
		.setImage('https://pa1.narvii.com/5787/211f573aed086f2fd864be83cba5534a901f2b30_hq.gif')
		.setTimestamp()
		.setFooter('Magi v1.00', 'https://www.pikpng.com/pngl/b/161-1610441_free-danganronpa-transparent-chiaki-chiaki-nanami-sprites-clipart.png');


		message.channel.send(host);
	}
}
