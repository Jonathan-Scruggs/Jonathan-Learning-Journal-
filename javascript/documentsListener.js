import {handleViewMore} from "./postFunctionalities.js"

document.addEventListener("click",function(event){
    let id = event.target.parentElement.dataset.id || event.target.dataset.id
    
    let isViewMore = event.target.id
    
    if(id){
        console.log(id)
        window.location.href = `article.html?id=${id}`

    }
    else if (isViewMore === "view-more-btn"){
        handleViewMore()    
    }
})
