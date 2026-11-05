# ri3ux.github.io

Sitio personal de Ricardo Estepa. HTML, CSS y JavaScript sin dependencias ni paso de compilación: lo que está en el repositorio es lo que publica GitHub Pages.

## Estructura

```
index.html               Estructura de la página, enlaces de contacto y etiquetas para compartir
favicon.svg              Ícono de la pestaña
apple-touch-icon.png     Ícono al guardar el sitio en la pantalla de inicio (180 × 180)
assets/
  css/styles.css         Colores, tipografía y diseño
  js/content.js          Todos los textos, en español e inglés
  js/app.js              Comportamiento: índice, terminal, idioma y tema
  images/profile.jpg     Foto de perfil
  images/thumbnail.png   Imagen al compartir el enlace (1200 × 630)
```

## Ajustes frecuentes

| Quiero cambiar…                       | Dónde                                                                 |
|---------------------------------------|-----------------------------------------------------------------------|
| El color de acento                    | `styles.css`, sección **1. Marca** (5 variables), y el `fill` de la R en `favicon.svg` |
| Los colores de fondo o texto          | `styles.css`, sección **2. Tema**: cada valor es `light-dark(claro, oscuro)` |
| Las fuentes                           | `styles.css`, sección **3. Tipografía**, y el `<link>` de Google Fonts en `index.html` |
| Un texto (titular, perfil, logros…)   | `content.js`, en `es` y en `en`                                       |
| Agregar un trabajo                    | `content.js`: una entrada nueva en `jobs` de ambos idiomas con el mismo id. Aparece sola en el índice |
| Agregar un curso                      | `content.js`, lista `certs`                                           |
| El año del pie de página              | No hace falta: `{year}` en `content.js` se reemplaza por el año actual |
| Enlaces de contacto (agenda, LinkedIn, correo) | `index.html`, bloque `.actions`                              |
| La imagen al compartir                | Reemplaza `assets/images/thumbnail.png` (1200 × 630) y sube el `?v=` del `og:image` en `index.html`. Las alternativas están en `assets/images/thumbnail-*.png` |

### Cambiar el color de acento

Las cinco variables de la sección 1 de `styles.css` controlan todo el acento del sitio:

- `--brand`: botón y capítulo activo en modo claro. Debe tener contraste de al menos 4.5:1 con texto blanco.
- `--brand-bright`: lo mismo en modo oscuro, y la R del logo. Lleva texto oscuro encima.
- `--brand-term`: el `$`, el cursor y los recuadros dentro de la terminal.
- `--brand-tint` y `--brand-shade`: fondo del texto seleccionado en modo claro y oscuro.

Después actualiza el `fill` de la R (el primer `<path>`) en `favicon.svg` con el valor de `--brand-bright`, y regenera `apple-touch-icon.png`. El logo del encabezado toma el color solo.

## Probar en local

```bash
python -m http.server 8000
```

Luego abre http://localhost:8000.
