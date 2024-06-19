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
    renderPostCard(){
        const posthtml =
        `<article class="post" data-uuid=${this.UUID}>
           <img src="${this.img}" class="post-img">
           <span class="date regular-post-date">${this.date}</span>
           <h1 class="regular-post-title">${this.title}</h1>
           <p class="post-description ">${this.description}</p>
        </article>`
        return posthtml

    }
} 
export const postsToRender = [

] // lower the index, the most recent the post.
function addPost(title, date, description, content, img) {
    const post = new Post(title, date, description, content, img);    
    postsToRender.push(post.renderPostCard())
}

addPost("Learning PostgresSQL",
     "July 21,2024",
     "Mastering PostgreSQL has opened up new possibilities for handling complex database operations. In this post, I delve into the advanced features of PostgreSQL, including its powerful indexing, full-text search capabilities, and performance optimization techniques. Join me as I explore how PostgreSQL can significantly enhance data management and retrieval in modern applications.",
     new Map(), "/images/blog-image-02.png")
addPost("Learning React","April 20 2024","React has revolutionized the way I build user interfaces. This journey into React has been both challenging and rewarding, as I've learned to create reusable components and manage state effectively. In this blog post, I share insights into the React ecosystem, including hooks, context API, and best practices for developing dynamic and responsive web applications.",
    new Map(),"/images/blog-image-05.png")

addPost("Learning Go","May 20 2024","Learning Go has been a game-changer in my programming career. This powerful language offers simplicity and efficiency, making it perfect for modern software development. In this post, I discuss my journey with Go, the key concepts I’ve mastered, and how it has enhanced my coding skills.",
    new Map(),"/images/3.png"
)    






