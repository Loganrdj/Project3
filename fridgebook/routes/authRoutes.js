const router = require("express").Router();
const passport = require("passport");


/* google log in*/
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
    console.log("google redirect");
    console.log("------------------------------------");
    console.log(req);
    console.log("------------------------------------");
    // console.log(req.user);
    res.redirect(process.env.PRODUCTION ? "/":"http://localhost:3000/"+req.user.name);
});


/* log out */
router.get("/logout", (req, res) => {
    res.send("This is auth/logout route",req.user);
});



module.exports = router;