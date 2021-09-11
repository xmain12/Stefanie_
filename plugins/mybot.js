const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'workingbot', fromMe: false}, (async (message, match) => {

    await message.sendMessage("*Bang!! Bang!! My Bot is Stefanie*");

}));
