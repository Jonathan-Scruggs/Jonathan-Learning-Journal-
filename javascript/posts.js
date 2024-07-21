
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
    addPost("My New Journey Learning Fullstack Development",
        "July 23, 2024",
        "On July 23, 2022, I embarked on an exciting journey to learn fullstack development. The motivation behind this decision was to become a well-rounded developer capable of handling both front-end and back-end development tasks. This article chronicles my experiences, challenges, and growth throughout this learning process.",
        new Map([["Discovering the Basics of Fullstack Development","When I first started, I focused on understanding what fullstack development entails. Fullstack development involves working with both client-side (front-end) and server-side (back-end) technologies. My initial step was to get a firm grasp of the basics, including HTML, CSS, and JavaScript for the front end, and Node.js, Express, and databases like MongoDB for the back end.I enrolled in several online courses and followed tutorials to build foundational projects. Creating simple web pages using HTML and styling them with CSS was my first achievement. JavaScript brought these pages to life by adding interactivity. On the back-end, I learned to set up servers using Node.js and Express, and to interact with databases to store and retrieve data. These basics laid the groundwork for more complex projects ahead."],
        ["Overcoming Challenges and Roadblocks","The journey was not without its challenges. One of the major hurdles was understanding the intricacies of asynchronous programming in JavaScript. Callbacks, promises, and async/await were concepts that took time to master. Debugging asynchronous code can be tricky, but with practice and patience, I became more comfortable handling these scenarios.Another challenge was managing the different aspects of a fullstack project simultaneously. Balancing front-end and back-end development required careful planning and time management. I learned to use tools like Git for version control, which helped in keeping my code organized and collaborative. Additionally, I discovered the importance of writing clean, maintainable code to ease the process of debugging and future development."],
        ["The Importance of Continuous Learning","One key lesson I learned is that fullstack development is an ever-evolving field. Technologies and best practices change rapidly, making continuous learning essential. I regularly read blogs, follow industry experts on social media, and participate in online communities to stay updated with the latest trends and advancements."],
        ["Conclusion","My journey into fullstack development has been a transformative experience. From learning the basics to building complex applications, I have gained valuable skills and knowledge that have broadened my capabilities as a developer. While the path was filled with challenges, each obstacle was an opportunity for growth and learning. As I continue on this journey, I am excited about the endless possibilities that fullstack development offers. The ability to create comprehensive solutions that cover both front-end and back-end aspects is incredibly empowering. I look forward to further honing my skills and contributing to innovative projects that make a difference in the tech world."]],
        ),"/images/article-image-hero.png",4
    )
    addPost(
        "Learning PostgresSQL",
        "July 21, 2024",
        "Mastering PostgreSQL has opened up new possibilities for handling complex database operations.",
        new Map([
            ["My Experience with PostgreSQL", "After diving into PostgreSQL, I've gained a new appreciation for its robustness and versatility. Working on various projects, I've been able to leverage PostgreSQL's powerful features to handle complex queries and data manipulations. This experience has significantly enhanced my understanding of relational databases and their practical applications."],
            ["Advanced Features and Benefits", "PostgreSQL has opened up new possibilities for handling complex database operations. Its support for advanced data types, full-text search, and powerful indexing mechanisms has made it an indispensable tool in my toolkit. The ability to handle large datasets efficiently and the extensive support for various programming languages have further solidified its importance in my projects."],
            ["How I Stay Committed to Learning PostgreSQL", "I immerse myself in real-world projects that require PostgreSQL. Continuously learning and applying new features and best practices, I stay committed by reading documentation. This hands-on approach ensures I stay up-to-date with the latest advancements and maintain a high level of proficiency."]
        ]),
        "/images/blog-image-02.png",3);

    addPost(
        "Learning React",
        "April 20, 2024",
        "React has revolutionized the way I build user interfaces.",
        new Map([
            ["My Journey with React", "React has revolutionized the way I build user interfaces. Starting from small projects to larger applications, React's component-based architecture has allowed me to create reusable and maintainable code. This journey has been filled with learning opportunities, from understanding state management to implementing hooks and context APIs."],
            ["Core Concepts and Applications", "React's declarative approach has simplified the process of building dynamic user interfaces. By focusing on the core concepts such as JSX, components, and the virtual DOM, I've been able to create responsive and interactive applications. React's ecosystem, including libraries like React Router, has further expanded my ability to develop complex applications efficiently."],
            ["How I Stay Committed to Learning React", "I constantly build new projects and refactor old ones to incorporate React best practices. Engaging with the React community through forums, blogs, and conferences keeps me updated with the latest trends and tools. Additionally, I follow tutorials and work on projects to reinforce my learning and stay ahead in this rapidly evolving field."]
        ]),
        "/images/blog-image-05.png",2
    );

    addPost(
        "Learning Go",
        "May 20, 2024",
        "Learning Go has been a game-changer in my programming career...",
        new Map([
            ["My Experience with Go", "Learning Go has been a game-changer in my programming career. Its simplicity and efficiency have made it my go-to language for performance-critical applications. Working on concurrent programming projects has allowed me to appreciate Go's powerful goroutines and channels, which simplify the process of writing concurrent code."],
            ["Key Features and Applications", "Go's strong typing, garbage collection, and built-in testing framework have made it an excellent choice for building reliable and scalable applications. Its standard library provides robust support for web servers, cryptography, and database interactions, enabling me to develop end-to-end solutions efficiently. The language's emphasis on simplicity and readability has also improved my coding practices."],
        ]),
        "/images/3.png",1);
};

export function addPost(title, date, description, content, img,id) {
    const post = new Post(title, date, description, content, img,id);
    postObjects.push(post);
    postsToRender.push(post.renderPostCard());
}
initializePosts()
