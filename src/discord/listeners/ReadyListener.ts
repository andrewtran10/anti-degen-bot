import { AntiDegenBot } from "../../main/AntiDegenBot";
import { DiscordEventListener } from "../DiscordEventListener";
import { Events } from "discord.js";


export class ReadyListener extends DiscordEventListener {
    registerListener(antiDegenbot: AntiDegenBot) : void {
        antiDegenbot.on(Events.ClientReady as never, async () => {
           console.log(`Ready! Logged in as ${antiDegenbot.user!.tag}`);
        
        });
    };
}