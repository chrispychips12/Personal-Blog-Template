// TODO: Create a variable that selects the form element
const blogForm = document.getElementById('blogForm');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const errorMessage = document.getElementById('error');

    // Check if any required fields are empty
    if (!username || !title || !content) {
        // If any fields are empty, set the error message
        errorMessage.textContent = 'Please complete the form.';
        return; // Stop the function execution
    }

    errorMessage.textContent = '';  // Clear error message when fields are not empty

    const blogPost = { username, title, content };  // Create a new blog post 

    // Save the new blog post to local storage using the saveBlogPost function
    saveBlogPost(blogPost);

    // Redirect to the blog page
    redirectPage('blog.html');
}

// Function to redirect to a specified URL
let redirectURL = '';
const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
blogForm.addEventListener('submit', handleFormSubmit);  

// Light/Dark Mode Toggle
const toggleModeButton = document.getElementById('toggleMode');

toggleModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode'); // Toggle the dark-mode class on the body element
    if (document.body.classList.contains('dark-mode')) {
        toggleModeButton.textContent = '☀️'; // Light mode icon
        saveTheme('dark'); // Save the current mode to localStorage
    } else {
        toggleModeButton.textContent = '🌙'; // Dark mode icon
        saveTheme('light'); // Save the current mode to localStorage
    }
});

// Load the saved theme from localStorage when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = getSavedTheme(); // Get the saved theme from localStorage
    // Apply the saved theme
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleModeButton.textContent = '☀️'; // Light mode icon
    } else {
        document.body.classList.remove('dark-mode');
        toggleModeButton.textContent = '🌙'; // Dark mode icon
    }
});
// Mainly copied from blog.js file
