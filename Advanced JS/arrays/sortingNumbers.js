function sortingNumbers(array) {
  let myArray = [];
  let myArrayLength = array.length;
  array.sort((a, b) => a - b);
  for (let i = 0; i < myArrayLength / 2; i++) {
    myArray.push(array[0]);
    array.shift();
    myArray.push(array[array.length - 1]);
    array.pop();
  }
  console.log(myArray);
  return myArray;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
