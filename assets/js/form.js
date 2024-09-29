// TODO: Create a variable that selects the form element
const formElement = document.querySelector("form");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmit(event) {
  event.preventDefault();
  const username = document.querySelector("#username").value.trim();
  const title = document.querySelector("#title").value.trim();
  const content = document.querySelector("#content").value.trim();
  const errorElement = document.getElementById("error");

  if (!username || !title || !content) {
    errorElement.textContent = "Please complete the form.";
    errorElement.style.display = "block";
    return;
  }

  errorElement.style.display = "none";

  const blogPost = {
    username: username,
    title: title,
    content: content,
  };

  storeLocalStorage("blogPosts", blogPost);
  document.querySelector("form").reset();
  redirectPage("./blog.html");
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formElement.addEventListener("submit", handleFormSubmit);
