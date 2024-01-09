
    // const apiKey = '566ee9a9bfbe514d116ccbba91821eba'
    // const url = 'https://api.openweathermap.org/data/2.5/weather?q=Austin&metrics=imperial';

    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Austin&units=imperial&appid=566ee9a9bfbe514d116ccbba91821eba';


    const input = $('input')

  const getUserInput = function(event) {
    event.preventDefault();

    console.log()
  }
    



    function getWeatherData() {
    
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
        const city = data.city.name
    
        let extractedIndex = [0, 8, 16, 24, 32, 39];
        let newDataObject = extractedIndex.map(index => data.list[index]);

        const date = $('.date');
        const temp = $('.temp');
        const wind = $('.wind');
        const humidity = $('.humidity');
        const icon = $('.icon')

        newDataObject.forEach((list, index) => {
            date.eq(index).text ('Date: ' + list.dt_txt);
            temp.eq(index).text('Temp: ' + list.main.temp + ' Deg F');
            wind.eq(index).text('Wind Speed: ' + list.wind.speed + ' MPH');
            humidity.eq(index).text('Humidity: ' + list.main.humidity + '%');
            icon.eq(index).text(list.weather[0].icon);

            console.log(list.weather[0].icon);

          });  
            })
            };  
            
            
    getWeatherData();


    document.getElementById('search').addEventListener('submit', getUserInput)


