const app = require("express")();
const request = require("request");

const APIKEY = "0878968b63d46921556ce3918394c568";
const location = "Pensacola";
const URI = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${APIKEY}`;

const test = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}`

app.get("/", (req, res) => {

  request({ url: test, json: true }, (err, response, body) => {
    console.log(body)
    if(!err){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(body))
    }else{
        res.end("There was an error")
    }
  });

});

app.listen(3000, () => {
  console.log("this is third");
  console.log("App is listening on port 3000");
});
