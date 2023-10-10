// LAT: 9.2612, LON: 76.7833

/*
    x-1, y+1    x, y+1     x+1, y+1
    x-1, y      x, y       x+1, y  
    x-1, y-1    x, y-1     x+1, y-1
*/

// x = lon, y = lat

// let C = null;
// let N = null;
// let S = null;
// let E = null;
// let W = null;
// let NW = null;
// let NE = null;
// let SW = null;
// let SE = null;

let latInc = 0.01;
// let lonInc = 0.1;

export function nearByNorthAndSouth(lat, lon) {
  if (lat && lon) {
    let northLat = null;
    let northLon = null;
    let southLat = null;
    let southLon = null;
    northLon = lon; northLat = lat + latInc;
    southLon = lon; southLat = lat - latInc;
    return {
      N: [northLat, northLon],
      S: [southLat, southLon],
    };
  }
}

// function nearByEastAndWest(lat, lon) {
//   if (lat && lon) {
//   }
// }

// function nearByAllFourDirections(lat, lon) {
//   if (lat && lon) {
//   }
// }

// function nearByAllEightDirections(lat, lon) {
//   if (lat && lon) {
//   }
// }
