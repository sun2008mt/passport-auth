const ip = 'http://www.geonoon.net';
const appPort = 5005;
const mongoPort = 27017;

const baseConfig = {
    baseURL: ip + appPort,
    mongoConfig: 'mongodb://passport:passport@' + ip + ':' + mongoPort + '/passport'
};

module.exports = baseConfig;