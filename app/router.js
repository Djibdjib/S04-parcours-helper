const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");
const cardController = require("./controllers/cardController");
const searchController = require("./controllers/searchController");

// MAIN
router.get("/", mainController.homePage);

// CARD
router.get("/card/detail/:id", cardController.detail);
router.get("/card/add/:id", cardController.add);

// SEARCH
router.get("/search/element", searchController.searchPage);
router.get("/search/name", searchController.searchByName);

module.exports = router;

// index.js -> router -> controller -> dataMapper -> vue.ejs
