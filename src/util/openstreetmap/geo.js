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
      // const location = DUMMY_RESPONSE;
      return {
        status: 1,
        message: null,
        data: location,
      };
    } catch (e) {
      return {
        status: 0,
        message: "Failed to fetch",
        data: null,
      };
    }
  }
}

// const DUMMY_RESPONSE = {
//   place_id: 280089095,
//   licence:
//     "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
//   powered_by: "Map Maker: https://maps.co",
//   osm_type: "way",
//   osm_id: 971964149,
//   lat: "9.9194844",
//   lon: "76.2575148",
//   place_rank: 26,
//   category: "highway",
//   type: "residential",
//   importance: 0.09999999999999998,
//   addresstype: "road",
//   name: null,
//   display_name: "Valummel, Kochi, Ernakulam district, Kerala, 682507, India",
//   address: {
//     suburb: "Valummel",
//     city: "Kochi",
//     county: "Kochi",
//     state_district: "Ernakulam district",
//     state: "Kerala",
//     postcode: "682507",
//     country: "India",
//     country_code: "in",
//   },
//   boundingbox: ["9.9194844", "9.9196743", "76.2575148", "76.2582645"],
// };
