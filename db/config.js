const { config } = require('./../config/config');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


module.exports = {
  devlopment: {
    url: URI,
    dealect: 'postgres',
  },
  production: {
    url: URI,
    dealect: 'postgres',
  }
}
