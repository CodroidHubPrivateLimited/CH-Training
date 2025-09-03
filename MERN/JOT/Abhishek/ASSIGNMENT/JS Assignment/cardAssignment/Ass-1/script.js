let localForm = document.getElementById("localStorageForm");
localForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("localName").value;
  const email = document.getElementById("localEmail").value;
  const message = document.getElementById("localMessage").value;

  localStorage.setItem("localUserName", name);
  localStorage.setItem("localUserEmail", email);
  localStorage.setItem("localUserMessage", message);
  console.log("localUserName:", localStorage.getItem("localUserName"));
  console.log("localUserEmail:", localStorage.getItem("localUserEmail"));
  console.log("localUserMessage:", localStorage.getItem("localUserMessage"));
  alert("Data saved to Local Storage! ");
});

let sessionForm = document.getElementById("sessionStorageForm");
sessionForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("sessionName").value;
  const age = document.getElementById("sessionAge").value;
  const city = document.getElementById("sessionCity").value;

  sessionStorage.setItem("sessionUserName", name);
  sessionStorage.setItem("sessionUserAge", age);
  sessionStorage.setItem("sessionUserCity", city);

  console.log("sessionUserName:", sessionStorage.getItem("sessionUserName"));
  console.log("sessionUserAge:", sessionStorage.getItem("sessionUserAge"));
  console.log("sessionUserCity:", sessionStorage.getItem("sessionUserCity"));
  alert("Data saved to Session Storage!");
});
