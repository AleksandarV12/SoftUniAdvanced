function addAndRemove(array) {
  let initialNumber = 1;
  let myArray = [];

  for (i = 0; i < array.length; i++) {
    let command = array[i];
    if (command === "add") {
      myArray.push(initialNumber);
      initialNumber++;
    } else {
      myArray.pop();
      initialNumber++;
    }
  }
  if (myArray.length) {
    console.log(myArray.join("\n"));
  } else {
    console.log("Empty");
  }
}
//addAndRemove(["add", "add", "add", "add"]);
//addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
