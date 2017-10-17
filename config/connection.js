var Sequelize = require("sequelize");

var sequelize = new Sequelize("rzq20d60eby765fx", "acbdmkwzf7cuhwq0", "clgbe2cemfnxsokn", {
    host: "gk90usy5ik2otcvi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    pool: {
        max: 1,
        min: 0,
        idle: 10000
    }
});


module.exports = sequelize;