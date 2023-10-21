window.addEventListener("load", solution);

function solution() {
  const addButton = document.getElementById("add-btn");
  const previewList = document.querySelector(".preview-list");
  const pendingList = document.querySelector(".pending-list");
  const resolvedList = document.querySelector(".resolved-list");
  const employeeInput = document.getElementById("employee");
  const categoryInput = document.getElementById("category");
  const urgencyInput = document.getElementById("urgency");
  const teamInput = document.getElementById("team");
  const descriptionInput = document.getElementById("description");

  addButton.addEventListener("click", function (event) {
    event.preventDefault();

    const employee = employeeInput.value.trim();
    const category = categoryInput.value.trim();
    const urgency = urgencyInput.value.trim();
    const team = teamInput.value.trim();
    const description = descriptionInput.value.trim();

    if (
      employee === "" ||
      category === "" ||
      urgency === "" ||
      team === "" ||
      description === ""
    ) {
      document.getElementById("error-message").textContent =
        "All fields must be filled out.";
      return;
    }

    const listItem = createItemList(
      employee,
      category,
      urgency,
      team,
      description
    );

    previewList.appendChild(listItem);

    removeInputs();

    addButton.disabled = true;
  });

  previewList.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("edit-btn")) {
      const listItem = target.parentElement;
      const article = listItem.querySelector("article");

      const employee = article
        .querySelector(":nth-child(1)")
        .textContent.replace("From: ", "")
        .trim();
      const category = article
        .querySelector(":nth-child(2)")
        .textContent.replace("Category: ", "")
        .trim();
      const urgency = article
        .querySelector(":nth-child(3)")
        .textContent.replace("Urgency: ", "")
        .trim();
      const team = article
        .querySelector(":nth-child(4)")
        .textContent.replace("Assigned to: ", "")
        .trim();
      const description = article
        .querySelector(":nth-child(5)")
        .textContent.replace("Description: ", "")
        .trim();

      employeeInput.value = employee;
      categoryInput.value = category;
      urgencyInput.value = urgency;
      teamInput.value = team;
      descriptionInput.value = description;

      addButton.disabled = false;

      previewList.removeChild(listItem);
    }
  });

  previewList.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("continue-btn")) {
      const listItem = target.parentElement;
      const article = listItem.querySelector("article");

      const employee = article
        .querySelector(":nth-child(1)")
        .textContent.replace("From: ", "")
        .trim();
      const category = article
        .querySelector(":nth-child(2)")
        .textContent.replace("Category: ", "")
        .trim();
      const urgency = article
        .querySelector(":nth-child(3)")
        .textContent.replace("Urgency: ", "")
        .trim();
      const team = article
        .querySelector(":nth-child(4)")
        .textContent.replace("Assigned to: ", "")
        .trim();
      const description = article
        .querySelector(":nth-child(5)")
        .textContent.replace("Description: ", "")
        .trim();

      const pendingListItem = createNextList(
        employee,
        category,
        urgency,
        team,
        description
      );

      pendingList.appendChild(pendingListItem);

      previewList.removeChild(listItem);
    }
  });

  pendingList.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("resolve-btn")) {
      const listItem = target.parentElement;
      const article = listItem.querySelector("article");

      const employee = article
        .querySelector(":nth-child(1)")
        .textContent.replace("From: ", "")
        .trim();
      const category = article
        .querySelector(":nth-child(2)")
        .textContent.replace("Category: ", "")
        .trim();
      const urgency = article
        .querySelector(":nth-child(3)")
        .textContent.replace("Urgency: ", "")
        .trim();
      const team = article
        .querySelector(":nth-child(4)")
        .textContent.replace("Assigned to: ", "")
        .trim();
      const description = article
        .querySelector(":nth-child(5)")
        .textContent.replace("Description: ", "")
        .trim();

      const resolvedListItem = createFixedList(
        employee,
        category,
        urgency,
        team,
        description
      );

      resolvedList.appendChild(resolvedListItem);

      pendingList.removeChild(listItem);
    }
  });

  resolvedList.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("clear-btn")) {
      const listItem = target.parentElement;
      resolvedList.removeChild(listItem);
    }
  });

  function createItemList(employee, category, urgency, team, description) {
    const listItem = document.createElement("li");
    listItem.classList.add("problem-content");

    const article = document.createElement("article");

    const fromParagraph = createParagraph(`From: ${employee}`);
    const categoryParagraph = createParagraph(`Category: ${category}`);
    const urgencyParagraph = createParagraph(`Urgency: ${urgency}`);
    const assignedParagraph = createParagraph(`Assigned to: ${team}`);
    const descriptionParagraph = createParagraph(`Description: ${description}`);

    const editButton = createButton("Edit", "edit-btn");
    const continueButton = createButton("Continue", "continue-btn");

    article.appendChild(fromParagraph);
    article.appendChild(categoryParagraph);
    article.appendChild(urgencyParagraph);
    article.appendChild(assignedParagraph);
    article.appendChild(descriptionParagraph);

    listItem.appendChild(article);
    listItem.appendChild(editButton);
    listItem.appendChild(continueButton);

    return listItem;
  }

  function createNextList(employee, category, urgency, team, description) {
    const pendingListItem = document.createElement("li");
    pendingListItem.classList.add("problem-content");

    const article = document.createElement("article");

    const fromParagraph = createParagraph(`From: ${employee}`);
    const categoryParagraph = createParagraph(`Category: ${category}`);
    const urgencyParagraph = createParagraph(`Urgency: ${urgency}`);
    const assignedParagraph = createParagraph(`Assigned to: ${team}`);
    const descriptionParagraph = createParagraph(`Description: ${description}`);

    const resolveButton = createButton("Resolved", "resolve-btn");

    article.appendChild(fromParagraph);
    article.appendChild(categoryParagraph);
    article.appendChild(urgencyParagraph);
    article.appendChild(assignedParagraph);
    article.appendChild(descriptionParagraph);

    pendingListItem.appendChild(article);
    pendingListItem.appendChild(resolveButton);

    return pendingListItem;
  }

  function createFixedList(employee, category, urgency, team, description) {
    const resolvedListItem = document.createElement("li");
    resolvedListItem.classList.add("problem-content");

    const article = document.createElement("article");

    const fromParagraph = createParagraph(`From: ${employee}`);
    const categoryParagraph = createParagraph(`Category: ${category}`);
    const urgencyParagraph = createParagraph(`Urgency: ${urgency}`);
    const assignedParagraph = createParagraph(`Assigned to: ${team}`);
    const descriptionParagraph = createParagraph(`Description: ${description}`);

    const clearButton = createButton("Clear", "clear-btn");

    article.appendChild(fromParagraph);
    article.appendChild(categoryParagraph);
    article.appendChild(urgencyParagraph);
    article.appendChild(assignedParagraph);
    article.appendChild(descriptionParagraph);

    resolvedListItem.appendChild(article);
    resolvedListItem.appendChild(clearButton);

    return resolvedListItem;
  }

  function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }

  function createButton(text, className) {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add(className);
    return button;
  }

  function removeInputs() {
    employeeInput.value = "";
    categoryInput.value = "";
    urgencyInput.value = "";
    teamInput.value = "";
    descriptionInput.value = "";
  }
}
