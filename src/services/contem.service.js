const pool = require("../database/connection");

const createContem = async (contem) => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query = "INSERT INTO contem VALUES (?, ?, )";
        const createdContem= await conn.query(query, [contem["p_id"], contem["i_id"]]);

       

        return createdContem;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

const getAllContem = async () => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query = "SELECT contem.p_id, contem.p_id FROM contem;";
        const contem = await conn.query(query);

        return contem;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

const getContemById = async (id) => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query = "SELECT contem.id, contem.categoria, contem.nome, contem.preco FROM contem \
            WHERE id =(?);";

        const contem = await conn.query(query, [id]);

        return contem;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

module.exports = {
    createContem,
    getAllContem,
    getContemById,
};
