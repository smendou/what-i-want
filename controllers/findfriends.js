/**
 * GET /
 * Find Friends page.
 */
exports.index = function(req, res) {
  res.render('findfriends', {
    title: 'Find Friends'
  });
};