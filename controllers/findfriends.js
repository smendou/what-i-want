var mongoose = require('mongoose');
var User = mongoose.model('User');

/**
 * GET /
 * Find Friends page.
 */
exports.index = function(req, res, next) {
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
 * Get friends list.
 */
exports.postFindFriends = function(req, res, next) {
  User.find({'profile.name' : req.body.name}, function(err, users){
    if(err){ return next(err); }

    res.render('findfriends', {
	    title: 'Find Friends',
	    friends : users
	  });
  });
};

/**
 * POST /
 * add friend.
 */
exports.addFriend = function(req, res, next) {
  //User.requestFriend(req.user._id, req.friendid, next);
  res.send(req.user._id);
};