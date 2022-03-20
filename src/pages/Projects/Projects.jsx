import { DiHtml5, DiCss3 } from "react-icons/di";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { SiExpress, SiReact, SiMongodb } from "react-icons/si";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";

function Projects() {
    return (
        <section className="projects-section">
            <div className="skill-list">
                <h2>&#60;SKILLS&#47;&#62;</h2>
                <p>
                    These are skills I have learned and used through different
                    projects:
                </p>
                <div className="skill-icons">
                    <DiHtml5 className="skill-icon" />{" "}
                    <DiCss3 className="skill-icon" />{" "}
                    <IoLogoJavascript className="skill-icon" />
                    <SiReact className="skill-icon" />{" "}
                    <IoLogoNodejs className="skill-icon" />{" "}
                    <SiExpress className="skill-icon" />{" "}
                    <SiMongodb className="skill-icon" />
                </div>
            </div>
                <ProjectCard className="project-card" />
        </section>
    );
}

export default Projects;
