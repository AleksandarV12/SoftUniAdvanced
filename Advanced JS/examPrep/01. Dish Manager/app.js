window.addEventListener("load", solve);

function solve() {
  const firstNameInputEl = document.getElementById("first-name");
  const lastNameInputEl = document.getElementById("last-name");
  const ageInputEl = document.getElementById("age");
  const genderInputEl = document.getElementById("genderSelect");
  const dishmyDescriptionInputRefEl = document.getElementById("task");
  const submitBtnEl = document.getElementById("form-btn");
  const inProgressUlEl = document.getElementById("in-pro");

  submitBtnEl.addEventListener("click", addDish);

  function createInProgressEl() {
    const myListItemEl = document.createElement("Li");
    myListItemEl.className = "each-line";
    const articleEl = document.createElement("article");
    const headingEl = document.createElement("h4");
    const genderAndAgeEl = document.createElement("p");
    const dishmyDescriptionEl = document.createElement("p");

    const editBtnEl = document.createElement("button");
    editBtnEl.textContent = "Edit";
    editBtnEl.className = "edit-btn";
    const completeBtnEl = document.createElement("button");
    completeBtnEl.textContent = "Mark as complete";
    completeBtnEl.className = "complete-btn";

    editBtnEl.addEventListener("click", editDish);

    headingEl.textContent = `${firstNameInputEl.value} ${lastNameInputEl.value}`;
    genderAndAgeEl.textContent = `${genderInputEl.value} ${ageInputEl.value}`;
    dishmyDescriptionEl.textContent = `Dish myDescription ${dishmyDescriptionInputRefEl.value}`;

    articleEl.appendChild(headingEl);
    articleEl.appendChild(genderAndAgeEl);
    articleEl.appendChild(dishmyDescriptionEl);
    articleEl.appendChild(editBtnEl);
    articleEl.appendChild(completeBtnEl);
    myListItemEl.appendChild(articleEl);

    return myListItemEl;
  }

  function editDish() {
    console.log(e.targetRef.parentNode);
  }

  function addDish(e) {
    const myListItemEl = createInProgressEl();
    // inProgressUlEl.appendChild(myListItemEl);
    removeInputs();
  }
}

function removeInputs() {
  firstNameInputEl.value = "";
  lastNameInputEl.value = "";
  ageInputEl.value = "";
  genderInputEl.value = "";
  dishmyDescriptionInputRefEl.value = "";
}
