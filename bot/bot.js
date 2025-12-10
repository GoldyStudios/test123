import { Client, GatewayIntentBits } from "discord.js";

export async function runBot(token, onReady) {
  const client = new Client({
    intents: [GatewayIntentBits.Guilds]
  });

  client.once("ready", () => {
    console.log("Bot ready");
    if (onReady) onReady(client);
  });

  await client.login(token);
}