function calorieObject(array) {
  let myObject = {};
  for (let i = 0; i < array.length; i += 2) {
    let key = array[i];
    let value = array[i + 1];
    myObject[key] = Number(value);
  }
  console.log(myObject);
}
calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
