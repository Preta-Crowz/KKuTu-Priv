const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-telegram').Strategy,
    color: '#30A7DE',
    fontColor: '#FFFFFF',
    vendor: 'telegram',
    displayName: 'withTelegram'
}

module.exports.strategyConfig = {
    clientID: config.telegram.clientID,
    clientSecret: config.telegram.clientSecret,
    callbackURL: config.telegram.callbackURL,
    passReqToCallback: true
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};
        
        $p.authType = "telegram";
        $p.id = $p.authType+"-"+profile.id;
        $p.name = profile.username;
        $p.title = profile.username;
        $p.image = profile._json.profile_image;

        process(req, accessToken, MainDB, $p, done);
    }
}