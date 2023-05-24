const dataMapper = require("../dataMapper.js");

const searchController = {
    searchPage: async (req, res) => {
        const element = req.query.element;
        try {
            const cards = await dataMapper.searchByElement(element);
            res.render("cardList", { cards });
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
        res.render("cardList");
    },
    searchByName: async (req, res) => {
        const name = req.query.name;
        try {
            const cards = await dataMapper.searchByName(name);
            res.render("cardList", { cards });
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
        res.render("cardList");
    },
};

module.exports = searchController;
