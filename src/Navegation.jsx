import "./navigation.css";
import linkedinLogo from "./assets/linkedin-logo.svg";
import githubLogo from "./assets/github-logo.svg";
import emailLogo from "./assets/email-logo.svg";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="profile">
        <img src="src\assets\1695089592392.jpg" alt="Sua Foto" />
        <div className="buttons">
          <a
            href="https://www.linkedin.com/in/tarc%C3%ADsio-santos-j%C3%BAnior-b40382115/"
            target="_blank"
          >
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a href="https://github.com/tarcisiodev1" target="_blank">
            <img src={githubLogo} alt="GitHub" />
          </a>
          <a href="mailto:tarcisiodev1@gmail.com">
            <img src={emailLogo} alt="Email" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
