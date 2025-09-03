const profileFormCard = document.getElementById("profileFormCard");
const profileDashboardCard = document.getElementById("profileDashboardCard");
const profileForm = document.getElementById("profileForm");

const profileNameInput = document.getElementById("profileName");
const profileEmailInput = document.getElementById("profileEmail");
const profileMessageInput = document.getElementById("profileMessage");

const displayName = document.getElementById("display-name");
const displayEmail = document.getElementById("display-email");
const displayBio = document.getElementById("display-bio");

function saveProfile(name, email, message) {
  localStorage.setItem("userProfileName", name);
  localStorage.setItem("userProfileEmail", email);
  localStorage.setItem("userProfileMessage", message);
  console.log("Profile saved");
}

function loadProfile() {
  const name = localStorage.getItem("userProfileName");
  const email = localStorage.getItem("userProfileEmail");
  const message = localStorage.getItem("userProfileMessage");

  if (name && email) {
    displayName.textContent = name;
    displayEmail.textContent = email;
    displayBio.textContent = message;
    profileFormCard.classList.add("hidden");
    profileDashboardCard.classList.remove("hidden");
    console.log("Profile loaded from Local Storage.");
  } else {
    profileFormCard.classList.remove("hidden");
    profileDashboardCard.classList.add("hidden");
    console.log("No profile found.");
  }
}

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = profileNameInput.value;
  const email = profileEmailInput.value;
  const message = profileMessageInput.value;

  saveProfile(name, email, message);
  loadProfile();
  console.log("Profile displayed.");
});

// THis loads alredy saved/Created profile in local storage
loadProfile();
