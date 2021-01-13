require('dotenv').config();
const Discord = require ('discord.js');
const {Client,Attachment}=require('discord.js')
const client = new Discord.Client();
const fs = require('fs');
const prefix = process.env.PREFIX
const commandfiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
const moment = require("moment");
require("moment-duration-format");
const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

client.commands = new Discord.Collection();
for (const file of commandfiles) {
	 const command = require(`./commands/${file}`);
	 client.commands.set(command.name, command);
	 }

client.on('ready',() => {
		console.log("__Melchor__ ->1 | __Balthazar__ ->2 | __Casper__ ->3");
		client.user.setActivity("Magi v1.00 || Preaching Anime Thighs")
});


	client.on('message', message =>{
			if(!message.content.startsWith(prefix) || message.author.bot) return;
			
			const args = message.content.slice(prefix.length).split(/ +/);
			const command = args.shift().toLowerCase();
					

						if(command === 'ping')  {
							client.commands.get('ping').execute(message, args);
							} else if (command === "clear") {
							client.commands.get('clear').execute(message, args);	
							} else if (command === "kick") {
							client.commands.get('kick').execute(message, args);
							} else if (command === "ban") {
							client.commands.get('ban').execute(message, args);	
							}else if (command === 'mute') {
							client.commands.get('mute').execute(message, args);
							
							}else if (command === 'unmute') {
							client.commands.get('unmute').execute(message, args);
							}else if (command === 'host') {
							client.commands.get('host').execute(message, args,client);
							}else if (command ==='info') {
							client.commands.get('info').execute(message, args,client);
							}else if (command ==='lyrics') {
							client.commands.get('lyrics').execute(message, args,client);
							}
	});
client.login(); 
	


