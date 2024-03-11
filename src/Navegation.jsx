import "./navigation.css";
import linkedinLogo from "./assets/linkedin-logo.svg";
import githubLogo from "./assets/github-logo.svg";
import emailLogo from "./assets/email-logo.svg";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="profile">
        <img src="https://via.placeholder.com/150" alt="Sua Foto" />
        <div className="buttons">
          <a href="#">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a href="#">
            <img src={githubLogo} alt="GitHub" />
          </a>
          <a href="mailto:seuemail@example.com">
            <img src={emailLogo} alt="Email" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
