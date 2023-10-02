function lowestPrices(data) {
  let res = {};
  for (let line of data) {
    let [town, product, price] = line.split(" | ");
    price = Number(price);

    if (!res.hasOwnProperty(product)) {
      res[product] = {};
    }

    if (res[product]["price"] === undefined || res[product]["price"] > price) {
      res[product]["town"] = town;
      res[product]["price"] = price;
    }
  }

  for (let [product, productData] of Object.entries(res)) {
    console.log(`${product} -> ${productData.price} (${productData.town})`);
  }
}
lowestPrices([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
