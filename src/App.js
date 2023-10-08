import React, { useEffect, useState } from "react";

import "./App.css";
import TextMap from "./components/TextMap/TextMap";
import LayoutBody from "./components/UI/Layout/Body/LayoutBody";
import LayoutFooter from "./components/UI/Layout/Footer/LayoutFooter";
import LayoutHeader from "./components/UI/Layout/Header/LayoutHeader";
import LayoutStatus from "./components/UI/Layout/Status/LayoutStatus";
import { getCoordinates } from "./util/navigator/geolocation";
import { getLocationByCoordinates } from "./util/openstreetmap/geo";

import {
  ALERT_TIMEOUT,
  AUTO_REFRESH_DELAY,
  AUTO_REFRESH_ENABLED,
} from "./App.config";

export default function App() {
  const [coordinates, setCoordinates] = useState("");
  const [location, setLocation] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    setDocumentTitle();
    getData();
    if (AUTO_REFRESH_ENABLED) autoRefresh();
  }, []);

  function setDocumentTitle() {
    document.title = "Linearmapp";
  }

  async function getData() {
    alertToLayout("Fetching...", true);
    const coordinates = await getCoordinates();
    // const coordinates = await getCoordinatesTest();
    if (coordinates) {
      setCoordinates(coordinates);
      const locationResponse = await getLocationByCoordinates(
        coordinates.latitude,
        coordinates.longitude
      );
      if (locationResponse.status) {
        alertToLayout("Fetched.");
        setLocation(locationResponse.data);
      } else alertToLayout(locationResponse.message);
    }
  }

  function alertToLayout(message, isStatic = false) {
    setAlertMessage(message);
    if (!isStatic) {
      let timeout1 = setTimeout(() => {
        clearTimeout(timeout1);
        setAlertMessage(null);
      }, ALERT_TIMEOUT * 1000);
    }
  }

  function refresh() {
    getData();
  }

  function autoRefresh() {
    let interval1 = setInterval(() => {
      getData();
    }, AUTO_REFRESH_DELAY * 1000);
  }

  return (
    <React.Fragment>
      <LayoutHeader headerText="Linearmapp" refreshAction={refresh} />
      <LayoutStatus message={alertMessage} />
      <LayoutBody>
        <TextMap coordinates={coordinates} location={location} />
      </LayoutBody>
      <LayoutFooter />
    </React.Fragment>
  );
}
