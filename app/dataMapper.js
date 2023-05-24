const database = require("./database");

const dataMapper = {
    async getAllCards() {
        const query = "SELECT * FROM card";
        const result = await database.query(query);
        return result.rows;
    },

    getSingleCard: async (cardId) => {
        const query = `SELECT * FROM card WHERE id=${cardId}`;
        const result = await database.query(query);

        if (result.rows) return result.rows[0];
    },
    searchByElement: async (element) => {
        let query;
        if (element === "null") {
            query = `SELECT * FROM card WHERE element IS NULL`;
        } else {
            query = `SELECT * FROM card WHERE element='${element}'`;
        }

        const result = await database.query(query);

        if (result.rows) return result.rows;
    },
    searchByName: async (name) => {
        const query = `SELECT * FROM card WHERE name ILIKE '%${name.toLowerCase()}%'`;

        const result = await database.query(query);

        if (result.rows) return result.rows;
    },
};

module.exports = dataMapper;
