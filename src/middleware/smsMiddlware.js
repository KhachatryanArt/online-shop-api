const config = require("../config/sms-config")
const client = require('twilio')(config.SID, config.Token);

module.exports = async (ctx, next) => {
    const number = ctx.request.body.number
    await client.messages
        .create({
            body: 'Some text ',
            from: `${config.Number}`,
            to: `${number}`
        })
        .then(message => console.log(message.sid));
    next()
}
