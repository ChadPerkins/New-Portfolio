import React from "react";
import BackgroundParticles from "../../components/BackgroundParticles/BackgroundParticles";
import Cube from "../../components/Cube/Cube";
import Button from "../../components/Button/Button";
import HomeSVG from "../../components/HomeSVG/HomeSVG";

import "./Home.css";

export default function Home() {
    return (
        <>
            <BackgroundParticles />
            <section className="home-section">
                <div className="home-content">
                    <p>Hello, I am</p>
                    <h1 className="my-name">CHAD PERKINS</h1>
                    <p>and I'm a</p>
                    <Cube />
                    <HomeSVG />
                </div>
                <Button />
            </section>
        </>
    );
}
