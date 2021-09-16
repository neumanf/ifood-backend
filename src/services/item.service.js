const pool = require("../database/connection");

const createItem = async (item) => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query = "INSERT INTO item VALUES (?, ?, ?, ?,)";
        const createdItem = await conn.query(query, [item["id"], item["categoria"], item["nome"], item["preco"]]);

       

        return createdItem;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

const getAllItens = async () => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query = "SELECT item.id, item.categoria, item.nome, item.preco FROM item ;";
        const itens = await conn.query(query);

        return itens;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

const getItemById = async (id) => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query = "SELECT item.id, item.categoria, item.nome, item.preco FROM item \
            WHERE id =(?);";

        const item = await conn.query(query, [id]);

        return item;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

module.exports = {
    createItem,
    getAllItens,
    getItemById,
};
