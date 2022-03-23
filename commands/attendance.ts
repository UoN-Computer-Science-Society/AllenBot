import { SlashCommandBuilder } from '@discordjs/builders';
import { Client, CommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
	.setName("attendance")
	.setDescription("A list of commands specific to managing attendance.")
    .addSubcommand(cmd => 
        cmd.setName("get")
            .setDescription("Get a specific users' attendance records")
            .addUserOption(options => options.setName('target').setDescription('Specific user to check attendance record').setRequired(true))
        )
    .addSubcommand(cmd => 
        cmd.setName("take")
            .setDescription("Takes attendance from a specific voice channel that the meeting is being held in.")
            .addChannelOption(channel => channel.setName('channel').setDescription('Meeting voice channel to get users.').setRequired(true))
        )

export async function execute(interaction: CommandInteraction, client: Client) {
	if (!interaction.isCommand()) return;

    if (interaction.options.getSubcommand() === 'get') {// Get Command taken
        const user = interaction.options.getUser('target')
        if (user) {
            await interaction.reply(`Username: ${user.username}\n ID:${user.id}`)
        } else {
            await interaction.reply(`Error that user cannot be found.`)
        }
    }
}