module.exports = {
	name: "wow",
	description: "jobless",
	execute(message, args) {


const { promisify } = require('util')
const sleep = promisify(setTimeout)
let person = message.guild.member(message.mentions.users.first() || message.guild.members.fetch(args[1]));
var i = 0;
const spam = async() =>{		
while (i < 100)
{
	await sleep(500)
	message.channel.send(`${person.user} Dedicated`);

	i++ 
}

			}
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("You lack the permission to do so(*pwawaha noob*)");

if(!args[0]) return message.reply("*specify user*");
if(!person) return message.reply("User not found");


else
	spam()
}
}
