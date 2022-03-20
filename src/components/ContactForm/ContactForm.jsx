import { useState } from "react";

import "./ContactForm.css";

function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div className="">Thank you!</div>

                <div className="">We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <div className="contact-form">
            <form
                id="contact-form"
                role="form"
                name="contact"
                data-netlify="true"
                onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="NAME"
                        name="name"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="EMAIL"
                        name="email"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="SUBJECT"
                        name="subject"
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        rows="10"
                        placeholder="MESSAGE"
                        name="message"
                        required
                    ></textarea>
                </div>
                <button
                    className="send-button"
                    id="submit"
                    type="submit"
                    value="SEND"
                >
                    <span className="send-text">SEND</span>
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
