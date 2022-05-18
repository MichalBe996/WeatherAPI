
// link
//http://api.openweathermap.org/data/2.5/weather?q=London&APPID=9e10016bec2ded5cb3e469dfd2390bad






const submitButton = document.querySelector(".chooseCity")
const kelvinButton = document.getElementById("kelvinButton");
const celciusButton = document.getElementById("celciusButton");

function changeToCelcius(){
  celciusButton.disabled = true;
  kelvinButton.disabled = false;
  let temp_K = document.getElementById("temperature").value;
  let feels_K = document.getElementById("feelsLike").value;
  document.getElementById("temperature").value = "";
  document.getElementById("temperature").value = Math.round(temp_K - 272.2)
  document.getElementById("feelsLike").value = "";
  document.getElementById("feelsLike").value = Math.round(feels_K - 272.2)
}

function changeToKelvin(){
  celciusButton.disabled = false;
  kelvinButton.disabled = true;
  let temp_C = document.getElementById("temperature").value;
  let feels_C = document.getElementById("feelsLike").value;
  document.getElementById("temperature").value = 0;
  document.getElementById("temperature").value = Math.round(parseFloat(temp_C) + 272.2);
  document.getElementById("feelsLike").value = 0;
  document.getElementById("feelsLike").value = Math.round(parseFloat(feels_C) + 272.2);
}



async function getCity(){
  let cityValue = prompt("What city do you want to know the weather for?")
  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&APPID=9e10016bec2ded5cb3e469dfd2390bad`, {mode: 'cors', method:"post"})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response.main);
    let temperature = response.main.temp;
    let feelsLike = response.main.feels_like;
    let pressure = response.main.pressure;
    document.getElementById("city").value = cityValue;
    document.getElementById("temperature").value = temperature;
    document.getElementById("feelsLike").value = feelsLike;
    document.getElementById("pressure").value = pressure;
    
  
  });
  
};

submitButton.addEventListener("click", function(){
  getCity();
  changeToKelvin();
  
  
})
    
celciusButton.addEventListener("click", function(){
  changeToCelcius();
});

kelvinButton.addEventListener("click", function(){
  changeToKelvin();
});
    

    
    


