module.exports = {
  apps : [{
      name : 'app',
    script: 'app.js',
    instances: "max",
    env: {
        NODE_ENV: "development",
        CLIENTID:"816994233557844039",
        CLIENTSECRET : "YDz4kgQmNWax3F82GlYTvbc0Bew5ZBgh",
        TOKEN : "ODE2OTk0MjMzNTU3ODQ0MDM5.YEDDLA.wg_UiwM2V96hPQxYX2cJPzd0lJs",
        dburl = 'mongodb+srv://root:9755@cluster0.qsytw.mongodb.net/HuiHui?retryWrites=true&w=majority',
        prefix:"!"
    },
    env_production: {
        NODE_ENV: "production",
        CLIENTID:"816994233557844039",
        CLIENTSECRET : "YDz4kgQmNWax3F82GlYTvbc0Bew5ZBgh",
        TOKEN : "ODE2OTk0MjMzNTU3ODQ0MDM5.YEDDLA.wg_UiwM2V96hPQxYX2cJPzd0lJs",
        dburl = 'mongodb+srv://root:9755@cluster0.qsytw.mongodb.net/HuiHui?retryWrites=true&w=majority',
        prefix:"!"
    }
  }]
};
