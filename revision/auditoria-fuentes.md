# Auditoría independiente de fuentes — en curso

Árbitro: agente independiente `arbitro`, sin intervención en autoría ni implementación. Fecha: 13 octubre 2026. Este documento registra verificaciones concretas; **no certifica todavía una revisión completa de las 854 páginas PDF ni del futuro curso**. Se han inspeccionado los inventarios, índices, calendario, calificaciones, extensos bloques de la fuente principal y muestras de los textos auxiliares. Los bloques todavía no revisados no se consideran aprobados.

## Jerarquía y cobertura

Fuente curricular principal: `Algebra_IA (1).pdf`, Juan Perán Mazón, 7 octubre 2026. Tiene 218 páginas físicas. En las páginas docentes comprobadas, página impresa = página física PDF + 5 (48 = PDF43; 111 = PDF106). Los intervalos deben usar numeración impresa explícita.

- Tema I: Escalares, pp.15–54. Conjuntos, tuplas, funciones/familias, numeración, naturales/enteros/racionales/reales, cifras significativas, redondeo al par, complejos, exponencial, raíces, TFA.
- Tema II: Tensores, matrices y vectores, pp.55–118. Espacios K^I, combinaciones y bases, tensores/formato/ejes, bloques, traspuesta y adjunta, producto/contracción, inversa/cambio de base, distancias, Gram–Schmidt, complemento y proyección, matrices ortogonales/unitarias.
- Tema III: Matrices y tensores como aplicaciones lineales o multilineales, pp.119–152. Aplicaciones, determinante y volumen, cuatro subespacios, núcleo generalizado, autovalores/autovectores, formas bilineales/sesquilineales/cuadráticas.
- Tema IV: Procesos de triangulación, pp.153–180. Sistemas, Gauss y Rouché–Frobenius, PLU, QR completa/reducida/de rango, mínimos cuadrados, Schur.
- Tema V: Procesos de diagonalización, pp.181–206. Similitud/congruencia, LDU/LDL*/Cholesky, espectral, inercia, definitud, Jordan, SVD, pseudoinversa.

Los libros de Álgebra para Ingenieros son auxiliares, con seis capítulos y contenidos extra (Maxima, cónicas, cuádricas, métodos iterativos). No convierten automáticamente esos extras en temario exigido de IA. El manual de ejercicios declara 248 ejercicios, algunos procedentes de exámenes de ingenierías; no son modelos oficiales de esta asignatura nueva. `Ejercicios_Tema_I.pdf` es el banco específico del tema I.

## Calendario comprobado visualmente

- Arranque: 1–4 octubre 2026.
- I: 5–11 octubre.
- II: 12 octubre–1 noviembre.
- III: 2–22 noviembre.
- IV: 23 noviembre–6 diciembre.
- V: 7–20 diciembre y 11–17 enero 2027.
- Repaso: 18–24 enero.
- PEC: círculos en 11, 12, 13 y 14 diciembre.
- Práctica: pentágono en 12 enero.

Los símbolos no establecen por sí solos hora límite, formato ni instrucciones de entrega. No atribuirles datos ausentes.

## Evaluación local comprobada íntegramente

`Calificaciones.txt`: pruebas no realizadas valen cero. Si Npra<2,5, resultado suspenso. Si Npra≥2,5 y Np<4, Nf=Np. Si Npra≥2,5 y Np≥4, Nf=min(Np+0,1 Npec+0,1 Npra,10). PEC diciembre; práctica enero ordinaria y septiembre extraordinaria.

El autor principal comunica haber consultado la guía pública vigente (codAsignatura=71031027, codTitulacion=7103), con desarrollo, cuatro preguntas, 120 minutos, sin material y PEC de cinco test sobre primeros cuatro bloques, estimada cinco horas. Comunica inconsistencia en la fórmula final pública (Npec/Npra donde texto local dice Np). No la he verificado independientemente en navegador: registrar como evidencia del autor, no como revisión directa del árbitro. Priorizar para el curso el archivo de calificaciones entregado al alumno y señalar discrepancia sin inventar una resolución oficial.

## Hallazgos confirmados en imagen y cálculo

