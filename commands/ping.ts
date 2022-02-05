import { SlashCommandBuilder } from '@discordjs/builders';
import { Client, CommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
	.setName("ping")
	.setDescription("Replies with Pong and Client Connection ping.")

export async function execute(interaction: CommandInteraction, client: Client) {
	return interaction.reply(`Pong! ${client.ws.ping}ms`);
}