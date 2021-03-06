import { AiFillCode } from "react-icons/ai";
import { MdPageview } from "react-icons/md";

import { projects } from "./ProjectCardData";
import "./ProjectCard.css";

function ProjectCard() {
    return (
        <>
            <ul className="card-list">
                {projects.map((project) => {
                    return (
                        <li className="card-items" key={project.title}>
                            <div className="card">
                                <h2>{project.title}</h2>
                                <div className="img">
                                    <img src={project.img} alt="project" />
                                </div>
                                <div className="project-info">
                                    <p>{project.description}</p>
                                </div>
                                <div className="project-links">
                                    <a
                                        className="project-svg"
                                        target="_blank"
                                        rel="noreferrer"
                                        href={project.github}
                                    >
                                        <AiFillCode />
                                    </a>
                                    {project.url != null ? <a
                                        className="project-svg"
                                        target="_blank"
                                        rel="noreferrer"
                                        href={project.url}
                                    >
                                        <MdPageview />
                                    </a> : null }
                                    
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default ProjectCard;
