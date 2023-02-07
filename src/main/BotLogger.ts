//const winston = require("winston");
import * as colors from "colors";
import {createLogger, transports, Logger} from "winston";

export class BotLogger {

  logger: Logger;

  constructor(LoggingFile: string) {
    this.logger = createLogger({
      transports: [new transports.File({ filename: LoggingFile })],
    });
  }

  log(Text: string) : void {
    let d = new Date();
    this.logger.log({
      level: "info",
      message:
        `${d.getHours()}:${
          d.getMinutes
        } - ${d.getDate()}:${d.getMonth()}:${d.getFullYear()} | Info: ` + Text,
    });
    console.log(
      colors.green(
        `${d.getDate()}:${d.getMonth()}:${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}`
      ) + colors.yellow(" | Info: " + Text)
    );
  }
}
