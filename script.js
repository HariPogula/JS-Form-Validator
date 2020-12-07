const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const conformPassword = document.getElementById("password2");

// Show Inout Error Messages
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const smallText = formControl.querySelector("small");
  smallText.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  //   const smallText = document.querySelector("small");
  //   smallText.innerText = "";
}

// Email Validation
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Submit" + username.value);

  if (username.value === "") {
    showError(username, "Username is Required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email is Required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is in NOT correct format");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is Required");
  } else {
    showSuccess(password);
  }

  if (conformPassword.value === "") {
    showError(conformPassword, "Confirm Password is Required");
  } else {
    showSuccess(conformPassword);
  }
});
