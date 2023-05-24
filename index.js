const dotenv = require("dotenv");
const express = require("express");
const session = require("express-session");
dotenv.config();

const router = require("./app/router");

const app = express();

// SESSIONS
app.use(
    session({
        secret: "clésecreteàchanger en prod",
        resave: true,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

// CONFIG
app.set("view engine", "ejs");
app.set("views", "app/views");

// STATIC FILES
app.use(express.static("public"));

// MIDDLEWARE
app.use((req, res, next) => {
    if (req.session.deck === undefined) {
        req.session.deck = [];
    }

    next();
});

// ROUTER
app.use(router);

// LISTEN
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
