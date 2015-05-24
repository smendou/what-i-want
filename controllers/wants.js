var Want = require('../models/Want');
/**
 * GET /
 * My Wants page.
 */
exports.getMyWants = function(req, res, next) {
  Want.find({'user':req.user._id},function(err, wants){
    if(err){ return next(err); }

    res.render('wants', {
	    title: 'Wants',
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
  	req.user.save(function(err) {
  		if (err) return next(err);
  		res.redirect('../wants/'+req.user._id);
  	});
  });
};

exports.getWant = function(req, res, next, id) {
  var query = Want.findById(id);

  query.exec(function (err, want){
    if (err) { return next(err); }
    if (!want) { return next(new Error('can\'t find want')); }

    req.want = want;
    return next();
  });
};
