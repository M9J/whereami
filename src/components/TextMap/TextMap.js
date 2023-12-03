import React from "react";
import { useState } from "react";
import "./TextMap.css";

export default function TextMap(props) {
  let latitude = props?.coordinates?.latitude || null;
  let longitude = props?.coordinates?.longitude || null;
  let location = props?.location;

  const [isShowingDetails, setShowingDetails] = useState(false);

  function toggleDetails() {
    setShowingDetails(!isShowingDetails);
  }

  return (
    <React.Fragment>
      <div className="text-map">
        {location && (
          <div className="locations">
            <CurrentLocation
              location={location}
              toggleDetails={toggleDetails}
            />
            {/* <br /> */}
          </div>
        )}
        {isShowingDetails && (
          <React.Fragment>
            <div className="latitude-longitude-details">
              <LatitudeLongitude latitude={latitude} longitude={longitude} />
            </div>
            <div className="text-map-details" onClick={toggleDetails}>
              <LocationDetails location={location} />
            </div>
            <div className="text-map-copyright-credits">
              User Interface &copy;{" "}
              <a href="https://m9j.github.io/whereami/">WhereAmI</a>
              <br />
              Data &copy;{" "}
              <a href="https://www.openstreetmap.org/">OpenStreetMap</a>{" "}
              contributors <br />
              Images &copy; <a href="https://unsplash.com/">Unsplash</a>
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

function CurrentLocation(props) {
  let location = props.location;
  let toggleDetails = props.toggleDetails;
  return (
    <div className="current-location">
      <div className="current-location-icon">
        <img src={process.env.PUBLIC_URL + "/icons/location-pin.svg"} alt="" />
      </div>
      <div className="current-location-summary" onClick={toggleDetails}>
        <LocationSummary location={location} />
      </div>
    </div>
  );
}

function LocationDetails(props) {
  let location = props?.location;
  let address = location?.address;
  let city = address?.city || null;
  let county = address?.county || null;
  let country = address?.country || null;
  let neighbourhood = address?.neighbourhood || null;
  let postcode = address?.postcode || null;
  let state = address?.state || null;
  let district = address?.state_district || null;
  let suburb = address?.suburb || null;
  let town = address?.town || null;
  let village = address?.village || null;
  return (
    <div className="current-location-details">
      <LocationDetail label="Neighbourhood" value={neighbourhood} />
      <LocationDetail label="Village" value={village} />
      <LocationDetail label="Suburb" value={suburb} />
      <LocationDetail label="Town" value={town} />
      <LocationDetail label="City" value={city} />
      <LocationDetail label="County" value={county} />
      <LocationDetail label="District" value={district} />
      <LocationDetail label="State" value={state} />
      <LocationDetail label="Country" value={country} />
      <LocationDetail label="Postcode" value={postcode} />
    </div>
  );
}

function LocationDetail(props) {
  return (
    <div className="detail-title">
      {props.label}
      <div className="detail-description">{props.value || "-"}</div>
    </div>
  );
}

function LocationSummary(props) {
  let location = props?.location;
  let address = location?.address;
  let city = address?.city || null;
  let county = address?.county || null;
  let country = address?.country || null;
  let neighbourhood = address?.neighbourhood || null;
  let state = address?.state || null;
  let district = address?.state_district || null;
  let suburb = address?.suburb || null;
  let town = address?.town || null;
  let village = address?.village || null;
  let summary = [[], [], [], []];
  if (neighbourhood) summary[0].push(neighbourhood);
  if (village) summary[0].push(village);
  if (suburb) summary[1].push(suburb);
  if (town) summary[1].push(town);
  if (city) summary[2].push(city);
  if (county) summary[2].push(county);
  if (district) summary[2].push(district);
  if (state) summary[3].push(state);
  if (country) summary[3].push(country);
  // let summary = props.summary;
  return (
    <React.Fragment>
      {summary[0] && (
        <div className="current-location-summary-text">
          {summary[0].join(", ")}
        </div>
      )}
      {summary[1] && (
        <div className="current-location-summary-text">
          {summary[1].join(", ")}
        </div>
      )}
      {summary[2] && (
        <div className="current-location-summary-text">
          {summary[2].join(", ")}
        </div>
      )}
      {summary[3] && (
        <div className="current-location-summary-text">
          {summary[3].join(", ")}
        </div>
      )}
    </React.Fragment>
  );
}

function LatitudeLongitude(props) {
  const latitude = props.latitude;
  const longitude = props.longitude;
  return (
    <React.Fragment>
      <div className="latitude-text">{latitude && `LAT: ${latitude}`}</div>
      <div className="longitude-text">{longitude && `LON: ${longitude}`}</div>
    </React.Fragment>
  );
}
