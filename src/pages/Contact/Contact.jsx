import { IoCall, IoLocation, IoMail } from "react-icons/io5";

import myPic from "../../imgs/chadperkins.jpg";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.css";

function Contact() {
    return (
        <section className="contact-section">
            <h1 className="contact-header">&#60;Contact Me&#47;&#62;</h1>
            <div className="contact-wrapper">
                <div className="direct-contact-container">
                    <img className="my-pic" src={myPic} alt="Me" />
                    <ul className="contact-list">
                        <li className="list-item">
                            <i>
                                <span className="contact-text place">
                                    <IoLocation className="contact-icon" />
                                    Ashland, Virginia
                                </span>
                            </i>
                        </li>

                        <li className="list-item">
                            <i>
                                <span className="contact-text phone">
                                    <IoCall className="contact-icon" />
                                    <a
                                        href="tel:1-814-412-8475"
                                        title="Give me a call"
                                    >
                                        (804) 412-8475
                                    </a>
                                </span>
                            </i>
                        </li>

                        <li className="list-item">
                            <i>
                                <span className="contact-text gmail">
                                    <IoMail className="contact-icon" />
                                    <a
                                        href="mailto:web3.engineering@gmail.com"
                                        title="Send me an email"
                                    >
                                        web3.engineering@gmail.com
                                    </a>
                                </span>
                            </i>
                        </li>
                    </ul>
                    <hr />
                </div>
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;
