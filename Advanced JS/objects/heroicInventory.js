function heroicInventory(array) {
  let result = [];
  for (const i of array) {
    let [name, level, items] = i.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];

    result.push({ name, level, items });
  }
  console.log(JSON.stringify(result));
}
heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
