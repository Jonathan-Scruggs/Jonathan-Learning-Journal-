import { postsToRender } from "./posts.js";
import { postObjects } from "./posts.js";
const urlParams = new URLSearchParams(window.location.search)
const uuid = urlParams.get("uuid")
function renderPrimaryArticle(){
    let correctPost = null;
    for (let post of postObjects) {
        console.log(post.UUID)
        if (post.UUID === uuid) {
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
}


function recentPosts(){
    const main = document.getElementsByTagName("main")[0]
    let postInAboutMe = postsToRender.slice(0,3)
    main.innerHTML += postInAboutMe.join("")
}
recentPosts()
document.addEventListener("click",function(event){
    console.log(event.target)
    let uuid = event.target.dataset.uuid ||  event.target.parentElement.dataset.uuid
    console.log(uuid)
    if(uuid){
        window.location.href = `article.html?uuid=${uuid}`
    }

})


