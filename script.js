const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password2");

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

// Check Required Fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    console.log(input.value);
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check Input Length

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must have atleast ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} should not exceed ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// Email Validation
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(String(input.value.trim()).toLowerCase())) {
    showSuccess(input);
  } else {
    showError(input, "Email is NOT valid");
  }
}

// Password Match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do NOT Match");
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Submit" + username.value);
  checkRequired([username, email, password, confirmPassword]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, confirmPassword);
});
