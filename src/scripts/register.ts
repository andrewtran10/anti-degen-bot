const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('path');

const clientId = 1071976832783634462;
const guildId = 1071979009287651423;
const token = process.env.DISCORD_TOKEN;

const commands = [];
const commandsDir = path.join(__dirname, "..", '/discord/commands');
// Grab all the command files from the commands directory you created earlier
const files = fs.readdirSync(commandsDir)
const commandFiles=files.filter((file : string) => file.endsWith('.js'));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
    const filePath = path.join(commandsDir, `/${file}`)
	const command = require(filePath);
    commands.push(command.default.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(token);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();