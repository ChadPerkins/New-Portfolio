import ecePic from "../../imgs/ece.jpg";

import "./About.css";

const About = () => {
    return (
        <section className="about-section">
            <h1 className="about-header">ABOUT ME</h1>
            <div className="about-content">
                <img className="ece-pic" src={ecePic} alt="circut-board" />
                <p className="about-me">
                    I have always been fascinated with technology. As a kid I
                    would take apart my game consoles and controllers to try and
                    see if I can see how it works (as kids we thinks we know a
                    lot more then we ctually do). This would usually end in a
                    mess and a frustrated parent. Fast forward to today and I am
                    still persuing that interest. Although it has expanded into
                    software and design, I still have a deep interest in
                    hardware as well.
                </p>
                <p className="about-me2">
                    I am also an avid gammer. From as far back as I can
                    remember, I've always had a deep love for video games. They
                    are probably the reason I got so fascinated with technology
                    to begin with. I strive to bring that creative spark into my
                    work so that I may be able to inspire others to get
                    interested in tech.
                </p>
            </div>
        </section>
    );
};

export default About;
