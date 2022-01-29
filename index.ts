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

client.login(process.env.TOKEN)