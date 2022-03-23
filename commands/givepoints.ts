/*import { SlashCommandBuilder } from '@discordjs/builders';
import { Client, CommandInteraction, User } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName("givepoints")
    .setDescription("Give a user a certain number of brownie points.")

export async function execute(interaction: CommandInteraction, client: Client) {

    
    return interaction.reply(`message here`);
}*/

const { Command } = require('discord.js-commando')

module.exports = class givepoints extends Command {
    constructor(client) {
        super(client, {
            name: 'givepoints', 
            aliases: ['give'],
            description: 'Give a user a certain number of brownie points.',
        });
    }

    run(message) {
        return message.say('Test')
    }
};