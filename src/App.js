import React, { useEffect, useState } from "react";

import "./App.css";
import MapImage from "./components/MapImage/MapImage";
import TextMap from "./components/TextMap/TextMap";
import LayoutBackground from "./components/UI/Layout/Background/LayoutBackground";
import LayoutBody from "./components/UI/Layout/Body/LayoutBody";
import LayoutForeground from "./components/UI/Layout/Foreground/LayoutForeground";
import LayoutHeader from "./components/UI/Layout/Header/LayoutHeader";
import LayoutStatus from "./components/UI/Layout/Status/LayoutStatus";
import {
  getCoordinates
} from "./util/navigator/geolocation";
import {
  APIS,
  getLocationByCoordinates,
  updateCurrentApi
} from "./util/openstreetmap/geo";

import {
  ALERT_TIMEOUT,
  AUTO_REFRESH_DELAY,
  AUTO_REFRESH_ENABLED
} from "./App.config";
import * as DEFAULT_QUEUE from "./util/queue/queue.v2";

export default function App() {
  const [coordinates, setCoordinates] = useState("");
  const [location, setLocation] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    updateCurrentApi(APIS.apiV2);
    async function getDataUE() {
      alertToLayout("[AUTO] Fetching...", true);
      const coordinates = await getCoordinates();
      // const coordinates = await getCoordinatesTest();
      if (coordinates) {
        setCoordinates(coordinates);
        const locationResponse = await getLocationByCoordinates(
          coordinates.latitude,
          coordinates.longitude
        );
        if (locationResponse.status) {
          alertToLayout("[AUTO] Fetched.");
          setLocation(locationResponse.data);
        } else alertToLayout(locationResponse.message);
      }
    }

    function autoRefreshUE() {
      let timeout1 = setTimeout(() => {
        clearTimeout(timeout1);
        DEFAULT_QUEUE.add(() => getDataUE());
        autoRefreshUE();
      }, AUTO_REFRESH_DELAY * 1000);
    }

    setDocumentTitle();
    DEFAULT_QUEUE.add(() => getDataUE());
    if (AUTO_REFRESH_ENABLED) {
      autoRefreshUE();
    }
    DEFAULT_QUEUE.start();
  }, []);

  function setDocumentTitle() {
    document.title = "Where Am I";
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
    DEFAULT_QUEUE.add(() => setAlertMessage(message));
    if (!isStatic) {
      let timeout1 = setTimeout(() => {
        clearTimeout(timeout1);
        DEFAULT_QUEUE.add(() => setAlertMessage(null));
      }, ALERT_TIMEOUT * 1000);
    }
  }

  function refresh() {
    DEFAULT_QUEUE.add(() => getData());
  }

  return (
    <React.Fragment>
      <LayoutBackground>
        <MapImage location={location} />
      </LayoutBackground>
      <LayoutForeground>
        <LayoutHeader headerText="WhereAmI" refreshAction={refresh} />
        {alertMessage && <LayoutStatus message={alertMessage} />}
        <LayoutBody>
          <TextMap coordinates={coordinates} location={location} />
        </LayoutBody>
      </LayoutForeground>
    </React.Fragment>
  );
}
