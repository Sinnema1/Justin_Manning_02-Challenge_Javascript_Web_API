// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector("main");
const backButton = document.getElementById("back");

// TODO: Create a function that builds an element and appends it to the DOM
function createElementAndAppend(tag, attributes, parentElement) {
  const newElement = document.createElement(tag);
  if (attributes) {
    for (const key in attributes) {
      newElement.setAttribute(key, attributes[key]);
    }
  }
  parentElement.appendChild(newElement);
  return newElement;
}

// TODO: Create a function that handles the case where there are no blog posts to display
function handleNoBlogPosts() {
  createElementAndAppend(
    "p",
    { style: "text-align: center; color: gray;" },
    mainElement
  ).textContent = "No Blog posts yet...";
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
  const posts = readLocalStorage("blogPosts");
  mainElement.innerHTML = "";
  if (posts.length === 0) {
    handleNoBlogPosts();
  } else {
    posts.forEach((post) => {
      const postElement = createElementAndAppend("article", {}, mainElement);
      createElementAndAppend("p", {}, postElement).textContent = `Posted by: ${post.username}`;
      createElementAndAppend("h2", {}, postElement).textContent = post.title;
      createElementAndAppend("blockquote", {}, postElement).textContent = post.content;
      console.log(posts[0].username);
    });
  }
}

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
if (backButton) {
  backButton.addEventListener("click", function () {
    redirectPage("../index.html");
  });
}
