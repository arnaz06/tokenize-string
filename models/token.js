var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tokenSchema = new Schema({},{strict: false})

module.exports = mongoose.model('Token', tokenSchema)
