Blog Post Displayer 

DEPLOYED LINK: https://chrispychips12.github.io/Personal-Blog-Template/

I have created a website to be utilised as a personal blog.
When the app is loaderd, the landing page contains a form with labels and inputs for a username, blog title and content
When the form is submitted, the data is stored to localStorage
When the form then submits, the user is redirected to the blog posts page
When the uder enters an invalid prompt (username, title or content), there is a message the prompts the user to complete the form
When the posts page is viewed, the user is presented with a header, a light/dark mode toggle and a back button
when the light/dark mode toggle is clicked, the page's contents will update to reflect the selection
When the user clicks the back button, they are taken to the main landing page where they can add more entries
When the main content is viewed, the user is presented with a list of blog posts pulled from local storage
When localstorage is viewed, the user will also be presented with a JSON array inclouding the username, title and post
Upon a closer look, the user will also be able to see the title, content and author of the post
The user can also see the developers portfolio in the bottom

!!! PLEASE SEE IMAGE FILES FOR SCREENSHOT !!!

In this project, I relied on JavaScript features, Bootstrap and some basic JSON to be able to include the functionality needed to make the page work. Please read code notes for more detailed information, but some of these features include:
- Learning how to parse JSON data and convert it to JS String
- Creating a function that builds an element and appends it to the DOM
- Appending newly created list item to post list
- Creating a function that handles the case where there are no blog posts to display
- Creating a function that can read from local storage and returns the data
- Creating a function that renders the list of blog posts
- Creating a function that toggles light/dark mode and allowing it to save to localStorage and be pulled as the user moves across both pages
- Creating a function that handles form submission
- Function to redirect user after form submission 
- Adding an event listenener to the form sumbittion- calling on the function once form has been submitted
- Creating accessible labels for the dark/light toggle button
- Adding bootstrap to the index for simplified styling for some features



SOURCES + ACKNOWLEDGEMENTS:
- https://bootstrapshuffle.com/classes/spacing/py-0
- https://bootstrapshuffle.com/classes/spacing/mt-auto
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
- https://stackoverflow.com/questions/17382587/what-does-string-params-mean-if-passed-as-a-parameter
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://stackoverflow.com/questions/11490869/reading-and-writing-from-localstorage
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
- https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
- https://www.w3schools.com/tags/tag_blockquote.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
- https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

<img width="1469" alt="Screenshot 2024-06-30 at 10 47 17 AM" src="https://github.com/chrispychips12/Personal-Blog-Template/assets/94519893/d6fa0f63-82a0-4d99-93d2-f9e1310c778f">
<img width="1451" alt="Screenshot 2024-06-30 at 10 47 05 AM" src="https://github.com/chrispychips12/Personal-Blog-Template/assets/94519893/5ef3ec32-7357-4bea-8f18-d8e891bf8e95">
<img width="1452" alt="Screenshot 2024-06-30 at 10 46 39 AM" src="https://github.com/chrispychips12/Personal-Blog-Template/assets/94519893/4c3d04e0-997a-4e17-9ded-8a5cedba6bc2">
<img width="1461" alt="Screenshot 2024-06-30 at 10 46 31 AM" src="https://github.com/chrispychips12/Personal-Blog-Template/assets/94519893/5c5d3c44-f5bc-472e-9d2e-04852a153407">
<img width="1466" alt="Screenshot 2024-06-30 at 10 47 24 AM" src="https://github.com/chrispychips12/Personal-Blog-Template/assets/94519893/d0233369-ced4-4c7c-9a64-63e0a87d7f42">
