const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('scrapers');

if (Config.WORKTYPE == 'public') {
Asena.addCommand({pattern: 'cnlog', fromMe: false, desc: Lang.UP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/7a8c47c246bd16d90623d.jpg";
    r_text[1] = "https://telegra.ph/file/7a8c47c246bd16d90623d.jpg";
    r_text[2] = "https://telegra.ph/file/7a8c47c246bd16d90623d.jpg";
    r_text[3] = "https://telegra.ph/file/7a8c47c246bd16d90623d.jpg";
    r_text[4] = "https://telegra.ph/file/7a8c47c246bd16d90623d.jpg";
    r_text[5] = "https://telegra.ph/file/7a8c47c246bd16d90623d.jpg";
    
        
     var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*◁○Stefanie ChangeLogs ○▷*

 *✅𝙑𝙚𝙧𝙨𝙞𝙤𝙣 5.2.3*
_2021/08/08_

◉trollpack updated
◉Added New Command ( .Admin)
◉Added Changelog View ( .changelog)
◉Update Logo pack
▸ .cat1
▸ .cat2
▸ .quby1
▸ .quby2
▸ .quby3.
◉ Added Custom Panel Command
( .setvar COMMAND: test )

*✅𝙑𝙚𝙧𝙨𝙞𝙤𝙣 5.2.2*
_2021/08/01_

◉Added new Command ( .help)
◉Added Stefanie QR session 
◉song tag Added
◉mp3 document file uploader Added ( .play muthu muthu pethi)
◉Added fulleva AI CHAT bot
( .eva on / .eva off)

*✅𝙑𝙚𝙧𝙨𝙞𝙤𝙣 5.2.1*
_2021/07/21_

◉merged: 5.1.6,5.1.7, 2.1.8, 5.1.9, 5.2.0
◉Added Custom Menu list
( login heroku >selectapp >> Settings >>>Reveal config var >>>> Add Own Captains)
◉Added Text to video effect ( .vtext / .ptext / .colortext)
◉added Tv series Details searcher ( .show got)
◉Added AI SIMSIHI on/off ( .adon on/.adon off)
◉Update song Download 
◉Plugging install Bug fixed
◉Antispm Bug fixed

*✅𝙑𝙚𝙧𝙨𝙞𝙤𝙣 4.0.1*
_2021/07/15_

◉Bug fixed
◉404 Error fixed
◉Added New Host 
◉Connect Awsh servers
◉added console (beta)
◉removed Api key and billing details from account section

*✅𝙑𝙚𝙧𝙨𝙞𝙤𝙣 4.0.0*
_2021/06/28_

◉mod apk download 
◉glitch fixed
◉Pubg logo fixed
◉Yt searcher Update 
◉video Download Update

*✅𝙑𝙚𝙧𝙨𝙞𝙤𝙣 3.9.0*
_2021/06/12_

◉New Base
◉new Update Command 
◉imagtosticker update ( .photo)
◉mp4audio update ( .mp3)

*✅𝙑𝙚𝙧𝙨𝙞𝙤𝙣 3.8.0*
_2021/06/09_

◉bug fixed
◉song uploader Bug fixed
◉video uploader Fixed
◉Yt Search Updated
◉ Wiki version 7.0.0 updated
◉fixed img Command 

*✅𝙑𝙚𝙧𝙨𝙞𝙤𝙣 3.7.0*
_2021/06/05_

◉merged: 3.0.0, 3.1.0, 3.2.0, 3.3.0, 3.4.0, 3.5.0, 3.6.0
◉Update Sticker 
◉Added Mmpack
◉Update support group 
◉added Bug Hole VIP ( .bh)
◉Added Unlimited Logo Api VIP (.textpro)

*✅𝙑𝙚𝙧𝙨𝙞𝙤𝙣 2.9.0*
_2021/05/02_

◉update songs upload 
◉ update yt search 
◉update covid js
◉Added SINHALA command list

_Conz : Lode404_
Stefanie is a first Made in sri lanka 🇱🇰chat bot for WhatsApp. Makes it easy and fun to use Whatsapp.
◼Github link : https://github.com/Kaweeshachamodk/Stefanie_ 

*━⚜STEFANIE CHANGELOG⚜━*
`}) 

 }));
}
