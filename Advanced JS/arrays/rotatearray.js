function rotateArray(array, number) {
  for (let i = 1; i <= number; i++) {
    let lastElement = array[array.length - 1];
    array.pop();
    array.unshift(lastElement);
  }
  console.log(array.join(" "));
}
rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
