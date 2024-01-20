const apiKey="0c11db53a7edb1e4f68175a989eb3bd1";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(" .search input");
const searchBtn=document.querySelector(" .search button");
const weatherIcon=document.querySelector(".weather-icon");

async function cheakWeather(city){
    const responce=await fetch(apiUrl + city+ `&appid=${apiKey}`);
    
    if(responce.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }
    else{
        let data= await responce.json();

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="clear.png";
        } 
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="mist.png";
        }
        
        document.querySelector(".weather").style.display= "block";
        document.querySelector(".error").style.display="none"
    }

}

searchBtn.addEventListener("click" , (e) => {
   e.preventDefault();
   cheakWeather(searchBox.value);
})


