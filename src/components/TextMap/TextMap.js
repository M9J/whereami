import "./TextMap.css";

export default function TextMap(props) {
  let locationCity = "";
  let locationStateCountry = "";
  if (props?.location?.address) {
    locationCity = `${props.location.address.city}`;
    locationStateCountry = `${props.location.address.state}, ${props.location.address.country}`;
  }
  return (
    <div className="text-map">
      <div className="current-location">
        <div className="current-location-city">{locationCity}</div>
        <div className="current-location-state-country">
          {locationStateCountry}
        </div>
      </div>
      <div className="latitude-longitude-details">
        <div className="latitude-text">LAT: {props?.coordinates?.latitude}</div>
        <div className="longitude-text">
          LONG: {props?.coordinates?.longitude}
        </div>
      </div>
    </div>
  );
}
