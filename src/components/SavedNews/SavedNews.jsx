import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews() {
  return (
    <main className="saved-news">
      <SavedNewsHeader />

      <section className="saved-news__content">
        <p className="saved-news__placeholder">
          Aquí aparecerán los artículos guardados.
        </p>
      </section>
    </main>
  );
}

export default SavedNews;
