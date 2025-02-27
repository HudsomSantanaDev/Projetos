//chave API

// cc61b4638123ee6b2f0a51d08edac20e
//variaveis e seleções de elementos
const apiKey = "cc61b4638123ee6b2f0a51d08edac20e";
const apiCountryURL = "https://countryflagsapi.com/png/";


const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContent=document.querySelector("#weather-data");
//Funções
const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    // `https://api.openweathermap.org/data/2.5/weather?`
    // ``http://api.openweathermap.org/geo/1.0/direct?q=${city}&units=metric&appid=${apiKey}``
    //await=esperar
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
//console.log(data);
    return (data);
  
};

const showWeatherData =async(city) => {
    const data = await getWeatherData(city);

    cityElement.innerText=data.name;
    tempElement.innerText=parseInt(data.main.temp);
    descElement.innerText=data.weather[0].description;
    weatherIconElement.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);//nao funciona(fora de ar)
    humidityElement.innerText=`${data.main.humidity}%`;
    windElement.innerText=`${data.wind.speed}Km/h`;

    weatherContent.classList.remove("hide");

}



//Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
    
});
cityInput.addEventListener("keyup",(e)=>{
   
    if(e.code==="Enter"){
        const city=e.target.value;
    

    showWeatherData(city);
    }
})