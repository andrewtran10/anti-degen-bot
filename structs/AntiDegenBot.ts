import { DiscordEventListener } from "../listeners/DiscordEventListener";

const { Collection, Client, GatewayIntentBits } = require("discord.js");
const Logger = require("./Logger");
const fs = require("fs");
const path = require("path");


export class AntiDegenBot extends Client {
    constructor() {
        super({intents: [GatewayIntentBits.Guilds]});

        this.commands = new Map();
        this.token = process.env.DISCORD_TOKEN;
        this.logger = new Logger(path.join(__dirname, "../logs/", "default.log"))

        this.registerListener(new )


    }

    init() {
        this.login(this.token);
    }


    registerListener(discordEventListener: DiscordEventListener) {
        discordEventListener.registerListener(this);
    }

}
