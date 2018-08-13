const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-line').Strategy,
    color: '#1EC800',
    fontColor: '#FFFFFF',
    vendor: 'line',
    displayName: 'withline'
}

module.exports.strategyConfig = {
    clientID: config.line.clientID,
    clientSecret: config.line.clientSecret,
    callbackURL: config.line.callbackURL,
    passReqToCallback: true
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        $p.authType = "line";
        $p.id = profile.id;
        $p.name = profile.displayName;
        $p.title = profile.displayName;
        $p.image = profile._json.profile_image;

        process(req, accessToken, MainDB, $p, done);
    }
}