const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host: process.env.DATABASE_URL,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});

module.exports = {
    getConnection: function () {
        return new Promise(function (resolve, reject) {
            pool.getConnection()
                .then(function (connection) {
                    resolve(connection);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },
};
