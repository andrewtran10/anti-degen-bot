import { ChatInputCommandInteraction, CommandInteraction, SlashCommandBuilder } from "discord.js";

export abstract class DiscordCommand {
    builder: SlashCommandBuilder;

    constructor(props: SlashCommandBuilder) {
        this.builder = props;
    }

    abstract execute(interaction: CommandInteraction) : Promise <void>;
}