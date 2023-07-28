//adding the user email to the confirmation message

let message = document.querySelector("#confirmation-message");
message.innerHTML = `A confirmation email has been sent to ${localStorage.getItem(
  "userEmail"
)}. Please open
it and click the button inside to confirm your subscription
`;
