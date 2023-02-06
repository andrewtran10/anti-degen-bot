const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lock')
		.setDescription('Locks a user from degenerate behavior!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};