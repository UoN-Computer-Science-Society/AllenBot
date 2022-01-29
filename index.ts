import discordJS, {Intents} from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()
const client = new discordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_SCHEDULED_EVENTS
    ]
})

client.on('ready', () => {
    console.log('Allen\'s ready!')
})

const guildId = '828303655878000660'
const guild = client.guilds.cache.get(guildId)
let commands

if (guild) {
  commands = guild.commands
} else {
  commands = client.application?.commands
}

// Listens for messages typed
client.on('messageCreate', (message) => {
    if (message.content === 'test') {
        message.reply({
            content: 'successful',
        })
    }
  })

client.login(process.env.TOKEN)