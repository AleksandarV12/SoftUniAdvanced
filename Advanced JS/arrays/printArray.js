function printArray(array, string) {
  let result = "";
  result = array.join(string);
  console.log(result);
}
printArray(["One", "Two", "Three", "Four", "Five"], "?");
