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
        return; // Loop end
    }


    errorMessage.textContent = '';  // Clear error message when fields are not empty

    const blogPost = { username, title, content };  // Create a new blog post 

    let blogPosts = localStorage.getItem('blogPosts'); 
    // Get existing blog posts from local storage 
    // https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem

    blogPosts = blogPosts ? JSON.parse(blogPosts) : [];
    blogPosts.push(blogPost); // Add the new blog post to the array

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts)); // Store the updated array back in local storage

    redirectPage('blog.html');// Redirect to the blog page

}

    let redirectURL = '';

    const redirectPage = function (url) {
        redirectURL = url;
        location.assign(url);
    };

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
blogForm.addEventListener('submit', handleFormSubmit);  
