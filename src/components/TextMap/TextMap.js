import { useState } from "react";
import "./TextMap.css";

export default function TextMap(props) {
  let latitude = props?.coordinates?.latitude || null;
  let longitude = props?.coordinates?.longitude || null;
  let location = props?.location;
  let address = location?.address;
  let city = address?.city || null;
  let country = address?.country || null;
  let neighbourhood = address?.neighbourhood || null;
  let postcode = address?.postcode || null;
  let state = address?.state || null;
  let stateDistrict = address?.state_district || null;
  let suburb = address?.suburb || null;
  let town = address?.town || null;
  let village = address?.village || null;
  let summary = [[], [], [], []];
  if (neighbourhood) summary[0].push(neighbourhood);
  if (village) summary[0].push(village);
  if (suburb) summary[1].push(suburb);
  if (town) summary[1].push(town);
  if (city) summary[2].push(city);
  if (stateDistrict) summary[2].push(stateDistrict);
  if (state) summary[3].push(state);
  if (country) summary[3].push(country);

  const [isShowingDetails, setShowingDetails] = useState(false);
  const [isShowingSummary, setShowingSummary] = useState(true);

  function toggleDetails() {
    setShowingDetails(!isShowingDetails);
    setShowingSummary(!isShowingSummary);
  }

  return (
    <div className="text-map">
      <div className="current-location">
        {!isShowingDetails && (
          <div className="current-location-summary" onClick={toggleDetails}>
            {summary[0] && <div>{summary[0].join(", ")}</div>}
            {summary[1] && <div>{summary[1].join(", ")}</div>}
            {summary[2] && <div>{summary[2].join(", ")}</div>}
            {summary[3] && <div>{summary[3].join(", ")}</div>}
          </div>
        )}
        {!isShowingSummary && (
          <div className="current-location-details" onClick={toggleDetails}>
            <div className="detail-title">
              Neighbourhood:{" "}
              <div className="detail-description">{neighbourhood || "-"}</div>
            </div>

            <div className="detail-title">
              Village:{" "}
              <div className="detail-description">{village || "-"}</div>
            </div>

            <div className="detail-title">
              Suburb: <div className="detail-description">{suburb || "-"}</div>
            </div>

            <div className="detail-title">
              Town: <div className="detail-description">{town || "-"}</div>
            </div>

            <div className="detail-title">
              City: <div className="detail-description">{city || "-"}</div>
            </div>

            <div className="detail-title">
              District:{" "}
              <div className="detail-description">{stateDistrict || "-"}</div>
            </div>

            <div className="detail-title">
              State: <div className="detail-description">{state || "-"}</div>
            </div>

            <div className="detail-title">
              Country:{" "}
              <div className="detail-description">{country || "-"}</div>
            </div>

            <div className="detail-title">
              Postcode:{" "}
              <div className="detail-description">{postcode || "-"}</div>
            </div>
          </div>
        )}
      </div>
      <div className="latitude-longitude-details">
        <div className="latitude-text">{latitude && `LAT: ${latitude}`}</div>
        <div className="longitude-text">{longitude && `LON: ${longitude}`}</div>
      </div>
    </div>
  );
}
