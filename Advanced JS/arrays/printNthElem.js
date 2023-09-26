function printNthElem(array, number) {
  let result = [];
  for (let i = 0; i < array.length; i += number) {
    result += array[i];
  }
  console.log(result.join("\n"));
}
printNthElem(["5", "20", "31", "4", "20"], 2);
