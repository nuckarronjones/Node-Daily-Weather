window.onload = function () {
  //VARIABLES
  let results = {
    "cityTitle": `${$("#cityTitle").attr("data-weather")}`,
    "tempMin": `Temperature Min: ${$("#tempMin").attr("data-weather")}`,
    "tempMax": `Temperature Max: ${$("#tempMax").attr("data-weather")}`,
    "humidity": `Humidity: ${$("#humidity").attr("data-weather")}`,
    "weather": `Weather: ${$("#weather").attr("data-weather")}`,
  };

  //FUNCTIONS
  let textLength = 0
  let speed = 50

  let typeWriter = ()=>{
    for(let item in results){
        console.log("ran")
        if(textLength < results[item].length){
           document.getElementById(`${item}`).innerHTML += results[item].charAt(textLength)

            console.log(results[item].charAt(textLength))
            textLength++;
            setTimeout(speed);
        }else{
            textLength = 0;
        }
    }
  }

  typeWriter()

};
