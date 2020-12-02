module.exports = {
	name: 'clear',
	description: 'clear messages',
	async execute(message, args) {
		if(!args[0]) return message.reply("*specify no of messages*");
		if(isNaN(args[0])) return message.reply("*specify no --no text*");
		if(args[0] > 100) return message.reply("__maximum__ -- 100");
		if(args[0] < 1) return message.reply("__minimum__ --1(like duh?)");

		await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
			message.channel.bulkDelete(messages);
		});
		
		}
}

