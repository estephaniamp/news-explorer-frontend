import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {new Date().getFullYear()} News Explorer
      </p>

      <nav className="footer__navigation">
        <Link className="footer__link" to="/">
          Inicio
        </Link>

        <a
          className="footer__link"
          href="https://tripleten.com/"
          target="_blank"
          rel="noreferrer"
        >
          TripleTen
        </a>

        <a
          className="footer__link"
          href="https://github.com/estephaniamp"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
