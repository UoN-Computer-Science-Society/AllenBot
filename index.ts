import {Client, Collection, Intents} from 'discord.js'
import dotenv from 'dotenv'
import {MongoClient} from 'mongodb'
import fs from 'fs'
import * as commandModules from "./commands"

dotenv.config()
export const client = new Client({ // Export so it can be used elsewhere
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_SCHEDULED_EVENTS
    ]
})

// Registering commands with client
const commands = Object(commandModules)

// Client logs into Discord and waits for Slash command interactions
client.once('ready', async () => {
  console.log(`Allen's ready!`)  
});
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) {return;}
  const {commandName} = interaction;
  commands[commandName].execute(interaction, client) // passes client as well to commands 
})

// Setup mongodb connection
if (!process.env.MONGO_URI){
  console.error('Mongo URI not found in Environmetn variables.');
  process.exit(1);
}
const mongoClient = new MongoClient(process.env.MONGO_URI!)
async function run() {
  try {
    await mongoClient.connect();
    mongoClient.db().admin().listDatabases()
      .then(dbs => {
        console.log("Mongo Databases:", dbs)
      });
  } catch (err) {
    console.error(err);
  }
}
run().catch(console.dir)

// Bot Login
if (process.env.TOKEN)
  client.login(process.env.TOKEN);
else {
  console.error('Token does not exist in environment!')
  process.exit(1);
}

// Graceful closing of Allen
process.on('SIGINT', function () {
  console.log('Disconnecting from MongoDB...')
  mongoClient.close();
  process.stdout.write("Disconnecting from discord...\n");
  client.destroy();
  process.stdout.write("Allen is now going to sleep o/");
  process.exit();
});