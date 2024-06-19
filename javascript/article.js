import { postsToRender } from "./posts.js";
const main = document.getElementsByTagName("main")[0]
let postInAboutMe = postsToRender.slice(0,3)
console.log(postInAboutMe)
main.innerHTML += postInAboutMe.join("")