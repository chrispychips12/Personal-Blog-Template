// TODO: Create a variable that selects the form element
const blogForm = document.getElementById('blogForm');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
