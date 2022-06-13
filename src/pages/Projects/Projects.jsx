import { DiHtml5, DiCss3, DiPython } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import {
    SiUnity,
    SiGit,
    SiLinux,
    SiReact,
    SiCsharp,
    SiMicrosoftsqlserver,
} from "react-icons/si";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";

function Projects() {
    return (
        <section className="projects-section">
            <div className="skill-list">
                <h1>SKILLS</h1>
                <div className="skill-icons">
                    <div className="icon">
                        <DiHtml5 className="skill-icon" />
                        <p className="skill-text">HTML</p>
                    </div>

                    <div className="icon">
                        <DiCss3 className="skill-icon" />
                        <p className="skill-text">CSS</p>
                    </div>

                    <div className="icon">
                        <IoLogoJavascript className="skill-icon" />
                        <p className="skill-text">Javascript</p>
                    </div>

                    <div className="icon">
                        <SiCsharp className="skill-icon" />
                        <p className="skill-text">C#</p>
                    </div>

                    <div className="icon">
                        <DiPython className="skill-icon" />
                        <p className="skill-text">Python</p>
                    </div>
                </div>
                <h2>Technologies</h2>
                <div className="tech-icons">
                    <div className="icon">
                        <SiReact className="skill-icon" />
                        <p className="skill-text">React</p>
                    </div>
                    
                    <div className="icon">
                        <SiUnity className="tech-icon" />
                        <p className="skill-text">Unity</p>
                    </div>
                    
                    <div className="icon">
                        <SiMicrosoftsqlserver className="tech-icon" />
                        <p className="skill-text">MSSQL Server</p>
                    </div>

                    <div className="icon">
                        <SiGit className="tech-icon" />
                        <p className="skill-text">Git</p>
                    </div>
                    
                    <div className="icon">
                        <SiLinux className="tech-icon" />
                        <p className="skill-text">Linux</p>
                    </div>
                </div>
            </div>
            <ProjectCard className="project-card" />
        </section>
    );
}

export default Projects;
