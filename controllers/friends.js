var mongoose = require('mongoose');
var User = mongoose.model('User');

/**
 * GET /
 * Friends page.
 */
exports.getSearch = function(req, res, next) {
  User.getPendingFriends(req.user._id, function (err, friends) {
    var usrs = {};
    if(err){ return next(err); }
    usrs.pending = (isEmpty(friends))?null:friends;
    User.getRequestedFriends(req.user._id, function (err, friends) {
      if(err){ return next(err); }
      usrs.requested = (isEmpty(friends))?null:friends;
      User.getAcceptedFriends(req.user._id, function (err, friends) {
        if(err){ return next(err); }
        usrs.accepted = (isEmpty(friends))?null:friends;
        res.render('friends', {
          title: 'Friends',
          usrs : usrs
        });
      });  
    });
  });
};

/**
 * POST /
 * Get friends list.
 */
exports.postSearch = function(req, res, next) {
  
  User.find({'profile.name' : req.body.search}, function(err, users){
    if(err){ return next(err); }

    res.render('search', {
	    title: 'Search',
	    usrs : users
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
    req.flash('success', { msg: 'Your request has been send.' });
    res.redirect('../../friends');
  });
};

var isEmpty = function(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
};
