import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch, initialKeyword = "" }) {
  const [keyword, setKeyword] = useState(initialKeyword);
  const [error, setError] = useState("");

  function handleChange(event) {
    setKeyword(event.target.value);

    if (error) {
      setError("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedKeyword = keyword.trim();

    if (!trimmedKeyword) {
      setError("Por favor, introduzca una palabra clave");
      return;
    }

    setError("");
    onSearch(trimmedKeyword);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
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
          value={keyword}
          onChange={handleChange}
          required
        />

        <button className="search-form__button" type="submit">
          Buscar
        </button>
      </div>

      {error && <span className="search-form__error">{error}</span>}
    </form>
  );
}

export default SearchForm;
