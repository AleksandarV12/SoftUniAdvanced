function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let res = "";
  switch (convention) {
    case "Camel Case":
      let textArr = text.toLocaleLowerCase().split(" ");
      res += textArr.shift();
      textArr.forEach((e) => {
        res += e[0].toUpperCase() + e.substring(1);
      });
      break;
    case "Pascal Case":
      text
        .toLowerCase()
        .split(" ")
        .forEach((e) => (res += e[0].toUpperCase() + e.substring(1)));
      break;
    default:
      res = "Error!";
      break;
  }
  document.getElementById("result").textContent = res;
}
