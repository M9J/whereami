export function getCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      function (positionError) {
        reject(positionError);
      }
    );
  });
}

export function getCoordinatesTest() {
  return new Promise((resolve) => {
    const coords =
      TEST_COORDINATES[Math.floor(Math.random() * TEST_COORDINATES.length)];
    if (coords) {
      resolve({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    }
  });
}

const TEST_COORDINATES = [
  {
    name: "Alappuzha",
    latitude: "9.4981",
    longitude: "76.3388",
  },
  {
    name: "Bekal",
    latitude: "12.3770",
    longitude: "75.0329",
  },
  {
    name: "Idukki",
    latitude: "9.8494",
    longitude: "76.9725",
  },
  {
    name: "Kannur",
    latitude: "11.8745",
    longitude: "75.3704",
  },
  {
    name: "Kasargod",
    latitude: "12.4994",
    longitude: "74.9896",
  },
  {
    name: "Kerala",
    latitude: "10.850516",
    longitude: "76.271080",
  },
  {
    name: "Kochi",
    latitude: "9.939093",
    longitude: "76.270523",
  },
  {
    name: "Kollam",
    latitude: "8.8932",
    longitude: "76.6141",
  },
  {
    name: "Kottayam",
    latitude: "9.5912",
    longitude: "76.5222",
  },
  {
    name: "Kovalam",
    latitude: "8.4025",
    longitude: "76.9780",
  },
  {
    name: "Kozhikode",
    latitude: "11.2588",
    longitude: "75.7804",
  },
  {
    name: "Kumarakom",
    latitude: "9.6186",
    longitude: "76.3958",
  },
  {
    name: "Malappuram",
    latitude: "11.0738",
    longitude: "76.0740",
  },
  {
    name: "Munnar",
    latitude: "10.0889",
    longitude: "77.0595",
  },
  {
    name: "Palakkad",
    latitude: "10.7867",
    longitude: "76.6548",
  },
  {
    name: "Pathanamthitta",
    latitude: "9.2642",
    longitude: "76.7873",
  },
  {
    name: "Thekkady",
    latitude: "9.5912",
    longitude: "77.1606",
  },
  {
    name: "Thiruvananthapuram",
    latitude: "8.524139",
    longitude: "76.936638",
  },
  {
    name: "Thrissur",
    latitude: "10.5276",
    longitude: "76.2144",
  },
  {
    name: "Varkala",
    latitude: "8.7350",
    longitude: "76.7064",
  },
  {
    name: "Wayanad",
    latitude: "11.6850",
    longitude: "76",
  },
];
