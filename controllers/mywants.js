var Want = require('../models/Want');
/**
 * GET /
 * My Wants page.
 */
exports.getMyWants = function(req, res, next) {
  Want.find({}, function(err, wants){
    if(err){ return next(err); }

    res.render('mywants', {
	    title: 'My Wants',
	    wants : wants
	  });
  });
};

/**
 * POST /
 * Add new want.
 */
exports.postNewWant = function(req, res, next) {  
  var want = new Want({
    name: req.body.name,
    url: req.body.url,
    user : req.user
  });

  want.save(function(err) {
  	if (err) return next(err);
  	req.user.wants.push(want);
  	exports.getMyWants(req, res, next);
  });
};
