const pool = require("../database/connection");

const createPaymentMethod = async (payment) => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query = "INSERT INTO forma_de_pagamento VALUES (?, ?, ?)";
        const createdPaymentMethod = await conn.query(query, [
            payment["c_cpf"],
            payment["picpay"],
            payment["cartao_de_credito"],
        ]);

        return createdPaymentMethod;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

const deletePaymentMethod = async (cpf) => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query = "DELETE FROM forma_de_pagamento WHERE c_cpf=(?);";

        const payment = await conn.query(query, [cpf]);

        return payment;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

const getPaymentMethodsByCpf = async (cpf) => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query =
            "SELECT forma_de_pagamento.c_cpf, forma_de_pagamento.picpay,\
            forma_de_pagamento.cartao_de_credito FROM forma_de_pagamento\
            RIGHT JOIN cliente ON forma_de_pagamento.c_cpf=cliente.u_cpf\
            WHERE c_cpf=(?);";
        const payment = await conn.query(query, [cpf]);

        return payment;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

module.exports = {
    createPaymentMethod,
    deletePaymentMethod,
    getPaymentMethodsByCpf,
};
