const pool = require("../database/connection");

const createRating = async(rating) => {
    let conn;
    try {
        conn = await pool.getConnection();

        const query = "INSERT INTO avalia VALUES (?, ?, ?)";
        const createdRating = await conn.query(query, [
            rating["c_cpf"],
            rating["e_cnpj"],
            rating["nota"],
        ]);

        return createdRating;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

const getAllRatings = async(cpf) =>{
    let conn;
    try {
        conn = await pool.getConnection();

        const query =
            "SELECT avalia.c_cpf, avalia.e_cnpj, avalia.nota FROM avalia\
            WHERE c_cpf=(?);";
        const rating = await conn.query(query, [cpf]);

        return rating;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};


module.exports = {
    createRating,
    getAllRatings,
};
