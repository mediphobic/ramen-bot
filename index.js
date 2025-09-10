import { Client, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
config({ quiet: true });

const client = new Client({
  intents: [GatewayIntentBits.Guilds, 
            GatewayIntentBits.GuildMessages, 
            GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content === '!ping') {
    message.reply(`🏓 Pong! Latency is ${Date.now() - message.createdTimestamp}ms`);
  }
});

client.login(process.env.TOKEN);
