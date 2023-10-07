const api = (lat, lon) =>
  `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;

export async function getLocationByCoordinates(latitude, longitude) {
  if (latitude && longitude) {
    const response = await fetch(api(latitude, longitude));
    const location = await response.json();
    return location;
  }
}
