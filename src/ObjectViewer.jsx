import React, { useState, useEffect } from 'react';

function ObjectViewer() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Load data from your JSON file
    fetch('data.json')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>

      <div>
        <h2>{data[currentIndex].title}</h2>
        <p>{data[currentIndex].snippet}</p>
        <img src={data[currentIndex].thumbnail} alt={data[currentIndex].title} />
      </div>
    </div>
  );
}

export default ObjectViewer;
