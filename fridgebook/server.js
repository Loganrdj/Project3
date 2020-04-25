const express = require("express");
const router = require("./routes");
const axios = require("axios");

// load databse
var db = require("./models");

// load auth config
const passportSetup = require("./config/passport-config.js");
const cookieSession = require("cookie-session");
const myKeys = require("./config/keys.js");
const passport = require("passport");

const app  = express();
const PORT = process.env.PORT || 8080;

// set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieSession({
    maxAge: 0.5*60*60*1000,                        // let cookie expire in half hour
    keys:[myKeys.cookieSession.sessioinKey]
  }));

app.use(router);                                   //"backend routing/api call"


var syncOptions = { force: false };
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT,function(){
      console.log(`Server now running on PORT ${PORT}.`);
  })
});
