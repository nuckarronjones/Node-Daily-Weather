//VARIABLES AND REQUIREMENTS
const express = require("express");
const app = express();
const request = require("request");

const APIKEY = "0878968b63d46921556ce3918394c568";
let location;

//REGISTER VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", "views"); //if you have your views in another folder

//MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded());

//ROUTES
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/weather", (req, res) => {
  //request module for calling API
  request({ url: URI, json: true }, (err, response, body) => {
    if (!err) {
      res.render("results.ejs");
    } else {
      res.end("There was an error");
    }
  });
});

app.post("/", (req, res) => {
  console.log("posted");

  console.log(req.body);

  location = req.body.search;

  const URI = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}&units=imperial`;

  request({ url: URI, json: true }, (err, response, body) => {
    if (!err) {
      console.log(body);

      //console.log(URI);

      res.render("results.ejs", {
        city: req.body.search.toUpperCase(),
        weatherData: body,
      });
    } else {
      res.end("There was an error");
    }
  });
});

//404 error if no other pages are found first
app.get("/404", (req, res) => {
  res.render("404.ejs");
});

//start local server
app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
