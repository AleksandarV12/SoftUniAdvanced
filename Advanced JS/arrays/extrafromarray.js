function extractFromArray(array) {
  let maxNumber = array.shift();
  let myArray = [];
  myArray.push(maxNumber);

  array.forEach((x) => {
    if (x >= maxNumber) {
      myArray.push(x);
      maxNumber = x;
    }
  });
  return myArray;
}
//extractFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractFromArray([1, 2, 3, 4]);
