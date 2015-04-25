/**
 * GET /
 * Wall of Wants page.
 */
exports.index = function(req, res) {
  res.render('wallofwants', {
    title: 'Wall of Wants'
  });
};