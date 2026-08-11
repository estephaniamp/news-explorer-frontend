import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ articles, hasMore, onShowMore }) {
  return (
    <section className="news-card-list">
      <div className="news-card-list__container">
        <h2 className="news-card-list__title">Resultados de búsqueda</h2>

        <div className="news-card-list__grid">
          {articles.map((article) => (
            <NewsCard key={article.url} article={article} />
          ))}
        </div>

        {hasMore && (
          <button
            className="news-card-list__more-button"
            type="button"
            onClick={onShowMore}
          >
            Mostrar más
          </button>
        )}
      </div>
    </section>
  );
}

export default NewsCardList;
