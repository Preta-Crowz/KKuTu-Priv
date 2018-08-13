const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-reddit').Strategy,
    color: '#1EC800',
    fontColor: '#FFFFFF',
    vendor: 'reddit',
    displayName: 'withreddit'
}

module.exports.strategyConfig = {
    clientID: config.reddit.clientID,
    clientSecret: config.reddit.clientSecret,
    callbackURL: config.reddit.callbackURL,
    passReqToCallback: true
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        $p.authType = "reddit";
        $p.id = profile.id;
        $p.name = profile.displayName;
        $p.title = profile.displayName;
        $p.image = profile._json.profile_image;

        process(req, accessToken, MainDB, $p, done);
    }
}