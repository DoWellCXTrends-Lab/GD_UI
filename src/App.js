import React, { useState } from "react";
import jsonData from "./data.json"; // Replace with the path to your JSON file

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentObject = jsonData[currentIndex] || null;

  const getImageName = (index) => {
    return `Image ${String.fromCharCode(65 + index)}`;
  };

  const handleNext = () => {
    if (currentIndex < jsonData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="App">
      <a href={currentObject.link} target="_blank" rel="noopener noreferrer">
        <h1>{currentObject ? getImageName(currentIndex) : "JSON Viewer"}</h1>
      </a>
      {currentObject && (
        <div>
          {currentObject.title && <h2>{currentObject.title}</h2>}
          {currentObject.thumbnail && (
            <a href={currentObject.link} target="_blank" rel="noopener noreferrer">
              <img src={currentObject.thumbnail} alt={currentObject.title} />
            </a>
          )}
          {currentObject.favicon && (
            <img src={currentObject.favicon} alt="Favicon" />
          )}
          {currentObject.displayed_link && (
            <p>Displayed Link: {currentObject.displayed_link}</p>
          )}
          {currentObject.snippet && <p>Snippet: {currentObject.snippet}</p>}
          {currentObject.result_type === "video" && (
            <div>
              {currentObject.channel && <p>Channel: {currentObject.channel}</p>}
              {currentObject.platform && <p>Platform: {currentObject.platform}</p>}
              {currentObject.date && <p>Date: {currentObject.date}</p>}
            </div>
          )}
          {currentObject.result_type === "inline" && (
            <div>
              {jsonData.map((item, index) => {
                if (item.result_type === "inline") {
                  return (
                    <div key={index} className="inline-card">
                      {item.title && <h2>{item.title}</h2>}
                      {item.favicon && (
                        <img src={item.favicon} alt="Favicon" />
                      )}
                      {item.thumbnail && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <img src={item.thumbnail} alt={item.title} />
                        </a>
                      )}
                      {item.price && (
                        <p>
                          Price: {item.price} {item.currency}
                        </p>
                      )}
                      {item.source && <p>Source: {item.source}</p>}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>
      )}
      <div>
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentIndex === jsonData.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
