import "./TextMap.css";

export default function TextMap(props) {
  let location = props?.location;
  let address = location?.address;
  let city = address?.city;
  let country = address?.country;
  let displayName = location?.display_name;
  let neighbourhood = address?.neighbourhood;
  let postcode = address?.postcode;
  let state = address?.state;
  let stateDistrict = address?.state_district;
  let town = address?.town;
  let village = address?.village;
  return (
    <div className="text-map">
      <div className="current-location">
        Display name: {displayName} <br/><br/>
        Neighbourhood: {neighbourhood} <br/>
        Village: {village} <br/>
        Town: {town} <br/>
        City: {city} <br/>
        State district: {stateDistrict} <br/>
        State: {state} <br/>
        Country: {country} <br/>
        Postcode: {postcode} <br/>
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
