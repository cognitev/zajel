'use strict';

var IndexModel = require('../models/index');
var EventModel = require('../models/event');


module.exports = function (router) {

    var model = new IndexModel();
    router.get('/', function (req, res) {
        
        res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');
        
    });

    router.get('/notify/:event_id', function (req, res) {
        var event_id = req['params']['event_id'];
        var drivers = EventModel.find_drivers(event_id);
        drivers.map( function(driver) {
            driver.fire(event_id, req['body']);
        });
        res.send({'success': true});
    });


};
