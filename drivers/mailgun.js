var Mailgun = {
    'fire': function (event_id, payload){
        console.log(`${event_id} was fired`);
    }
}

module.exports = Mailgun