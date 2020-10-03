import React, { useState } from 'react';
import './Weather.css';
import SearchIcon from './search.svg';

function Weather() {
    const [userSearch, setUserSearch] = useState('');
    const [searchCity, setSearchCity] = useState({});
    const [weatherData, setWeatherData] = useState([]);
    const [backgroundimage, setBackgroundImage] = useState(require('./images/clear1.jpg'));

    function calculateBackgroundImage(weatherReport) {
        const randNumber = Math.floor(Math.random() * 6);
        switch (weatherReport) {
            case "Rain":
                setBackgroundImage(require(`./images/rain${randNumber}.jpg`));
                break;
            case 'Clouds':
                setBackgroundImage(require(`./images/cloud${randNumber}.jpg`));
                break;
            case "Clear":
                setBackgroundImage(require(`./images/clear${randNumber}.jpg`));
                break;
            default:
                break;
        }
    }


    async function getData(cityName) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=70a9bb2a3159f2bf172324ddf422b8ab`);
        const data = await response.json();
        console.log(data);
        setSearchCity(data.city);
        setWeatherData(data.list);

        if (!weatherData.length) return <h1>loading</h1>

        //Select Rrandom Background Image on the basis of weather type
        calculateBackgroundImage(weatherData[0].weather[0].main);

        //Set that background image
        let background = document.getElementsByClassName('app__container');
        background[0].style.backgroundImage = `url(${backgroundimage})`;
    }

    function miliSecondsToTime(timeInMili) {
        var date = new Date(timeInMili);
        return date.toLocaleTimeString();
    }

    return (
        <div className="weather__container">
            <div className="weather__searchContianer">
                <input className="weather__serachBox" placeholder="Another Location" value={userSearch} onChange={(e) => setUserSearch(e.target.value)} />
                <button className="weather__searchButton" onClick={() => { getData(userSearch) }} ><img className="weatcher__searchIcon" alt="serachIcon" src={SearchIcon} /></button >
            </div>
            <p className="weather__title">Location Details</p>
            <div className="weather__details">
                <div className="weather__detailsItem">
                    <p className="weather__detailsItemTitle">Name</p>
                    <p className="weather__detailsItemValue">{searchCity && searchCity.name}</p>
                </div>
                <div className="weather__detailsItem">
                    <p className="weather__detailsItemTitle">Sunrise</p>
                    <p className="weather__detailsItemValue">{searchCity && miliSecondsToTime(searchCity.sunrise)}</p>
                </div>
                <div className="weather__detailsItem">
                    <p className="weather__detailsItemTitle">Sunset</p>
                    <p className="weather__detailsItemValue">{searchCity && miliSecondsToTime(searchCity.sunset)}</p>
                </div>
                <div className="weather__detailsItem">
                    <p className="weather__detailsItemTitle">Population</p>
                    <p className="weather__detailsItemValue">{searchCity && searchCity.population}</p>
                </div>

            </div>
            <input disabled className="weater__splitter" />
            <p className="weather__title">Weather Details</p>
            <div className="weather__details">
                <div className="weather__detailsItem">
                    <p className="weather__detailsItemTitle">Day</p>
                    <p className="weather__detailsItemValue">{weatherData.length && weatherData[0].weather[0].main}</p>
                </div>
                <div className="weather__detailsItem">
                    <p className="weather__detailsItemTitle">Temperature</p>
                    <p className="weather__detailsItemValue">{Math.floor(weatherData.length && weatherData[1].main.temp)}</p>
                </div>
                <div className="weather__detailsItem">
                    <p className="weather__detailsItemTitle">Min Temperature</p>
                    <p className="weather__detailsItemValue">{Math.floor(weatherData.length && weatherData[1].main.temp_min)}</p>
                </div>
                <div className="weather__detailsItem">
                    <p className="weather__detailsItemTitle">Max Temperature</p>
                    <p className="weather__detailsItemValue">{Math.floor(weatherData.length && weatherData[1].main.temp_max)}</p>
                </div>
                <div className="weather__detailsItem">
                    <p className="weather__detailsItemTitle">Cloudy</p>
                    <p className="weather__detailsItemValue">{`${weatherData.length && weatherData[1].clouds.all}%`}</p>
                </div>
                <div className="weather__detailsItem">
                    <p className="weather__detailsItemTitle">Rain</p>
                    <p className="weather__detailsItemValue">24</p>
                </div>
                <div className="weather__detailsItem">
                    <p className="weather__detailsItemTitle">Humidity</p>
                    <p className="weather__detailsItemValue">{`${weatherData.length && weatherData[1].main.humidity}%`}</p>
                </div>
                <div className="weather__detailsItem">
                    <p className="weather__detailsItemTitle">Wind</p>
                    <p className="weather__detailsItemValue">{weatherData.length && weatherData[1].wind.speed}</p>
                </div>
                <div className="weather__detailsItem">
                    <p className="weather__detailsItemTitle">Rain</p>
                    <p className="weather__detailsItemValue">24</p>
                </div>
            </div>
        </div>
    )
}

export default Weather;
