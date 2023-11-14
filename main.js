let loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function () {
  let inputPassword = document.getElementById("inputPassword").value;
  let inputEmail = document.getElementById("inputEmail").value;

  if (inputEmail === "" || inputPassword === "") {
    alert("Both username and password must be filled out");
  } else if (!isValidEmail(inputEmail)) {
    alert("Please enter a valid email");
  }
});

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
