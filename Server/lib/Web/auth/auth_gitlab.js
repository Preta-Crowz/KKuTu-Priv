const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-gitlab2').Strategy,
    color: '#292961',
    fontColor: '#FFFFFF',
    vendor: 'gitlab',
    displayName: 'withGitlab'
}

module.exports.strategyConfig = {
    clientID: config.gitlab.clientID,
    clientSecret: config.gitlab.clientSecret,
    callbackURL: config.gitlab.callbackURL,
    passReqToCallback: true
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        $p.authType = "gitlab";
        $p.id = $p.authType+"-"+profile.id;
        $p.name = profile.displayName;
        $p.title = profile.displayName;
        $p.image = profile._json.profile_image;

        process(req, accessToken, MainDB, $p, done);
    }
}