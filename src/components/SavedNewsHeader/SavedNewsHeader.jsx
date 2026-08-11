import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <section className="saved-news-header">
      <p className="saved-news-header__label">Artículos guardados</p>

      <h1 className="saved-news-header__title">Tus artículos guardados</h1>

      <p className="saved-news-header__keywords">
        Por palabras clave: noticias, tecnología y desarrollo
      </p>
    </section>
  );
}

export default SavedNewsHeader;
