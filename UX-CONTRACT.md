# Contrato de interacción
Español es-ES; inicio → tema → lección/práctica/mapa/resumen; exámenes y plan accesibles globalmente. Ruta hash restorable, botón Atrás válido.
- Formulario: renderExercise, novalidate, etiquetas reales, feedback inline aria-live y errores asociados. Validación compartida engine.js. Campos preservados al navegar y recargar cuando almacenamiento esté disponible.
- Estado por ejercicio: pendiente, incorrecto, correcto, solución consultada. Consultar solución no cuenta como resolver. Si cambia respuesta, recalcular; no mantener éxito obsoleto.
- Examen: borrador → entregado. Antes de entregar no pistas, soluciones ni feedback por apartado. Nota automática solo resultados, rúbrica para razonamiento. Repetir crea intento limpio tras confirmación propia; conserva historial resumido.
- Guardado: localStorage con captura de fallos y aviso persistente; exportar JSON, importar fusionando ejercicios/lecturas y validando esquema. Nunca sobrescribir silenciosamente todo el progreso. Sin datos externos ni telemetría.
- Selección: selects nativos para preferencias simples; no tablas editables ni CRUD remoto.
- Avisos: showStatus con live-region y texto. No alert/confirm/prompt nativos.
- Scroll: documento; fórmulas con overflow propio, scrollbar global CSS. Sin recortes en móvil.
- A11y: skip link, foco visible, encabezados jerárquicos, texto alternativo diagramas, reduced-motion y teclado. Importación no inyecta HTML.
- Exámenes: 3 pruebas de 6 ejercicios (normal/medio/examen, 2 cada), y simulacro 4 preguntas desarrollo 120min como propuesta docente. Tiempo orientativo, nunca cierre automático ni pérdida de borrador.

## Canonical UI Map

| Capability | Canonical owner | Source of truth | Allowed variants | Verification |
|---|---|---|---|---|
| Select/Listbox | select nativo en renderExercise | UX-CONTRACT.md; assets/app.js | preguntas de opción, popup del sistema aceptado | recorrido de teclado y selección en navegador |
| Form | renderExercise y bindExercise; engine.js | assets/app.js; assets/engine.js | práctica y examen | revision/engine-adversarial-results.json; recorrido real |
| Scrollbar | baseline global de style.css | DESIGN.md; assets/style.css :root | documento y fórmulas con overflow | inspección estilos y viewport estrecho |
| Toast | showStatus | assets/app.js | éxito, importación y exportación | live-region y navegador |

Los botones que comparten lógica usan AtlasActions; la vista conecta el resto mediante bindPage. La plantilla de formulario y el propietario de correctores son únicos. No hay red de aplicación, datos de terceros ni acciones remotas.
