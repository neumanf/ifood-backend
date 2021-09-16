const pool = require("../database/connection");

const createOrder = async (order) => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query = "INSERT INTO pedidos VALUES (?,?,?,?,?,?,?);";
        const createdOrder = await conn.query(query, [
            order["id"],
            order["estado"],
            order["c_cpf"],
            order["nota"],
            order["comentario"],
            order["form_pagamento"],
            order["e_cnpj"],
        ]);

        return createdOrder;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

const getOrders = async (order) => {
    let conn;

    try {
        conn = await pool.getConnection();

        const query =
            "SELECT P.id, P.estado, P.c_cpf, P.nota, P.comentario, P.form_pagamento, P.e_cnpj\
                        FROM pedidos AS P\
                        WHERE P.c_cpf = (?) OR P.e_cnpj=(?);";
        const listOrder = await conn.query(query, [order, order]);
        return listOrder;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

const getOrder = async (order) => {
    let conn;

    try {
        conn = await pool.getConnection();

        const query =
            "SELECT P.id, P.estado, P.c_cpf, P.nota, P.comentario, P.form_pagamento, P.e_cnpj\
                       FROM pedidos AS P\
                       WHERE P.id = (?) AND  (P.c_cpf= (?) OR P.e_cnpj=(?));";
        const _order = await conn.query(query, [order[1], order[0], order[0]]);

        return _order;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

module.exports = {
    createOrder,
    getOrders,
    getOrder,
};
