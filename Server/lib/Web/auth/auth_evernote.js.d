const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-evernote').Strategy,
    color: '#2DBE60',
    fontColor: '#FFFFFF',
    vendor: 'evernote',
    displayName: 'withEvernote'
}

module.exports.strategyConfig = {
    consumerKey: config.evernote.consumerKey,
    consumerSecret: config.evernote.consumerSecret,
    callbackURL: config.evernote.callbackURL,
    passReqToCallback: true
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        $p.authType = "evernote";
        $p.id = profile.id;
        $p.name = profile.displayName;
        $p.title = profile.displayName;
        $p.image = profile._json.profile_image;

        process(req, accessToken, MainDB, $p, done);
    }
}