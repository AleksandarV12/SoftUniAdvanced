function storeCatalogue(input) {
  const catalog = {};

  // Loop through the input array and process each product
  for (const productInfo of input) {
    // Split the productInfo into name and price
    const [name, price] = productInfo.split(" : ");

    // Get the initial letter of the product name (case-insensitive)
    const initial = name[0].toUpperCase();

    // Create an array for the initial if it doesn't exist in the catalog
    if (!catalog[initial]) {
      catalog[initial] = [];
    }

    // Push the product info to the corresponding initial group
    catalog[initial].push({ name, price: parseFloat(price) });
  }

  // Sort each group of products alphabetically by name
  for (const key in catalog) {
    catalog[key].sort((a, b) => a.name.localeCompare(b.name));
  }

  // Sort the initials alphabetically
  const sortedInitials = Object.keys(catalog).sort();

  // Iterate through the sorted initials and print the catalog
  for (const initial of sortedInitials) {
    console.log(initial);
    for (const product of catalog[initial]) {
      console.log(`  ${product.name}: ${product.price}`);
    }
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
