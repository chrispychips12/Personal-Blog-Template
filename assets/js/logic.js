// TODO: Create functions to read and write from local storage
// SOURCES:
// https://stackoverflow.com/questions/17382587/what-does-string-params-mean-if-passed-as-a-parameter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// https://stackoverflow.com/questions/11490869/reading-and-writing-from-localstorage

function readFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
} //JSON.parse(data) takes a JSON string and converts it to JS string;
 // If there are no items, code to return 'null'

function writeToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

const BLOG_POSTS_KEY = 'blogPosts'; // New constant - to be used as key to store and retrieve from local storage
// I'll use this key for blog posts, as per name

