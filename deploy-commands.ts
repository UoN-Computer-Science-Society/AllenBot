import {REST} from "@discordjs/rest"
import {Routes} from "discord-api-types/v9"
import dotenv from 'dotenv'
import * as commandModules from './commands'

dotenv.config();

type Command = {
    data: unknown
}
const commands = [];
for (const module of Object.values<any>(commandModules)) {
    commands.push(module.data)
}

// Guild IDs and Client ID of Bot
const clientId = '936874154429407233'
const guildId = '828303655878000660'


const rest = new REST({version: '9'}).setToken(process.env.TOKEN!)
// Register them to the Guild
rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: commands}).then(() => {
    console.log("Succesfully registered application commands")
}).catch(console.error)