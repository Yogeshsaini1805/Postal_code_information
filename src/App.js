import React, { useState } from 'react';
import './App.css';
import PostalCodeForm from '../src/Components/PostalCodeForm';
import LocationInfo from '../src/Components/LocationInfo';

const App = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLocationInfo = async (postalCode) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.zippopotam.us/in/${postalCode}`);
      if (!response.ok) {
        setLocation(null)
        throw new Error('Invalid postal code. Please try again.');
      }
      const data = await response.json();
      // console.log(data)
      setLocation(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const clearLocationInfo = () => {
    setLocation(null);
    setError(null);
  };

  return (
    <div className="App">
      <h1 id='heading'>Postal Code Information</h1>
      <PostalCodeForm onFormSubmit={fetchLocationInfo} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {location && <LocationInfo location={location} />}
      <button className='clear-btn' onClick={clearLocationInfo}>Clear</button>
    </div>  
  );
};

export default App;


