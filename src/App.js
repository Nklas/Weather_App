import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import GoogleMap from "./components/GoogleMap"

const api_key = "31b9d7174db19ae7ba7036ce22333a3b";

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        coordLon: undefined,
        coordLat: undefined,
        error: undefined
    };
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric`);
        const data = await api_call.json();
        if (city && country) {
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                wind: data.wind.speed,
                coordLon: data.coord.lon,
                coordLat: data.coord.lat,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                wind: undefined,
                coordLon: undefined,
                coordLat: undefined,
                error: "Please enter the value."
            });
        }
    };
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 title-container">
                                    <Titles />

                                </div>
                                <div className="google-map">
                                    <GoogleMap
                                        coordLon={this.state.coordLon}
                                        coordLat={this.state.coordLat}
                                    />
                                </div>
                                <div className="form-container">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather
                                        temperature={this.state.temperature}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        wind={this.state.wind}
                                        error={this.state.error}
                                    />

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}




export default App;
