import React from 'react';

// Configuration for each season
const searchConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
  },
  winter: {
    text: 'Burr it is cold!',
    iconName: 'snowflake',
  },
};

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
  const { text, iconName } = searchConfig[season];

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
