const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-amazon').Strategy,
    color: '#FF9900',
    fontColor: '#FFFFFF',
    vendor: 'amazon',
    displayName: 'withAmazon'
}

module.exports.strategyConfig = {
    clientID: config.amazon.clientID,
    clientSecret: config.amazon.clientSecret,
    callbackURL: config.amazon.callbackURL,
    passReqToCallback: true,
    scope: "profile"
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        $p.authType = "amazon";
        $p.id = $p.authType+"-"+profile.id;
        $p.name = profile.displayName;
        $p.title = profile.displayName;
        $p.image = profile._json.profile_image;

        process(req, accessToken, MainDB, $p, done);
    }
}