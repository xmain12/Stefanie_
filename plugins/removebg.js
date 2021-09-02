let WhatsAlexa = require('../events');
let {MessageType, Mimetype} = require('@adiwajshing/baileys');
let Config = require('../config');
let fs = require('fs');
let got = require('got');
let FormData = require('form-data');
let stream = require('stream');
let {promisify} = require('util');
let pipeline = promisify(stream.pipeline);
let Language = require('../language');
let Lang = Language.getString('removebg');

if (Config.WORKTYPE == 'private') {

    WhatsAlexa.addCommand({pattern: 'removebg ?(.*)', fromMe: true, desc: Lang.REMOVEBG_DESC}, (async (message, match) => {    

        if (message.reply_message === false || message.reply_message.image === false) return await message.client.sendMessage(message.jid,Lang.NEED_PHOTO,MessageType.text);
        if (Config.RBG_API_KEY === false) return await message.client.sendMessage(message.jid,Lang.NO_API_KEY.replace('remove.bg', 'https://github.com/phaticusthiccy/WhatsAsenaDuplicated/wiki/Remove-BG-API-Key'),MessageType.text);
    
        var load = await message.reply(Lang.RBGING);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        var form = new FormData();
        form.append('image_file', fs.createReadStream(location));
        form.append('size', 'auto');

        var rbg = await got.stream.post('https://api.remove.bg/v1.0/removebg', {
            body: form,
            headers: {
                'X-Api-Key': Config.RBG_API_KEY
            }
        }); 
    
        await pipeline(
		    rbg,
		    fs.createWriteStream('rbg.png')
        );
    
        await message.client.sendMessage(message.jid,fs.readFileSync('rbg.png'), MessageType.document, {filename: 'WhatsAsena.png', mimetype: Mimetype.png});
        await load.delete();
    }));
}
else if (Config.WORKTYPE == 'public') {

    WhatsAlexa.addCommand({pattern: 'removebg ?(.*)', fromMe: false, desc: Lang.REMOVEBG_DESC}, (async (message, match) => {    

        if (message.reply_message === false || message.reply_message.image === false) return await message.client.sendMessage(message.jid,Lang.NEED_PHOTO,MessageType.text);
        if (Config.RBG_API_KEY === false) return await message.client.sendMessage(message.jid,Lang.NO_API_KEY.replace('remove.bg', 'https://github.com/phaticusthiccy/WhatsAsenaDuplicated/wiki/Remove-BG-API-Key'),MessageType.text);
    
        var load = await message.reply(Lang.RBGING);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        var form = new FormData();
        form.append('image_file', fs.createReadStream(location));
        form.append('size', 'auto');

        var rbg = await got.stream.post('https://api.remove.bg/v1.0/removebg', {
            body: form,
            headers: {
                'X-Api-Key': Config.RBG_API_KEY
            }
        }); 
    
        await pipeline(
		    rbg,
		    fs.createWriteStream('rbg.png')
        );
    
        await message.client.sendMessage(message.jid,fs.readFileSync('rbg.png'), MessageType.document, {filename: 'WhatsAsena.png', mimetype: Mimetype.png});
        await load.delete();
    }));
    
}

