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

// TODO: Call the function to render the list of blog posts
