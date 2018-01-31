// config/auth.js
var baseConfig = require('./base');

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '172400720065137', // your App ID
        'clientSecret'    : '59d0ccac388661c47777f0cf24d52819', // your App Secret
        'callbackURL'     : baseConfig.baseURL + '/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields'   : ['id', 'email', 'name'] // For requesting permissions from Facebook API

    },

    'qqAuth'          : {
        'clientID'          : '101444503',
        'clientSecret'      : '5e8587617ebfa79545939e034fadb01c',
        'callbackURL'       : baseConfig.baseURL + '/auth/qq/callback',
        'passReqToCallback' : true      // 允许从路由中传入req参数(用来判断是否有用户登录)
    },

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key-here',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : baseConfig.baseURL + '/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : 'your-secret-clientID-here',
        'clientSecret'     : 'your-client-secret-here',
        'callbackURL'      : baseConfig.baseURL + '/auth/google/callback'
    }

};
