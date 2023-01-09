const { StringSelectMenuInteraction } = require('discord.js');
const { ConnectionPool } = require('mssql');


module.exports = {
    data: {
        customId: "genericid", // customId of buttons that will execute this command
        permissions: "all" //TODO: Implement other permission options
    },
    /**
     * 
     * @param {StringSelectMenuInteraction} interaction 
     * @param {ConnectionPool} con
     */
    async selectExecute(interaction, con) {

        //TODO: Implement button command
        await interaction.reply("You pressed a generic selectmenu option!");

    }
}