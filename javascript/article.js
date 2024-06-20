import { postObjects } from "./posts.js";
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("id")
console.log(id)
let correctPost;
for (let post of postObjects) {
    console.log(post.id)
    if (post.id == id) {
        correctPost = post;
        break;
    }
}
if (correctPost) {
    const main = document.getElementsByTagName("main")[0];
    const { title, date, description, content, img, UUID } = correctPost;
    
    let mainstring = `
    <section class="primary-article">
        <span class="article-date">${date}</span>
        <h1 class="primary-article-title">${title}</h1>
        <p class="post-description">${description}</p>
        <img src="${img}" class="primary-article-img">
        <h1 id="recent-posts">Recent posts</h1>
    </section>`;
    main.innerHTML = mainstring;
} 

