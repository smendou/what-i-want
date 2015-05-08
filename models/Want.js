var mongoose = require('mongoose');

var wantSchema = new mongoose.Schema({
  name: String,
  url: String,
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Want', wantSchema);
