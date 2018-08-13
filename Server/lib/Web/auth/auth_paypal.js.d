const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-paypal').Strategy,
    color: '#1EC800',
    fontColor: '#FFFFFF',
    vendor: 'paypal',
    displayName: 'withpaypal'
}

module.exports.strategyConfig = {
    clientID: config.paypal.clientID,
    clientSecret: config.paypal.clientSecret,
    callbackURL: config.paypal.callbackURL,
    passReqToCallback: true
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        $p.authType = "paypal";
        $p.id = profile.id;
        $p.name = profile.displayName;
        $p.title = profile.displayName;
        $p.image = profile._json.profile_image;

        process(req, accessToken, MainDB, $p, done);
    }
}