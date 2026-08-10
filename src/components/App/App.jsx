import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import { getNews } from "../../utils/NewsApi";

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

  return (
    <div className="page">
      <Header />

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
    </div>
  );
}

export default App;
