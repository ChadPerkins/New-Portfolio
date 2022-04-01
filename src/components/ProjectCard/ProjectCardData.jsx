import CodeSnippet from "../../imgs/code-snippets.png";
import Portfolio from "../../imgs/portfolio.png";
import YelpCamp from "../../imgs/yelpcamp.png";
import YtClone from "../../imgs/ytclone.png";

export const projects = [
    {
        title: "Code-Snippets",
        description:
            "A Codepen style clone created with React. This website has fully functional HTML, CSS and Javascript terminals with a window that updates as you type. This project uses local stroage to save your progress",
        img: CodeSnippet,
        github: "https://github.com/ChadPerkins/Code-Snippet",
        url: "https://comfy-dragon-90f89e.netlify.app/",
    },
    {
        title: "YelpCamp",
        description:
            "A yelp clone dedicated to camp sites. This project uses NodeJS, MongoDB, Express with vanilla JS. This project has full CRUD functionality and user verification.",
        img: YelpCamp,
        github: "https://github.com/ChadPerkins/Yelp-Camp",
        url: "https://enigmatic-cliffs-90841.herokuapp.com/",
    },
    {
        title: "YouTube-Clone",
        description:
            "This is a project connecting to the Youtube API. It is used for searching and displaying videos as well as comments from the parent video. It is built using the React framework.",
        img: YtClone,
        github: "https://github.com/ChadPerkins/Youtube-Clone",
        url: "https://youtube-clone-eight-steel.vercel.app/",
    },
    {
        title: "First-Portfolio",
        description:
            "My first personal portfolio (previous to this). Created with HTML, CSS, Javasctipt and React",
        img: Portfolio,
        github: "https://github.com/ChadPerkins/Portfolio",
        url: "https://rad-pika-1ba6b8.netlify.app/",
    },
];
