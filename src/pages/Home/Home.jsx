import React from "react";
import Button from "../../components/Button/Button";

import HomeSVG from "../../components/HomeSVG/HomeSVG";
import myPic from "../../imgs/chadperkins.jpg";

import "./Home.css";

export default function Home() {
    return (
        <section className="home-section">
            <div className="home-content">
                <h1 className="my-name">CHAD PERKINS</h1>
                <img className="my-pic" src={myPic} alt="Me" />
                <HomeSVG />
            </div>
            <Button />
        </section>
    );
}
