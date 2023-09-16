const passport = require('passport');

exports.isAuth = (req, res, done) => {
    return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
    return { id: user.id, role: user.role }
};

exports.cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
    //TODO : this is temporary token for testing without cookie
    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDFmYzlhMDliN2IzOWY0ZGNkZTliNSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk0NjYwNTc0fQ.Y6tfK5CVZrK7Z0q4K_RzYOuv-FENkpPMWXaOfzbknK0"
    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Zjg1NTNjM2JhOWNjOTQ2MzE5ZTRhZSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkzOTk2MzQ4fQ.JM14dj8uGRDnvrbonbOX6Lm2VVYlt4vL5yN7cilIeck"
    return token;
};