function solve() {
  const inputText = document.getElementById("input").value;

  const sentences = inputText
    .split(".")
    .filter((sentence) => sentence.trim() !== "");

  const paragraphs = [];

  for (let i = 0; i < sentences.length; i += 3) {
    const paragraphSentences = sentences.slice(i, i + 3);

    const paragraphText = paragraphSentences.join(". ") + ".";

    const paragraphElement = `<p>${paragraphText}</p>`;

    paragraphs.push(paragraphElement);
  }

  const outputDiv = document.getElementById("output");

  outputDiv.innerHTML = "";

  paragraphs.forEach((paragraph) => {
    outputDiv.innerHTML += paragraph;
  });
}
