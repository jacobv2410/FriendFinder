var express = require("express");
var bodyParser = require("body-parser");


// creating a node express server
var app = express();

// sets an initial port. 
var PORT = process.env.PORT || 8080;

// parse through the json data
var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false})


app.use(bodyParser.json({ type: 'application/*+json'}))

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

app.use(bodyParser.text({ type: 'text/html' }))

require("./app/routing/htmlRoutes.js")(app)
require("./app/routing/apiRoutes.js")(app)

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT)
 })