1. **p48 / PDF43: series exp, cos y sen empiezan en n=1**. Render inspeccionado: no es fallo de extracción. Deben comenzar en n=0 para las potencias/factoriales mostrados. Contraejemplo exp(0)=1, pero serie impresa=0. También deben iniciar k=0 las dos subseries de la deducción de Euler.
2. **p111 / PDF106: ejemplo 99, Gram–Schmidt incorrecto**. Render inspeccionado. Para v4=(0,2,2,1), el producto con (11,42,−9,8) vale 74, no 96. Residuo correcto=(−141,68,89,−63)/145, verificado con SymPy exacto. El vector final propuesto (−15,−2,7,19)/√615 no es ortogonal a v1=(1,0,3,2): numerador del producto=44. El ejemplo 100 usa ese vector y requiere recalcularse, no copiarse.

## Hallazgos matemáticos en texto extraído, pendientes de contraste visual si se citan como erratas editoriales

- p39, ejemplo31: con a=1,b=0,04, la suma redondeada es a, no b. Las dos expresiones de no asociatividad sí ilustran el problema.
- p40–41: Decimal no es sinónimo de decimales fijos; su contexto controla precisión significativa y `quantize` fija escala. No repetir la exclusión categórica del uso científico.
- p46: intervalo [a,2π) debe ser [a,a+2π); argumento necesita z≠0.
- p54, ejemplo44: cociente correcto z³−5z²+9z−5; la última igualdad confunde el polinomio cuártico con el cociente cúbico.
- p58: subespacio exige no vacío (o cero incluido). `<B>=KB+KB` no es definición general válida del generado: se requieren todas las combinaciones FINITAS. Contraejemplo B={e1,e2,e3}; e1+e2+e3 no pertenece a KB+KB.
- p60 ejemplo50 repite e2 donde corresponde e3. Funciones de soporte finito no son únicamente funciones características: pueden tomar cualquier escalar.
- p74 matriz n×m: alta significa n>m, no m>n.
- p79 bloque B de matriz ancha [U B] tiene formato m×(n−m), no (n−m)×m.
- p84 ejemplo67: 3A−2B debe tener entrada (1,2)=4, no8; 3·2−2·1=4. Ejemplo68 listas muestran 3×2×2, no2×2×3.
- p106 Cauchy–Schwarz para unitarios da ≤1, no estrictamente <1; igualdad para vectores proporcionales.
- p109 normas ℓp requieren p≥1 para ser normas.
- p134 ejemplo121: cuarto vértice dado (6,−2) no completa el paralelogramo de los otros tres; debería (7,1). Determinante de aristas sí da−18.
- p135 ejemplo125: factor intermedio1/2 para tetraedro debe1/6; resultado final se debe contrastar desde Gram.
- p136 col(A*) está en K^m para A n×m, no K^n.
- p176 (28): Ax=proy_col(A)(b) no equivale a un único x cuando ker A no trivial. Soluciones x=x_min+z, z∈ker A; fórmula mostrada da x_min.
- p183 extracción LDU: D debe ser diag(v11,...), no su inversa si U=D^-1V y se exige diagonal unitaria.
- p187 raíz cuadrada de semidefinida es semidefinida, no necesariamente definida. El recuadro posterior sí lo expresa correctamente.
- p195: semidefinitud positiva exige TODOS los menores principales no negativos, no solo líderes ni todas las submatrices de orden n−1. 2^n−1 cuenta subconjuntos principales no vacíos de todos los órdenes.

## Condiciones que el curso debe preservar

- Diferenciar adjunta conjugada de traspuesta sobre C. Declarar notación; no confiar en extracción que pierde barras.
- Una matriz normal real puede necesitar C para diagonalizar unitariamente. Espectral real ortogonal exige simetría.
- Sylvester positivo usa menores principales líderes estrictamente positivos; semidefinido requiere todos los principales o autovalores no negativos.
- Proy=A(A*A)^−1A* exige columnas LI. En rango deficiente usar pseudoinversa.
- Gram–Schmidt descarta residuos cero y nunca divide por cero.
- QR delgada de columnas LI y diagonal positiva tiene unicidad; no extenderla sin hipótesis a rango deficiente.
- PLU: fijar convención A=PLU versus PA=LU y mantenerla en ejercicios/corrector.
- SVD: singular values no negativos, U/V no únicos; aceptar cambios de signo coordinados y permutaciones coherentes.
- Autovectores son no nulos; una base alternativa equivalente debe aceptarse.
- Complejos y raíces: argumento multivaluado; cero aparte; n raíces distintas solo para radicando no nulo.

## Estado de aprobación

Fuentes útiles pero contienen erratas reales. No aprobar transcripción automática. El futuro curso deberá comprobarse por sí mismo, ecuación por ecuación y resultado por resultado. Auditoría final pendiente de recepción de sus archivos. Este informe no autoriza a decir «todos los PDFs comprobados íntegramente».
