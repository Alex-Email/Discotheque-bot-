const Discord = require('discord.js')
const bot = new Discord.Client();

const token = 'NzA3MjY3OTU4NTU2MzI4MDI3.XvDtcQ.YqbBmDeV3D0xmi8ZGIHdBr2te4I';

bot.on('ready', () =>{
    console.log('Le bot est en ligne , ouai!!!');
})    

bot.login(token);