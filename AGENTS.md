# AGENTS.md

## Sobre este proyecto

Aplicación web sencilla para registrar ingresos y gastos personales.
Hecha con HTML, CSS y JavaScript vanilla (sin frameworks ni herramientas de build).

## Estructura

- `index.html` — estructura de la página (formulario + lista de movimientos)
- `style.css` — estilos (diseño responsive, colores verdes)
- `script.js` — lógica: maneja el saldo, valida gastos, formatea moneda en pesos colombianos (es-CO)

## Reglas importantes

- El proyecto NO usa npm, frameworks ni build step. Todo es vanilla.
- El almacenamiento es solo en memoria (no hay localStorage ni backend).
- El idioma de la interfaz es español (Colombia).
- Los colores principales son verde `#18794e` y fondo `#f0f4f3`.
- No romper la funcionalidad existente al hacer cambios.
- Mantener el código simple y legible, apropiado para un estudiante aprendiendo.

## Convenciones

- Comentarios en español.
- Nombres de variables y funciones en español.
- Formato de moneda: `toLocaleString("es-CO")`.
