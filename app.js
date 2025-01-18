const express = require("express");
const app = express();
const request = require("request");
let path = require("path");
let port = process.env.PORT || 3000;

const APIKEY = "c20388b143431a9ec198a11d39355e04";
let location;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  location = req.body.search;

  const URI = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}&units=imperial`;

  request({ url: URI, json: true }, (err, response, body) => {
    if (!err) {
      if (body.cod == "404") {
        res.render("404");
      }
      console.log("sending results");

      res.render("weather", {
        city: req.body.search.toUpperCase(),
        weatherData: body,
      });
    } else {
      res.end("There was an error");
    }
  });
});

app.get("/404", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log("App is listening on port 3000");
});
