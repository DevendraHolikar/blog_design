// Hamburger

let hamburger = document.getElementById("hamburger");
let nav_toggle = document.getElementById("nav-toggle");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("mob-hamburger");
  nav_toggle.classList.toggle("mob-hamburger-active");
  console.log("click");
});


// Modal

let modal = document.getElementById("form_modal");
let btn = document.getElementById("open-modal");

btn.onclick = function() {
  modal.style.display = "block";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// Back to Top

let back_to_top = document.getElementById("back-to-top")
back_to_top.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Form

let submit_form = document.getElementById("submit_form");

submit_form.addEventListener("click", e => {
  e.preventDefault();
  validateAndSubmitForm();
});

function validateCharacterLimit(inputId, errorId, maxCharacters) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  const inputValue = input.value;

  if (inputValue.length > maxCharacters) {
    error.textContent = `Maximum ${maxCharacters} characters allowed`;
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validateForm() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dropdown = document.getElementById("dropdown").value;
  const name = document.getElementById("Name").value;

  const isTitleValid = validateCharacterLimit("title", "titleError", 100);
  const isDescriptionValid = validateCharacterLimit(
    "description",
    "descriptionError",
    400
  );

  if (
    title.trim() === "" ||
    name.trim() === "" ||
    description.trim() === "" ||
    dropdown === "" ||
    !isTitleValid ||
    !isDescriptionValid
  ) {
    alert(
      "Please fill in all fields and ensure character limits are met before submitting."
    );
    return false;
  }

  return true;
}

function displayValues() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dropdown = document.getElementById("dropdown").value;
  const name = document.getElementById("Name").value;

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const today = new Date();
  const month_text = month[today.getMonth()];
  const datenumber = new Date().getDate();
  const yearnumber = new Date().getFullYear();

  const displayValues_blog = document.getElementById("new-blogs");
  const Div_con = document.createElement("div");
  Div_con.classList = "blog-card";
  Div_con.innerHTML = `<h1>${title}</h1>
                        <span class="blog-date">${month_text} ${datenumber} ${yearnumber} by <span class="blue-color">${name}</span><span class="green-color"> ${dropdown}</span></span>
                        <p>${description}</p>`;
  displayValues_blog.appendChild(Div_con);
}

function cleanvalue() {
  document.getElementById("myForm").reset();
}

function validateAndSubmitForm() {
  if (validateForm()) {
    displayValues();
    cleanvalue();
    modal.style.display = "none";
  }
}


