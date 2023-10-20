window.addEventListener("load", solve);

function solve() {
  const firstNameInputEl = document.getElementById("first-name");
  const lastNameInputEl = document.getElementById("last-name");
  const ageInputEl = document.getElementById("age");
  const genderInputEl = document.getElementById("genderSelect");
  const dishDescriptionInputEl = document.getElementById("task");
  const submitBtnEl = document.getElementById("form-btn");
  const inProgressUlEl = document.getElementById("in-pro");

  submitBtnEl.addEventListener("click", addDish);

  function createInProgressEl() {
    const listItemEl = document.createElement("Li");
    listItemEl.className = "each-line";
    const articleEl = document.createElement("article");
    const headingEl = document.createElement("h4");
    const genderAndAgeEl = document.createElement("p");
    const dishDescriptionEl = document.createElement("p");

    const editBtnEl = document.createElement("button");
    editBtnEl.textContent = "Edit";
    editBtnEl.className = "edit-btn";
    const completeBtnEl = document.createElement("button");
    completeBtnEl.textContent = "Mark as complete";
    completeBtnEl.className = "complete-btn";

    editBtnEl.addEventListener("click", editDish);

    headingEl.textContent = `${firstNameInputEl.value} ${lastNameInputEl.value}`;
    genderAndAgeEl.textContent = `${genderInputEl.value} ${ageInputEl.value}`;
    dishDescriptionEl.textContent = `Dish description ${dishDescriptionInputEl.value}`;

    articleEl.appendChild(headingEl);
    articleEl.appendChild(genderAndAgeEl);
    articleEl.appendChild(dishDescriptionEl);
    articleEl.appendChild(editBtnEl);
    articleEl.appendChild(completeBtnEl);
    listItemEl.appendChild(articleEl);

    return listItemEl;
  }

  function editDish() {
    console.log(e.target.parentNode);
  }

  function addDish(e) {
    const listItemEl = createInProgressEl();
    // inProgressUlEl.appendChild(listItemEl);
    clearInputFields();
  }
}

function clearInputFields() {
  firstNameInputEl.value = "";
  lastNameInputEl.value = "";
  ageInputEl.value = "";
  genderInputEl.value = "";
  dishDescriptionInputEl.value = "";
}
