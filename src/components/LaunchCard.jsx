import React, { useEffect, useState } from "react";
import LaunchDetails from "./LaunchDetails";

function LaunchCard() {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then((data) => setLaunches(data));
  }, []);
  return (
    <div>
      {launches.map(launch => (
        <LaunchDetails key={`${launch.flight_number}-${launch.launch_date_unix}`} launch={launch} />
      ))}
    </div>
  );
  
}

export default LaunchCard;
