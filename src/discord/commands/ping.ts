import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { DiscordCommand } from "../DiscordCommand";


export default new class PingCommand extends DiscordCommand {
	constructor() {
		let data = new SlashCommandBuilder()
			.setName('ping')
			.setDescription('Ping Pong!');

		super(data);
	};

	async execute(interaction: CommandInteraction) : Promise <void> {
		await interaction.reply("Pong!");
	};
}
