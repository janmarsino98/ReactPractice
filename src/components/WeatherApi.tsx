import React, { useEffect, useState } from 'react';

interface Props {
  latitude: number;
  longitude: number;
}

const weatherApi = ({ latitude, longitude }: Props) => {
  const [temperatures, setTemperatures] = useState([]);
  const [hours, setHours] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=' +
          latitude +
          '&longitude=' +
          longitude +
          '&hourly=temperature_2m',
      );
      const jsonData = await response.json();
      setTemperatures(jsonData.hourly.temperature_2m);
      setHours(jsonData.hourly.time);
    } catch (error) {
      console.error(
        'There was an error while fetching data from the API: ',
        error,
      );
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <>
      <h2>Temperature La Seu d'Urgell</h2>
      <table>
        <thead>
          <tr>
            <th scope='col' style={{ width: '70%' }}>
              Hour
            </th>
            <th scope='col' style={{ width: '70%' }}>
              Temperature
            </th>
          </tr>
        </thead>
        <tbody>
          {temperatures.map((temperature, index) => (
            <tr key={index}>
              <td style={{ width: '70%' }}>{hours[index]}</td>
              <td style={{ width: '70%' }}>{temperature}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default weatherApi;
