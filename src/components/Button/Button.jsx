import { Link } from "react-router-dom";

import "./Button.css";

function Button() {
    return (
        <div className="contact-link">
            <Link to="/contact">
                <button className="contact-button" title="Contact me">Get In Touch</button>
            </Link>
        </div>
    );
}

export default Button;
