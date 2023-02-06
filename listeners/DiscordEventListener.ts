import {AntiDegenBot} from "../structs/AntiDegenBot";

export abstract class DiscordEventListener {
    abstract registerListener(antiDegenbot: AntiDegenBot) : void;
}