import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonContent, IonPage, IonAlert, IonIcon, IonHeader, IonTitle, IonToolbar, IonMenuButton } from '@ionic/react';
import { thunderstormOutline, rainyOutline, thunderstorm, snowOutline, partlySunnyOutline, cloudOutline, sunnyOutline } from 'ionicons/icons'; // Import Ionicons icons

const WeatherForecast: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [errorAlert, setErrorAlert] = useState<string>('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Dominican Republic&appid=11706e1fe48a272d4fb899178dde3383');
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setErrorAlert('An error occurred while fetching weather data. Please try again later.');
      }
    };

    fetchWeatherData();
  }, []);

  const getWeatherIcon = (weatherId: number) => {
    // Choose an appropriate weather icon based on weather condition code
    if (weatherId >= 200 && weatherId < 300) {
      return thunderstormOutline; // Thunderstorm
    } else if (weatherId >= 300 && weatherId < 400) {
      return rainyOutline; // Drizzle
    } else if (weatherId >= 500 && weatherId < 600) {
      return thunderstorm; // Rain
    } else if (weatherId >= 600 && weatherId < 700) {
      return snowOutline; // Snow
    } else if (weatherId === 800) {
      return sunnyOutline; // Clear sky
    } else if (weatherId > 800 && weatherId < 900) {
      return cloudOutline; // Clouds
    } else {
      return partlySunnyOutline; // Unknown or unhandled weather condition
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>Weather Forecast </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="container mx-auto h-screen w-screen">
          <div className="flex items-center justify-center h-full">
            <div className="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
              <div className="flex flex-col">
                <div>
                  <h2 className="font-bold text-gray-600 text-center">{weatherData?.name}, {weatherData?.sys?.country}</h2>
                </div>
                <div className="my-6">
                  <div className="flex flex-row space-x-4 items-center">
                    <div id="icon">
                      <span>
                        <IonIcon className="w-20 h-20 text-yellow-400" src={getWeatherIcon(weatherData?.weather[0]?.id)}/>
                      </span>
                    </div>
                    <div id="temp">
                      <h4 className="text-4xl">{(weatherData?.main?.temp - 273.15).toFixed(1)}&deg;C</h4>
                      <p className="text-xs text-gray-500">Feels like {(weatherData?.main?.feels_like - 273.15).toFixed(1)}&deg;C</p>
                    </div>
                  </div>
                </div>
                {/* <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
                  <a href="#" className="text-indigo-600 text-xs font-medium">View more</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <IonAlert
          isOpen={!!errorAlert}
          onDidDismiss={() => setErrorAlert('')}
          header={'Error'}
          message={errorAlert}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default WeatherForecast;
