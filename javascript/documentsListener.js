document.addEventListener("click",function(event){
    console.log(event.target)
    let id = event.target.parentElement.dataset.id || event.target.dataset.id
    console.log(id)
    if(id){
        setTimeout(function(){window.location.href = `article.html?id=${id}`},2000)
       
    }

})