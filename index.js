require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if(message.author.bot) return;
    if ( message.content === "haruo world!") { 
        message.reply("三波春夫でございます！");
    }
});

client.login(process.env.DISCORD_TOKEN)
