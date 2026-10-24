---
version: alpha
name: Atlas de Álgebra
description: Cuaderno universitario interactivo con la calma de una biblioteca y láminas geométricas manipulables.
colors:
  primary: "#243b34"
  background: "#f3f0e8"
  surface: "#fffdf7"
  ink: "#222e29"
  muted: "#59655d"
  brass: "#826832"
  line: "#c8cabc"
  control: "#788478"
  danger: "#9c342d"
  success: "#286044"
typography:
  display:
    fontFamily: "Georgia, 'Times New Roman', serif"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
  utility:
    fontFamily: "'Courier New', monospace"
rounded:
  DEFAULT: "3px"
spacing:
  section-gap: "3rem"
  page-max: "86rem"
components:
  button:
    rounded: "3px"
  exercise:
    rounded: "3px"
---
# Atlas de Álgebra

## Overview
Curso privado local para estudiante UNED, español de España, sesiones largas en ordenador y consultas en móvil. Referencia inspeccionada: therecord.institute, portada con tipografía serif espaciada, jerarquía editorial y archivo de láminas. Se traslada su intención de colección cuidada a un atlas matemático, sin copiar imágenes ni marca. Registro híbrido: portada expresiva; aula de estudio funcional y sobria. Firma: lámina de una transformación de retícula con ejes, vectores y marco de grabado. Evitar dashboards de tarjetas intercambiables, confeti, chats simulados y credenciales de acreditación inventadas.

## Colors
Papel claro para leer, bosque para navegación, latón para detalles; el latón no se usa como texto pequeño sobre papel. Los estados incluyen texto. Tema oscuro opcional con roles equivalentes. Los tokens de este documento se reflejan en :root de assets/style.css; esa raíz es el propietario de ejecución y los componentes consumen variables compartidas.

## Typography
Georgia para títulos, Arial para lectura y controles, Courier New para etiquetas de archivo. KaTeX local para matemáticas. Cuerpo 17px/1.75, longitud de lectura 72ch. No descargar fuentes al abrir. Ecuaciones largas con desplazamiento interno.

## Layout
Cabecera de navegación horizontal, índice lateral del aula de 250px y lectura centrada. En 850px el índice pasa a desplegable nativo details. Documento con altura natural; no encerrar la lectura en un panel con scroll. Portada dividida texto/lámina; móvil apila. Elementos sin altura fija salvo láminas con aspect-ratio.

## Elevation & Depth
Superficies planas, divisores y marcos; sombra suave solo en la lámina y diálogo. No tarjetas flotantes por cada párrafo.

## Shapes
Esquinas casi rectas; círculos solo en geometría y numeración de temas. Líneas finas visibles. Mapas mentales como árbol conectado, cada rama conduce a una lección.

## Components
Propietarios compartidos: renderLesson, renderExercise, renderExam y showStatus en app.js. Corrector central en engine.js. Formato de respuesta se explicita junto al campo. Scrollbar global visible con thumb/track/hover/active; focus de alto contraste. Botones de navegación, pista y solución con etiquetas constantes. Tabs de contenido mediante enlaces y aria-current. Formas del laboratorio tienen alternativa con deslizadores; animación pausada por defecto y reduced-motion.

## Do's and Don'ts
Priorizar lectura matemática y rapidez. No autoplay ni sonidos. Mantener las soluciones fuera del DOM antes de entregar exámenes. No llamar a la comprobación numérica una calificación oficial del razonamiento. No enlaces que requieran Internet para el núcleo del curso.
