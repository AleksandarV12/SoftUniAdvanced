function create(words) {
  const contentRef = document.getElementById("content");
  for (let word of words) {
    let divRef = document.createElement("div");
    let pRef = document.createElement("p");
    pRef.style.display = "none";
    pRef.textContent = word;
    divRef.appendChild(pRef);
    contentRef.appendChild(divRef);
    divRef.addEventListener("click", onClickHandler);
  }
  function onClickHandler(e) {
    let divRef = e.currenttargetRef;
    let pRef = divRef.children[0];
    pRef.style.display = "block";
  }
}
