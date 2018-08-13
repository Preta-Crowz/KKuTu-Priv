const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-pinterest').Strategy,
    color: '#AA2529',
    fontColor: '#FFFFFF',
    vendor: 'pinterest',
    displayName: 'withPinterest'
}

module.exports.strategyConfig = {
    clientID: config.pinterest.clientID,
    clientSecret: config.pinterest.clientSecret,
    callbackURL: config.pinterest.callbackURL,
    passReqToCallback: true,
    scope: "read_public"
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        $p.authType = "pinterest";
        $p.id = $p.authType+"-"+profile.id;
        $p.name = profile.displayName;
        $p.title = profile.displayName;
        $p.image = profile._json.data.image;

        process(req, accessToken, MainDB, $p, done);
    }
}