import React from "react";
import { useState, useEffect } from "react";

import "./MapImage.css";

export default function MapImage(props) {
  const BLANK_IMAGE =
    "data:image/png;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
  const [src, setSrc] = useState(BLANK_IMAGE);

  useEffect(() => {
    const getRandomImage = async (query) => {
      if (!query) query = "travel";
      let address = props.location ? props.location.address : null;
      let town = address ? address.town : null;
      let city = address ? address.city : null;
      let district = address ? address.state_district : null;
      let state = address ? address.state : null;
      let country = address ? address.country : null;
      if (town) query = town;
      else if (city) query = city;
      else if (district) query = district;
      else if (state) query = state;
      else if (country) query = country;
      let randomImage = BLANK_IMAGE;
      try {
        const randomImageResponse = await fetch(
          "https://source.unsplash.com/random/?" + query
        );
        randomImage = randomImageResponse?.url;
      } catch (e) {
        console.log(e);
      }
      return randomImage;
    };

    const setRandomImage = async () => {
      const randomImage = await getRandomImage();
      if (randomImage) setSrc(randomImage);
    };

    setRandomImage();
  }, [props.location]);

  return (
    <div className="map-image-container">
      <img className="map-image" src={src} alt="" />
    </div>
  );
}
