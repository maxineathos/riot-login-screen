// only is possible click on login button if the input tags are filled

function toggleButton() {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  if (username && password) {
    document.querySelector("#loginButton").disabled = false;
    return;
  }
  document.querySelector("#loginButton").disabled = true;
}
