import "./NewsCard.css";

function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function NewsCard({ article }) {
  return (
    <article className="news-card">
      <div className="news-card__image-wrapper">
        <img
          className="news-card__image"
          src={article.urlToImage}
          alt={article.title}
        />

        <button
          className="news-card__save-button"
          type="button"
          aria-label="Guardar artículo"
        >
          ♡
        </button>
      </div>

      <div className="news-card__content">
        <p className="news-card__date">{formatDate(article.publishedAt)}</p>

        <h3 className="news-card__title">{article.title}</h3>

        <p className="news-card__description">{article.description}</p>

        <p className="news-card__source">{article.source?.name}</p>
      </div>
    </article>
  );
}

export default NewsCard;
