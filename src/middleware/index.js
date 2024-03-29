function blockAccess(req, res, next) {
  return res.redirect('/');
}

function loggedOut(req, res, next) {
  if (req.session && req.session.userId) {
    return res.redirect('/profile');
  }
  return next();
}

function requiresLogin(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    var err = new Error('You must be logged in to view this page.');
    err.status = 401;
    return next(err);
  }
}

// function requiresMembership(req, res, next) {
//   if (req.session.member)
// }

module.exports.loggedOut = loggedOut;
module.exports.requiresLogin = requiresLogin;
module.exports.blockAccess = blockAccess;
