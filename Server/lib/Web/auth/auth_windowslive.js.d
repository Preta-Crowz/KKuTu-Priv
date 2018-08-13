const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-windowslive').Strategy,
    color: '#2F2F2F',
    fontColor: '#FFFFFF',
    vendor: 'windowslive',
    displayName: 'withWindowslive'
}

module.exports.strategyConfig = {
    clientID: config.windowslive.clientID,
    clientSecret: config.windowslive.clientSecret,
    callbackURL: config.windowslive.callbackURL,
    passReqToCallback: true
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        $p.authType = "windowslive";
        $p.id = $p.authType+"-"+profile.id;
        $p.name = profile.displayName;
        $p.title = profile.displayName;
        $p.image = profile._json.profile_image;

        process(req, accessToken, MainDB, $p, done);
    }
}