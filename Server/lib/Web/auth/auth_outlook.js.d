const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-outlook').Strategy,
    color: '#0078D7',
    fontColor: '#FFFFFF',
    vendor: 'outlook',
    displayName: 'withOutlook'
}

module.exports.strategyConfig = {
    clientID: config.outlook.clientID,
    clientSecret: config.outlook.clientSecret,
    callbackURL: config.outlook.callbackURL,
    passReqToCallback: true
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        $p.authType = "outlook";
        $p.id = profile.id;
        $p.name = profile.displayName;
        $p.title = profile.displayName;
        $p.image = profile._json.profile_image;

        process(req, accessToken, MainDB, $p, done);
    }
}