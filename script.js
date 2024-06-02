async function fetchWeatherData() {
    const apiKey = '68cf45a6b06da1ee1aa795442dce6509';
    const cityInput = document.getElementById('cityInput').value.trim();

    if (cityInput === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        redirectToWeatherPage(cityInput, data.main.temp, data.weather[0].description);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data. Please try again later.');
    }
}

function redirectToWeatherPage(city, temperature, description) {
    const url = `weather.html?city=${encodeURIComponent(city)}&temp=${temperature}&desc=${encodeURIComponent(description)}`;
    window.location.href = url;
}

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const apiKey = '68cf45a6b06da1ee1aa795442dce6509';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

            try {
                const response = await axios.get(apiUrl);
                const data = response.data;
                redirectToWeatherPage(data.name, data.main.temp, data.weather[0].description);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                alert('Failed to fetch weather data for current location. Please try again later.');
            }
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}