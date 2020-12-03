module.exports = {
	name: 'host',
	description: 'System Information',
	execute(message, args,client){
		const Discord = require('discord.js');
		const si = require('systeminformation');
			let days = Math.floor(client.uptime / 86400000);
     			 let hours = Math.floor(client.uptime / 3600000) % 24;
     			 let minutes = Math.floor(client.uptime / 60000) % 60;
      			let seconds = Math.floor(client.uptime / 1000) % 60;
		var duration = (days +"d"+ hours + "h"+ minutes +"m"+seconds +"s"); 		
		si.cpu(function(data) {
			let manfu =  (""+data.manufacturer);
			let brand = (""+data.brand);
			let speed = (""+data.speed);
	
		si.mem(function(memdata) {
			let mem = ((memdata.used) / Math.pow(10,9));
			let memG = (Math.round(mem * 100) / 100).toFixed(2);
			let memto = ((memdata.total) / Math.pow(10,9));
			let memtoG = (Math.round(memto * 100) / 100).toFixed(2);

		si.osInfo(function(osdata){
				let os = (""+osdata.distro);
				let plat = (""+osdata.platform);
				let kernel = (""+osdata.kernel);
	
	


				const host = new Discord.MessageEmbed()
		.setColor('#ffdab9')	
		.setAuthor('Heroku  | Cloud Application Platform', 'https://www.clipartmax.com/png/middle/89-894960_js-discord-bot-logo-node-js-and-react-js.png')
		.setTitle('System Information')
		.setDescription('*Written in JS using node.js libraries*')
		.addFields(
			{ name: 'CPU', value: ''+manfu +''+ brand+'@' + speed+'GHz' },
			{ name: 'Memory', value: ''+memG+'/'+memtoG+"GiB", inline: true },
						{ name: 'OS', value: ''+os, inline: true },
			{ name: 'Kernel', value: ''+ kernel, inline: true },
			{ name: 'Platform', value: ''+plat, inline:true }
			

			)

		.addFields(
			{ name: 'Uptime' , value: duration , inline: true},
			{ name: 'Github', value: 'Coming Soon', inline: true },
		)

		.setThumbnail('https://preview.redd.it/4p6p3b5o70541.png?width=640&crop=smart&auto=webp&s=87ff9136ddc51e77683d149c42d7249103ab3a67')
		.setImage('https://pa1.narvii.com/5787/211f573aed086f2fd864be83cba5534a901f2b30_hq.gif')
		.setTimestamp()
		.setFooter('Magi v1.00', 'https://www.pikpng.com/pngl/b/161-1610441_free-danganronpa-transparent-chiaki-chiaki-nanami-sprites-clipart.png');


		message.channel.send(host);
		
		})
		})

	})
}
}
