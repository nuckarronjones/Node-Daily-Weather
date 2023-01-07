//VARIABLES AND REQUIREMENTS
const express = require("express");
const app = express();
const request = require("request");
let path = require('path');
//env port for hosting service
let port = process.env.PORT || 3000

const APIKEY = "c20388b143431a9ec198a11d39355e04";
let location;

//REGISTER VIEW ENGINE
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views/')); //if you have your views in another folder

//MIDDLEWARE
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded());

//ROUTES
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/weather", (req, res) => {
  //request module for calling API
  request({ url: URI, json: true }, (err, response, body) => {
    if (!err) {
      res.render("results");
    } else {
      res.end("There was an error");
    }
  });
});

app.post("/", (req, res) => {
  location = req.body.search;

  const URI = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}&units=imperial`;

  console.log(URI)
  
  request({ url: URI, json: true }, (err, response, body) => {
    if (!err) {

      if (body.cod == "404") {
        //this is error handling if we DO get a response (unknown city for example), and theres not data we can use
        res.render("404");
      }

      // res.render("results", {
      //   city: req.body.search.toUpperCase(),
      //   weatherData: body,
      // });

      res.render("404");
      
    } else {
      res.end("There was an error");
    }
  });
});

//404 error if no other pages are found first
app.get("/404", (req, res) => {
  res.render("404");
});

//start local server
app.listen(port, () => {
  console.log("App is listening on port 3000");
});
