const path  = require("path");
const router = require("express").Router();
const passport = require("passport");


router.get("/", (req,res)=>{
    // console.log("html routers")
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


function userCheck(req,res,next){
    console.log("/profile called!");
    console.log(req.session.passport);
    if(req.user){
        console.log("req.user found!");
        next();
    }else{
        console.log("req.user not defined");
        res.json("User not defined!");
    }
}


router.get("/profile",passport.authenticate("google"), (req,res)=>{
    console.log("&&&&&&&&&&")
    console.log(req.user)
    console.log("&&&&&&&&&")
    res.json("User Data");
})

module.exports = router;