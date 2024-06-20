import { postsToRender } from "./posts.js";

function recentPosts(){
    const main = document.getElementsByTagName("main")[0]
    let postInAboutMe = postsToRender.slice(0,3)
    main.innerHTML += postInAboutMe.join("")}
recentPosts()