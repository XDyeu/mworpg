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

client.login("NTYyMzgzMjEwMTY4ODQ0MzUy.XZ8z4Q.r6526COzmIIZexZOrYKayO-wa5s");
