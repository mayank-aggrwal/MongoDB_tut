
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CricketerSchema = new Schema({
    name: String,
    age: Number
});

const Cricketer = mongoose.model('cricketer', CricketerSchema);

module.exports = Cricketer;