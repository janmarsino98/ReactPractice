import React, { useState } from 'react';
import WeatherApi from './components/WeatherApi';
import './App.css';

function App() {
  return (
    <div>
      <WeatherApi latitude={42.35} longitude={1.45}></WeatherApi>
    </div>
  );
}

export default App;
