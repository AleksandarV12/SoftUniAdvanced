function validityChecker(x1, y1, x2, y2) {
  let formulaDistance = Math.hypot(x2 - x1, y2 - y1);
  let formulaDistance2 = Math.hypot(x1 - 0, y1 - 0);
  let formulaDistance3 = Math.hypot(x2 - 0, y2 - 0);
  let checkInteger = Number.isInteger(formulaDistance);
  let checkInteger2 = Number.isInteger(formulaDistance2);
  let checkInteger3 = Number.isInteger(formulaDistance3);
  if (checkInteger3 == true) {
    console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
  } else if (checkInteger3 == false) {
    console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
  }
  if (checkInteger2 == true) {
    console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
  } else if (checkInteger2 == false) {
    console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
  }
  if (checkInteger == true) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else if (checkInteger == false) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}
//validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
