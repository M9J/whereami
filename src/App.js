import React, { useEffect, useState } from "react";

import "./App.css";
import TextMap from "./components/TextMap/TextMap";
import LayoutBody from "./components/UI/Layout/Body/LayoutBody";
import LayoutFooter from "./components/UI/Layout/Footer/LayoutFooter";
import LayoutHeader from "./components/UI/Layout/Header/LayoutHeader";
import { getCoordinates } from "./util/navigator/geolocation";
import { getLocationByCoordinates } from "./util/openstreetmap/geo";

export default function App() {
  const [coordinates, setCoordinates] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    setDocumentTitle();
    async function getInitData() {
      const coordinates = await getCoordinates();
      if (coordinates) {
        setCoordinates(coordinates);
        const location = await getLocationByCoordinates(
          coordinates.latitude,
          coordinates.longitude
        );
        if (location) {
          setLocation(location);
        }
      }
    }
    getInitData();
  }, []);
  function setDocumentTitle() {
    document.title = "Linearmapp";
  }

  function refresh() {}

  return (
    <React.Fragment>
      <LayoutHeader headerText="Linearmapp" refreshAction={refresh} />
      <LayoutBody>
        <TextMap coordinates={coordinates} location={location} />
      </LayoutBody>
      <LayoutFooter />
    </React.Fragment>
  );
}
