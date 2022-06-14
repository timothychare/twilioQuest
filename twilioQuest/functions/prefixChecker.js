/*
this function should check for a specific prefix 
and return a specific twimil response for that prefix and no other prefixes

*/

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

exports.handler = function (context, event, callback) {
    let twiml = new Twilio.twiml.VoiceResponse();
    twiml.say('Hello World');
    if (event.From.startsWith('+1337')) {
        twiml.say('Keep Portland Weird!');      
    }
    callback(null, twiml);
};