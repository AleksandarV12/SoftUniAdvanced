// function townsToJSON(towns) {
//   let townsArr = [];
//   for (let town of towns.slice(1)) {
//     //ignore the first element of the array
//     let [empty, townName, lat, lng] = town.split(/\s*\|\s*/);
//     let townObj = {
//       Town: townName,
//       Latitude: Number(lat),
//       Longitude: Number(lng),
//     };
//     townsArr.push(townObj); //adds elements to the array
//   }
//   console.log(JSON.stringify(townsArr));
// }
function townsToJSON(input) {
  const towns = [];

  const regex = new RegExp(/\s*\|\s*/);
  for (const line of input.splice(1)) {
    let tokens = line.split(regex).filter(Boolean);
    towns.push({
      Town: tokens[0],
      Latitude: +Number(tokens[1]).toFixed(2),
      Longitude: +Number(tokens[2]).toFixed(2),
    });
  }

  console.log(JSON.stringify(towns));
}
townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
