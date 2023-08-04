let weather = {
    apiKey: "42449f76517895b6ab05cd84ab15842c",

    // Fetch weather function
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    // Display weather function 
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const{speed} = data.wind;
        
        // Round the temperature
        const roundedTemp = Math.round(temp);

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = roundedTemp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
        
       document.querySelector(".weather").classList.remove("loading");
       document.body.style.backgroundImage = "url('https://source.unsplash.com/2000x1000/?" + name + "')"
    },

    // Search bar
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

    // Button
    document.querySelector(".search button").addEventListener("click", function() {
        weather.search();
    });

    // Press enter
    document.querySelector(".search-bar").addEventListener("keyup", function() {
        if(event.key == "Enter"){
            weather.search();
        }
    });

    // Load
    weather.fetchWeather("Toronto");
    


 