const API_KEY = `b6681b19fdb19615ecb7d644a5ae15b2`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setTextValueById = (id, text) => {
    const element = document.getElementById(id);
    element.innerText = text;
}

const displayTemperature = (data) => {
    setTextValueById('temperature', data.main.temp);
    setTextValueById('condition', data.weather[0].main);
}

document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    setTextValueById('city', city);
    loadTemperature(city);
})

loadTemperature('Dhaka');