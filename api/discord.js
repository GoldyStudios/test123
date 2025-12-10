import { runBot } from "../bot/bot.js";

let started = false;

export default async function handler(req, res) {
  if (!started) {
    started = true;
    await runBot(process.env.DISCORD_TOKEN || "TEST123");
  }

  res.status(200).json({ status: "Bot triggered" });
}