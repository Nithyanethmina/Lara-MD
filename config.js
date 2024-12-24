const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "CmIWCJTT#H9h08VQPz7FUxK1IOfikxS5zeaIp7ttBza-gQEO3OlE", //paste your session_id
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false", 
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",    
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "false",    
};
