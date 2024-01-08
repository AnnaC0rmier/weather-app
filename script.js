
    // const apiKey = '566ee9a9bfbe514d116ccbba91821eba'
    // const url = 'https://api.openweathermap.org/data/2.5/weather?q=Austin&metrics=imperial';



        function getWeatherData() {
            var url = 'https://api.openweathermap.org/data/2.5/weather?q=Houston&units=imperial&appid=566ee9a9bfbe514d116ccbba91821eba';
        
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    document.querySelector('.city').innerHTML = data.name;
                    document.querySelector('.temp').innerHTML = 'Tempurature: ' + data.main.temp + 'F';
                    document.querySelector('.humidity').innerHTML = 'Humidity: ' + data.main.humidity + '%';
                    document.querySelector('.wind').innerHTML = 'wind speed: ' + data.wind.speed + ' MPH';
                })
                .catch((error) => {
                    console.error('Error fetching weather data:', error);
                });
        }
        
        getWeatherData();
        