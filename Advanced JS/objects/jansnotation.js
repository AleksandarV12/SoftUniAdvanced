function postfixCalculator(input) {
  const stack = [];

  for (const item of input) {
    if (typeof item === "number") {
      stack.push(item);
    } else if (typeof item === "string" && "+-*/".includes(item)) {
      if (stack.length < 2) {
        return "Error: not enough operands!";
      }
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      let result;

      switch (item) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          if (operand2 === 0) {
            return "Error: division by zero!";
          }
          result = operand1 / operand2;
          break;
      }

      stack.push(result);
    } else {
      return "Error: invalid input!";
    }
  }

  if (stack.length === 1) {
    return stack[0];
  } else {
    return "Error: too many operands!";
  }
}

postfixCalculator([3, 4, "+"]);
