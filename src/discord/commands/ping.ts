import { ChatInputCommandInteraction, CommandInteraction, SlashCommandBuilder } from "discord.js";
import { DiscordCommand } from "../DiscordCommand";


export class PingCommand extends DiscordCommand {
	constructor() {
		let builder = new SlashCommandBuilder()
			.setName('ping')
			.setDescription('Ping Pong!');

		super(builder);
	};

	async execute(interaction: CommandInteraction) : Promise <void> {
		await interaction.reply("Pong!");
	};
}
