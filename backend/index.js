const TelegramBot = require('node-telegram-bot-api');

const token = '5757735968:AAEePWgh0W1NN3sMEQwx6DbTrehtkldPJBk';

const bot = new TelegramBot(token, {polling: true});

const webUrl = "https://ya.ru";

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;


  if(text === "/start"){
    await bot.sendMessage( chatId, 'Ниже появиться ассортимент заполняйте форму ))', {
        reply_markup: {
            keyboard: [
                [{text: "Заполниет форму"}]
            ]
        }
    });

    await bot.sendMessage( chatId, 'Ниже появиться ассортимент заполняйте форму ))', {
        reply_markup: {
            inline_keyboard: [
                [{text: "Сделать заказ", 
                web_app: {url: webUrl}}]
            ]
        }
    });  

    }  
});

