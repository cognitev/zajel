/*global describe:false, it:false, beforeEach:false, afterEach:false*/

'use strict';


var kraken = require('kraken-js'),
    express = require('express'),
    path = require('path'),
    request = require('supertest');


describe('event', function () {

    var app, mock;


    beforeEach(function (done) {
        app = express();
        app.on('start', done);
        app.use(kraken({
            basedir: path.resolve(__dirname, '..')
        }));

        mock = app.listen(1337);

    });


    afterEach(function (done) {
        mock.close(done);
    });


    it('should fire event sign_up', function (done) {
        request(mock)
            .get('/notify/sign_up')
            .expect(200)
            .expect('Content-Type', /application\/json/)
            
                .expect({'success': true})
            
            .end(function (err, res) {
                done(err);
            });
    });

});
