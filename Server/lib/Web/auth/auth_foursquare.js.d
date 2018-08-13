const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-foursquare').Strategy,
    color: '#2D5BE3',
    fontColor: '#FFFFFF',
    vendor: 'foursquare',
    displayName: 'withFoursquare'
}

module.exports.strategyConfig = {
    clientID: config.foursquare.clientID,
    clientSecret: config.foursquare.clientSecret,
    callbackURL: config.foursquare.callbackURL,
    passReqToCallback: true
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        var fullname = profile.firstName+" "+profile.lastName

        $p.authType = "foursquare";
        $p.id = profile.id;
        $p.name = fullname;
        $p.title = fullname;
        $p.image = profile._json.profile_image;

        process(req, accessToken, MainDB, $p, done);
    }
}