const form = document.querySelector('form')
const input = document.querySelector('#searchBar')
const savedCityArray = [];

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


            newDataObject.forEach((list, index) => {
                date.eq(index).text('Date: ' + list.dt_txt);
                temp.eq(index).text('Temp: ' + list.main.temp + ' Deg F');
                wind.eq(index).text('Wind Speed: ' + list.wind.speed + ' MPH');
                humidity.eq(index).text('Humidity: ' + list.main.humidity + '%');

            });
        })
};

const getUserInput = (event) => {
    event.preventDefault();
    const userInput = input.value
    if (userInput !== '') {
        localStorage.setItem('city', userInput);
        savedCityArray.push(userInput);
        console.log(savedCityArray);
        getWeatherData(userInput);

    }
}



const createButton = () => {
    const buttonContainer = document.getElementById('search-history');

    for (let i = 0; i < savedCityArray.length; i++) {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-light');
        button.textContent = savedCityArray[i];
        buttonContainer.appendChild(button);
    }
}


form.addEventListener('submit', createButton);

form.addEventListener('submit', getUserInput);
