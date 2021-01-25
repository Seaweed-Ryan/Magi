module.exports = {
	name: "wow",
	description: "jobless",
	execute(message, args) {


const { promisify } = require('util')
const sleep = promisify(setTimeout)

var i = 0;
const spam = async() =>{		
while (i < 1 )
{
	await sleep(500)
	message.channel.send("I'm Horny",{ files: ["./houshou-marine-im-horny.mp3"] });
	console.log("werks");
}

			}
spam()
}
}
