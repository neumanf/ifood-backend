const pool = require("../database/connection");

const createPossui = async (possui) => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query = "INSERT INTO possui VALUES (?, ?, ?,)";
        const createdPossui = await conn.query(query,
             [possui["e_cnpj"],
              possui["i_id"],
              possui["quantidade"]]);
              

       

        return createdPossui;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

const getAllPossui = async () => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query = "SELECT possui.e_cnpj, possui.i_id, possui.quantidade FROM possui ;";
        const possui_all = await conn.query(query);

        return possui_all;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

const getPossuiById = async (id) => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query = "SELECT possui.e_cnpj, possui.i_id, possui.quantidade FROM possui \
            WHERE id =(?);";

        const possui = await conn.query(query, [id]);

        return possui;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

module.exports = {
    createPossui,
    getAllPossui,
    getPossuiById,
};
