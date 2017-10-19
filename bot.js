const Discord = require('discord');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Je suis prêt!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

client.login(process.env.BOT_TOKEN);
