import DiscordJS, { Activity, Base, Client, ClientUser, Message, User } from 'discord.js'

export default {
    category: 'Testing',
    description: 'Lists number of points for a given user',

    slash: true,
    testOnly: true,

    minArgs: 1,
    expectedArgs: '<username>',

    callback: ({ interaction, args }) => {
        const user = args[0]

        if (interaction) {
            interaction.reply({
                content: `${user} has some points`
            })
        }
    }

} as ICommand
