let thiccysapi = require('textmaker-thiccy'); // Import NPM Package

let WhatsAlexa = require('../events');
let {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
let fs = require('fs');
let Config = require('../config')
let axios = require('axios')
let request = require('request');
let os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''
if (Config.LANG == 'TR') desc_msg = 'Sınırsız erişime sahip textmaker araçlarını gösterir.'
if (Config.LANG == 'EN') desc_msg = 'Shows textmaker tools with unlimited access.'
if (Config.LANG == 'RU') desc_msg = 'Показывает инструменты для создания текстов с неограниченным доступом.'
if (Config.LANG == 'AZ') desc_msg = 'Sınırsız girişi olan textmaker alətləri göstərir.'
if (Config.LANG == 'PT') desc_msg = 'Mostra ferramentas textmaker com acesso ilimitado.'
if (Config.LANG == 'ID') desc_msg = 'Menampilkan alat pembuat teks dengan akses tak terbatas.'
if (Config.LANG == 'ML') desc_msg = 'പരിധിയില്ലാത്ത ആക്സസ് ഉള്ള ടെക്സ്റ്റ് മേക്കർ ഉപകരണങ്ങൾ കാണിക്കുന്നു.'
if (Config.LANG == 'HI') desc_msg = 'असीमित एक्सेस के साथ टेक्स्टमेकर टूल दिखाता है।'
if (Config.LANG == 'ES') desc_msg = 'Muestra herramientas de creación de textos con acceso ilimitado.'
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

WhatsAlexa.addCommand({pattern: 'textmaker$', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    var t6 = ''
    var t7 = ''
    var t8 = ''
    var t9 = ''
    var t10 = ''
    var t11 = ''
    var t12 = ''
    var t13 = ''
    var t14 = ''
    var t15 = ''
    var t16 = ''
    var t17 = ''
    var t18 = ''
    var t19 = ''
    var t20 = ''
    var t21 = ''
    var t22 = ''
    var t23 = ''
    var t24 = ''
    var t25 = ''
    var t26 = ''
    var t27 = ''
    var t28 = ''
    var t29 = ''
    var t30 = ''
    var t31 = ''
    var t32 = ''
    var t33 = ''
    var t34 = ''
    var t35 = ''
    var t36 = ''
    var t37 = ''
    var t38 = ''
    var t39 = ''
    var t40 = ''
    var t41 = ''
    var t42 = ''
    var t43 = ''
    var t44 = ''
    var t45 = ''
    var t46 = ''
    var t47 = ''
    var t48 = ''
    var t49 = ''
    var t50 = ''
    var t51 = ''
    var t52 = ''
    var t53 = ''
    var t54 = ''
    var t55 = ''
    var t56 = ''
    var t57 = ''
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        t1 = 'Şeytan Temalı Logo Yapar.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Ayı İkonu İçeren Logo Yapar.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Neon Efekti İçeren Logo Yapar.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = '2. Bir Neon Efekti İçeren Logo Yapar.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Yıldırım Temalı Logo Yapar.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Joker Temalı Logo Yapar.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Ninja Temalı Logo Yapar.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Parıltı Temalı Logo Yapar.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Bokeh Efekti İçeren Logo Yapar.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Kurt İkonu İçeren Logo Yapar.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Siyah Beyaz Marvel Logosu Yapar.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Renkli Marvel Logosu Yapar.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Avengers Logosu Yapar.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Glitch Efekti İçeren Logo Yapar.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Graffiti Temalı Logo Yapar.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = '2. Bir Graffiti Temalı Logo Yapar.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Aslan Temalı Logo Yapar.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = '3. Bir Neon Temalı Logo Yapar.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Buz Temalı Logo Yapar.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Uzay Temalı Logo Yapar.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Duman Efekti İçeren Logo Yapar.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Naruto Temalı Logo Yapar.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Glow Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html
        t25 = 'Alev Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Harry Potter Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = '4. Bir Neon Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Mezarlık Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Kupa Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t30 = 'Taş ve Çekiç Temalı Logo Yapar.' // https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html
        t31 = '2. Bir Glitch Efekti İçeren Logo Yapar.' // https://textpro.me/create-a-glitch-text-effect-online-free-1026.html
        t32 = '2. Bir Harry Potter Temalı Logo Yapar.' // https://textpro.me/create-harry-potter-text-effect-online-1025.html 
        t33 = 'Renk Gradyan Temalı Logo Yapar.' // https://textpro.me/online-3d-gradient-text-effect-generator-1020.html
        t34 = '5. Bir Neon Temalı Logo Yapar.' // https://textpro.me/create-3d-neon-light-text-effect-online-1028.html
        t35 = 'Magme Temalı Logo Yapar.' // https://textpro.me/create-a-magma-hot-text-effect-online-1030.html 
        t36 = 'Kırık Cam Temalı Logo Yapar.' // https://textpro.me/broken-glass-text-effect-free-online-1023.html
        t37 = 'Kağıt Temalı Logo Yapar.' // https://textpro.me/create-art-paper-cut-text-effect-online-1022.html
        t38 = 'Metal Temalı Logo Yapar.' // https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html
        t39 = 'Suluboya Temalı Logo Yapar.' // https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html
        t40 = 'Çizim Efekti ile Renkli Logo Yapar.' // https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html 
        t41 = '3 Boyutlu Baskı Temalı Logo Yapar.' // https://textpro.me/create-layered-text-effects-online-free-1032.html
        t42 = '2. Bir Yıldırım Temalı Logo Yapar.' // https://textpro.me/online-thunder-text-effect-generator-1031.html
        t43 = 'Transformers Temalı Logo Yapar.' // https://textpro.me/create-a-transformer-text-effect-online-1035.html 
        t44 = 'Kan Temalı Logo Yapar.' // https://textpro.me/horror-blood-text-effect-online-883.html
        t45 = '2. Bir Kan Temalı Logo Yapar.' // https://textpro.me/blood-text-on-the-frosted-glass-941.html
        t46 = '2. Bir Alev Temalı Logo Yapar.' // https://textpro.me/halloween-fire-text-effect-940.html
        t47 = 'Siyah ve Pembe Temalı Logo Yapar.' // https://textpro.me/create-blackpink-logo-style-online-1001.html
        t48 = 'Kum Temalı Logo Yapar.' // https://textpro.me/write-in-sand-summer-beach-free-online-991.html
        t49 = '2. Bir Kum Temalı Logo Yapar.' // https://textpro.me/sand-writing-text-effect-online-990.html
        t50 = '3. Bir Kum Temalı Logo Yapar.' // https://textpro.me/sand-engraved-3d-text-effect-989.html 
        t51 = '4. Bir Kum Temalı Logo Yapar.' // https://textpro.me/create-a-summery-sand-writing-text-effect-988.html
        t52 = 'Dut Temalı Logo Yapar.' // https://textpro.me/create-berry-text-effect-online-free-1033.html
        t53 = '3. Bir Graffiti Temalı Logo Yapar.' // https://textpro.me/break-wall-text-effect-871.html 
        t54 = 'PHub Temalı Logo Yapar.' // https://textpro.me/pornhub-style-logo-online-generator-free-977.html
        t55 = '2. Bir Şeytan Temalı Logo Yapar.' // https://textpro.me/create-green-horror-style-text-effect-online-1036.html
        t56 = 'Retro Temalı Logo Yapar.' // https://textpro.me/video-game-classic-8-bit-text-effect-1037.html
        t57 = 'Bilim Kurgu Temalı Logo Yapar.' // https://textpro.me/create-science-fiction-text-effect-online-free-1038.html
    }
    else {
        t1 = 'Makes Devil Themed Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Makes Logo With Bear Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Makes Logo With Neon Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Makes Logo With Second Neon Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Makes Lightning Themed Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Makes Joker Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Makes Ninja Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Makes Glitter Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Makes Logo With Bokeh Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Makes Logo With Wolf Icon.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Makes Black And White Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Makes Colorful Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Makes The Avengers Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Makes Logo With Glitch Effect.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Makes Graffiti Themed Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Makes a Second Graffiti Themed Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Makes Lion Themed Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Makes a Third Neon Themed Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Makes Ice Themed Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Makes Space Themed Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Makes Logo With Smoke Effect.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Makes a Naruto Themed Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Makes a Glow Themed Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Makes Flame Themed Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Makes a Harry Potter Themed Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Makes a Fourth Neon-Themed Logo.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Makes a Cemetery Themed Logo.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Makes a Cup Themed Logo.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t30 = 'Makes Stone and Hammer Themed Logo.' // https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html
        t31 = 'Makes a Second With Glitch Effect.' // https://textpro.me/create-a-glitch-text-effect-online-free-1026.html 
        t32 = 'Makes a Second Harry Potter Themed Logo.' // https://textpro.me/create-harry-potter-text-effect-online-1025.html 
        t33 = 'Makes a Color Gradient Themed Logo.' // https://textpro.me/online-3d-gradient-text-effect-generator-1020.html
        t34 = 'Makes a Fifth Neon-Themed Logo.' // https://textpro.me/create-3d-neon-light-text-effect-online-1028.html 
        t35 = 'Makes Magma Themed Logo.' // https://textpro.me/create-a-magma-hot-text-effect-online-1030.html
        t36 = 'Makes Broken Glass Themed Logo.' // https://textpro.me/broken-glass-text-effect-free-online-1023.html
        t37 = 'Makes Paper Themed Logo.' // https://textpro.me/create-art-paper-cut-text-effect-online-1022.html
        t38 = 'Makes Metal Themed Logo.' // https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html
        t39 = 'Makes Watercolor Themed Logo.' // https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html
        t40 = 'Makes Colorful Logo with Art Effect.' // https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html
        t41 = 'Makes 3D Printing Themed Logos.' // https://textpro.me/create-layered-text-effects-online-free-1032.html
        t42 = 'Makes a Second Lightning-Themed Logo.' // https://textpro.me/online-thunder-text-effect-generator-1031.html
        t43 = 'Makes Transformers Themed Logo.' // https://textpro.me/create-a-transformer-text-effect-online-1035.html
        t44 = 'Makes Blood Themed Logo.' // https://textpro.me/horror-blood-text-effect-online-883.html
        t45 = 'Makes a Second Blood Themed Logo.' // https://textpro.me/blood-text-on-the-frosted-glass-941.html
        t46 = 'Makes a Second Flame Themed Logo' // https://textpro.me/halloween-fire-text-effect-940.html
        t47 = 'Makes Black and Pink Themed Logo.' // https://textpro.me/create-blackpink-logo-style-online-1001.html
        t48 = 'Makes Sand Themed Logo.' // https://textpro.me/write-in-sand-summer-beach-free-online-991.html
        t49 = 'Makes a Second Sand Themed Logo.' // https://textpro.me/sand-writing-text-effect-online-990.html
        t50 = 'Makes a Third Sand Themed Logo.' // https://textpro.me/sand-engraved-3d-text-effect-989.html 
        t51 = 'Makes a Fourth Sand Themed Logo.' // https://textpro.me/create-a-summery-sand-writing-text-effect-988.html
        t52 = 'Makes Mulberry Themed Logo.' // https://textpro.me/create-berry-text-effect-online-free-1033.html
        t53 = 'Makes a Third Graffiti Themed Logo.' // https://textpro.me/break-wall-text-effect-871.html
        t54 = 'Makes Phub Themed Logo.' // https://textpro.me/pornhub-style-logo-online-generator-free-977.html
        t55 = 'Makes a Second Devil-Themed Logo.' // https://textpro.me/create-green-horror-style-text-effect-online-1036.html
        t56 = 'Makes Retro Themed Logo.' // https://textpro.me/video-game-classic-8-bit-text-effect-1037.html
        t57 = 'Makes a Sci-Fi Themed Logo.' // https://textpro.me/create-science-fiction-text-effect-online-free-1038.html
    }
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        usage_cmd = '⌨️ *Örnek:* _'
        command_cmd = '💻 *Komut:* '
        desc_cmd = 'ℹ️ *Açıklama:* _'
    } else { 
        usage_cmd = '*⌨️ Example:* _'
        command_cmd = '🆓 *Command:* '
        desc_cmd = '🏷 *Description:* _'
    }
    const msg = command_cmd + '```.textdevil``` \n' + t1 + '_\n' + usage_cmd + '.textdevil alexa\n\n' +
        command_cmd + '```.text2devil``` \n' + desc_cmd + t55 + '_\n' + usage_cmd + '.text2devil alexa\n\n' +
        command_cmd + '```.textbear``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '.textbear alexa\n\n' +
        command_cmd + '```.textwolf``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '.textwolf haii;alexa_\n\n' +
        command_cmd + '```.textneon```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '.textneon alexa\n\n' +
        command_cmd + '```.text2neon``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '.text2neon alexa\n\n' +
        command_cmd + '```.text3neon``` \n' + desc_cmd + t18 + '_\n' + usage_cmd + '.text3neon alexa\n\n' +
        command_cmd + '```.text4neon``` \n' + desc_cmd + t27 + '_\n' + usage_cmd + '.text4neon alexa\n\n' +
        command_cmd + '```.text5neon``` \n' + desc_cmd + t34 + '_\n' + usage_cmd + '.text5neon alexa\n\n' +
        command_cmd + '```.textlight``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '.textlight alexa\n\n' +
        command_cmd + '```.textjoker``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '.textjoker alexa\n\n' +
        command_cmd + '```.textninja``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '.textninja haii;alexa_\n\n' +
        command_cmd + '```.textglitter``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '.textglitter alexa\n\n' +
        command_cmd + '```.textbokeh``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '.textbokeh alexa\n\n' +
        command_cmd + '```.textmarvel``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '.textmarvel haii;alexa_\n\n' +
        command_cmd + '```.text2marvel``` \n' + desc_cmd + t12 + '_\n' + usage_cmd + '.text2marvel haii;alexa_\n\n' +
        command_cmd + '```.textavengers``` \n' + desc_cmd + t13 + '_\n' + usage_cmd + '.textavengers haii;alexa_\n\n' +
        command_cmd + '```.textgraf``` \n' + desc_cmd + t15 + '_\n' + usage_cmd + '.textgraf haii;alexa_\n\n' +
        command_cmd + '```.text2graf``` \n' + desc_cmd + t16 + '_\n' + usage_cmd + '.text2graf haii;alexa_\n\n' +  
        command_cmd + '```.text3graf``` \n' + desc_cmd + t53 + '_\n' + usage_cmd + '.text3graf alexa\n\n' +
        command_cmd + '```.textlion``` \n' + desc_cmd + t17 + '_\n' + usage_cmd + '.textlion haii;alexa_\n\n' +
        command_cmd + '```.textice``` \n' + desc_cmd + t19 + '_\n' + usage_cmd + '.textice alexa\n\n' +
        command_cmd + '```.textspace``` \n' + desc_cmd + t20 + '_\n' + usage_cmd + '.textspace haii;alexa_\n\n' +
        command_cmd + '```.textsmoke``` \n' + desc_cmd + t21 + '_\n' + usage_cmd + '.textsmoke alexa\n\n' + // Thanks for @Unique_hunter for base.
        command_cmd + '```.textglow``` \n' + desc_cmd + t23 + '_\n' + usage_cmd + '.textglow alexa\n\n' +
        command_cmd + '```.textfire``` \n' + desc_cmd + t25 + '_\n' + usage_cmd + '.textfire alexa\n\n' +
        command_cmd + '```.text2fire``` \n' + desc_cmd + t46 + '_\n' + usage_cmd + '.text2fire alexa\n\n' +
        command_cmd + '```.textharry``` \n' + desc_cmd + t26 + '_\n' + usage_cmd + '.textharry alexa\n\n' +
        command_cmd + '```.text2harry``` \n' + desc_cmd + t32 + '_\n' + usage_cmd + '.text2harry alexa\n\n' +
        command_cmd + '```.textcup``` \n' + desc_cmd + t29 + '_\n' + usage_cmd + '.textcup alexa\n\n' +
        command_cmd + '```.textcemetery``` \n' + desc_cmd + t28 + '_\n' + usage_cmd + '.textcemetery alexa\n\n' +
        command_cmd + '```.textstone``` \n' + desc_cmd + t30 + '_\n' + usage_cmd + '.textstone alexa\n\n' +
        command_cmd + '```.textgradient``` \n' + desc_cmd + t33 + '_\n' + usage_cmd + '.textgradient alexa\n\n' +
        command_cmd + '```.textmagma``` \n' + desc_cmd + t35 + '_\n' + usage_cmd + '.textmagma alexa\n\n' +
        command_cmd + '```.textbglass``` \n' + desc_cmd + t36 + '_\n' + usage_cmd + '.textbglass alexa\n\n' +
        command_cmd + '```.textpaper``` \n' + desc_cmd + t37 + '_\n' + usage_cmd + '.textpaper alexa\n\n' +
        command_cmd + '```.textmetal``` \n' + desc_cmd + t38 + '_\n' + usage_cmd + '.textmetal alexa\n\n' +
        command_cmd + '```.textwcolor``` \n' + desc_cmd + t39 + '_\n' + usage_cmd + '.textwcolor alexa\n\n' +
        command_cmd + '```.textart``` \n' + desc_cmd + t40 + '_\n' + usage_cmd + '.textart alexa\n\n' +
        command_cmd + '```.text3d``` \n' + desc_cmd + t41 + '_\n' + usage_cmd + '.text3d haii;alexa_\n\n' +
        command_cmd + '```.text2light``` \n' + desc_cmd + t42 + '_\n' + usage_cmd + '.text2light alexa\n\n' +
        command_cmd + '```.textrobo``` \n' + desc_cmd + t43 + '_\n' + usage_cmd + '.textrobo alexa\n\n' +
        command_cmd + '```.textblood``` \n' + desc_cmd + t44 + '_\n' + usage_cmd + '.textblood alexa\n\n' +
        command_cmd + '```.text2blood``` \n' + desc_cmd + t45 + '_\n' + usage_cmd + '.text2blood alexa\n\n' +
        command_cmd + '```.textpink``` \n' + desc_cmd + t47 + '_\n' + usage_cmd + '.textpink alexa\n\n' +
        command_cmd + '```.textsand``` \n' + desc_cmd + t48 + '_\n' + usage_cmd + '.textsand alexa\n\n' +
        command_cmd + '```.text2sand``` \n' + desc_cmd + t49 + '_\n' + usage_cmd + '.text2sans alexa\n\n' +
        command_cmd + '```.text3sand``` \n' + desc_cmd + t50 + '_\n' + usage_cmd + '.text3sand alexa\n\n' +
        command_cmd + '```.text4sand``` \n' + desc_cmd + t51 + '_\n' + usage_cmd + '.text4sand alexa\n\n' +
        command_cmd + '```.textberry``` \n' + desc_cmd + t52 + '_\n' + usage_cmd + '.textberry alexa\n\n' +
        command_cmd + '```.texthub``` \n' + desc_cmd + t54 + '_\n' + usage_cmd + '.texthub Thiccy;Hub_\n\n' +
        command_cmd + '```.textretro``` \n' + desc_cmd + t56 + '_\n' + usage_cmd + '.textretro haii;alexa_\n\n' +
        command_cmd + '```.textsci``` \n' + desc_cmd + t57 + '_\n' + usage_cmd + '.textsci alexa\n\n' +
        command_cmd + '```.textglitch``` \n' + desc_cmd + t14 + '_\n' + usage_cmd + '.textglitch haii;alexa_\n\n' +
        command_cmd + '```.text2glitch``` \n' + desc_cmd + t31 + '_\n' + usage_cmd + '.text2glitch haii;alexa_'
    await message.client.sendMessage(message.jid,msg, MessageType.text, { quoted: message.data })
}));
WhatsAlexa.addCommand({pattern: 'textdevil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/devil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/devil.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textsci ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/sci.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/sci.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'text2devil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/devil2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/devil2.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'texthub ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/hub.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/hub.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textretro ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/retr.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/retr.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'text3graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/break-wall-text-effect-871.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/t3gr.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/t3gr.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textberry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/bry.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/bry.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'text4sand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-summery-sand-writing-text-effect-988.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/t4snd.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/t4snd.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'text3sand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/t3snd.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/t3snd.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'text2sand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/sand-writing-text-effect-online-990.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/t2snd.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/t2snd.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textsand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/snd.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/snd.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'text2fire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/halloween-fire-text-effect-940.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/fh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/fh.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textpink ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/tpink.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/tpink.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'text2blood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/cbld.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/cbld.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textblood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/horror-blood-text-effect-online-883.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/bld.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/bld.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'text2light ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/t2lgh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/t2lgh.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textrobo ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/robo.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/robo.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'text3d ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/create-layered-text-effects-online-free-1032.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/3dl.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/3dl.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textart ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/tart.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/tart.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textwcolor ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/wcolor.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/wcolor.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textmagma ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/magma.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/magma.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textmetal ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/metal.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/metal.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textpaper ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/papert.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/papert.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textbglass ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/glass.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/glass.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'text5neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/t5neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/t5neon.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textgradient ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-3d-gradient-text-effect-generator-1020.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/tgrone.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/tgrone.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'text2harry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/hp2n.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/hp2n.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textstone ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/stone.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/stone.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textbear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/bear.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/bear.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textwolf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/wolf.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/wolf.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textneon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/neon.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'text2neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/neon-text-effect-online-879.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/neon2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/neon2.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textlight ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/thunder-text-effect-online-881.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/li.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/li.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textjoker ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/joker.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/joker.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textninja ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/create-ninja-logo-online-935.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/ninja.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/ninja.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textglitter ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/tt.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/tt.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textbokeh ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/bkh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/bkh.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textmarvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/marvel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/marvel.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'text2marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/mar2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/mar2.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textavengers ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/aven.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/aven.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'text2glitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, './Stefanie/t2gl.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/t2gl.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textglitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/tt2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/tt2.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textgraf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/ttgra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/ttgra.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'text2graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/t2gra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/t2gra.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textlion ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/lion.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/lion.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'text3neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/neon-text-effect-online-963.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/neon3.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/neon3.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textice ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/ice.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/ice.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textspace ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/space.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/space.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textsmoke ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/smoke.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/smoke.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textglow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var download = async(uri, filename, callback) => {
        await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };
    var uri = encodeURI(match[1])
    await download(`https://api.xteam.xyz/photooxy/neonlight?text=${uri}&APIKEY=da5fb2b73ae3e451`, './Stefanie/glowttp.jpg', async() => {                          
        await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/glowttp.jpg'), MessageType.image, { caption: Config.CK})
    })
}));
WhatsAlexa.addCommand({pattern: 'textfire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/tfire.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/tfire.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textharry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/hp.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/hp.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'text4neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/t4n.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/t4n.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textcemetery ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/cmth.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/cmth.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
WhatsAlexa.addCommand({pattern: 'textcup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, './Stefanie/cup.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('./Stefanie/cup.jpg'), MessageType.image, { caption: Config.CK})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
