module.exports = {
	name: "wow",
	description: "jobless",
	execute(message, args) {


const { promisify } = require('util')
const sleep = promisify(setTimeout)
let person = message.guild.member(message.mentions.users.first() || message.guild.members.fetch(args[1]));
var i = 0;
const spam = async() =>{		
while (i < 1 )
{
	await sleep(500)
	message.channel.send(`${person.user} not spamming`);
	console.log("werks");
}

			}
spam()
}
}
