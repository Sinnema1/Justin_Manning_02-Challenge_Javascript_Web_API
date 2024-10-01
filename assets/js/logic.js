// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle");
  const body = document.body;
  const root = document.documentElement;

  function toggleMode() {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
      root.style.setProperty("--circle-color", "darkblue");
      localStorage.setItem("mode", "dark");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
      root.style.removeProperty("--circle-color");
      localStorage.setItem("mode", "light");
    }
  }

  const savedMode = localStorage.getItem("mode");
  if (savedMode) {
    body.classList.add(savedMode);
    if (savedMode === "dark") {
      root.style.setProperty("--circle-color", "darkblue");
    } else {
      root.style.removeProperty("--circle-color");
    }
  } else {
    body.classList.add("light");
    root.style.removeProperty("--circle-color");
  }

  if (toggleButton) {
    toggleButton.addEventListener("click", toggleMode);
  }
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const posts = JSON.parse(localStorage.getItem("blogPosts"));
  if (posts) {
    blogPosts = posts;
    return blogPosts;
  } else {
    blogPosts = [];
    return blogPosts;
  }
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
let blogPosts = [];
function storeLocalStorage() {
  localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = "";

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
