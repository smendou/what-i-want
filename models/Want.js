var mongoose = require('mongoose');

var wantSchema = new mongoose.Schema({
  name: String,
  url: String
});

module.exports = mongoose.model('Want', wantSchema);
