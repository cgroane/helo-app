const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
// const strategy = require('../src/strategy');

const { dbUser, database, connectionString } = require("./config").massive;
// const { secret } = require("./config").session;
const { domain, clientID, clientSecret } = require("./config.js").auth0;

const port = 3001;
// const connectionString = `postgres://wlwxoenezywdkv:3b30dc9cd864b3b7fb55f4b1b48c8a0212e89d66e2522ea481f079f2f7e529d2@ec2-54-243-58-69.compute-1.amazonaws.com:5432/dv05k68kmiqnd`;
// const connectionString = `postgres://${dbUser}@localhost/${database}`;

const app = express();

app.use(express.static(`${__dirname}/build`));

app.use(
  session({
    secret: "@nyth!ng y0u w@nT",
    resave: false,
    saveUninitialized: false
  })
);

massive(connectionString)
  .then(db => app.set("db", db))
  .catch(console.log);

app.use(json());
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain,
      clientID,
      clientSecret,
      callbackURL: "/api/login"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      app
        .get("db")
        .getUserByAuthId(profile.id)
        .then(response => {
          if (!response[0]) {
            app
              .get("db")
              .createUserByAuth([profile.id, profile.displayName])
              .then(created => {
                console.log(created);
                return done(null, created[0]);
              });
          } else {
            return done(null, response[0]);
          }
        });
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get(
  "/api/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/"
  })
);

app.get("/api/me", function(req, res) {
  if (!req.user) return res.status(404);
  res.status(200).json(req.user);
});

app.get("/api/test", (req, res, next) => {
  req.app
    .get("db")
    .getUsers()
    .then(response => {
      res.json(response);
    })
    .catch(console.log);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
