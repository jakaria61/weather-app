const loadTemp = () => {
    const inputName = document.getElementById('city-name');
    const searchText = inputName.value;
    inputName.value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=37afafe201c8656df230a7fd84b332ee`
    fetch(url)
        .then(res => res.json())
        .then(data => showWeather(data))
}
const showWeather = (data) => {
    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
                        <h1>${data.name}, ${data.sys.country}</h1>
                        <h3>des:${data.weather[0].description}</h3>
                         <h3> main:${data.weather[0].main}</h3>
                         <h3> deg:${data.wind.deg}</h3>
                         <h3>air speed:${data.wind.speed}</h3>
                        <img  src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"/>
                         <h3>TimeZone:${data.timezone}</h3>
        
        `;
    weatherContainer.appendChild(div);


}