var mongoose = require('mongoose');
var User = mongoose.model('User');

/**
 * GET /
 * Find Friends page.
 */
exports.index = function(req, res) {
  User.find(function(err, users){
    if(err){ return next(err); }

    res.render('findfriends', {
	    title: 'Find Friends',
	    friends : users
	  });
  });
};

/**
 * POST /
 * Get friends liss.
 */
exports.postFindFriends = function(req, res, next) {
  User.find({user.profile.name : req.body.name}, function(err, users){
    if(err){ return next(err); }

    res.render('findfriends', {
	    title: 'Find Friends',
	    friends : users
	  });
  });
};