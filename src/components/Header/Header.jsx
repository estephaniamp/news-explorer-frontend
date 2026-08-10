import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ onLoginClick }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" to="/">
          NewsExplorer
        </Link>

        <Navigation onLoginClick={onLoginClick} />
      </div>
    </header>
  );
}

export default Header;
