const { Client } = require("discord.js");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.channel.send("Pong!");
  if (msg.content === "everyone")
    msg.channel.send("@everyone, test salut", { disableEveryone: false });
  if (msg.content === "noteveryone")
    msg.channel.send("@everyone (noteveyone), salut a tous");
});

client.login("NTYyMzgzMjEwMTY4ODQ0MzUy.XZ95bQ.S1xG48yK6N_FmX4ANPHErhIBjWA");
