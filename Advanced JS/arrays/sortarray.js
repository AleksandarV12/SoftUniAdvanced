function sortArray(array) {
  return array
    .sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length;
      }
      return a.localeCompare(b);
    })
    .join("\n");
}
sortArray(["alpha", "beta", "gamma"]);
//sortArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
