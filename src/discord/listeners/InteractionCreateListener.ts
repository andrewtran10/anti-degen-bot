import { AntiDegenBot } from "../../main/AntiDegenBot";
import { DiscordCommand } from "../DiscordCommand";
import { DiscordEventListener } from "../DiscordEventListener";
import { ChatInputCommandInteraction, CommandInteraction, Interaction } from "discord.js";
import { Events } from "discord.js";


export class InteractionCreateListener extends DiscordEventListener {
    registerListener(antiDegenbot: AntiDegenBot) : void {
        antiDegenbot.ws.on(Events.InteractionCreate as never, async (interaction: CommandInteraction) => {
            if (interaction.isChatInputCommand()) return;
            
            let command = antiDegenbot.commands.get(interaction.commandName);
            
            if (!command) {
                console.error(`No command matching ${interaction.commandName}`) ;
                return;
            }

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: "Error executing command"});
            }

            

        });
    };
}