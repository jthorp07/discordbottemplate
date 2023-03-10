const { ChatInputCommandInteraction, SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { ConnectionPool } = require('mssql');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('modaltest')
        .setDescription('Testing modal use'),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {ConnectionPool} con 
     */
    async execute(interaction, con) {

        let comps = new ActionRowBuilder()
            .setComponents([new TextInputBuilder()
                .setCustomId('testtextinput')
                .setLabel('Test Text Input')
                .setPlaceholder('Enter some text')
                .setRequired(true)
                .setStyle(TextInputStyle.Short)
            ]);

        interaction.showModal(
            new ModalBuilder()
                .setTitle('Test')
                .setCustomId('testmodal')
                .addComponents(comps)
        );

    },
    permissions: "all"
}