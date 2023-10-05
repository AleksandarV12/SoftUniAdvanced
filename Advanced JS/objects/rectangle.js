function rectangle(width, height, color) {
  // Ensure the first letter of the color is uppercase
  const formattedColor = color.charAt(0).toUpperCase() + color.slice(1);

  // Create the rectangle object with properties and methods
  const rectangleObj = {
    width: width,
    height: height,
    color: formattedColor,
    calcArea: function () {
      return this.width * this.height;
    },
  };

  return rectangleObj;
}

// Example usage:
let rect = rectangle(4, 5, "red");
console.log(rect.width); // Output: 4
console.log(rect.height); // Output: 5
console.log(rect.color); // Output: Red
console.log(rect.calcArea()); // Output: 20
