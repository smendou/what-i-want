var Want = require('../models/Want');
/**
 * GET /
 * My Wants page.
 */
exports.getMyWants = function(req, res) {
  res.render('mywants', {
    title: 'My Wants'
  });
};

/**
 * POST /
 * Get friends list.
 */
exports.postNewWant = function(req, res, next) {
  
  var want = new Want({
    name: req.body.name,
    url: req.body.url
  });
};