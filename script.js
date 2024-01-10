
    const form = document.querySelector('form')
    const input = document.querySelector('#searchBar')



    function getWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=566ee9a9bfbe514d116ccbba91821eba`;

       
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
        
             document.querySelector('.city').innerHTML = data.city.name;
        
            
        let extractedIndex = [0, 8, 16, 24, 32, 39];
        let newDataObject = extractedIndex.map(index => data.list[index]);
        
        const date = $('.date');
        const temp = $('.temp');
        const wind = $('.wind');
        const humidity = $('.humidity');
        

        

        newDataObject.forEach(( list, index) => {
            date.eq(index).text ('Date: ' + list.dt_txt);
            temp.eq(index).text('Temp: ' + list.main.temp + ' Deg F');
            wind.eq(index).text('Wind Speed: ' + list.wind.speed + ' MPH');
            humidity.eq(index).text('Humidity: ' + list.main.humidity + '%');

          });  
            })
            };  



        const getUserInput = (event) => {

            event.preventDefault();
            
            const userInput = input.value
            
            
            if (userInput !== ''){
                 console.log(userInput);

                //  <button type="button" class="btn btn-light"></button>
            
                 getWeatherData(userInput);
                }
            }
            
            
    // getWeatherData();

  
form.addEventListener('submit', getUserInput)