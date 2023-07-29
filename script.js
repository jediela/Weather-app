let weather = {
    apiKey: "42449f76517895b6ab05cd84ab15842c",

    // Fetch weather function
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },

    // Display weather function 
    displayWeather: function(data){
        const {name} = data;
        const {icon, descrption} = data.weather;
        const {temp, humidity} = data.main;
        
    }
};