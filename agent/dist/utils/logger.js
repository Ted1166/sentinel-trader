"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const config_js_1 = require("../config.js");
exports.logger = winston_1.default.createLogger({
    level: config_js_1.AGENT.logLevel,
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston_1.default.format.colorize(), winston_1.default.format.printf(({ timestamp, level, message, ...meta }) => {
        const metaStr = Object.keys(meta).length
            ? "\n" + JSON.stringify(meta, null, 2)
            : "";
        return `${timestamp} [${level}] ${message}${metaStr}`;
    })),
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: "logs/agent-error.log", level: "error" }),
        new winston_1.default.transports.File({ filename: "logs/agent.log" }),
    ],
});
//# sourceMappingURL=logger.js.map