
class Post {
    constructor(title, date, description, content, img, id) {
        this.title = title;
        this.date = date;
        this.description = description;
        this.content = content;
        this.img = img;
        this.id = id;
    }
    renderPostCard() {
        return `
        <article class="post" data-id="${this.id}">
           <img src="${this.img}" class="post-img">
           <span class="date regular-post-date">${this.date}</span>
           <h1 class="regular-post-title">${this.title}</h1>
           <p class="post-description ">${this.description}</p>
        </article>`;
    }
}

export const postsToRender = [];
export const postObjects = [];

function initializePosts() {
    if (postsToRender.length > 0) return; // Prevent re-initialization

    addPost(
        "Learning PostgresSQL",
        "July 21, 2024",
        "Mastering PostgreSQL has opened up new possibilities for handling complex database operations...",
        new Map([
            ["My Experience with PostgreSQL", "After diving into PostgreSQL, I've gained a new appreciation for its robustness and versatility..."],
            ["Advanced Features and Benefits", "PostgreSQL has opened up new possibilities for handling complex database operations..."],
            ["How I Stay Committed to Learning PostgreSQL", "I immerse myself in real-world projects that require PostgreSQL..."]
        ]),
        "/images/blog-image-02.png",3);

    addPost(
        "Learning React",
        "April 20, 2024",
        "React has revolutionized the way I build user interfaces...",
        new Map([
            ["My Journey with React", "React has revolutionized the way I build user interfaces..."],
            ["Core Concepts and Applications", "React has revolutionized the way I build user interfaces..."],
            ["How I Stay Committed to Learning React", "I constantly build new projects and refactor old ones to incorporate React best practices..."]
        ]),
        "/images/blog-image-05.png",2
    );

    addPost(
        "Learning Go",
        "May 20, 2024",
        "Learning Go has been a game-changer in my programming career...",
        new Map([
            ["My Experience with Go", "Learning Go has been a game-changer in my programming career..."],
            ["Key Features and Applications", "Learning Go has been a game-changer in my programming career..."],
            ["How I Stay Committed to Learning Go", "I work on performance-critical applications and microservices using Go..."]
        ]),
        "/images/3.png",1);
};

export function addPost(title, date, description, content, img,id) {
    const post = new Post(title, date, description, content, img,id);
    postObjects.push(post);
    postsToRender.push(post.renderPostCard());
}
initializePosts()