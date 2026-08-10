import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form">
      <h1 className="search-form__title">¿Qué está pasando en el mundo?</h1>

      <p className="search-form__subtitle">
        Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
        cuenta personal.
      </p>

      <div className="search-form__field">
        <input
          className="search-form__input"
          type="text"
          placeholder="Introduce un tema"
          required
        />

        <button className="search-form__button" type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
