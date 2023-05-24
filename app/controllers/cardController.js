const dataMapper = require("../dataMapper.js");

const cardController = {
    detail: async (req, res) => {
        const cardId = req.params.id;

        try {
            const card = await dataMapper.getSingleCard(cardId);
            res.render("cardDetail", { card });
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },
    add: async (req, res) => {
        const cardId = parseInt(req.params.id);

        const found = req.session.deck.find((toto) => toto.id === cardId);

        if (!found) {
            try {
                const card = await dataMapper.getSingleCard(cardId);

                if (card) {
                    req.session.deck.push(card);
                    res.redirect("/");
                }
            } catch (error) {
                console.error(error);
                res.status(500).send(`An error occured with the database :\n${error.message}`);
            }
        } else {
            res.send("désolé pas trouvé bwwwaaaataardd");
        }
    },
    delete: async (req, res) => {
        const cardId = parseInt(req.params.id);

        const filteredSession = req.session.deck.filter((toto) => toto.id !== cardId);
        req.session.deck = filteredSession;

        res.redirect("/");
    },
};

module.exports = cardController;
