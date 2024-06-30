// TODO: Create a variable that selects the main element
const main = document.getElementById('blogPosts');

// TODO: Create a function that builds an element and appends it to the DOM
function appendPost(post) {
    const li = document.createElement('li');
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    // https://www.w3schools.com/tags/tag_blockquote.asp
    li.innerHTML = `
      <article class="card">
        <h2>${post.title}</h2>
        <blockquote>${post.content}</blockquote> 
        <p><strong>Author:</strong> ${post.username}</p>
      </article>
    `;
    // Append the newly created list item to the posts list
    document.getElementById('postsList').appendChild(li);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function handleNoPosts() {
    const message = document.createElement('p');
    message.textContent = 'No blog posts available.';
    // Append the message to the main element
    main.appendChild(message);
}

// TODO: Create a function that reads from local storage and returns the data
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
function getBlogPosts() {
    return readFromLocalStorage('blogPosts') || []; 
}

// TODO: Call the function to render the list of blog posts
function renderPosts() {
    const blogPosts = getBlogPosts(); // Get blog posts from local storage
    if (blogPosts.length === 0) { // Check if there are no blog posts
        handleNoPosts(); 
    } else {
        blogPosts.forEach(post => appendPost(post)); // Iterate through the function
    }
}

document.addEventListener('DOMContentLoaded', renderPosts);
// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

// Light/Dark Mode Toggle
const toggleModeButton = document.getElementById('toggleMode');

toggleModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode'); // Toggle the dark-mode class on the body element
    if (document.body.classList.contains('dark-mode')) {
        toggleModeButton.textContent = '☀️'; // Light mode icon
        saveTheme('dark'); // Savess the current mode to localStorage
    } else {
        toggleModeButton.textContent = '🌙'; // Dark mode icon
        saveTheme('light'); // Saves the current mode to localStorage
    }
});

// Load the saved theme from localStorage when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = getSavedTheme(); // Gets the saved theme from localStorage
    // Apply the saved theme
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleModeButton.textContent = '☀️'; // Light mode icon
    } else {
        document.body.classList.remove('dark-mode');
        toggleModeButton.textContent = '🌙'; // Dark mode icon
    }
});
