import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { DiscordCommand } from "../DiscordCommand";


export default new class UserCommand extends DiscordCommand {
	constructor() {
		let data = new SlashCommandBuilder()
			.setName('user')
			.setDescription('Provides information about the user.');

		super(data);
	};

	async execute(interaction: CommandInteraction) : Promise <void> {

		if (!interaction.inCachedGuild()) return;
		await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
	};
}
