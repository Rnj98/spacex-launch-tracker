import React from 'react';
import '../Index.css'
const LaunchDetails = ({ launch }) => (
  <div>
    <h2>{launch.mission_name}</h2>
    <p>Flight Number: {launch.flight_number}</p>
    <p>Launch Year: {launch.launch_year}</p>
    <p>Rocket Name: {launch.rocket.rocket_name}</p>
    <p>Manufacturer: {launch.rocket.second_stage.payloads[0].manufacturer}</p>
    <img className='w-32' src={launch.links.mission_patch} alt={launch.mission_name}/>
    <p>{launch.details}</p>
  </div>
);

export default LaunchDetails;
