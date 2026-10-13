# AGENTS.md

## Sobre este proyecto

Aplicación web sencilla para registrar ingresos y gastos personales, desarrollada con HTML, CSS y JavaScript sin frameworks ni herramientas de construcción.

## Estructura del proyecto

- `index.html`: estructura de la página, formulario y lista de movimientos.
- `style.css`: estilos, diseño adaptable y colores verdes.
- `script.js`: lógica de la aplicación, manejo del saldo, validación de gastos y formato de moneda colombiana.

## Reglas importantes

- El proyecto no utiliza npm, frameworks ni herramientas de construcción.
- Los movimientos se almacenan únicamente en memoria; no se utiliza base de datos ni almacenamiento permanente.
- El idioma de la interfaz es español de Colombia.
- El color principal es verde `#18794e` y el fondo es `#f0f4f3`.
- No modificar la funcionalidad existente sin explicar primero los cambios propuestos.
- Mantener el código sencillo, organizado y fácil de entender para un estudiante que está aprendiendo.

## Convenciones de código

- Escribir los comentarios en español.
- Utilizar nombres claros para variables y funciones.
- Formatear los valores monetarios utilizando `toLocaleString("es-CO")`.
- Evitar agregar dependencias innecesarias.
- Comprobar que los ingresos, gastos y validaciones funcionen correctamente después de cada cambio.
