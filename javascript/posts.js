import {v4 as uuidv4 } from 'https://jspm.dev/uuid';
class Post{
    /* Where content is a hashmap with the key being the subheading
    and value being the corresponding paragraph
    */
    constructor(title,date,description,content,img){
        this.title = title
        this.date = date
        this.description = description
        this.content = content
        this.img = img
        this.UUID = uuidv4()
        // Using uuid to keep track of articles and we will route the user to the correct one
    }
    renderPostCard(title,date,description,postImage,uuid){
        const posthtml =
        `<article class="post" data-uuid=${uuid}>
           <img src="${postImage}" class="post-img">
           <span class="date regular-post-date">${date}</span>
           <h1 class="regular-post-title">${title}</h1>
           <p class="post-description ">${description}</p>
        </article>`

    }
} 
export const postsToRender = [

] // Higher the index, the most recent the post.
function addPost(title, date, description, content, img) {
    const post = new Post(title, date, description, content, img);

    
    postsToRender.push(post.renderPostCard(this.title,this.date, this.description,this.postImage,this.uuid))
}






