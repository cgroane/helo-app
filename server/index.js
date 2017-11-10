const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');;
const axios = require('axios');
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
 
const port = 3001;
const app = express();
app.use(bodyParser.json());
app.use(cors());
// const connectionString = `postgres://${dbUser}@localhost/${database}`;





app.listen(port, () => {
    console.log(`Listening on port: ${ port }`);
});