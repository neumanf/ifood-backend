const pool = require("../database/connection");

const createUser = async (user) => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query = "INSERT INTO usuario VALUES (?, ?, ?, ?, ?, ?)";
        const createdUser = await conn.query(query, [
            user["cpf_cnpj"],
            user["nome"],
            user["endereco"],
            user["telefone"],
            user["email"],
            user["senha"],
        ]);

        if (user.idade) {
            const query = "INSERT INTO cliente VALUES (?, ?)";
            await conn.query(query, [user["cpf_cnpj"], user["idade"]]);
        } else if (user.tipo) {
            const query = "INSERT INTO estabelecimento VALUES (?, ?)";
            await conn.query(query, [user["cpf_cnpj"], user["tipo"]]);
        }

        return createdUser;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

const getAllUsers = async () => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query =
            "SELECT usuario.cpf_cnpj, usuario.nome, usuario.endereco, usuario.telefone,\
            usuario.email, usuario.senha, cliente.idade, estabelecimento.tipo FROM usuario\
            LEFT JOIN cliente ON usuario.cpf_cnpj=cliente.u_cpf\
            LEFT JOIN estabelecimento ON usuario.cpf_cnpj=estabelecimento.u_cnpj;";
        const users = await conn.query(query);

        return users;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

const getUserByCpf = async (cpf) => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query =
            "SELECT usuario.cpf_cnpj, usuario.nome, usuario.endereco, usuario.telefone,\
            usuario.email, usuario.senha, cliente.idade, estabelecimento.tipo FROM usuario\
            LEFT JOIN cliente ON usuario.cpf_cnpj=cliente.u_cpf\
            LEFT JOIN estabelecimento ON usuario.cpf_cnpj=estabelecimento.u_cnpj\
            WHERE cpf_cnpj=(?);";
        const user = await conn.query(query, [cpf]);

        return user;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

const deleteUserByCpf = async (cpf) => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query1 = "DELETE FROM cliente WHERE u_cpf=(?);";
        const query2 = "DELETE FROM estabelecimento WHERE u_cnpj=(?);";
        const query3 = "DELETE FROM usuario WHERE cpf_cnpj=(?);";

        await conn.query(query1, [cpf]);
        await conn.query(query2, [cpf]);
        const user = await conn.query(query3, [cpf]);

        return user;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserByCpf,
    deleteUserByCpf,
};
