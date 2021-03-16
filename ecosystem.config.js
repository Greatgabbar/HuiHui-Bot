require('dotenv').config();
module.exports = {
  apps : [{
      name : 'app', 
    script: 'app.js',
    env: {
        NODE_ENV: "development",
        CLIENTID : process.env.CLIENTID,
        CLIENTSECRET : process.env.CLIENTSECRET,
        TOKEN : process.env.TOKEN,
        dburl : process.env.dburl,
        prefix:process.env.prefix
    },
    env_production: {
        NODE_ENV: "production",
        CLIENTID : process.env.CLIENTID,
        CLIENTSECRET : process.env.CLIENTSECRET,
        TOKEN : process.env.TOKEN,
        dburl : process.env.dburl,
        prefix:process.env.prefix
    }
  }]
};