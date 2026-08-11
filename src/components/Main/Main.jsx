import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

function Main({
  onSearch,
  articles = [],
  isLoading = false,
  hasSearched = false,
  apiError = "",
  visibleArticles = 3,
  onShowMore,
  keyword = "",
}) {
  const visibleResults = articles.slice(0, visibleArticles);

  return (
    <main className="main">
      <section className="main__search">
        <SearchForm onSearch={onSearch} initialKeyword={keyword} />
      </section>

      {isLoading && <Preloader />}

      {!isLoading && apiError && (
        <section className="main__error">
          <p className="main__error-text">{apiError}</p>
        </section>
      )}

      {!isLoading && !apiError && hasSearched && articles.length === 0 && (
        <NothingFound />
      )}

      {!isLoading && !apiError && articles.length > 0 && (
        <NewsCardList
          articles={visibleResults}
          hasMore={visibleArticles < articles.length}
          onShowMore={onShowMore}
        />
      )}

      <About />
    </main>
  );
}

export default Main;
