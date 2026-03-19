import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:uzair.raoiqra101@gmail.com" data-cursor="disable">
                uzair.raoiqra101@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>+92 315-3298604</p>
            <h4>Address</h4>
            <p>Korangi 2 1/2, Sector 41-B, L-704</p>
            <h4>Languages</h4>
            <p>English, Urdu</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/uzair2424"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/uzairahmed11"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://uzair-ahmed-portfolio-hp1w.vercel.app/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Uzair Ahmed</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
