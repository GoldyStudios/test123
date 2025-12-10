import { Client, GatewayIntentBits } from "discord.js";

export async function runBot(token, onReady) {
  const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
  });

  client.once("ready", () => {
    console.log("Bot ready");
    if (onReady) onReady(client);
  });

  client.on("messageCreate", (message) => {
    // Bot ignoriert eigene Nachrichten
    if (message.author.bot) return;

    const content = message.content.trim();

    // ?help Command
    if (content === "?help") {
      message.channel.send("Available commands:\n?help - Show this message\n?message <text> - Bot repeats your message");
      return;
    }

    // ?message Command
    if (content.startsWith("?message ")) {
      const reply = content.slice(9).trim(); // Text nach ?message
      if (reply) {
        message.channel.send(reply);
      } else {
        message.channel.send("Please provide a message to send.");
      }
    }
  });

  await client.login(token);
}
