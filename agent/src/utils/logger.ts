import winston from "winston";
import { AGENT } from "../config.js";

export const logger = winston.createLogger({
  level: AGENT.logLevel,
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.colorize(),
    winston.format.printf(({ timestamp, level, message, ...meta }) => {
      const metaStr = Object.keys(meta).length
        ? "\n" + JSON.stringify(meta, null, 2)
        : "";
      return `${timestamp} [${level}] ${message}${metaStr}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/agent-error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/agent.log" }),
  ],
});