import "./TextMap.css";

export default function TextMap(props) {
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
  let summaryLine1 = [];
  let summaryLine2 = [];
  let summaryLine3 = [];
  let summaryLine4 = [];
  if (neighbourhood) summaryLine1.push(neighbourhood);
  if (village) summaryLine1.push(village);
  if (suburb) summaryLine2.push(suburb);
  if (town) summaryLine2.push(town);
  if (city) summaryLine3.push(city);
  if (stateDistrict) summaryLine3.push(stateDistrict);
  if (state) summaryLine4.push(state);
  if (country) summaryLine4.push(country);
  return (
    <div className="text-map">
      <div className="current-location">
        <div className="current-location-summary">
          {summaryLine1 && summaryLine1.join(", ")} <br />
          {summaryLine2 && summaryLine2.join(", ")} <br />
          {summaryLine3 && summaryLine3.join(", ")} <br />
          {summaryLine4 && summaryLine4.join(", ")} <br />
        </div>
        <div className="current-location-details hidden">
          Neighbourhood: {neighbourhood}, Village: {village} <br />
          Suburb: {suburb}, Town: {town} <br />
          City: {city}, District: {stateDistrict} <br />
          State: {state}, Country: {country} <br />
          Postcode: {postcode} <br />
        </div>
      </div>
      <div className="latitude-longitude-details">
        <div className="latitude-text">LAT: {props?.coordinates?.latitude}</div>
        <div className="longitude-text">
          LON: {props?.coordinates?.longitude}
        </div>
      </div>
    </div>
  );
}
