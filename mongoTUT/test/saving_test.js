
const mongoose = require('mongoose');
const Cricketer = require('../models/cricketers');
const assert = require('assert');

describe('Saving test', () => {

    beforeEach((done) => {
        mongoose.connection.collections.cricketers.drop(() => {
            done();
        });
    });

    it('Saving data to the DB', (done) => {

        var crick = new Cricketer({
            name: 'Rohit',
            age: 30
        });
        crick.save().then( function() {
            assert(crick.isNew === false);
            done();
        });

    });

});
