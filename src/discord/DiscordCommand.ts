import { ChatInputCommandInteraction, CommandInteraction, SlashCommandBuilder } from "discord.js";

export abstract class DiscordCommand {
    data: SlashCommandBuilder;

    constructor(props: SlashCommandBuilder) {
        this.data = props;
    }

    abstract execute(interaction: CommandInteraction) : Promise <void>;
}