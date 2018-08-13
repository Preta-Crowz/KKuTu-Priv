const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-mixin').Strategy,
    color: '#1EC800',
    fontColor: '#FFFFFF',
    vendor: 'mixin',
    displayName: 'withmixin'
}

module.exports.strategyConfig = {
    clientID: config.mixin.clientID,
    clientSecret: config.mixin.clientSecret,
    callbackURL: config.mixin.callbackURL,
    passReqToCallback: true
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        $p.authType = "mixin";
        $p.id = profile.id;
        $p.name = profile.displayName;
        $p.title = profile.displayName;
        $p.image = profile._json.profile_image;

        process(req, accessToken, MainDB, $p, done);
    }
}