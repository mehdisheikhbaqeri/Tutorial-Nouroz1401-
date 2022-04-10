let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("content-name").value;

  if (name.length == 0) {
    nameError.textContent = "Name is required";
    return false;
  }
  if (name.match(/^[A-Za-z]*\s{1}[A-Za-z]*8/)) {
    nameError.textContent = "Write full name";
    return false;
  }
  nameError.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
}

function validatePhone() {
  let phone = document.getElementById("content-phone").value;

  if (phone.length == 0) {
    phoneError.textContent = "Phone no should be 10 digits";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.textContent = "Only digits Please";
    return false;
  }
  if (phone.match(/^[0-9]{10}$/) == 0) {
    phoneError.textContent = "Phone no is required";
    return false;
  }
  phoneError.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
}

function validateEmail() {
  let email = document.getElementById("contect-email").value;

  if (email.length == 0) {
    emailError.textContent = "Email is required";
    return false;
  }
  if (email.match(/^[A-Za-z]\._\-[0-9]*[@]{A-Za-z}*[\.][a-z]{2,4}$/)) {
    emailError.textContent = "Email Invalid";
    return false;
  }
  emailError.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
}

function validateMessage() {
  let message = document.getElementById("contect-message").value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + `more characters required`;
    return false;
  }
  messageError.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
}
function validateForm() {
  console.log(validateMessage);
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = `Please fix error to subit`;
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
