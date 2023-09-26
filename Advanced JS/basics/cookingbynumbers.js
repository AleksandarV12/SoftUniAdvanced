function cookingByNumbers(num, op1, op2, op3, op4, op5) {
  let myNumber = Number(num);
  let arrOp = [];
  arrOp.push(op1);
  arrOp.push(op2);
  arrOp.push(op3);
  arrOp.push(op4);
  arrOp.push(op5);
  for (i = 0; i < arrOp.length; i++) {
    switch (arrOp[i]) {
      case "chop":
        myNumber = myNumber / 2;
        break;
      case "dice":
        myNumber = Math.sqrt(myNumber);
        break;
      case "spice":
        myNumber = myNumber + 1;
        break;
      case "bake":
        myNumber = myNumber * 3;
        break;
      case "fillet":
        myNumber = myNumber * 0.8;
        break;
    }
    console.log(myNumber);
  }
}
cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
