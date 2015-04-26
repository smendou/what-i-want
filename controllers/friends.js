var mongoose = require('mongoose');
var User = mongoose.model('User');

/**
 * GET /
 * Friends page.
 */
exports.getAccepted = function(req, res, next) {
  User.getAcceptedFriends(req.user._id, function (err, friends) {
    if(err){ return next(err); }

    res.render('friends', {
      title: 'Friends',
      friends : friends
    });
  });
};

/**
 * GET /
 * Friends page.
 */
exports.getRequested = function(req, res, next) {
  User.getRequestedFriends(req.user._id, function (err, friends) {
    if(err){ return next(err); }

    res.render('friends', {
      title: 'Friends',
      friends : friends
    });
  });
};

/**
 * GET /
 * Friends page.
 */
exports.getPending = function(req, res, next) {
  User.getPendingFriends(req.user._id, function (err, friends) {
    if(err){ return next(err); }

    res.render('friends', {
      title: 'Friends',
      friends : friends
    });
  });
};

/**
 * GET /
 * Friends page.
 */
exports.getSearch = function(req, res, next) {
  User.getPendingFriends(req.user._id, function (err, friends) {
    if(err){ return next(err); }

    res.render('friends', {
      title: 'Friends',
      friends : friends
    });
  });
};

/**
 * POST /
 * Get friends list.
 */
exports.postSearch = function(req, res, next) {
  User.find({'profile.name' : req.body.name}, function(err, users){
    if(err){ return next(err); }

    res.render('friends', {
	    title: 'Friends',
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