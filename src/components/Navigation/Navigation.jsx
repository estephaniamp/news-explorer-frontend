import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink
        className={({ isActive }) =>
          `navigation__link ${isActive ? "navigation__link_active" : ""}`
        }
        to="/"
      >
        Inicio
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `navigation__link ${isActive ? "navigation__link_active" : ""}`
        }
        to="/saved-news"
      >
        Artículos guardados
      </NavLink>

      <button className="navigation__button" type="button">
        Inicia sesión
      </button>
    </nav>
  );
}

export default Navigation;
