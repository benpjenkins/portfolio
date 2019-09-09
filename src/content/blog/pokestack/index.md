---
title: Making a Pokémon themed Discord bot (and why you will wish you had a real front end)
date: "2019-07-25"
description: Some thoughts about the problems I encountered while making a Discord bot, the solutions, and why I never want to make another one.
---

During my review week between the junior and senior phase at Fullstack Academy I
decided to make a Discord chat bot that would allow people to play a simpler, text-based
version of Pokémon.

I was looking for different RESTful API's that might be interesting to build a
small project with and was knew I found what I was looking for when I found
[PokéAPI](https://pokeapi.co/). If you are familiar with Pokémon and REST then
it is basically what you would be expecting, but if you aren't sure you can go check
out it's Docs, they are great.

The tech stack I'm using for this bot is essentiality just a node module called Discord.js
which provides an object oriented approach with 100% coverage of the Discord API. There
are a few other node modules which came in to play that I'll touch on later but essentially
this bot is just a node server.

For anyone unfamiliar with Discord there is an established convention where you interact
with the bot by typing a specific prefix followed by the text of the commmand you would
like the bot to perform. Let's peek at an example from Discord.js of what the simplest
version of a discord bot might be (this is taken right from their [home page](https://discord.js.org/#/)).

```javascript
const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }
})

client.login("token")
```

This example demonstrates several event in which a bot might perform an action.
We can see that there are two events: "ready" and "message". There are numerous
events and you can have your bot take all sorts of actions depending on what events
are occurring on any server it is invited to.

Events are important but there is one event that needs special attention drawn to
it because it is typically where most of a bot's functionality lies. The message
event in this instance is pretty simple. If it is in a channel and someone types
"ping" it will respond with "pong" in the same channel. It all seems pretty simple
but if you use your imagination you might notice a trap that we are going to fall
into if we continue to follow this pattern of putting our commands in an if/else
block.

What if we have a whole lot of commands? What if some of our commands have hundreds
of lines of code (I'll take about one of those later)? It would still technically
work but I personally don't want to deal with all of these commands in one block
of code or even in the same file. Let's make our bot more modular with a message
handler!

##Message Handler

If you know me in real life you will know that I wasn't clever enough to come up
with this solution on my own but there are plenty of clever people making Discord
bots who have figured out a scalable way to manage commands. Instead of a switch
or if/else block we are going to use something that looks like this.

```javascript
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err)
  files.forEach(file => {
    if (!file.endsWith(".js")) return
    const command = require(`./commands/${file}`)
    const commandName = file.split(".")[0]
    console.log(`Loading ${commandName}`)
    bot.commands.set(commandName, command)
  })
})
```

The Discord dev community calls this a Message Handler. With this code we can move
each command to it's own file in a new folder called commands and it will effectively
map each command in that folder to the bot. Without much effort we have set our
bot up with the ability to add any number of commands. That's actually kind of
awesome.

So what did I find frustrating about making a Discord bot? Was it making
random Pokémon appear in the server and be able to be caught by users? No, we simply
use the ready event and a simple API call.

##Spawning Pokémon

```javascript
const getRandomPoke = async function() {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1}`
  )
  const randomPokemon = res.data

  const encounterMessage = new Discord.RichEmbed()
    .setTitle(`A wild ${randomPokemon.name} appears!`)
    .setImage(`${randomPokemon.sprites.front_default}`)
    .addField(
      "Use the !catch command!",
      "Only the first one to enter the command receives the pokemon"
    )
  bot.channels.get("600409131559419916").send(encounterMessage)

  return randomPokemon
}
```

Put that all within the ready event and set an interval on it and Pokémon will start
appearing. Can you guess why the server is hard coded with a string of a bunch of numbers?
I'm not a Discord power user and I honestly don't know if someone could invite this bot
to a different server. I hard-coded the server that I am demoing the project on to
prevent this bot from ever emitting this message in other servers and driving it's
members crazy.

What about giving the bot the ability to join a voice channel and play the theme
song from the Pokémon tv show? That was actually surprisingly easy.

##Playing Music

```javascript
const ytdl = require("ytdl-core")

exports.run = (bot, message, args) => {
  const broadcast = bot.createVoiceBroadcast()
  message.member.voiceChannel
    .join()
    .then(connection => {
      message.reply("I have successfully connected to the channel!")
      const stream = ytdl("https://www.youtube.com/watch?v=JuYeHPFR3f0", {
        filter: "audioonly",
      })
      broadcast.playStream(stream)
      const dispatcher = connection.playBroadcast(broadcast)
    })
    .catch(console.log)
}
```

Here comes the ytdl node module to save the day. I knew that I wanted the bot to
be able to play this specific song but I also dreamed about one day making it able to
play any song that someone could find a Youtube video for. For brevity's sake
(I know, too late) I omitted some error handling here but this is basically all it
takes to make a bot hop into a voice channel and start making some music. YTDL
could theoretically download the audio from any Youtube video (although right now
it is hard coded for just one) and once it has downloaded that file it will
broadcast it.

What really drove me crazy about working on this bot is the fact that my "front
end" is essentially a bunch of text. User input is only a string. I can make
my bot very helpful in suggesting what sort of commands it expects and what a
properly formated message might look like. If it is a situation where the user
sends a command and the bot gives one reply and that is the end of the sequence then
it ultimately isn't a problem. But what if we engage in a sequence of messages
between the bot and the user and a third user that they mentioned in their initial
command, say in a Pokémon battle.

I'm not proud enough of my solution to even post the actual code but
message collectors are the key and I did not find them enjoyable to work with
at all (there are also emoji collectors but as a general rule I despise emojis).
Every time the bot sends a message to a user and awaits a specific reply it needs
to create a new message collector. A message collector can filter the message which
it will receive and it can optionally accept only a specified number of messages.

I was surprised after spending quite a bit of time working on the trade and battle
features of my bot when I made a typo on a command for the first time. It completely
broke the process of the battle that I was testing. I added some additional ways
to handle this type of problem but I finally realized that I had to account for this
kind of problem every time the bot ever sent a command and awaited a response.
In different situations the message the bot was expecting could be one of two options
or one of however many Pokémon my Postgres database was willing to create before
it couldn't handle it anymore.

Ultimately I knew that this project would only last for this week (and I had numerous
workshops to complete and videos to review) so I knew I could never replicate
the Pokémon experience that it would ever be more than a novelty to demo for my
peers. But wow I really started longing for React and Redux near the end of this
project. I know that people have made some pretty amazing Discord bots, people have
even made the bot that I was trying to make but far better. I'll just take what
I was able to complete in this short time as a win and I look forward to returning
to the world of buttons, links, and dropdowns to help me control user input.

Also this afternoon I started playing around with Gatsby, Tailwind, and Styled
Components. Hopefully sometime in the near future I'll be able to give some helpful
thoughts about those but I will say now that Gatsby blows my mind and is incredible.
