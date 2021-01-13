module.exports = {
	name: 'lyrics',
	description: 'lyrics',
	execute(message, args,client){
	const Discord = require("discord.js");
	const ftl = require('findthelyrics')
	let msg = message.content;
	let argString = msg.substr( msg.indexOf(' ') + 1 );
	let argArr = argString.split(' ');
	var [artist, title] = argArr;
		ftl.find(artist, title, function(err, resp) {
		if(resp === "" ){
			message.channel.send("Not Found");
			return
		} if(!err){
			message.channel.send(resp,{ split: true });
		}
			if(err) {
			message.channel.send("Follow Format - Artist, Title ; but you know stuff like multiple words and shiz i'm too dumb for that so play around a bit with wording sowwy uWu");
		
		
			}
			else message.channel.send("____|´ ▽ ` )")
	})
}


}
