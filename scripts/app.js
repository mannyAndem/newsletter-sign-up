let email = document.querySelector("#email");
let errorMessage = document.querySelector(".error");
let subscribeBtn = document.querySelector("#subscribe-btn");

//Form validation
function validateEmail(email) {
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  return regex.test(email);
}

subscribeBtn.addEventListener("click", (e) => {
  if (validateEmail(email.value)) {
    localStorage.setItem("userEmail", email.value);
    errorMessage.style.display = "none";
    email.classList.remove("error-input");
    window.open("confirmation.html", "_self");
  } else {
    errorMessage.style.display = "block";
    email.classList.add("error-input");
  }
});
