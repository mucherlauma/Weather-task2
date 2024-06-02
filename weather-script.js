window.addEventListener('DOMContentLoaded', () => {
    // Retrieve URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');
    const temp = urlParams.get('temp');
    const desc = urlParams.get('desc');

    // Display weather information
    const cityElement = document.getElementById('city');
    const tempElement = document.getElementById('temperature');
    const descElement = document.getElementById('description');
    const iconElement = document.getElementById('weather-icon');

    cityElement.textContent = city || 'N/A';
    tempElement.textContent = temp || 'N/A';
    descElement.textContent = desc || 'N/A';

    // Set weather icon based on weather description
    const weatherIcon = getWeatherIcon(desc);
    if (weatherIcon) {
        iconElement.innerHTML = `<img src="${weatherIcon}" alt="Weather Icon">`;
    } else {
        iconElement.innerHTML = '';
    }
});

function getWeatherIcon(weatherDescription) {
    // Map weather descriptions to corresponding icons
    const weatherIcons = {
        'clear sky': 'icons/clear-sky.png',
        'few clouds': 'icons/few-clouds.png',
        'scattered clouds': 'icons/scattered-clouds.png',
        'broken clouds': 'icons/broken-clouds.png',
        'shower rain': 'icons/shower-rain.png',
        'rain': 'icons/rain.png',
        'thunderstorm': 'icons/thunderstorm.png',
        'snow': 'icons/snow.png',
        'mist': 'icons/mist.png',
        // Add more mappings as needed
    };

    // Check if weather description exists in the mapping
    return weatherIcons[weatherDescription.toLowerCase()];
}