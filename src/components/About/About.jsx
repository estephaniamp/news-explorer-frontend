import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">Acerca de Estephanía</h2>

        <p className="about__text">
          Este proyecto fue creado como aplicación final del programa de
          Desarrollo Web de TripleTen.
        </p>

        <p className="about__text">
          News Explorer permite buscar noticias mediante una API externa y,
          posteriormente, guardar artículos favoritos en una cuenta personal.
        </p>
      </div>
    </section>
  );
}

export default About;
