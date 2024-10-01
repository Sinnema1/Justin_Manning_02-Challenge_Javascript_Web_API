// TODO: Create a variable that selects the form element
const formElement = document.querySelector("form");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmit(event) {
  event.preventDefault();

  const username = formElement.username.value.trim();
  const title = formElement.title.value.trim();
  const content = formElement.content.value.trim();
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

  // Variable to read existing blog posts from localStorage
  const blogPosts = readLocalStorage("blogPosts");

  // Add the new blog post to the array
  blogPosts.push(blogPost);

  // Save the updated array back to localStorage
  storeLocalStorage("blogPosts", blogPosts);

  // Reset the form
  formElement.reset();

  // Redirect to the blog page
  redirectPage("./blog.html");
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formElement.addEventListener("submit", handleFormSubmit);