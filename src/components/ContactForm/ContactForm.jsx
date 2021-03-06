import "./ContactForm.css";

function ContactForm() {
    return (
        <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
        >
            <input type="hidden" name="form-name" value="contact" />
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
    );
}

export default ContactForm;
