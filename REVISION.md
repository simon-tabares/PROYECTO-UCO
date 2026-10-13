# Revisión del Proyecto CONTROLADOR

## Objetivo

Este documento presenta los hallazgos encontrados durante la revisión del código fuente de la aplicación de control de ingresos y gastos. Se analizan los archivos `index.html`, `style.css` y `script.js` con el fin de identificar posibles errores, problemas de accesibilidad y oportunidades de mejora. No se realizaron modificaciones a los archivos originales.

---

## Resumen General

El proyecto es una aplicación web sencilla hecha con HTML, CSS y JavaScript vanilla. La lógica principal funciona correctamente: el cálculo de saldo, la validación de gastos y el formato de moneda en pesos colombianos cumplen su propósito. Sin embargo, se encontraron oportunidades de mejora en accesibilidad, usabilidad y buenas prácticas, especialmente en el centrado del contenido, el manejo de campos de formulario y la experiencia del usuario cuando una operación es rechazada.

---

## Hallazgos en `index.html`

### Etiquetas `<label>`

Los campos de entrada (`input`, `select`) no tienen etiquetas `<label>` asociadas. Actualmente se usa el atributo `placeholder` como única identificación visual. Esto puede causar dificultades para usuarios que utilizan lectores de pantalla, ya que el `placeholder` no es una etiqueta semántica accesible. Además, al hacer clic en el campo, el texto del placeholder desaparece, lo que puede generar confusión.

### Uso del título

El CSS define estilos para el elemento `h1` (color verde y alineación centrada), pero no existe ningún `<h1>` en el HTML. El título visible de la aplicación es un elemento `<p>`. Esto representa una inconsistencia entre el CSS y el HTML, aunque no afecta el funcionamiento.

### Evento `onclick`

El botón usa un manejador de eventos inline: `onclick="agregarMovimiento()"`. Esto mezcla la estructura HTML con la lógica JavaScript. Como alternativa, se podría usar `addEventListener` en el script para separar mejor las responsabilidades.

### Accesibilidad del saldo

El elemento que muestra el saldo (`<h2 id="saldo">`) no tiene el atributo `aria-live`. Este atributo permite que los lectores de pantalla anuncien los cambios automáticamente cuando el valor se actualiza. Sin él, un usuario con discapacidad visual podría no enterarse de que el saldo cambió.

---

## Hallazgos en `style.css`

### Centrado del contenido

La clase `.contenedor` tiene `margin: auto`, pero esta regla no centra un bloque con `max-width` definida. Para que el centrado horizontal funcione correctamente, se necesita especificar los márgenes laterales: `margin: 0 auto`.

### Estilos de enfoque

No hay reglas para la pseudo-clase `:focus` en los inputs, el select ni el botón. Esto significa que un usuario que navegue con el teclado no tendrá una indicación visual clara de qué elemento está activo. Agregar un contorno o cambio de color en `:focus` mejoraría la accesibilidad.

### Adaptación a pantallas pequeñas

El CSS no incluye media queries. El `padding: 30px` del body puede causar desbordamiento horizontal en pantallas muy pequeñas (por ejemplo, teléfonos antiguos). Sería útil revisar el comportamiento en dispositivos de menos de 400px de ancho.

### Mensaje para la lista vacía

Cuando no hay movimientos registrados, el elemento `<ul id="lista">` está completamente vacío. No existe ningún mensaje visual que indique al usuario que aún no hay datos. Esto podría confundir a quien usa la aplicación por primera vez.

---

## Hallazgos en `script.js`

### Validación de campos vacíos

El campo de monto usa `Number(document.getElementById("monto").value)`. Si el campo está vacío, `Number("")` devuelve `0` (no `NaN`). La validación actual funciona porque `0 <= 0` es verdadero, pero es más claro y robusto verificar si el string está vacío antes de convertirlo a número.

### Límite para la descripción

No hay ninguna restricción sobre la longitud del texto en el campo de descripción. Un usuario podría ingresar un texto extremadamente largo que afecte la presentación de la lista de movimientos.

### Comportamiento de los campos después de registrar un movimiento

Cuando se agrega un movimiento exitosamente, los campos de descripción y monto se limpian. Sin embargo, cuando un gasto es rechazado por saldo insuficiente, los campos conservan su valor. Esto obliga al usuario a borrar manualmente el contenido. Además, el `<select>` no se reinicia a su opción inicial después de cada operación.

### Formato inicial del saldo

En el HTML, el saldo inicial se muestra como `"$0"`. Cuando el script actualiza el saldo, usa `saldo.toLocaleString("es-CO")` para dar formato de moneda. Aunque en este caso específico el resultado visual es el mismo, existe una inconsistencia en cómo se genera el valor inicial (texto plano) frente a los valores dinámicos (formato regional).

---

## Recomendaciones

### Posibles problemas (corregir)

1. **Corregir el centrado del contenedor** — Cambiar `margin: auto` por `margin: 0 auto` en `.contenedor` para que el contenido se vea correctamente centrado en la pantalla.

2. **Agregar etiquetas `<label>`** — Asociar una etiqueta a cada campo del formulario para mejorar la accesibilidad y la usabilidad.

3. **Limpiar los campos cuando un gasto es rechazado** — Si el usuario no tiene saldo suficiente, los campos deberían limpiarse para que pueda intentar de nuevo sin borrar manualmente.

4. **Verificar campos vacíos antes de convertir a número** — Mejorar la validación del monto revisando si el string está vacío antes de usar `Number()`.

### Mejoras opcionales (no urgentes)

5. **Agregar estilos de `:focus`** — Mejorar la navegación por teclado con un contorno visible en los elementos activos.

6. **Incluir media queries** — Ajustar el diseño para pantallas pequeñas y evitar desbordamientos.

7. **Separar el evento `onclick` del HTML** — Usar `addEventListener` en `script.js` para mantener el HTML limpio.

8. **Agregar `aria-live` al saldo** — Permitir que los lectores de pantalla anuncien los cambios de saldo.

9. **Mostrar un mensaje cuando la lista está vacía** — Indicar visualmente que aún no hay movimientos registrados.

10. **Limitar la longitud de la descripción** — Establecer un máximo de caracteres para mantener la lista ordenada.

11. **Usar un `<h1>` para el título** — Si se desea aprovechar los estilos de `h1` ya definidos en el CSS, se podría cambiar el `<p>` por un `<h1>` o bien remover esa regla del CSS.

---

## Conclusión

La aplicación funciona correctamente para su propósito principal: registrar ingresos y gastos, calcular el saldo disponible y evitar que el saldo sea negativo. Los problemas encontrados no impiden que la herramienta cumpla su función, pero representan oportunidades de mejora en accesibilidad, usabilidad y mantenibilidad del código. Con pequeñas correcciones — especialmente en el centrado del contenido y el uso de etiquetas en el formulario — la aplicación sería más fácil de usar para todo tipo de usuarios.
