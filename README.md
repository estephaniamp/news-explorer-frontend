# News Explorer

News Explorer es una aplicación web desarrollada con React que permite buscar noticias recientes sobre cualquier tema mediante una API externa.

El proyecto forma parte del proyecto final del bootcamp de Desarrollo Web de TripleTen.

## Proyecto desplegado

La aplicación se encuentra publicada en Netlify:

https://news-explorer-frontend-estephania.netlify.app

## Funcionalidades

- Búsqueda de noticias por palabra clave.
- Obtención de noticias mediante News API.
- Visualización inicial de tres artículos.
- Botón "Mostrar más" para cargar tres artículos adicionales.
- Preloader durante las solicitudes a la API.
- Manejo del estado "No se ha encontrado nada".
- Manejo de errores durante las solicitudes.
- Persistencia de los resultados de búsqueda mediante localStorage.
- Navegación entre la página principal y la página de artículos guardados.
- Ventanas modales de inicio de sesión y registro.
- Cierre de ventanas modales mediante el botón de cierre, clic fuera del modal y tecla Escape.
- Diseño responsivo para dispositivos de escritorio, tabletas y móviles.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- React
- React Router
- Vite
- News API
- Fetch API
- Local Storage
- ESLint
- Git y GitHub
- Netlify

## API

El proyecto utiliza News API para obtener las noticias.

En producción, las solicitudes se realizan mediante el proxy proporcionado por TripleTen:

`https://nomoreparties.co/news/v2/everything`

La clave de News API se almacena en una variable de entorno y no se incluye en el repositorio.

## Instalación y ejecución local

Clona el repositorio:

```bash
git clone https://github.com/estephaniamp/news-explorer-frontend.git
```
