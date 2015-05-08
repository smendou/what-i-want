var Want = require('../models/Want');
/**
 * GET /
 * My Wants page.
 */
exports.getMyWants = function(req, res, next) {
  res.render('mywants', {
    title: 'My Wants'
  });
};

/**
 * POST /
 * Add new want.
 */
exports.postNewWant = function(req, res, next) {  
  var want = new Want({
    name: req.body.name,
    url: req.body.url
  });
  want.save(function(err) {
  	if (err) return next(err);
  	exports.getMyWants(req, res, next);
  });
};