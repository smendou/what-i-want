var mongoose = require('mongoose');

var wantSchema = new mongoose.Schema({
  name: String,
  url: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Want', wantSchema);
