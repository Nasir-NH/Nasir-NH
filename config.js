
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61VW4/aOBj9Kyu/BpXcL0gjNTdCIEACBMis9sEkTvCQG7EDAxX/fRWYaSu1285KzZNjO5/P+XzOyRdQVpigCbqAwRdQN/gEKeqG9FIjMABGm6aoAT2QQArBAEx9ZNFSGe+gwXgS5dbJ3l9xTDpPFE8PqsVEN3eE5i3Luk/g1gN1u8tx/IuCm522E7xC3b/2nfXK2JYKO62zWRNf7RO/H7kW7NODslz51/AJ3LqKEDe4zOx6jwrUwHyCLj7EzcfgL4fyTJ4mG4fdeql2bUfz5OQRfl4eXf6ZF2dDPy93F8Y/HdSPwX/WnBOTayvtJJMVLYJwvDoYLLfxo/2CHNrhMAryppYYLSQP+ARnJUrcBJUU08uH+x6aa7SZabjglVOrkQm78yAzd7VsqZqLbXJuZNlwXl9mOAw/BvwwN4S553kZfZGfIzvwoyvdRY7SWpqnb6aquncvhIuS2om+B+4371o5/J++X8bFJteWYzVK6LFFfiIImou26xmWn510N0WzvN8y01kWZh+DL14rdE6kOsOz/rh+wSVbsSlqtc2ojfQFPA5f/OtsJEnSNvgGH9K2+RXKwzGD/qI679x6nFgJt3qdTr3ISKPYNDNuvjhWjswwr1W/wBJvc7434kbxcXZtI/pyTje8vc241UVQ0nx4CJrdPhjxvHl+ujM6oIubgAF364EGZZjQBlJclfc5Re4BmJyWKG4QvbcXIM5gJkjN7M0mW2KG071pullmxWGthpNwwswu0qhIyMhtsyfQA3VTxYgQlIwwoVVzmSJCYIYIGPx9v6mOdIOKiqIxTsAAaLwg8oKiCZIkfCafzntICazrTyWioAfSpiqmCAxo06IeuH/ACZqmKuZQ0xRVMdUhZ7GmzgqsLBuWZqpqR7F4HLrCBSIUFnXHTJIUUVQl/tb7MzhUXrAMU1Qk0RQ4xeJ0kxMMnuVt1bZMy/wNDvmP4RBtbchLoixopsIbvMzKQ4lTTMmUFN3gbfk3OJTbPz1Qolf68FOnAoHrgRQ3hIZlW+cVTN7N9r4I47hqS7q8lLHZDVADBt9NI0pxmZGOWVvCJt7jEzI7HmCQwpygr8JDDUreubyFqVklnR9msj0JRE0GHfau0A+9Gag/dqeE3WbgwwMmFJZ/0T0mf2UNgt1i/lCPJKqayPOsrEoiqw7Uz9387Sv47qwEUYhzAgbAnPcpJ0aW7TFhQULH0e1MNzMdfCP7buaHWaItMTM57ZMyFnEYJAeYjmJHOLIzU5HG7ct8PYxftO1iEehPPynS5dN8o/I6G9nYnQTuMijQItOWK69aRjEX6u12fiqP1l7LnjF3rk76dL11p6mTHBYcYbJEn7eNEiBpu8lF7lzFfmT5Y6Nzfg8k6IRj9P1hKueRqxjJpWOnYSXLmmf156182W9Wh318nmRkvBDNbDq7rim0DrrWKLMhKpkTqqfBiETn19Zxh+fhSZAz5zrHyrofGNkjZu4xl7/9XvBbAOD7a4rRPa3f7ut31/rA3YmPvfW+K/EW//8RocZmqOjVvOwrY2Hu5vbo2SlfBYPK1ApaZrmrrvli6/bXbBjq4Na5oM4hTaumAANAih0EPdBUbSdlt0yrX5xk6plrBQ/WOSRU/2aPnzhOFB+7/KaqR5DsO1FOxP1I7LR+0et6SSF9dxvQu8eZaOD2Lwa0ThwgCQAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
