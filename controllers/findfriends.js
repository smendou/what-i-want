var mongoose = require('mongoose');
var User = mongoose.model('User');

/**
 * GET /
 * Find Friends page.
 */
exports.index = function(req, res) {
  res.render('findfriends', {
    title: 'Find Friends'
  });
};

/**
 * POST /
 * Get friends liss.
 */
exports.postFindFriends = function(req, res, next) {
  User.find(function(err, users){
    if(err){ return next(err); }

    res.json(users);
  });
};