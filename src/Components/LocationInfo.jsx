import React from "react";
import '../Styles/LocationInfo.css';

// const Card = (places) => {
//   return places && places.map((item) => {
//     return(
//     <p>item.placename</p>
//     )
//   });
// };
const LocationInfo = ({ location }) => {
  const { postcode, country, places } = location;
console.log(places)
  return (
    <div className="location-info">
      <p><strong>Postal Code:</strong> {postcode}</p>
      <p><strong>Country:</strong> {country}</p>
      <h3>Places:</h3>
      <ul>
        {places.map((place, index) => (
          <li key={index}>
            <strong>Place Name:</strong> {place["place name"]}<br />
            <strong>State:</strong> {place.state}<br />
            {/* <strong>Longitude:</strong> {place.longitude}<br />
            <strong>State Abbreviation:</strong> {place.state_abbreviation}<br />
            <strong>Latitude:</strong> {place.latitude}<br /> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationInfo;
