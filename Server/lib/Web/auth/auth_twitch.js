<<<<<<< HEAD
const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-twitch').Strategy,
    color: '#4B367C',
    fontColor: '#FFFFFF',
    vendor: 'twitch',
    displayName: 'withTwitch'
}

module.exports.strategyConfig = {
    clientID: config.twitch.clientID,
    clientSecret: config.twitch.clientSecret,
    callbackURL: config.twitch.callbackURL,
    passReqToCallback: true,
    scope: "user_read"
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        $p.authType = "twitch";
        $p.id = $p.authType+"-"+profile.id;
        $p.name = profile.displayName;
        $p.title = profile.displayName;
        $p.image = profile._json.profile_image_url;

        process(req, accessToken, MainDB, $p, done);
    }
=======
const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-twitch').Strategy,
    color: '#5C4EB0',
    fontColor: '#FFFFFF',
    vendor: 'twitch',
    displayName: 'withTwitch'
}

module.exports.strategyConfig = {
    clientID: config.twitch.clientID,
    clientSecret: config.twitch.clientSecret,
    callbackURL: config.twitch.callbackURL,
    passReqToCallback: true,
    scope: "user_read"
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        // var fullname = profile.username+"#"+profile.discriminator;

        $p.authType = "twitch";
        $p.id = $p.authType+"-"+profile.id;
        $p.name = profile.username;
        $p.title = profile.username;
        $p.image = profile.avatar;

        process(req, accessToken, MainDB, $p, done);
    }
>>>>>>> 8454e7b85f2389815642645ae4b2e72deec4f94e
}