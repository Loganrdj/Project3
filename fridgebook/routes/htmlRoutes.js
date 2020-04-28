const path = require("path");
const router = require("express").Router();
const passport = require("passport");
const db = require("../models");


router.get("/", (req, res) => {
    // console.log("html routers")
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


router.get("/profile", (req, res) => {
    if (req.isAuthenticated()) {
        db.Foods.findAll({ where: { UserId: req.user.dataValues.id } }).then(function (result) {
            console.log(result);
        })
    }
});

module.exports = router;