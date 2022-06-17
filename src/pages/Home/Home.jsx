import React from "react";
import Button from "../../components/Button/Button";

import HomeSVG from "../../components/HomeSVG/HomeSVG";

import "./Home.css";

export default function Home() {
    return (
        <section className="home-section">
            <div className="home-content">
                <p>Hello, I am</p>
                <h1 className="my-name">CHAD PERKINS</h1>
                <p>and I'm a</p>
                <HomeSVG />
            </div>
            <Button />
        </section>
    );
}
