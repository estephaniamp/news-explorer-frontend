import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import { getNews } from "../../utils/NewsApi";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const INITIAL_ARTICLES_COUNT = 3;
const ARTICLES_STEP = 3;

function getStoredArticles() {
  const savedArticles = localStorage.getItem("articles");

  if (!savedArticles) {
    return [];
  }

  try {
    const parsedArticles = JSON.parse(savedArticles);

    return Array.isArray(parsedArticles) ? parsedArticles : [];
  } catch (err) {
    console.error("Error al recuperar los artículos guardados:", err);
    localStorage.removeItem("articles");

    return [];
  }
}

function App() {
  const [articles, setArticles] = useState(getStoredArticles);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(() =>
    Boolean(localStorage.getItem("articles")),
  );
  const [apiError, setApiError] = useState("");
  const [visibleArticles, setVisibleArticles] = useState(
    INITIAL_ARTICLES_COUNT,
  );
  const [keyword, setKeyword] = useState(
    () => localStorage.getItem("keyword") || "",
  );
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  function handleSearch(searchKeyword) {
    setIsLoading(true);
    setHasSearched(true);
    setApiError("");
    setArticles([]);
    setVisibleArticles(INITIAL_ARTICLES_COUNT);
    setKeyword(searchKeyword);

    getNews(searchKeyword)
      .then((data) => {
        const validArticles = (data.articles || []).filter(
          (article) =>
            article.title &&
            article.description &&
            article.url &&
            article.urlToImage &&
            article.publishedAt &&
            article.source?.name,
        );

        setArticles(validArticles);

        localStorage.setItem("articles", JSON.stringify(validArticles));

        localStorage.setItem("keyword", searchKeyword);
      })
      .catch((err) => {
        console.error(err);

        setApiError(
          "Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde.",
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleShowMore() {
    setVisibleArticles((currentCount) => currentCount + ARTICLES_STEP);
  }

  function handleLoginClick() {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  }

  function handleRegisterClick() {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  }

  function closeAllPopups() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  }

  return (
    <div className="page">
      <Header onLoginClick={handleLoginClick} />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              onSearch={handleSearch}
              articles={articles}
              isLoading={isLoading}
              hasSearched={hasSearched}
              apiError={apiError}
              visibleArticles={visibleArticles}
              onShowMore={handleShowMore}
              keyword={keyword}
            />
          }
        />

        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>

      <Footer />
      <PopupWithForm
        isOpen={isLoginOpen}
        onClose={closeAllPopups}
        title="Inicia sesión"
        name="login"
        buttonText="Inicia sesión"
      >
        <label className="popup__label">
          Correo electrónico
          <input
            className="popup__input"
            type="email"
            name="email"
            placeholder="Introduce tu correo electrónico"
            required
          />
        </label>

        <label className="popup__label">
          Contraseña
          <input
            className="popup__input"
            type="password"
            name="password"
            placeholder="Introduce tu contraseña"
            required
          />
        </label>

        <p className="popup__switch-text">
          o{" "}
          <button
            className="popup__switch-button"
            type="button"
            onClick={handleRegisterClick}
          >
            Regístrate
          </button>
        </p>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isRegisterOpen}
        onClose={closeAllPopups}
        title="Regístrate"
        name="register"
        buttonText="Regístrate"
      >
        <label className="popup__label">
          Correo electrónico
          <input
            className="popup__input"
            type="email"
            name="email"
            placeholder="Introduce tu correo electrónico"
            required
          />
        </label>

        <label className="popup__label">
          Contraseña
          <input
            className="popup__input"
            type="password"
            name="password"
            placeholder="Introduce tu contraseña"
            required
          />
        </label>

        <label className="popup__label">
          Nombre
          <input
            className="popup__input"
            type="text"
            name="name"
            placeholder="Introduce tu nombre"
            required
          />
        </label>

        <p className="popup__switch-text">
          o{" "}
          <button
            className="popup__switch-button"
            type="button"
            onClick={handleLoginClick}
          >
            Inicia sesión
          </button>
        </p>
      </PopupWithForm>
    </div>
  );
}

export default App;
