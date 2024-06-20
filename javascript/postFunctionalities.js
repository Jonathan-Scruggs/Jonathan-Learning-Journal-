import { postsToRender,postObjects } from "./posts.js";
const main = document.getElementsByTagName("main")[0]
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("id")
const postsToRenderLength = postsToRender.length


export function handleViewMore(){
    console.log(postsToRenderLength)
    if (postsToRenderLength > 4){
        main.innerHTML += postsToRender.slice(5,postsToRenderLength - 1)
    }
    else {
        document.getElementById("view-more-btn").textContent = "You've reached the end of the list. Check back later for more articles!"
        document.getElementById("view-more-btn").style.textDecoration = "none"
        
    }
}
function renderRecentPosts(){
    if (window.location.pathname.includes("article.html")){
        let count = 0
        for (let i=0; i <  postObjects.length; i++){
            if (postObjects[i].id != id && count < 3){
                main.innerHTML += postsToRender[i]
                count++
            }
        }
    }
    else {
        main.innerHTML += postsToRender.slice(1,4).join("")
    }

}
renderRecentPosts()
