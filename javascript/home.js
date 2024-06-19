import { postsToRender } from "./posts.js";
const main = document.getElementsByTagName("main")[0]
main.innerHTML = postsToRender.join("")