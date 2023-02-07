import {AntiDegenBot} from "../main/AntiDegenBot";

export abstract class DiscordEventListener {
    abstract registerListener(antiDegenbot: AntiDegenBot) : void;
}