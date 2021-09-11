const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'version', fromMe: false}, (async (message, match) => {

    await message.sendMessage("*◈▱Stefanie VERSION CHECKER▱◈*\n\n*⚙Stefanie ▻5.2.3*\n*Global Stable*");

}));
