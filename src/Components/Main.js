import { Links } from "../Data";
import "../Style/cloud.css";

export default function Main() {
  return (
    <section className="main" id="main">
      <div className="cloud">
        <div className="c1"></div>
        <div className="c2"></div>
      </div>
      <div className="person">
        <h2>
          Hello,
          <br />
          I'm Muhammad Sheikh alard
          <br />
          <span>Web Developer & Computer Eng.</span>
        </h2>
        <h3>
          I develop websites depending <br />
          on the top standards.
        </h3>
        <a href="#projects" className="main-btn" id="btn">
          View my work
        </a>
        <a href="#contact" className="sec-btn">
          Let's work together
        </a>
        <div className="social-icons">
          <a href={Links.Facebook}>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href={Links.Telegram}>
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a href={Links.GitHub}>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={Links.LinkedIn}>
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="personal-img" title="me ;)"></div>
    </section>
  );
}
