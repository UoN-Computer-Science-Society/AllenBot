import discordJS, {Intents} from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
//import testSchema from './test-schema'

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

client.on('ready', async () => {
  /*await mongoose.connect(
    process.env.MONGO_URI || '',
    {
      keepAlive: true
    })*/
  const dbOptions = {
    // These are the default values
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
  }
  
  const wok = new WOKCommands(client, {
    // name of local folder for command files
    commandsDir: path.join(__dirname, 'commands'),
    typeScript: true,
    testServers: ['828303655878000660', '934797001210605620'], // CSS Servers
    /*
    // passing in db options
    dbOptions,
    mongoUri: process.env.MONGO_URI,
    */
  })

  wok.on('databaseConnected', async (connection, state) => {
    const model = connection.models['wokcommands-languages']
  
    const results = await model.countDocuments()
    console.log(results)
  })

  wok.on('commandException', (command, message, error) => {
    console.log(`Oopsie, an error has occured when User ${command.user.id} executes "${command.name}". Error: `)
    console.log(error)
  })

  const {slashCommands} = wok
  console.log(`Allen\'s ready!`)
})
client.login(process.env.TOKEN) 