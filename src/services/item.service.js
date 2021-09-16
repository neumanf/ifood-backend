const pool = require("../database/connection");

const createItem = async (item) => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query = "INSERT INTO item (categoria, nome, preco) VALUES (?, ?, ?)";
        const query2 = "INSERT INTO contem VALUES (?, ?)";
        const query3 = "INSERT INTO possui VALUES (?, ?, ?)";

        const createdItem = await conn.query(query, [item["categoria"], item["nome"], item["preco"]]);

        const query4 = "SELECT item.id, item.categoria, item.nome, item.preco FROM item WHERE nome=(?);";
        const recentCreatedItem = await conn.query(query4, [item["nome"]]);

        await conn.query(query2, [item["orderId"], recentCreatedItem[0].id]);
        await conn.query(query3, [item["e_cnpj"], recentCreatedItem[0].id, item["quantidade"]]);

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
