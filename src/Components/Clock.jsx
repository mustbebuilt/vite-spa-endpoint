import React, { useState, useEffect } from "react";

const Clock = () => {
  // Set initial state using useState
  const [date, setDate] = useState(new Date());

  // useEffect hook to mimic componentDidMount and componentWillUnmount
  useEffect(() => {
    // Set up the timer
    const timerID = setInterval(() => tick(), 1000);

    // Cleanup function to clear the interval (componentWillUnmount equivalent)
    return () => {
      clearInterval(timerID);
    };
  }, []); // Empty dependency array means this effect runs only once (on mount)

  // Function to update the time
  const tick = () => {
    setDate(new Date());
  };

  return (
    <div>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
