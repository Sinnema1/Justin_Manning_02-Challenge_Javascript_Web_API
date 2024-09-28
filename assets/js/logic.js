// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle");
  const body = document.body;

  function toggleMode() {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
      body.style.setProperty("--circle-color", "darkgray");
      localStorage.setItem("mode", "dark");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
      body.style.removeProperty("--circle-color"); // Reset to default
      localStorage.setItem("mode", "light");
    }
  }

  const savedMode = localStorage.getItem("mode");
  if (savedMode) {
    body.classList.add(savedMode);
    if (savedMode === "dark") {
      body.style.setProperty("--circle-color", "darkgray");
    } else {
      body.style.removeProperty("--circle-color"); // Reset to default
    }
  } else {
    body.classList.add("light");
    body.style.removeProperty("--circle-color"); // Reset to default
  }

  if (toggleButton) {
    toggleButton.addEventListener("click", toggleMode);
  }
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(key, newData) {
  const existingData = readLocalStorage(key);
  existingData.push(newData);
  localStorage.setItem(key, JSON.stringify(existingData));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = "";

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
