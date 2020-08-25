import React from 'react';

// Get season
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // Apr <---> Sept
    return lat > 0 ? 'summer' : 'winter';
  } else {
    // Oct <---> Mar
    return lat > 0 ? 'winter' : 'summer';
  }
};

// Function Component
const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const text =
    season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';

  return <h1>{text}</h1>;
};

export default SeasonDisplay;
