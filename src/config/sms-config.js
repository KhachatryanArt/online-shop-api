require('dotenv').config();

module.exports = {
    SID: process.env.TWILIO_ACCOUNT_SID,
    Token: process.env.TWILIO_AUTH_TOKEN,
    Number: process.env.NUMBER
};