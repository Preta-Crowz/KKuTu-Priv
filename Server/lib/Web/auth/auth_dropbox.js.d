const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-dropbox').Strategy,
    color: '#0062FF',
    fontColor: '#FFFFFF',
    vendor: 'dropbox',
    displayName: 'withDropbox'
}

module.exports.strategyConfig = {
    consumerKey: config.dropbox.consumerKey,
    consumerSecret: config.dropbox.consumerSecret,
    callbackURL: config.dropbox.callbackURL,
    passReqToCallback: true
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        $p.authType = "dropbox";
        $p.id = profile.id;
        $p.name = profile.displayName;
        $p.title = profile.displayName;
        $p.image = profile._json.profile_image;

        process(req, accessToken, MainDB, $p, done);
    }
}