var drivers = require('../drivers/index');
var EventModel = {
    driver_event_mapper : {
        'sign_up': [
            drivers.Intercom,
            drivers.Mailgun
        ],
        'sign_in': [
            drivers.Intercom
        ]
    },
    find_drivers: function(event_id) {
        return this.driver_event_mapper[event_id];
    }
};

module.exports = EventModel;