
    // const apiKey = '566ee9a9bfbe514d116ccbba91821eba'
    // const url = 'https://api.openweathermap.org/data/2.5/weather?q=Austin&metrics=imperial';

    
    function getWeatherData() {
        var url = 'https://api.openweathermap.org/data/2.5/forecast?q=Austin&units=imperial&appid=566ee9a9bfbe514d116ccbba91821eba';
    
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                var forecastEntry = data.list[0];
                document.querySelector('.date').innerHTML = 'Date: ' + forecastEntry.dt_txt;
                document.querySelector('.city').innerHTML = data.city.name;
                document.querySelector('.temp').innerHTML = 'Temperature: ' + forecastEntry.main.temp + 'F';
                document.querySelector('.humidity').innerHTML = 'Humidity: ' + forecastEntry.main.humidity + '%';
                document.querySelector('.wind').innerHTML = 'Wind speed: ' + forecastEntry.wind.speed + ' MPH';

            })
            };
    
    
    getWeatherData();