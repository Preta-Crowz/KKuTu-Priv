const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-instagram').Strategy,
    color: '#FFFFFF',
    fontColor: '#000000',
    vendor: 'instagram',
    displayName: 'withInstagram'
}

module.exports.strategyConfig = {
    clientID: config.instagram.clientID,
    clientSecret: config.instagram.clientSecret,
    callbackURL: config.instagram.callbackURL,
    passReqToCallback: true
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        $p.authType = "instagram";
        $p.id = profile.id;
        $p.name = profile.displayName;
        $p.title = profile.displayName;
        $p.image = profile._json.profile_image;

        process(req, accessToken, MainDB, $p, done);
    }
}