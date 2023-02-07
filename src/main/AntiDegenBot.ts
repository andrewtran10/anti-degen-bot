import { PingCommand } from "../discord/commands/ping";
import { InteractionCreateListener } from "../discord/listeners/InteractionCreateListener";
import { DiscordEventListener } from "../discord/DiscordEventListener";
import { DiscordCommand } from "../discord/DiscordCommand";

import { Client, GatewayIntentBits } from "discord.js";
import { BotLogger } from "./BotLogger";
import path from "path";


export class AntiDegenBot extends Client {
    commands: Map<string, DiscordCommand>;
    logger: BotLogger;

    constructor() {
        super({intents: [GatewayIntentBits.Guilds]});

        let token = process.env.DISCORD_TOKEN;
        this.token = (token) ? token : null;

        this.commands = new Map<string, DiscordCommand>();
        this.logger = new BotLogger(path.join(__dirname, "../logs/", "default.log"))

        this.registerListener(new InteractionCreateListener());
        this.registerCommand(new PingCommand());

    }

    init() {
        if (this.token) this.login(this.token);
    }


    registerListener(discordEventListener: DiscordEventListener) {
        discordEventListener.registerListener(this);
    }

    registerCommand(discordCommand: DiscordCommand) {
        this.commands.set(discordCommand.builder.name, discordCommand);
    }

}
