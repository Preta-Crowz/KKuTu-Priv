const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-steam').Strategy,
    color: '#1B2838',
    fontColor: '#FFFFFF',
    vendor: 'steam',
    displayName: 'withSteam'
}

module.exports.strategyConfig = {
    apiKey: config.steam.apiKey,
    returnURL: config.steam.callbackURL,
    passReqToCallback: true,
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        // var fullname = profile.username+"#"+profile.discriminator;
        // console.log(Object.keys(req.query))
        console.log(Object.keys(req.session))
        // $p.authType = "steam";
        // $p.id = profile.steamid;
        // $p.name = profile.personaname;
        // $p.title = profile.personaname;
        // $p.image = profile.avatar;

        // process(req, accessToken, MainDB, $p, done);
    }
}