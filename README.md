# Atlas de Álgebra · Fundamentos para la IA

Abre `index.html` con doble clic, eligiendo Firefox, Chrome o Edge si te lo pregunta el sistema. Conserva junto a él la carpeta `assets` y `materiales`. No hay instalación, servidor ni cuenta requerida; el curso no realiza peticiones a servicios externos. Los enlaces de referencia sí necesitan Internet si decides abrirlos.

## Qué encontrarás

- Cinco temas alineados con los apuntes del 7 de octubre de 2026.
- 32 lecciones con explicación, ejemplos, una justificación desplegable, errores frecuentes y repaso.
- 115 ejercicios originales en niveles normal, medio y examen de grado.
- Cinco mapas mentales navegables y resúmenes por tema.
- Cinco laboratorios manipulables: complejos, matrices, proyección, Gauss y SVD.
- Exámenes después de I–II y III–IV, evaluación de V y simulacro de cuatro problemas /120 minutos. Hay 22 preguntas de evaluación, además de la práctica.
- Plan de 16 semanas, lectura diurna/nocturna, impresión y progreso exportable.

## Cómo practicar

Escribe fracciones (`2/3`), radicales (`sqrt(2)/2`) o decimales (`0,5` o `0.5`). Para componentes usa punto y coma: `1; 2; -3`. Para matrices y bases, una fila por línea. Los vectores de una base se escriben como filas, aunque las matrices de cambio de base los utilicen como columnas. Un complejo se introduce por sus partes real e imaginaria, como `2; -1` para 2−i.

Al pulsar **Comprobar**, una respuesta correcta muestra su solución razonada. También puedes pedir pistas o consultar la solución. El progreso distingue la resolución sin consultar de los ejercicios cuya solución se ha visto. Los correctores aceptan bases equivalentes y autovectores de escala distinta cuando procede.

La tolerancia numérica es 10⁻⁸ para las expresiones exactas. Un decimal escrito se acepta cuando es el redondeo correcto del valor exacto (3,1623 vale por √10) y la aproximación es significativa; si falta precisión, el corrector avisa en lugar de marcar un acierto como error. Una base casi dependiente o un valor de forma cuadrática muy cercano a cero puede exigir una representación mejor condicionada; también se indica. El razonamiento escrito se guarda, pero se revisa con soluciones y rúbricas. La nota automática del examen solo corresponde a resultados, no al desarrollo completo.

## Guardar tu trabajo

El navegador utiliza almacenamiento local; su comportamiento con archivos locales puede variar entre navegadores. En **Tu progreso**, exporta una copia JSON antes de mover la carpeta o cambiar de navegador. Importar conserva el trabajo ya escrito y añade lo que falta. Si el almacenamiento está bloqueado, aparece un aviso y puedes exportar antes de cerrar.

## Materiales y evaluación

Las páginas referidas son las impresas de `Algebra_IA (1).pdf`; en las secciones docentes, la página física PDF es la impresa menos cinco. Los libros de apoyo aportan lecturas adicionales, no alteran el temario de los cinco bloques. Las explicaciones y ejercicios de la web son originales; los documentos entregados se conservan intactos.

La sección **Materiales y criterios** recoge la evaluación local y señala la discrepancia con la fórmula de la guía pública. Las fechas y enunciados efectivos de PEC, práctica y examen deben confirmarse en el campus. El curso no suplanta actividades oficiales ni resuelve una práctica evaluable del campus.

## Verificación realizada y límite pendiente

Auditoría independiente matemática y lógica: lectura de las 32 lecciones, todos los enunciados, ecuaciones, ejemplos, soluciones, pistas y rúbricas. Recalculados 240 campos de los 137 ejercicios/preguntas; 61 comprobaciones exactas de ejemplos/laboratorios; 1762 pruebas adversariales de correctores y 15 de importación y flujos de aplicación. Los informes y los scripts independientes están en `revision`.

Pruebas reales de interfaz realizadas por HTTP local: las 32 lecciones, respuestas correctas/incorrectas, guardado tras recarga, pistas, base alternativa, filtros, entrega/repetición de examen, exportación/importación, laboratorios, mapas, lectura nocturna y vistas a 390 px. Las 715 fórmulas se renderizan y los recursos requeridos están en la carpeta.

**Límite concreto:** la política del navegador integrado bloquea `file://`; por tanto no se ha podido confirmar mediante ese navegador el doble clic ni su almacenamiento específico. La implementación utiliza scripts clásicos, rutas relativas y archivos locales, sin `fetch`, módulos o servidor requerido. Queda comprobar manualmente en tu navegador la apertura directa y el guardado. No se afirma perfección absoluta ni acreditación Awwwards.

## Créditos

Material principal: Juan Perán Mazón, Fundamentos algebraicos para la IA, UNED, 2026. Libros de apoyo: Ana María Díaz Hernández, Elvira Hernández García y Luis Tejero Escribano. Los originales conservan sus respectivas licencias.

OpenMAIC (commit ec176e84d450023e49a7e220d1b6974f5eb0bfce) se ha examinado como referencia de planificación, escenas, práctica y exportación HTML; no se instala ni se usa como motor del curso. The Record Institute aporta la referencia editorial. ManimGX fue evaluado; las animaciones de la web son SVG propios. KaTeX 0.16.22 está incluido con licencia MIT en `assets/vendor/katex/LICENSE`.

Los archivos de `scripts` permiten mantener el contenido y las comprobaciones durante desarrollo. No necesitas ejecutarlos ni instalar sus herramientas para estudiar en la web.

## Publicación en Cloudflare

La configuración de Workers y los pasos para publicar desde GitHub están en [CLOUDFLARE.md](CLOUDFLARE.md). `npm run build` prepara la carpeta `dist`; estudiar el curso local sigue sin requerir instalación.
