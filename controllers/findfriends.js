var mongoose = require('mongoose');
var User = mongoose.model('User');

/**
 * GET /
 * Find Friends page.
 */
exports.index = function(req, res, next) {
  User.getFriends(req.user._id, function (err, friends) {
    if(err){ return next(err); }

    res.render('findfriends', {
      title: 'Find Friends',
      friends : friends
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
  User.requestFriend(req.user._id, req.params.friendid, function(err, friendships){
    //res.json(friendships);
    User.getFriends(req.user._id, function (err, friends) {
      res.json(friends);
    });
  });
};