const pool = require("../database/connection");

const getAllUsers = async () => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query = "select * from users";
        const users = await conn.query(query);

        return users;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

module.exports = {
    getAllUsers,
};
