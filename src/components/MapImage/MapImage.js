import React from "react";
import { useState, useEffect } from "react";

import "./MapImage.css";

export default function MapImage(props) {
  const [src, setSrc] = useState(
    "data:image/png;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
  );

  const getRandomImage = async (query = "kerala") => {
    const randomImageResponse = await fetch(
      "https://source.unsplash.com/random/?" + query
    );
    const randomImage = randomImageResponse?.url;
    return randomImage;
  };

  const setInitialImage = async () => {
    const randomImage = await getRandomImage();
    if (randomImage) setSrc(randomImage);
  };

  const loopImage = () => {
    let t1 = setTimeout(async () => {
      clearTimeout(t1);
      const randomImage = await getRandomImage();
      if (randomImage) setSrc(randomImage);
      loopImage();
    }, 5000);
  };

  useEffect(() => {
    setInitialImage();
    loopImage();
  }, []);

  return (
    <div className="map-image-container">
      <img className="map-image" src={src} alt="" />
    </div>
  );
}
