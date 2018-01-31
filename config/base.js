const ip = 'www.geonoon.net';
const appPort = 5005;
const mongoPort = 27017;

const baseConfig = {
    baseURL: 'http://' + ip + ':' + appPort,
    mongoConfig: 'mongodb://passport:passport@' + ip + ':' + mongoPort + '/passport'
};

console.log(baseConfig.baseURL);
console.log(baseConfig.mongoConfig);

module.exports = baseConfig;