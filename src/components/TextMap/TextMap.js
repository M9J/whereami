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
  let summary = [[], [], [], []];
  if (neighbourhood) summary[0].push(neighbourhood);
  if (village) summary[0].push(village);
  if (suburb) summary[1].push(suburb);
  if (town) summary[1].push(town);
  if (city) summary[2].push(city);
  if (stateDistrict) summary[2].push(stateDistrict);
  if (state) summary[3].push(state);
  if (country) summary[3].push(country);
  return (
    <div className="text-map">
      <div className="current-location">
        <div className="current-location-summary">
          {summary[0] && summary[0].join(", ")} <br />
          {summary[1] && summary[1].join(", ")} <br />
          {summary[2] && summary[2].join(", ")} <br />
          {summary[3] && summary[3].join(", ")} <br />
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
