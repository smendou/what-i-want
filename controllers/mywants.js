/**
 * GET /
 * My Wants page.
 */
exports.index = function(req, res) {
  res.render('mywants', {
    title: 'My Wants'
  });
};