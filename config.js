
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61Va4+iSBT9K5v6qhneICadTMlDEfEB0j42+6GE4qEISBUqTvzvG+zumU5mtqc3GT4Vl6p7z7l1zuUbyIuUYBs3oP8NlFV6RhS3S9qUGPTBoI4iXIEuCBFFoA/wbHF6XjA8QSXhj5Nz0vGyxQ6Pn5Wic6t9tRNeJ8oOjbfG5gncu6Csd1kafJDQ7603NTwMvSmFe/bWaYL9biz0zJrtZRD6i04ebHPLZdZsm7DNiNIqzWOjTPARVyizcTNHafU5+AdHEtODRYTJ85wJdTMf9uiElczGEHPnomR5HhVEm06Wgvg5+GEztjO6lePhKbjx+sA1Bvze7414YYDSoeBeO5WlrazZiTNe4JM0znFohTinKW0+3XcPqnv9ulcyXxUPW9Mt18/ubtEkRhX6K33fnLllJ1Mvl44ZfA44cxsWKCdMNTnpc8w20mDPjivqBKtsqBYnfRoOzYnKuf7+8B74vHrTyuH/9F22sJAIc75emispY31uKA63EsPThaQ8e1KULJfno8pWyuryOfiFFe7I0tbm6dmG+5xNKDx5W08NSSbXSGOaI79QXGOxSS8/4CNaVx+hzE/XlJtu/PnNitDFXpnWBdmKRRhR5utTZzQSBVddG5eGi/S4cM7G7Tx3RxaRburO9urbbRXLYcGOT+rI2R7hzLR1O748PRgdcGOFoM/du6DCcUpohWha5G2MF4QuQOHZw0GF6aO9YLr09NhJNP7khJHtz7QAdly6Qg3s4IHfdEpCPR9WHrcynkAXlFURYEJwOEoJLarGwYSgGBPQ//txUy3pCh8LisdpCPpA5QWRFxRVkCThK/lySRAlqCy/5JiCLoiq4uhg0KdVjbvgcYCVWJEdSLyss4ZsqLqmG6Y8MGVNlSSehWZL8fhSdJkeMaHoWII+p0iS3JP5Hnvv/hkcqsKLOt/TVI2VzYHJ8xwv6hqEPbXXEw1B+Q0O+U/h4BXIa5ogcqwsCqwim5ym6qrK6UZPNwYm+zEOVbr/0wU5vtIXP7UqELguiNKKUD+vy6xA4ZvZ3j6iICjqnHpNHmjtAleg/y6MKU3zmLTM6hxVQZKesdbyAP0IZQR/Fx6ucPjG5XWYakXY+mHpLvSRMxiBFnub6Kfe9JWfu5OjdjOYo0NKKMr/iiuM2nj2OM1JYk8VeZ6Ve5LI9vrK1zZ+/467LRNiitKMgD7QZgrlxI1uzOd2RvzhEBox1GIIfvB88/GLTzZrosVyxJA8EFN/ER5QNAqGwomdaoo0rvezZzPYq2vXXcCnXyQBfRCd5WAPN9WmyZnmdju4vSJLHGYXJM36orlnd3PNNzMnGWRoSA97dW5dr852stgqSZkSLmc2EbTV4YQpraWPEySLZ3kAn9pqIT6nAX5fzJ1bFbSOClNtvGWycgyHrTnH4G4dpG2Vc2yLgZoy8Sa34HCxCbPxctOJp3hyzAaTsQqvm2Ns2yYsEExMTyBICKbn/euEeUy47PXPkr56P328Ril+DOrXq/rdjb7gbnXH3rvvUrxO/v+YnoOVqcBiljPKWJhZmTHaDvOrMKAy1Rd1x9sVt8xdW8wz6/sQ3FsDlBmiUVEdQR+Q4w6BLqiKulWxlUfFB5U0GFv64oV1hgiFP5zxC7MpwsuueVWUI0SSVpS2mIzEVuYNLEuPIvpmNADbR+uw4P4vIJfhFRsJAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
