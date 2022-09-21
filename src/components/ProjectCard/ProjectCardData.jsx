import CodeSnippet from "../../imgs/code-snippets.png";
import Portfolio from "../../imgs/portfolio.png";
import YelpCamp from "../../imgs/yelpcamp.png";
import YtClone from "../../imgs/ytclone.png";
import QuizApp from "../../imgs/quiz-app.png";
import PwGen from "../../imgs/pwgen-gh.png";
import Shooter2D from "../../imgs/2d-shooter.png";
import Prototype1 from "../../imgs/prototype1.png";
import Prototype2 from "../../imgs/prototype2.png";
import Prototype3 from "../../imgs/prototype3.png";
import Prototype4 from "../../imgs/prototype4.png";
import Prototype5 from "../../imgs/prototype5.png";
import OpenGL1 from "../../imgs/OpenGL-GettingStarted.png";
import OpenGL2 from "../../imgs/LightingAndModels.png";
import Vulkan1 from "../../imgs/getting-started-with-vulkan.png";

export const projects = [
    {
        title: "Getting started with Vulkan",
        description:
            `This is my project which follows along with the "vkguide.dev" Vulkan tutorial.`,
        img: Vulkan1,
        github: "https://github.com/ChadPerkins/Vulkan-Getting-Started",
    },
    {
        title: "Lighting and Model Loading",
        description:
            `This is my completed work along project following the "Lighting" and "Model Loading" sections from the "LearnOpenGL.com" book.`,
        img: OpenGL2,
        github: "https://github.com/ChadPerkins/Prototype5",
    },
    {
        title: "Getting Started with OpenGL",
        description:
            `This is my completed work along project following the "getting Started" section from the "LearnOpenGL.com" book.`,
        img: OpenGL1,
        github: "https://github.com/ChadPerkins/GettingStartedWithOpenGL",
    },
    {
        title: "Prototype5",
        description:
            `This is the completed unit and project from the final part of the "Unity Junior Program Pathway" on unity's learning platform.`,
        img: Prototype5,
        github: "https://github.com/ChadPerkins/Prototype5",
    },
    {
        title: "Prototype4",
        description:
            `This is the completed unit and project from the unit 4 part of the "Unity Junior Program Pathway" on unity's learning platform.`,
        img: Prototype4,
        github: "https://github.com/ChadPerkins/Prototype4",
    },
    {
        title: "Prototype3",
        description:
            `This is the completed unit and project from the unit 3 part of the "Unity Junior Program Pathway" on unity's learning platform.`,
        img: Prototype3,
        github: "https://github.com/ChadPerkins/Prototype3",
    },
    {
        title: "Prototype2",
        description:
            `This is the completed unit and project from the unit 2 part of the "Unity Junior Program Pathway" on unity's learning platform.`,
        img: Prototype2,
        github: "https://github.com/ChadPerkins/Prototype2",
    },
    {
        title: "Prototype1",
        description:
            `This is the completed unit and project from the unit 1 part of the "Unity Junior Program Pathway" on unity's learning platform.`,
        img: Prototype1,
        github: "https://github.com/ChadPerkins/Prototype1",
    },
    {
        title: "2D-Shooter",
        description:
            `This is the second project from the course "Game Design and Development 1: 2D Shooter" on coursera.`,
        img: Shooter2D,
        github: "https://github.com/ChadPerkins/2D-Shooter",
        url: "https://chadperkins.itch.io/2d-shooter",
    },
    {
        title: "Quiz-App",
        description:
            "A quiz app built using React in the frontend and .net 6 web API. It uses MSSQL Server to store questions. It uses Material UI for the styling.",
        img: QuizApp,
        github: "https://github.com/ChadPerkins/Quiz-App",
    },
    {
        title: "Code-Snippets",
        description:
            "A Codepen style clone created with React. This website has fully functional HTML, CSS and Javascript terminals with a window that updates as you type. This project uses local stroage to save your progress",
        img: CodeSnippet,
        github: "https://github.com/ChadPerkins/Code-Snippet",
        url: "https://comfy-dragon-90f89e.netlify.app/",
    },
    {
        title: "CL-Pawssowrd-Gen",
        description:
            "A command line password genorator using python. This program will ask for a username accociated with the password and saves them together in a file.",
        img: PwGen,
        github: "https://github.com/ChadPerkins/password-generator",
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
