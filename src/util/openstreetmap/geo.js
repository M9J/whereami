const apis = {
  apiV1: (lat, lon) =>
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`,
  apiV2: (lat, lon) =>
    `https://geocode.maps.co/reverse?format=jsonv2&lat=${lat}&lon=${lon}`,
};

const api = apis.apiV2;

export async function getLocationByCoordinates(latitude, longitude) {
  if (latitude && longitude) {
    try {
      const response = await fetch(api(latitude, longitude));
      const location = await response.json();
      return {
        status: 1,
        message: null,
        data: location,
      };
    } catch (e) {
      console.log(e);
      return {
        status: 0,
        message: "Failed to fetch",
        data: null,
      };
    }
  }
}
