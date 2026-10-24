from pathlib import Path
import json
T=[]
def topic(id,title,subtitle,pages,goals,summary,mapbranches):
 t=dict(id=id,title=title,subtitle=subtitle,pages=pages,goals=goals,summary=summary,map=mapbranches,lessons=[]);T.append(t)
def L(id,title,pages,goal,body,example,trap,recall,proof=''):
 T[-1]['lessons'].append(dict(id=id,title=title,pages=pages,goal=goal,body=body,example=example,trap=trap,recall=recall,proof=proof))
topic(1,'Escalares','El lenguaje con el que empieza todo',[15,54],['Leer conjuntos y cuantificadores sin ambigüedad.','Cambiar de base numérica y controlar el redondeo.','Operar en ℂ y obtener todas las raíces.'],[
['Conjuntos',r'$x\in A$ habla de elementos; $B\subseteq A$ habla de inclusión. Una tupla conserva orden y repeticiones.'],['Numeración',r'En base $b\ge2$, el valor es $\sum_k d_k b^k$, con $0\le d_k<b$.'],['Racionales',r'Una fracción reducida tiene desarrollo finito en base $b$ si los primos de su denominador dividen a $b$.'],['Complejos',r'$z\bar z=|z|^2$; $z=re^{i\theta}$ para $z\ne0$.'],['Raíces',r'$w_k=r^{1/n}e^{i(\theta+2k\pi)/n}$, $k=0,\ldots,n-1$, si $z=re^{i\theta}\ne0$.']
],[['Lenguaje',['1-1','1-2']],['Representación y precisión',['1-3','1-4']],['Plano complejo',['1-5','1-6']]])
L('1-1','Conjuntos, lógica y tuplas',[15,21],'Traducir una condición a elementos concretos y distinguir pertenencia de inclusión.',r'''
Un conjunto queda determinado por sus elementos: no importa su orden ni cuántas veces los escribas. Una tupla sí conserva posiciones y repeticiones. Esta distinción prepara la diferencia entre una base como conjunto de vectores y una base ordenada usada para coordenadas.

Los cuantificadores dicen cuánto abarca una afirmación. $\forall x\in A$ significa «para cada elemento de A»; $\exists x\in A$ significa «hay al menos uno». Negar «todos cumplen P» exige encontrar uno que no cumpla P. Para refutar una afirmación universal basta un contraejemplo; muchos ejemplos favorables no la demuestran.

$$A\cap B=\{x\in A:x\in B\},\qquad A\setminus B=\{x\in A:x\notin B\}.$$

La unión reúne los elementos de ambos conjuntos. El conjunto potencia $\mathcal P(A)$ contiene todos los subconjuntos de A. Si A tiene n elementos, tiene $2^n$ subconjuntos: cada elemento puede incluirse o excluirse. Usaremos $\subseteq$ para inclusión no estricta; los apuntes también emplean $\subset$ con ese significado.

El producto cartesiano $A\times B$ es el conjunto de pares ordenados $(a,b)$ con $a\in A,b\in B$. Para conjuntos finitos, su cardinal es $|A||B|$. Una relación sobre A es un subconjunto de $A\times A$. Un orden estricto es irreflexivo y transitivo; si compara todos los elementos distintos, es total. En un conjunto ordenado, una cota superior de un subconjunto no vacío S es un elemento del conjunto mayor o igual que todos los de S.
''',r'''Sean $A=\{0,1,2\}$ y $B=\{2,3\}$. Entonces $A\cap B=\{2\}$, $A\cup B=\{0,1,2,3\}$ y $A\setminus B=\{0,1\}$. Hay $3\cdot2=6$ pares en $A\times B$. El conjunto $\{1,1,2\}$ tiene dos elementos; la tupla $(1,1,2)$ tiene tres componentes.''','No confundas A menos B como diferencia de conjuntos con el conjunto de diferencias numéricas a−b. Tampoco confundas ∅ con {∅}.','¿Cómo negarías «para todo x existe un y con P(x,y)»?',r'''La negación es $\exists x\,\forall y\,\neg P(x,y)$. Se intercambia cada cuantificador y se niega la propiedad; el orden de cuantificadores se conserva.''')
L('1-2','Funciones y familias indexadas',[21,24],'Identificar dominio, imagen e inversa, y comprender un vector como familia.',r'''
Una función $f:X\to Y$ asigna a cada elemento de X exactamente un elemento de Y. El dominio es X; el codominio es Y; el recorrido $f(X)$ puede ser menor que Y. Es inyectiva si no identifica dos entradas distintas, sobreyectiva si alcanza todo Y y biyectiva si cumple ambas condiciones.

$$f\text{ inyectiva}\iff\big(f(x)=f(x')\Rightarrow x=x'\big).$$

La preimagen $f^{-1}(B)=\{x\in X:f(x)\in B\}$ existe como conjunto para cualquier $B\subseteq Y$. Una función inversa sobre todo Y solo existe si f es biyectiva. La misma notación no convierte una preimagen en una función inversa.

Una familia $(u_i)_{i\in I}$ es una función que asigna un valor a cada índice. El conjunto de todas las funciones de I a K se escribe $K^I$. Si I tiene n posiciones, puedes pensar en $K^n$. Dos índices distintos pueden tener el mismo valor: se conserva la información de posición. Esta es la puerta de entrada a vectores, matrices y tensores.

Componer funciones significa aplicar primero la de la derecha: $(g\circ f)(x)=g(f(x))$, siempre que los dominios permitan la operación. Una operación binaria interna en X es una función $X\times X\to X$; la división no está definida cuando el divisor es cero.
''',r'''Para $f:\mathbb R\to\mathbb R$, $f(x)=x^2$, el recorrido es $[0,\infty)$. No es inyectiva porque $f(2)=f(-2)$. La preimagen de $\{4\}$ es $\{-2,2\}$. Si restringimos dominio y codominio a $[0,\infty)$, sí es biyectiva y su inversa es $\sqrt{x}$.''','No decidas si una función es biyectiva mirando solo su fórmula: dominio y codominio forman parte de la pregunta.','¿Por qué (7,7) y el conjunto {7} contienen información diferente?',proof=r'''La tupla $(7,7)$ tiene dos componentes, y la posición de cada una forma parte del dato: el primer 7 ocupa la primera posición y el segundo ocupa la segunda. El conjunto $\{7\}$ tiene un solo elemento, porque un conjunto no conserva ni la posición ni la multiplicidad: $\{7,7\}=\{7\}$. Dos datos que difieren en su estructura no pueden representar la misma información aunque compartan algún valor.''')
L('1-3','Naturales, enteros y bases de numeración',[24,35],'Convertir representaciones posicionales y explicar cuándo termina una fracción.',r'''
En este curso $0\in\mathbb N$. La suma y el producto son internos en naturales; para restar sin restricciones necesitamos enteros. Para dividir por cualquier número no nulo necesitamos racionales. Un cuerpo permite sumar, restar, multiplicar y dividir por no nulos con las leyes habituales. $\mathbb Q,\mathbb R,\mathbb C$ son cuerpos; $\mathbb Z$ no lo es.

En un sistema posicional de base entera $b\ge2$, cada posición pesa una potencia de b. Las cifras son enteros entre 0 y b−1. La coma separa potencias no negativas de negativas.

$$ (d_m\cdots d_0.d_{-1}\cdots)_b=\sum_k d_k b^k.$$

Para pasar un entero no negativo de decimal a base b, divide sucesivamente entre b y lee los restos en orden inverso. Para la parte fraccionaria, multiplica repetidamente por b: cada parte entera obtenida es la cifra siguiente. El procedimiento puede no terminar.

Una fracción irreducible $p/q$ tiene representación finita en base b exactamente cuando $q$ divide alguna potencia de b. En decimal esto exige que q solo contenga factores primos 2 y 5; en binario, solo 2. Si no termina, el desarrollo racional es eventualmente periódico: al dividir solo hay finitos restos posibles, por lo que un resto se repite y el periodo comienza tras un prefijo inicial, que puede ser vacío. Los racionales son numerables; los reales no lo son.
''',r'''$(101101)_2=32+8+4+1=45$. Para $3/8$, las multiplicaciones por 2 producen 0, luego 1, luego 1: $3/8=(0.011)_2$. En cambio $1/10$ no tiene desarrollo binario finito porque su denominador reducido contiene el primo 5.''','Un número no cambia de valor al cambiar de base. Es su escritura la que cambia. No trates 0,1 decimal como exactamente representable en binario.','¿En qué bases enteras tiene 1/6 una escritura finita?',r'''Se necesita que los primos 2 y 3 dividan a b, es decir, que b sea múltiplo de 6. Entonces alguna potencia de b es divisible por 6.''')
L('1-4','Reales, precisión y redondeo',[36,41],'Cuantificar error y separar exactitud matemática de aritmética finita.',r'''
Los reales completan los racionales: todo subconjunto real no vacío y acotado superiormente tiene supremo, la menor de sus cotas superiores. No todos los reales son fracciones; $\sqrt2$ es irracional. Los decimales finitos son aproximaciones útiles, pero no sustituyen un argumento exacto.

Si $\widehat x$ aproxima x, el error absoluto es $|\widehat x-x|$. Para $x\ne0$, el relativo es $|\widehat x-x|/|x|$. El error relativo no se define con denominador cero; cerca de cero interesa una tolerancia absoluta.

Al redondear a d decimales al valor más cercano, el error absoluto es como máximo $\tfrac12 10^{-d}$. En los empates usaremos redondeo al par: se elige el vecino cuya última cifra conservada sea par. No es lo mismo conservar d decimales que d cifras significativas, que empiezan en la primera cifra no nula.

La representación de punto flotante retiene un número limitado de cifras significativas. Puede perderse una cantidad pequeña al sumarla a una grande, y restar cantidades muy próximas puede destruir precisión relativa. Por ello la asociatividad exacta de la suma no garantiza la misma salida para dos órdenes de cálculo en una máquina.

En ejercicios conserva fracciones y radicales hasta el último paso. Una calculadora confirma plausibilidad, pero no demuestra identidades. En Python, el contexto de Decimal controla cifras significativas; quantize permite fijar una escala decimal. Esta distinción evita confundir precisión con número de decimales.
''',r'''Al redondear $2.345$ a dos decimales al par resulta $2.34$; $2.355$ da $2.36$. Son empates exactos en decimal. Aproximar $1/3$ por $0.33$ da error absoluto $1/300$ y relativo $1/100=1\%$.''','No apliques redondeo al par a un decimal que ya sea una aproximación de otro número y esperes necesariamente el mismo empate.','¿Qué es más informativo para aproximar cero: error absoluto o relativo?',proof=r'''El error relativo no está definido cuando x=0, porque dividiría por cero; ahí el error absoluto es la única medida disponible. Además, el error relativo escala con el tamaño del número: un error absoluto de $0{,}01$ es enorme al aproximar $0{,}1$ (error relativo del 10 %) y es irrelevante al aproximar $1000$ (error relativo del $0{,}001$). Por eso, para valores del orden de la unidad o menores se razona con error absoluto, y para magnitudes grandes se prefiere el relativo.''')
L('1-5','Aritmética y geometría de los complejos',[41,47],'Operar con conjugados y representar módulo y argumento sin errores de cuadrante.',r'''
Un complejo se escribe $z=a+bi$, con $a,b\in\mathbb R$ e $i^2=-1$. Se representa por el punto (a,b) del plano. Sumar complejos suma componentes; multiplicarlos combina escala y giro. El conjugado $\bar z=a-bi$ refleja el punto respecto del eje real.

$$|z|=\sqrt{a^2+b^2},\qquad z\bar z=|z|^2,\qquad \frac zw=\frac{z\bar w}{|w|^2}\quad(w\ne0).$$

El módulo es una longitud real no negativa. Cumple $|zw|=|z||w|$ y $|z+w|\le|z|+|w|$. Un argumento de z no nulo es cualquier ángulo que apunta en su dirección; todos difieren en múltiplos enteros de $2\pi$. Como en los apuntes, usaremos argumento principal en $[-\pi,\pi)$. La convención alternativa $(-\pi,\pi]$ cambia únicamente el valor elegido sobre el eje real negativo. El cero no tiene argumento.

No basta calcular una arcotangente de b/a: hay que decidir el cuadrante, y a puede ser cero. En programación, atan2(b,a) resuelve ese problema. En complejos no existe un orden de cuerpo compatible con suma y producto como en los reales: el cuadrado de un no nulo tendría que ser positivo, pero $i^2=-1$.
''',r'''Para $z=-1+i\sqrt3$, el módulo es 2 y el argumento principal $2\pi/3$. Para dividir, $\frac{2+i}{1-i}=\frac{(2+i)(1+i)}2=\frac12+\frac32i$. Verifica multiplicando el resultado por $1-i$.''','La conjugación cambia el signo de la parte imaginaria, no el signo de todo el número. El módulo de un complejo nunca es un complejo no real.','¿Qué ocurre con el argumento al conjugar un complejo no nulo?',proof=r'''Si $z=re^{i\theta}$ con $r>0$, entonces $\bar z=re^{-i\theta}$, porque conjugar cambia el signo de la parte imaginaria y deja intacta la real. Así el módulo no cambia, $|\bar z|=|z|=r$, y el argumento se transforma en $-\theta$: el conjugado es el reflejo respecto del eje real. En la convención principal $[-\pi,\pi)$, si $\theta$ está en $(0,\pi)$ el argumento de $\bar z$ es $-\theta$, y si $\theta$ está en $(-\pi,0)$ también es $-\theta$; los casos $\theta=0$ y $\theta=\pi$ dan el mismo valor en ambos.''')
L('1-6','Exponencial, raíces y polinomios',[47,54],'Obtener todas las raíces complejas y contar multiplicidades.',r'''
La fórmula de Euler conecta giro y exponencial: $e^{i\theta}=\cos\theta+i\sin\theta$. Así, $z=re^{i\theta}$ para z no nulo. Multiplicar suma ángulos y multiplica módulos; elevar a una potencia entera multiplica el ángulo. Para potencias negativas necesitamos z no nulo.

Si se introduce la exponencial mediante serie, comienza en cero: $e^z=\sum_{n=0}^{\infty}z^n/n!$. En particular $e^0=1$. La serie converge para todo z complejo. No se debe omitir el término constante.

Para resolver $w^n=z=re^{i\theta}\ne0$, con n entero positivo, iguala módulos y recuerda todas las vueltas posibles del ángulo:

$$w_k=r^{1/n}\exp\!\left(i\frac{\theta+2k\pi}{n}\right),\quad k=0,\ldots,n-1.$$

Son n raíces distintas colocadas en un polígono regular. Si z=0, la única raíz como valor es 0. El teorema fundamental del álgebra garantiza que todo polinomio complejo no constante tiene una raíz; al dividir por su factor lineal y repetir, tiene exactamente tantas raíces como su grado, contando multiplicidades. No significa que todas sean diferentes ni que puedan escribirse siempre con radicales.

Con coeficientes reales, una raíz no real aparece junto a su conjugada y con la misma multiplicidad. Esto permite agrupar factores lineales complejos en cuadráticos reales. Para comprobar una factorización, expándela y verifica grado, coeficiente principal y término independiente.
''',r'''Resolver $w^3=8$ da $w=2$, $w=-1+i\sqrt3$ y $w=-1-i\sqrt3$. El polinomio $p(z)=(z-2)^2(z^2+1)$ tiene grado 4: raíz 2 doble y raíces i, −i simples. Hay tres valores distintos y cuatro raíces contando multiplicidad.''','La raíz principal es una elección de una raíz. No es el conjunto completo de soluciones de wⁿ=z.','¿Por qué las raíces no reales de un polinomio real aparecen por parejas?',r'''Si p tiene coeficientes reales, $p(\bar z)=\overline{p(z)}$. Si $p(z)=0$, su conjugado también anula p. El mismo argumento aplicado a los factores conserva la multiplicidad.''')

topic(2,'Tensores, matrices y vectores','Dar estructura a los datos',[55,118],['Reconocer subespacios y construir bases.','Operar con tensores respetando sus dimensiones.','Cambiar de coordenadas y proyectar ortogonalmente.'],[
['Base',r'Una base es generadora y linealmente independiente; las coordenadas respecto de una base ordenada son únicas.'],['Producto',r'$(AB)_{ij}=\sum_k a_{ik}b_{kj}$; verifica dimensiones antes de calcular.'],['Adjunta',r'$A^*=\overline A^{\mathsf T}$ y $(AB)^*=B^*A^*$.'],['Coordenadas',r'$x=B[x]_B$ si B tiene como columnas los vectores de la base.'],['Proyección',r'$P=QQ^*$ si las columnas de Q son ortonormales; $P^2=P=P^*$.']
],[['Estructura lineal',['2-1','2-2']],['Datos indexados',['2-3','2-4']],['Cambios reversibles',['2-5']],['Geometría',['2-6','2-7','2-8']]])
L('2-1','Espacios vectoriales y subespacios',[55,64],'Decidir si una colección es un espacio lineal y construir su generado.',r'''
En $K^I$, sumar familias y multiplicarlas por escalares se hace componente a componente. La estructura cumple las leyes usuales de suma y distribución. Un espacio vectorial abstracto conserva esas leyes aunque sus elementos sean polinomios, funciones o matrices. El cuerpo de escalares forma parte de la definición: $\mathbb C$ tiene dimensión 1 sobre $\mathbb C$, pero dimensión 2 sobre $\mathbb R$.

Un subconjunto S es subespacio si contiene al vector cero y es cerrado para combinaciones lineales de dos elementos:

$$u,v\in S,\ \alpha,\beta\in K\ \Rightarrow\ \alpha u+\beta v\in S.$$

Exigir que no sea vacío es esencial: el vacío no es subespacio. El espacio generado por B consiste en todas las combinaciones lineales FINITAS de elementos de B. Si B tiene muchos elementos, no basta sumar dos múltiplos.

La intersección de subespacios es subespacio. La suma $U+W=\{u+w:u\in U,w\in W\}$ es el menor subespacio que contiene a ambos. En dimensión finita, $\dim(U+W)=\dim U+\dim W-\dim(U\cap W)$. La suma es directa cuando la intersección es cero; entonces cada descomposición es única.

Para un conjunto de índices infinito, los vectores canónicos generan las familias de soporte finito, no todas las familias de $K^I$. No extrapoles sin cuidado la intuición de $K^n$ al caso infinito.
''',r'''$S=\{(x,y,z):x+y-z=0\}$ es subespacio: contiene cero y su ecuación homogénea se conserva al combinar soluciones. Como $(x,y,z)=x(1,0,1)+y(0,1,1)$, esos dos vectores lo generan. En cambio $x+y-z=1$ define un plano afín que no contiene cero.''','Una recta que no pasa por el origen no es subespacio. La unión de dos subespacios tampoco lo es en general.','Da un contraejemplo a que la unión de dos subespacios sea siempre subespacio.',proof=r'''Toma $U=\operatorname{span}\{e_1\}$ y $V=\operatorname{span}\{e_2\}$ en $\mathbb R^2$. Ambos son subespacios, pero su unión no lo es: $(1,0)\in U$ y $(0,1)\in V$, mientras que su suma $(1,1)$ no pertenece ni a $U$ ni a $V$, de modo que $U\cup V$ no es cerrado para sumas. La razón es que la unión no es una combinación lineal de subespacios: la suma de dos elementos que vienen de subespacios distintos puede salirse de ambos.''')
L('2-2','Independencia, bases y dimensión',[56,64],'Encontrar coordenadas y justificar por qué son únicas.',r'''
Una familia $v_1,\ldots,v_k$ es linealmente independiente si la igualdad $\sum_j a_jv_j=0$ obliga a que todos los coeficientes sean cero. Si hay una combinación no trivial que da cero, alguno de los vectores sobra para generar el mismo espacio.

Una base reúne dos requisitos: genera todo el espacio y es independiente. El teorema de la base garantiza que en dimensión finita todas las bases tienen el mismo número de vectores, la dimensión. Una familia independiente puede completarse a una base y de una generadora puede extraerse una base.

En un espacio de dimensión n, cualquier familia de más de n vectores es dependiente. Una familia de exactamente n vectores es base si es independiente, o equivalentemente si genera. Con menos de n vectores no puede generar todo el espacio.

Las coordenadas dependen de una base ordenada. Cambiar el orden cambia la tupla de coeficientes, pero no el vector representado. Para hallar coordenadas, escribe una combinación con coeficientes desconocidos e iguala componentes. El mismo procedimiento funciona con polinomios igualando coeficientes de cada potencia.
''',r'''En $\mathbb R^2$, $b_1=(1,1)$ y $b_2=(1,-1)$ forman una base. Resolver $(3,1)=a b_1+b b_2$ equivale a $a+b=3$, $a-b=1$, de donde $[x]_B=(2,1)$. Para $\mathbb R_2[t]$, la base $(1,t,t^2)$ tiene dimensión 3, no 2.''','No confundir número de componentes con número de vectores de una familia. La familia que contiene el vector cero es dependiente.','¿Por qué dos listas de coordenadas no pueden representar el mismo vector en una misma base ordenada?',r'''Si $\sum a_jb_j=\sum c_jb_j$, al restar queda $\sum(a_j-c_j)b_j=0$. La independencia de la base obliga a $a_j=c_j$ para cada j.''')
L('2-3','Tensores, ejes y matrices especiales',[64,83],'Leer formato, índices y operaciones de trasposición.',r'''
En el enfoque computacional de los apuntes, un tensor es un contenedor de escalares con varios índices. Su formato describe la longitud de cada eje. Una matriz tiene dos ejes: filas y columnas. Un tensor de formato $2\times3\times4$ tiene 24 entradas. El número de ejes no es el rango matricial ni el rango tensorial.

Especificar el orden de los ejes es esencial: permutar ejes cambia qué posición designa cada componente. Trasponer una matriz intercambia filas y columnas, $(A^{\mathsf T})_{ij}=a_{ji}$. La adjunta además conjuga:

$$A^*=\overline A^{\mathsf T}.$$

Sobre los reales ambas coinciden; sobre complejos no. Usaremos el asterisco para evitar confusiones con la notación de los apuntes. Una matriz real simétrica cumple $A^{\mathsf T}=A$; una hermítica cumple $A^*=A$. Una diagonal tiene ceros fuera de la diagonal; una triangular superior, por debajo. Una identidad tiene unos en la diagonal y ceros fuera.

Las matrices por bloques se leen como tablas de submatrices. Dentro de cada fila de bloques todas deben tener la misma altura y dentro de cada columna, la misma anchura. Una matriz de permutación reordena coordenadas y tiene una unidad en cada fila y columna. Una matriz normal satisface $AA^*=A^*A$; hermíticas y unitarias son normales, pero no son las únicas.
''',r'''Para $A=\begin{pmatrix}1&i\\2&3\end{pmatrix}$, $A^{\mathsf T}=\begin{pmatrix}1&2\\i&3\end{pmatrix}$ y $A^*=\begin{pmatrix}1&2\\-i&3\end{pmatrix}$. Permutar los ejes 1 y 3 de un tensor $2\times3\times4$ produce formato $4\times3\times2$, conservando 24 entradas.''','Una lista de listas puede parecer una matriz, pero las filas deben tener la misma longitud. No toda matriz cuadrada es simétrica.','¿Qué diferencia hay entre número de ejes y rango de una matriz?',proof=r'''El número de ejes es parte del FORMATO: dice cuántas listas de entradas se indexan y cómo se recorre el contenedor. El rango es un número que depende del CONTENIDO: la dimensión de la imagen de la aplicación que define la matriz. Una matriz 3×4 tiene dos ejes y su rango puede ser 1, 2 o 3; nada de eso lo deduce el formato. Además, un tensor 2×3×4 tiene tres ejes y su rango tensorial es otra magnitud, la dimensión de su espacio de tensores, que no es el rango de ninguna de sus matrices.''')
L('2-4','Producto matricial y contracción',[83,97],'Entender el producto como suma sobre un índice compartido.',r'''
Para sumar matrices deben tener igual formato. Para multiplicar $A\in K^{m\times n}$ por $B\in K^{n\times p}$ deben coincidir las dimensiones interiores; el resultado es $m\times p$. Cada entrada combina una fila de A con una columna de B:

$$(AB)_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}.$$

El índice k se contrae: aparece en los dos factores y se suma, desapareciendo del resultado. La misma idea permite contraer ejes en tensores de más dimensiones. Las dimensiones de los ejes contraídos deben coincidir. La multiplicación elemento a elemento es otra operación y no sustituye al producto matricial.

El producto es asociativo y distributivo, pero no conmutativo. Puede ocurrir AB=0 con ambos factores no nulos. Las columnas de AB son A aplicada a las columnas de B, de modo que el producto representa composición: primero B y después A.

La multiplicación por bloques obedece la misma regla si los tamaños son compatibles. Al trasponer o adjuntar un producto se invierte el orden: $(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}$ y $(AB)^*=B^*A^*$. Una matriz unitaria satisface $Q^*Q=QQ^*=I$; una matriz real de ese tipo se llama ortogonal.
''',r'''$A=\begin{pmatrix}1&2\\0&1\end{pmatrix}$ y $B=\begin{pmatrix}2&0\\1&3\end{pmatrix}$ dan $AB=\begin{pmatrix}4&6\\1&3\end{pmatrix}$ y $BA=\begin{pmatrix}2&4\\1&5\end{pmatrix}$. La entrada (1,2) de AB es $1\cdot0+2\cdot3=6$.''','No multipliques posiciones iguales cuando el enunciado pide AB. Escribe primero los formatos de ambos factores.','¿Por qué la adjunta de AB invierte el orden de los factores?',proof=r'''La adjunta es la composición de la trasposición con la conjugación, y ambas operaciones invierten el orden del producto: $(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}$ porque el índice que se suma pasa de ser el segundo de A a ser el primero de B, y análogamente la conjugación conmutaba con la suma. De ahí $(AB)^*=B^*A^*$. En efecto, si A es m×n y B es n×p, entonces B* es p×n y A* es n×m, de modo que B*A* es p×m, el mismo formato que (AB)*.''')
L('2-5','Inversa y cambio de base',[97,104],'Deshacer una transformación y orientar correctamente una matriz de cambio.',r'''
Para una matriz cuadrada, una inversa es una matriz $A^{-1}$ con $AA^{-1}=A^{-1}A=I$. Existe exactamente cuando las columnas de A forman una base. Una matriz rectangular puede tener inversa por un lado, pero no una inversa bilateral de este tipo.

Para calcular una inversa puedes reducir por filas la matriz aumentada $[A\mid I]$ hasta $[I\mid A^{-1}]$. Las mismas operaciones deben afectar a ambos bloques. En dimensión dos:

$$\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1}=\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix},\quad ad-bc\ne0.$$

Para matrices invertibles, $(AB)^{-1}=B^{-1}A^{-1}$. La forma más rápida de comprobar una supuesta inversa es multiplicar y obtener I. En cálculo numérico suele preferirse resolver un sistema antes que construir explícitamente la inversa.

Si B contiene como columnas una base ordenada en coordenadas canónicas, $x=B[x]_B$ y $[x]_B=B^{-1}x$. Si C es otra base, $[x]_C=C^{-1}B[x]_B$. No memorices la dirección: encadena «coordenadas en B → vector → coordenadas en C».
''',r'''Con $B=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, $B^{-1}=\tfrac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}$. Para $x=(3,1)$ obtienes $(2,1)$ en B. Al reconstruir, $B(2,1)^{\mathsf T}=(3,1)^{\mathsf T}$.''','No confundir el vector con sus coordenadas. Una matriz de cambio sin indicar base de salida y de llegada es ambigua.','¿Cómo comprobarías una matriz de cambio sin volver a calcular su inversa?',proof=r'''Para comprobar una matriz de cambio C que lleva coordenadas de B a coordenadas de C, basta verificar que reconstruye el vector: si las columnas de B son los vectores de la base, debe cumplirse $B\,C^{-1}[x]_C=x$ para todo x, o equivalentemente $BC^{-1}=I$ y por tanto $C=B$. En la práctica basta un vector: si $C\,c$ reproduce $x$ para un x no nulo, la matriz es correcta; y siempre es prudente multiplicar por la inversa y comprobar que se recupera la identidad.''')
L('2-6','Producto escalar, normas y ángulos',[104,110],'Medir distancias y usar correctamente conjugación y desigualdades.',r'''
Adoptamos $\langle u,v\rangle=u^*v$: conjugamos la primera entrada. Es lineal en la segunda y conjugado-lineal en la primera. En reales se reduce a la suma de productos de componentes.

$$\|u\|_2=\sqrt{u^*u},\qquad d(u,v)=\|u-v\|_2.$$

El cuadrado de la norma suma módulos al cuadrado, por lo que nunca es negativo. La desigualdad de Cauchy–Schwarz es $|u^*v|\le\|u\|\|v\|$, con igualdad cuando son dependientes. Para vectores reales no nulos, el ángulo usual satisface $\cos\theta=(u^{\mathsf T}v)/(\|u\|\|v\|)$. Esta fórmula de ángulo real no se traslada sin cambios al producto complejo.

Dos vectores son ortogonales si su producto escalar es cero. Para ellos vale Pitágoras, $\|u+v\|^2=\|u\|^2+\|v\|^2$. Ortonormal significa además norma uno. También hay otras normas, como $\|x\|_1=\sum|x_i|$ y $\|x\|_\infty=\max|x_i|$; las expresiones $\ell^p$ son normas para $p\ge1$.
''',r'''Para $u=(1,i)$, $u^*u=1+(-i)i=2$ y $\|u\|=\sqrt2$. En cambio $u^{\mathsf T}u=1+i^2=0$: por eso hace falta conjugar. Para u=(1,1), v=(1,−1), el producto real es cero y ambos tienen norma $\sqrt2$.''','El vector cero es ortogonal a todos, pero no puede normalizarse ni tener ángulo definido.','¿Cuándo se alcanza la igualdad en Cauchy–Schwarz?',proof=r'''La igualdad $|u^*v|=\|u\|\|v\|$ se alcanza exactamente cuando u y v son linealmente dependientes, es decir, cuando $v=\lambda u$ con $\lambda\in\mathbb C$. En efecto, si $v=\lambda u$ entonces $u^*v=\lambda\,u^*u$ y $|u^*v|=|\lambda|\,\|u\|^2=\|u\|\|\lambda u\|=\|u\|\|v\|$. Recíprocamente, la igualdad en la desigualdad de Cauchy–Schwarz obliga a que el residuo $v-\frac{u^*v}{u^*u}u$ tenga norma nula, y ese residuo es cero solo si v es múltiplo de u.''')
L('2-7','Gram–Schmidt y bases ortonormales',[110,113],'Eliminar componentes repetidas sin dividir por cero.',r'''
Gram–Schmidt convierte una familia independiente en una familia ortonormal que genera el mismo espacio. La idea es quitar a cada nuevo vector las direcciones ya explicadas, y normalizar lo que queda.

$$w_k=v_k-\sum_{j<k}q_j(q_j^*v_k),\qquad q_k=\frac{w_k}{\|w_k\|}.$$

Si la familia original es dependiente, algún residuo es cero: se descarta, no se divide por su norma. Cada vector retenido aporta una dirección nueva. La normalización no cambia el subespacio generado.

Al terminar, comprueba $Q^*Q=I$ para la matriz Q de columnas obtenidas. Verifica además que los vectores originales están en el espacio generado. Comprobar solo que cada vector tiene norma uno no demuestra ortogonalidad.

En aritmética finita, cuando los vectores son casi dependientes, el procedimiento clásico puede perder ortogonalidad. Gram–Schmidt modificado, Householder o reortogonalización son alternativas prácticas. Para el razonamiento manual usamos cálculo exacto y comprobamos productos escalares.
''',r'''Con $v_1=(1,1,0)$, $v_2=(1,0,1)$, $q_1=(1,1,0)/\sqrt2$. El coeficiente $q_1^{\mathsf T}v_2=1/\sqrt2$ deja $w_2=(1/2,-1/2,1)$. Su norma es $\sqrt6/2$, así que $q_2=(1,-1,2)/\sqrt6$. El producto $q_1^{\mathsf T}q_2$ vale cero.''','No restes v₁ completo: resta su proyección con el coeficiente adecuado. Si trabajas con vectores ortogonales sin normalizar, divide por su norma al cuadrado.','¿Qué significa geométricamente que un residuo sea cero?',r'''Para cada i<k, $q_i^*w_k=q_i^*v_k-\sum_{j<k}(q_i^*q_j)(q_j^*v_k)=0$. La ortonormalidad anula todos los sumandos salvo j=i, que cancela el primer término.''')
L('2-8','Complemento y proyección ortogonal',[112,118],'Encontrar el punto más cercano de un subespacio.',r'''
El complemento ortogonal $S^\perp$ contiene los vectores ortogonales a todos los de S. En dimensión finita con producto escalar, cada vector se descompone de forma única como $b=p+r$, con $p\in S$ y $r\in S^\perp$. El vector p es la proyección de b sobre S.

Si Q tiene columnas ortonormales que forman una base de S:

$$p=QQ^*b,\qquad P=QQ^*,\qquad P^*=P,\quad P^2=P.$$

Si las columnas de B son independientes pero no ortonormales, $P=B(B^*B)^{-1}B^*$. La independencia es necesaria para esa inversa. En rango deficiente se utiliza una base independiente o la pseudoinversa.

La proyección minimiza la distancia a S. Para cualquier $s\in S$, los vectores $b-p$ y $p-s$ son ortogonales, por lo que $\|b-s\|^2=\|b-p\|^2+\|p-s\|^2$. El mínimo se alcanza exactamente en s=p. Esta idea reaparecerá en mínimos cuadrados.

Las matrices unitarias conservan productos escalares y distancias. Una proyección ortogonal generalmente no conserva longitudes: elimina la componente perpendicular. No confundas ambos tipos de transformación.
''',r'''Proyecta b=(3,1) sobre la recta generada por u=(1,1). El coeficiente es $(u^{\mathsf T}b)/(u^{\mathsf T}u)=4/2=2$. Así p=(2,2), r=(1,−1), y la distancia es $\sqrt2$. La matriz es $P=\tfrac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$.''','La proyección es un vector; el coeficiente respecto de u es un escalar. Son respuestas distintas.','¿Cómo comprobarías una proyección con dos condiciones geométricas?',proof=r'''Son dos condiciones: la proyección p debe pertenecer a S, y el residuo b−p debe ser perpendicular a S. En la práctica se verifican así: (1) p es combinación lineal de los vectores que generan S; (2) $(b-p)^{\mathsf T}u=0$ para cada vector u de la base de S. Con la matriz P=QQ* basta comprobar además que $P^*=P$ y $P^2=P$, es decir, que P es una proyección ortogonal.''')

topic(3,'Aplicaciones lineales y multilineales','Lo que una matriz hace',[119,152],['Representar aplicaciones y distinguir linealidad de multilinealidad.','Interpretar determinante, rango y núcleo.','Estudiar autovectores y formas cuadráticas.'],[
['Linealidad',r'$f(\alpha u+\beta v)=\alpha f(u)+\beta f(v)$. Las columnas de su matriz son las imágenes de la base.'],['Determinante',r'$\det(AB)=\det A\det B$; invertir es posible si y solo si $\det A\ne0$.'],['Dimensiones',r'Para $A\in K^{m\times n}$, $\dim\ker A+\operatorname{rg}A=n$.'],['Autovectores',r'$Av=\lambda v$ con $v\ne0$; $\ker(A-\lambda I)$ es el autoespacio.'],['Formas',r'$q(x)=x^{\mathsf T}Sx$ sobre ℝ, con S simétrica; en ℂ se emplea $x^*Hx$ con H hermítica.']
],[['Transformar',['3-1']],['Medir y resolver',['3-2','3-3']],['Direcciones invariantes',['3-4']],['Geometría cuadrática',['3-5']]])
L('3-1','Matrices como aplicaciones',[119,125],'Construir la matriz de una aplicación a partir de imágenes de la base.',r'''
Una aplicación lineal respeta combinaciones: $f(\alpha u+\beta v)=\alpha f(u)+\beta f(v)$. En particular f(0)=0, aunque esta condición sola no basta. Para comprobar linealidad necesitas las dos propiedades o una expresión matricial válida.

Si conocemos las imágenes de una base, conocemos toda la aplicación. Para $x=\sum x_j e_j$, la linealidad da $f(x)=\sum x_jf(e_j)$. Por eso la columna j de la matriz es $f(e_j)$. Si el dominio tiene dimensión n y el codominio m, la matriz tiene m filas y n columnas.

Para bases B del dominio y C del codominio, $[f(x)]_C=M[x]_B$. Si A representa f en bases canónicas, entonces $M=C^{-1}AB$, donde B y C contienen las bases como columnas. La composición de aplicaciones corresponde al producto de matrices, en el mismo orden funcional.

Una aplicación multilineal es lineal en cada entrada al mantener fijas las restantes. Una forma bilineal real tiene expresión $b(u,v)=u^{\mathsf T}Av$. No suele ser lineal en el par considerado como un único vector: escalar ambas entradas por t multiplica el resultado por $t^2$. Sobre complejos, $u^*Av$ es sesquilineal, conjugado-lineal en u y lineal en v.

Un tensor de tres índices puede representar una aplicación bilineal con salida vectorial: $w_k=\sum_{i,j}T_{kij}u_i v_j$. De nuevo se contraen los índices repetidos y quedan libres los de la salida.
''',r'''Para $f(x,y,z)=(x+2y,y-z)$, las imágenes de los vectores canónicos son (1,0), (2,1), (0,−1). Luego $A=\begin{pmatrix}1&2&0\\0&1&-1\end{pmatrix}$. En cambio $g(x,y)=(x+1,y)$ no es lineal: g(0,0)=(1,0).''','Las imágenes de los vectores de la base van en columnas, no en filas.','¿Es b(x,y)=xy lineal en el par (x,y)? ¿Es bilineal?',proof=r'''La bilinealidad exige $b(\alpha u+\beta v, w)=\alpha b(u,w)+\beta b(v,w)$ y lo mismo en la segunda variable; con $b(x,y)=xy$ en el sentido de producto por coordenadas, la primera igualdad es $(\alpha x_1+\beta y_1)(\alpha x_2+\beta y_2)=\alpha x_1x_2+\beta y_1y_2$, que es falsa: el producto introduce el término cruzado $\alpha\beta$. En cambio sí es bilineal, porque el producto por coordenadas reparte: $b(\alpha u,v)=\alpha b(u,v)$ y $b(u,\beta v)=\beta b(u,v)$. Por eso $b(x,y)=xy$ no es lineal en el par: escalar ambas entradas por t multiplica el resultado por $t^2$, no por t.''')
L('3-2','Determinantes y volumen',[125,136],'Calcular determinantes con operaciones justificadas y leer su significado geométrico.',r'''
El determinante de una matriz cuadrada es una función multilineal alternada de sus columnas, normalizada por $\det I=1$. Cambiar dos columnas cambia el signo; si hay columnas iguales o dependientes vale cero. Las propiedades equivalentes por filas permiten simplificar cálculos.

Sumar a una fila un múltiplo de otra no cambia el determinante; multiplicar una fila por c lo multiplica por c; intercambiar dos filas cambia su signo. Para una triangular es el producto de la diagonal. El desarrollo por una fila usa cofactores $C_{ij}=(-1)^{i+j}\det A_{ij}$, donde se elimina fila i y columna j.

$$\det(AB)=\det A\det B,\quad \det A^{\mathsf T}=\det A,\quad \det(cA)=c^n\det A.$$

La última fórmula es para matrices n×n: se escala cada una de sus n columnas. Una matriz es invertible exactamente cuando su determinante no es cero. Sobre ℂ el determinante puede ser complejo; $\det A^*=\overline{\det A}$.

En $\mathbb R^n$, el valor absoluto mide el factor de volumen. En dimensión dos, el signo distingue si se conserva o invierte la orientación. El área de un triángulo formado por dos aristas es la mitad del valor absoluto de su determinante; el volumen de un tetraedro es la sexta parte. Para k vectores en dimensión mayor, el volumen del paralelepípedo es $\sqrt{\det(V^{\mathsf T}V)}$.
''',r'''Para $A=\begin{pmatrix}2&1&0\\0&3&4\\0&0&-1\end{pmatrix}$, $\det A=-6$. En el plano, las aristas u=(2,1), v=(1,3) forman un paralelogramo de área $|6-1|=5$ y un triángulo de área 5/2.''','La regla de Sarrus solo corresponde a 3×3. No existe det(A+B)=det A+det B en general.','¿Qué cambia en el determinante si multiplicas toda una matriz 3×3 por 2?',r'''Cada una de sus tres columnas se multiplica por 2; la multilinealidad da el factor $2^3=8$.''')
L('3-3','Los cuatro subespacios fundamentales',[136,138],'Relacionar núcleo, imagen y rango con las dimensiones correctas.',r'''
Para $A\in K^{m\times n}$, la imagen o espacio columna es $\{Ax:x\in K^n\}\subseteq K^m$. El núcleo es $\{x:Ax=0\}\subseteq K^n$. El rango r es la dimensión de la imagen y también del espacio columna de $A^*$, llamado espacio fila. Ese espacio fila está generado por las filas conjugadas de A: sobre ℝ coincide con el generado por las filas, pero sobre ℂ las columnas de $A^*$ son las conjugadas de las filas de A, no las filas mismas.

$$\dim\ker A=n-r,\qquad\dim\ker A^*=m-r.$$

Los cuatro espacios están en dos espacios ambientales diferentes: $\ker A$ y $\operatorname{col}(A^*)$ viven en $K^n$; $\ker A^*$ y $\operatorname{col}(A)$, en $K^m$. Se emparejan por ortogonalidad:

$$\ker A=\operatorname{col}(A^*)^\perp,\qquad\ker A^*=\operatorname{col}(A)^\perp.$$

El teorema rango–nulidad expresa que las direcciones que una aplicación colapsa más las que conserva independientemente suman la dimensión del dominio. Inyectividad equivale a núcleo cero; sobreyectividad, a rango m. Para una cuadrada, ambas equivalen a invertibilidad.

Si una matriz cuadrada se aplica varias veces, los núcleos $\ker A\subseteq\ker A^2\subseteq\cdots$ pueden crecer hasta estabilizarse. Su unión es el núcleo generalizado; en dimensión n basta llegar a $\ker A^n$. Esta cadena prepara los bloques de Jordan.
''',r'''Para $A=\begin{pmatrix}1&2&3\\0&1&1\end{pmatrix}$ el rango es 2. Resolver Ax=0 da y=−z y x=−z, luego $\ker A=\operatorname{span}\{(-1,-1,1)\}$. El núcleo tiene dimensión 1, la imagen es $\mathbb R^2$ y $\ker A^{\mathsf T}=\{0\}$.''','Al reducir filas, usa las columnas pivote de la matriz ORIGINAL para una base de su imagen. Las columnas de la reducida pueden generar otro subespacio.','¿Puede una aplicación de ℝ³ a ℝ² ser inyectiva?',r'''No: su rango es a lo sumo 2, por lo que la nulidad es al menos $3-2=1$.''')
L('3-4','Autovalores y vectores generalizados',[138,144],'Encontrar direcciones invariantes y distinguir multiplicidades.',r'''
Un autovector es un vector no nulo cuya dirección se conserva: $Av=\lambda v$. El autovalor indica el factor de escala, que puede ser complejo. Los autovalores se obtienen de $\det(A-\lambda I)=0$. Para cada uno, resuelve el sistema homogéneo $(A-\lambda I)v=0$.

El autoespacio $E_\lambda=\ker(A-\lambda I)$ sí contiene el cero, aunque el cero no sea autovector. La multiplicidad algebraica cuenta la raíz en el polinomio característico; la geométrica es $\dim E_\lambda$. Para cada autovalor, $1\le m_g\le m_a$.

Los autovectores asociados a autovalores distintos son independientes. No necesitas que sean ortogonales salvo hipótesis adicionales. La traza es la suma de autovalores y el determinante su producto, contados con multiplicidad sobre ℂ: son comprobaciones útiles, no sustituyen resolver los autoespacios.

Un autovector generalizado para λ satisface $(A-\lambda I)^kv=0$ para algún k≥1, con v no nulo. Los vectores de orden mayor describen direcciones que no son propias pero desembocan en ellas al aplicar A−λI. La diagonalización y Jordan organizarán esta información.
''',r'''Para $A=\begin{pmatrix}2&1\\0&2\end{pmatrix}$, λ=2 tiene multiplicidad algebraica 2, pero $E_2=\operatorname{span}\{(1,0)\}$ tiene dimensión 1. El vector e₂ es generalizado: $(A-2I)e_2=e_1$ y $(A-2I)^2e_2=0$.''','No entregar el vector cero como autovector. Un autovalor repetido no implica automáticamente que la matriz no sea diagonalizable.','¿Cuántos autovectores independientes exige diagonalizar una matriz n×n?',proof=r'''Para diagonalizar una matriz n×n hacen falta n autovectores linealmente independientes, que es lo mismo que decir que el autoespacio total tiene dimensión n. La razón es que la diagonalización $A=PDP^{-1}$ lleva la base canónica a una base de autovectores, y toda base tiene n elementos. Como los autoespacios de autovalores distintos son independientes entre sí, basta con que la suma de sus dimensiones sea n. En particular, un autovalor con multiplicidad algebraica 2 exige un autoespacio de dimensión 2 para que la diagonalización sea posible.''')
L('3-5','Formas bilineales, cuadráticas y métricas',[144,152],'Traducir un polinomio cuadrático a matriz y clasificar su signo.',r'''
Sobre los reales, una forma bilineal se representa por $b(u,v)=u^{\mathsf T}Av$. Es simétrica cuando A lo es. La forma cuadrática asociada es $q(x)=x^{\mathsf T}Ax$ y solo depende de la parte simétrica $S=(A+A^{\mathsf T})/2$: la parte antisimétrica aporta cero.

Al convertir un polinomio a una matriz simétrica, divide los coeficientes cruzados entre dos. En dos variables:

$$ax^2+2bxy+cy^2=\begin{pmatrix}x&y\end{pmatrix}\begin{pmatrix}a&b\\b&c\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}.$$

La forma es definida positiva si q(x)>0 para todo x no nulo; semidefinida positiva si q(x)≥0 para todo x. Es indefinida si toma valores positivos y negativos. La versión negativa invierte las desigualdades. La forma nula es semidefinida de ambos signos.

En complejos, la forma hermítica $x^*Hx$ es real cuando $H^*=H$. Si H es definida positiva, $\langle u,v\rangle_H=u^*Hv$ define un producto escalar. Cambiar coordenadas mediante x=Cy transforma la matriz por congruencia, $H\mapsto C^*HC$, no por similitud.

Completar cuadrados es un método de clasificación que no requiere calcular autovalores. Los ceros de una forma indefinida no forman necesariamente un subespacio: en $x^2-y^2=0$ aparecen dos rectas. En el tema V sistematizaremos estas observaciones con inercia y criterio de Sylvester.
''',r'''$q(x,y)=2x^2+4xy+5y^2=2(x+y)^2+3y^2$ es definida positiva: si ambos cuadrados se anulan, y=0 y x=0. Su matriz es $\begin{pmatrix}2&2\\2&5\end{pmatrix}$, no una matriz con 4 fuera de la diagonal.''','Verificar q en unos pocos vectores no demuestra positividad para todos. Para refutarla sí basta un vector no nulo con q≤0.','¿Por qué la parte antisimétrica no contribuye a xᵀAx?',r'''Si $K^{\mathsf T}=-K$, el escalar s=xᵀKx cumple $s=s^{\mathsf T}=x^{\mathsf T}K^{\mathsf T}x=-s$, de donde s=0 sobre ℝ.''')

topic(4,'Procesos de triangulación','Resolver, factorizar, aproximar',[153,180],['Resolver y discutir sistemas con parámetros.','Verificar PLU y QR con su convención.','Interpretar mínimos cuadrados y Schur.'],[
['Compatibilidad',r'$Ax=b$ tiene solución si y solo si $\operatorname{rg}A=\operatorname{rg}[A|b]$.'],['Gauss',r'Pivotes + variables libres; si es compatible, $x=x_0+z$ con $z\in\ker A$.'],['PLU',r'Usamos $PA=LU$, equivalente a $A=P^{\mathsf T}LU$; compara siempre la convención.'],['QR',r'$A=QR$, $Q^*Q=I$; para columnas LI, R es cuadrada invertible en la QR reducida.'],['Mínimos cuadrados',r'$A^*(Ax-b)=0$. Todas las soluciones: $A^+b+\ker A$.'],['Schur',r'Toda matriz compleja cuadrada admite $A=QTQ^*$ con Q unitaria y T triangular superior.']
],[['Eliminar',['4-1','4-2']],['Ortogonalizar',['4-3']],['Aproximar',['4-4']],['Triangularizar por similitud',['4-5']]])
L('4-1','Gauss, pivotes y Rouché–Frobenius',[153,164],'Resolver un sistema y describir todas sus soluciones.',r'''
Escribe el sistema como Ax=b y trabaja con la matriz aumentada [A|b]. Intercambiar filas, multiplicar una fila por un escalar no nulo o sumar a una fila un múltiplo de otra conserva el conjunto de soluciones. Un pivote permite eliminar las entradas de su columna por debajo y, en Gauss–Jordan, también por encima.

Al terminar, una fila con ceros en A y término independiente no nulo representa una contradicción. El teorema de Rouché–Frobenius resume el criterio:

$$Ax=b\text{ compatible}\iff\operatorname{rg}A=\operatorname{rg}[A|b].$$

Si el sistema es compatible y el rango r coincide con el número n de incógnitas, hay una solución. Si r<n, hay n−r variables libres. Asigna parámetros a esas variables y expresa las pivote mediante ellas. En un sistema homogéneo nunca aparece incompatibilidad: cero siempre es solución.

Para discutir un parámetro, no dividas por una expresión que pueda anularse sin separar ese caso. El rango genérico puede cambiar precisamente en esos valores. En sistemas triangulares se usa sustitución regresiva o progresiva; siempre se empieza por la ecuación que contiene una sola incógnita pendiente.

La solución general compatible es $x=x_0+\ker A$: si Ax₀=b, sumar un vector del núcleo no altera b. Esto permite comprobar tanto la parte particular como cada dirección libre.
''',r'''El sistema x+y+z=2, 2x+2y+2z=4, y−z=0 tiene rango 2 y tres incógnitas. Tomando z=t, obtenemos y=t y x=2−2t: $x=(2,0,0)+t(-2,1,1)$. Sustituye para comprobarlo. Si el segundo término independiente fuera 5, aparecería la contradicción 0=1.''','Número de ecuaciones no equivale a rango: algunas pueden ser redundantes.','¿Por qué la diferencia de dos soluciones de Ax=b pertenece al núcleo?',proof=r'''Si x y x' son soluciones, entonces $A(x-x')=Ax-Ax'=b-b=0$, así que $x-x'\in\ker A$. Recíprocamente, si $Ax_0=b$ y $z\in\ker A$, entonces $A(x_0+z)=Ax_0+Az=b+0=b$, de modo que todas las soluciones se obtienen sumando al vector nulo las direcciones del núcleo: $x=x_0+\ker A$. Por eso, en un sistema compatible con r<n, el conjunto de soluciones es una recta afín: un punto particular más las direcciones libres.''')
L('4-2','La factorización PLU',[164,170],'Guardar la eliminación para resolver varios sistemas con la misma matriz.',r'''
La eliminación gaussiana no solo resuelve un sistema: factoriza su matriz. U guarda el resultado triangular; L, triangular inferior con diagonal unitaria, guarda los multiplicadores; P recoge los intercambios de filas.

Aquí fijamos la convención $PA=LU$, equivalente a $A=P^{\mathsf T}LU$. Los apuntes escriben también A=PLU con la permutación inversa. Ambas son correctas si se define P de manera coherente. No cambies una convención a mitad del cálculo.

En cada paso, el multiplicador para eliminar aᵢₖ es aᵢₖ/aₖₖ, usando los valores actualizados. Se resta ese múltiplo de la fila pivote. Si se intercambian filas en un paso posterior, también se intercambian en L los multiplicadores ya calculados de esas filas.

Para Ax=b, calcula Pb; resuelve Ly=Pb por sustitución progresiva y después Ux=y por regresiva. Para una matriz invertible, los pivotes finales son no nulos. Reutilizar los factores resulta mucho más eficiente que repetir toda la eliminación para cada nuevo b.

El pivoteo parcial elige un elemento de gran módulo en la columna activa para reducir amplificación de errores. La igualdad matricial PA=LU sigue siendo la prueba decisiva de que los factores son correctos.
''',r'''$A=\begin{pmatrix}2&1\\4&3\end{pmatrix}=\begin{pmatrix}1&0\\2&1\end{pmatrix}\begin{pmatrix}2&1\\0&1\end{pmatrix}$. No hace falta permutar. Con b=(3,7), Ly=b da y=(3,1); Ux=y da x=(1,1).''','L no contiene los números negativos usados para restar filas, sino los multiplicadores positivos o negativos antes de esa resta.','¿Qué dos sistemas resuelves después de calcular PA=LU?',proof=r'''Con la convención PA=LU, los dos sistemas que se resuelven son $Ax=b$ y $Ax=b'$ para dos segundos miembros distintos con la misma matriz A. En ambos casos se empieza por $Ly=Pb$, se sigue con $Ux=y$, y las operaciones ya realizadas (la eliminación) se reutilizan: solo cambia la sustitución hacia adelante. Con la convención alternativa A=PLU, el punto de partida es $Ly=b$ y el primer paso es $Ux=z$ con $z=P^{\mathsf T}b$. En cualquiera de las dos convenciones, la matriz de coeficientes se factoriza una sola vez.''')
L('4-3','QR: de Gram–Schmidt a Householder',[170,175],'Construir y comprobar una factorización ortogonal y triangular.',r'''
Para $A\in K^{m\times n}$ con m≥n y columnas independientes, Gram–Schmidt aplicado a sus columnas produce una QR reducida: Q es m×n con columnas ortonormales y R es n×n triangular superior e invertible. Los coeficientes son $r_{ij}=q_i^*a_j$ para i≤j.

$$A=QR,\qquad Q^*Q=I_n,\qquad R=Q^*A.$$

La QR completa añade columnas ortonormales a Q hasta formar una matriz m×m; R pasa a tener m filas con un bloque inferior nulo. Con rango deficiente, algunos residuos de Gram–Schmidt son cero y hay que completar o usar una factorización adaptada al rango. No afirmes unicidad ni diagonal estrictamente positiva sin columnas independientes.

Con esas hipótesis y diagonal real positiva en R, la QR reducida es única. Los signos o fases pueden redistribuirse entre Q y R si no se impone esa convención: cambiar el signo de una columna de Q exige cambiar el signo de la fila correspondiente de R.

Una reflexión de Householder $H=I-2vv^*/(v^*v)$, con v no nulo, es hermítica y unitaria. Se elige v para eliminar varias entradas de una columna de una vez. Los algoritmos basados en estas reflexiones suelen conservar mejor la ortogonalidad numérica que Gram–Schmidt clásico.
''',r'''Para $A=\begin{pmatrix}1&1\\1&0\\0&1\end{pmatrix}$, toma $q_1=(1,1,0)/\sqrt2$, $q_2=(1,-1,2)/\sqrt6$. Entonces $R=\begin{pmatrix}\sqrt2&1/\sqrt2\\0&\sqrt6/2\end{pmatrix}$. Multiplicar QR reconstruye las dos columnas de A.''','En la QR reducida rectangular, Q*Q=I pero QQ* es una proyección y generalmente no la identidad.','¿Qué ocurre con R al cambiar el signo de una columna de Q?',proof=r'''Si se cambia el signo de la columna j de Q, la igualdad A=QR obliga a cambiar el mismo signo en la fila j de R: en efecto, $QD(DR)=(QD)(DR)$ porque $D^2=I$, de modo que $QD\,(DR)=QR=A$. Es decir, los signos se pueden redistribuir libremente entre Q y R mientras el producto no cambie. Por eso, sin imponer que la diagonal de R sea positiva, la QR no es única: hay una familia de factorizaciones relacionadas por estas redistribuciones de signos o fases.''')
L('4-4','Mínimos cuadrados y solución de norma mínima',[175,179],'Separar mejor ajuste, unicidad y norma mínima.',r'''
Un sistema sobredeterminado puede no tener solución exacta. Mínimos cuadrados busca x que minimice $\|Ax-b\|_2$. El mejor vector Ax es la proyección de b sobre la imagen de A, por lo que el residuo debe ser ortogonal a cada columna de A:

$$A^*(Ax-b)=0.$$

Estas son las ecuaciones normales. Si las columnas de A son independientes, A*A es invertible y el minimizador es único. En ese caso también puedes usar una QR reducida y resolver $Rx=Q^*b$. Esta vía evita formar A*A, que puede empeorar el condicionamiento.

Si A tiene núcleo no trivial, el vector ajustado Ax sigue siendo único, pero x no: todas las soluciones de mínimos cuadrados son $A^+b+z$ con $z\in\ker A$. La pseudoinversa elige la de menor norma, ortogonal al núcleo. No confundir la unicidad de la proyección con la de los coeficientes.

En regresión lineal, las columnas de A son las características y b las observaciones. Añadir una columna de unos permite ajustar un término independiente. La calidad del ajuste se evalúa por el residuo, y no por que los coeficientes sean grandes o pequeños.
''',r'''Ajusta y≈α+βt a los puntos (0,1),(1,2),(2,2). $A^TA=\begin{pmatrix}3&3\\3&5\end{pmatrix}$ y $A^Tb=(5,6)$. Resolver da α=7/6 y β=1/2. El residuo b−Ax=(−1/6,1/3,−1/6) suma cero y su producto con (0,1,2) también: es ortogonal a las dos columnas.''','Un residual no nulo no invalida mínimos cuadrados. Lo que debe ser cero es su producto con las columnas de A.','¿Cuándo es único el vector de coeficientes que minimiza el error?',proof=r'''El vector de coeficientes es único exactamente cuando las columnas de A son linealmente independientes, es decir, cuando el rango de A es igual al número de columnas. En ese caso A*A es invertible y el sistema de ecuaciones normales tiene una única solución. Si A tiene columnas dependientes, el conjunto de minimizadores es un subespacio esférico: todos los de la forma $x_0+z$ con $z\in\ker A$, y hay infinitos. Lo que sigue siendo único es el vector ajustado $Ax$, que es la proyección de b sobre la imagen de A.''')
L('4-5','La triangularización de Schur',[179,180],'Entender una triangularización que existe incluso sin diagonalización.',r'''
Toda matriz cuadrada compleja admite una descomposición $A=QTQ^*$ con Q unitaria y T triangular superior. Esta es una similitud unitaria: los autovalores de A aparecen en la diagonal de T, con multiplicidad.

No exige que A tenga una base de autovectores. Las entradas por encima de la diagonal permiten conservar la información que impide diagonalizar. Sobre los reales, una matriz real admite Schur real con bloques 1×1 y 2×2 en forma cuasitriangular; los bloques 2×2 acomodan parejas conjugadas no reales.

La idea de la demostración compleja es elegir un autovector unitario q₁ y completarlo a base ortonormal. En esa base, la primera columna tiene λ en la primera entrada y ceros debajo. Se aplica el mismo argumento al bloque restante, por inducción en la dimensión.

No confundas Schur con QR. QR expresa un producto de una matriz ortogonal o unitaria y una triangular; Schur cambia de base en un endomorfismo. Un algoritmo iterativo QR puede aproximar Schur, pero una sola QR no es una factorización de Schur.
''',r'''$A=\begin{pmatrix}2&1\\0&2\end{pmatrix}$ ya está en forma de Schur: Q=I y T=A. No es diagonalizable, pues solo tiene una dirección propia. La rotación real $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ tiene autovalores i y −i, por lo que no puede ser semejante a una triangular real con diagonal real.''','Triangularizable sobre ℂ no significa diagonalizable. Tampoco significa triangularizable sobre ℝ para cualquier matriz real.','¿Cómo leerías el determinante y la traza a partir de T?',proof=r'''Como T es triangular superior, su determinante es el producto de los elementos de la diagonal: $\det A=\det(Q)\det(T)\det(Q^*)=\det T$, porque el determinante de una unitaria tiene módulo 1. Por la misma razón, la traza es invariante por semejanza, de modo que $\operatorname{tr}A=\operatorname{tr}T$, y T tiene en su diagonal los autovalores de A, con multiplicidad. Así el polinomio característico se lee directamente en la diagonal de T.''')

topic(5,'Procesos de diagonalización','Encontrar las direcciones esenciales',[181,206],['Distinguir similitud de congruencia.','Construir LDU, espectral y Jordan bajo sus hipótesis.','Usar SVD y pseudoinversa para aproximar datos.'],[
['Similitud',r'$A=PDP^{-1}$ requiere una base de autovectores.'],['Congruencia',r'$S\mapsto C^*SC$ conserva inercia hermítica, no todos los autovalores.'],['Espectral',r'Una hermítica es diagonalizable unitariamente con autovalores reales; una simétrica real, ortogonalmente.'],['Jordan',r'En una cadena, $(A-\lambda I)v_{j+1}=v_j$.'],['SVD',r'$A=U\Sigma V^*$ para cualquier matriz; $\sigma_j=\sqrt{\lambda_j(A^*A)}$.'],['Pseudoinversa',r'$A^+=V\Sigma^+U^*$; invertir solo los valores singulares positivos.']
],[['Dos tipos de cambio',['5-1']],['Factorizar formas',['5-2','5-3','5-4']],['No diagonalizable',['5-5']],['Matrices rectangulares',['5-6','5-7']]])
L('5-1','Similitud, congruencia y diagonalización',[181,183],'Elegir el cambio de base adecuado para una aplicación o una forma.',r'''
Un endomorfismo cambia de matriz por similitud: $A'=P^{-1}AP$. Entrada y salida representan el mismo espacio y cambian con la misma base. Dos matrices semejantes tienen igual polinomio característico, traza, determinante y autovalores.

Una forma cambia por congruencia: $S'=C^*SC$ en el caso hermítico, o $C^{\mathsf T}SC$ en el real. Las dos entradas de la forma se transforman y por eso aparece una adjunta, no una inversa. La congruencia conserva rango e inercia, pero no los valores concretos de los autovalores.

Diagonalizar por similitud significa encontrar una base de autovectores. Al colocar esos vectores como columnas de P y sus autovalores en el mismo orden en D, $AP=PD$ y por tanto $A=PDP^{-1}$. La suma de dimensiones de autoespacios debe ser n.

Sobre un cuerpo donde el polinomio característico se descompone, la condición equivalente es igualdad de multiplicidades geométrica y algebraica para cada autovalor. Tener n autovalores distintos es suficiente, pero no necesario. Una matriz escalar ya es diagonal aunque todos sus autovalores coincidan.
''',r'''Para $A=\begin{pmatrix}3&1\\0&2\end{pmatrix}$, toma autovectores (1,0) para 3 y (−1,1) para 2. Con $P=\begin{pmatrix}1&-1\\0&1\end{pmatrix}$ y D=diag(3,2) se verifica AP=PD. En cambio, I es congruente a diag(4,1) usando C=diag(2,1), pero no semejante a ella.''','La columna j de P y la entrada j de D deben corresponder al mismo autovalor.','¿Por qué una matriz con un autovalor repetido puede seguir siendo diagonalizable?',proof=r'''La multiplicidad algebraica cuenta cuántas veces λ aparece como raíz del polinomio característico, y la multiplicidad geométrica es la dimensión del autoespacio. La diagonalización es posible exactamente cuando ambas coinciden para todo autovalor, porque hace falta un autovector independiente por cada copia de λ. Que λ se repita en la diagonal no lo impide: la matriz 2I tiene el autovalor 2 con multiplicidad algebraica 2 y con autoespacio de dimensión 2, y por tanto es diagonal (ya lo está). Lo que rompe la diagonalización no es la repetición, sino que el autoespacio sea más pequeño que la multiplicidad.''')
L('5-2','LDU, LDL* y Cholesky',[183,186],'Extraer escalas de la eliminación y factorizar matrices positivas.',r'''
Si una eliminación sin intercambio produce $A=LV$ con pivotes no nulos y L triangular inferior con diagonal de unos, separa la diagonal de V. Toma D=diag(v₁₁,…,vₙₙ) y $U=D^{-1}V$; entonces $A=LDU$ y U tiene diagonal de unos. D contiene los pivotes, no sus inversos.

Cuando A es hermítica y la eliminación adecuada existe sin pivotes nulos, aparece $A=LDL^*$. Si además es definida positiva, los pivotes de D son positivos y puedes absorber sus raíces en L:

$$A=CC^*,\qquad C=L D^{1/2}.$$

Esta es Cholesky. Para una real simétrica definida positiva se escribe $A=CC^{\mathsf T}$; C triangular inferior con diagonal positiva es única. Para semidefinidas existen factores con posibles ceros, pero el algoritmo simple que divide por todos los pivotes necesita tratamiento especial. No extiendas sin aviso la unicidad de la diagonal positiva al caso singular.

En una matriz indefinida pueden ser necesarios intercambios o bloques 2×2 en D. El ejemplo $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ es invertible pero comienza con pivote cero: ser invertible no garantiza una LU sin pivoteo con todos los pivotes apropiados.
''',r'''$A=\begin{pmatrix}4&2\\2&3\end{pmatrix}$ tiene $L=\begin{pmatrix}1&0\\1/2&1\end{pmatrix}$, D=diag(4,2). Su Cholesky es $C=\begin{pmatrix}2&0\\1&\sqrt2\end{pmatrix}$. Multiplicar CCᵀ da entradas 4,2,2,3.''','En Cholesky, las raíces deben tomarse de cantidades positivas si A es definida positiva. Un radicando negativo no se arregla cambiando el signo arbitrariamente.','¿Qué condición adicional a invertibilidad evita los pivotes nulos en LU sin permutaciones?',proof=r'''Además de ser invertible, hace falta que todos los menores principales líderes sean no nulos: los pivotes de la eliminación sin intercambio son exactamente esos determinantes. Si alguno se anula, el paso correspondiente no puede dividir, y la descomposición $A=LU$ con L de diagonal unitaria y U triangular no existe. Para una matriz 2×2 la condición es $a_{11}\ne0$; en general, que ningún menor principal líder (las esquinas superiores izquierdas) sea cero. Con permutación de filas, PA=LU siempre es posible.''')
L('5-3','Teorema espectral y raíz matricial',[186,189],'Diagonalizar conservando longitudes y justificar realidad de autovalores.',r'''
Toda matriz hermítica admite $A=QDQ^*$ con Q unitaria y D diagonal real. Si A es real simétrica, Q puede ser real ortogonal. Los autoespacios de autovalores distintos son ortogonales; dentro de un autoespacio repetido podemos ortonormalizar.

Más generalmente, una matriz compleja es diagonalizable unitariamente si y solo si es normal. Una matriz real normal puede necesitar vectores complejos: una rotación no trivial es normal, pero sus autovalores pueden no ser reales. Para diagonalización ortogonal real, la simetría es la condición pertinente.

Para calcular una función polinómica de A, actúa sobre la diagonal: $p(A)=Qp(D)Q^*$. Si A es semidefinida positiva, su raíz hermítica semidefinida positiva es $A^{1/2}=Q\operatorname{diag}(\sqrt{\lambda_i})Q^*$. Si algún autovalor es cero, esa raíz no es definida positiva.

¿Por qué los autovalores hermíticos son reales? Si Av=λv con v no nulo, $v^*Av=\lambda v^*v$ y el lado izquierdo es real; al dividir por la norma al cuadrado resulta λ real. La simetría es una hipótesis poderosa, no una propiedad automática de todas las matrices.
''',r'''Para $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$, $q_1=(1,1)/\sqrt2$ y $q_2=(1,-1)/\sqrt2$ tienen autovalores 3 y 1. Así $A^k=Q\operatorname{diag}(3^k,1)Q^{\mathsf T}$ y $A^{1/2}=Q\operatorname{diag}(\sqrt3,1)Q^{\mathsf T}$.''','No normalices por separado vectores que no son ortogonales y afirmes que Q es ortogonal.','¿Cómo se demuestra que autoespacios de autovalores hermíticos distintos son ortogonales?',r'''Si Au=λu y Av=μv, con λ y μ reales, $u^*Av=\mu u^*v$ y también $(Au)^*v=\lambda u^*v$. Como A=A*, ambas coinciden; $(\mu-\lambda)u^*v=0$, y si λ≠μ el producto es cero.''')
L('5-4','Inercia y definitud',[189,196],'Clasificar una forma sin confundir menores líderes y principales.',r'''
La inercia de una matriz hermítica registra sus números de autovalores positivos, negativos y nulos. La ley de inercia de Sylvester afirma que estos números no cambian por congruencia invertible. Una forma puede llevarse a una suma de cuadrados positivos, negativos y variables ausentes.

Una hermítica es definida positiva exactamente cuando todos sus autovalores son positivos; semidefinida positiva cuando son no negativos. Es indefinida si aparecen signos positivos y negativos. Un autovalor cero por sí solo no decide el signo de los demás.

El criterio de Sylvester para positividad estricta exige que TODOS los menores principales líderes sean positivos: determinantes de las esquinas superiores izquierdas de tamaños 1,…,n. Para negatividad estricta, sus signos alternan empezando por negativo.

Para semidefinitud positiva, no basta que los líderes sean no negativos: se necesitan todos los menores principales no negativos, o comprobar directamente el espectro. Un menor principal usa el mismo subconjunto de índices para filas y columnas, no necesariamente consecutivos.

Completar cuadrados proporciona una congruencia explícita. Se puede conocer la inercia sin resolver un polinomio característico complicado, porque lo que importa son los signos de los cuadrados tras un cambio invertible.
''',r'''$S=\begin{pmatrix}2&2\\2&5\end{pmatrix}$ tiene menores líderes 2 y 6: es definida positiva. En cambio diag(0,−1) tiene líderes 0 y 0, ambos no negativos, pero q(0,1)=−1. Este contraejemplo muestra por qué el test debilitado de líderes falla para semidefinitud.''','Determinante positivo no implica definida positiva: diag(−1,−1) tiene determinante 1 y es definida negativa.','¿Cuál es la inercia de diag(4,−2,0,7)?',proof=r'''La inercia cuenta, en ese orden, el número de autovalores positivos, el de negativos y el de nulos. Para $\operatorname{diag}(4,-2,0,7)$ los autovalores son 4, −2, 0 y 7: hay dos positivos (4 y 7), uno negativo (−2) y uno nulo (0). La inercia es, por tanto, $(2,1,1)$. La ley de inercia de Sylvester garantiza que esta terna no cambia por congruencia invertible, de modo que describe la forma y no solo la matriz.''')
L('5-5','Forma de Jordan y cadenas',[196,201],'Describir matrices que no tienen suficientes autovectores.',r'''
Sobre ℂ, toda matriz cuadrada es semejante a una matriz de Jordan. Cada bloque tiene λ en la diagonal, unos en la superdiagonal y ceros restantes. El bloque de tamaño uno es ya diagonal. Una matriz es diagonalizable si y solo si todos sus bloques tienen tamaño uno.

Una cadena de longitud k cumple $(A-\lambda I)v_1=0$ y $(A-\lambda I)v_{j+1}=v_j$. Al ordenar las columnas de P como v₁,…,vₖ, se obtiene AP=PJ. El orden inverso cambia la posición de los unos y no corresponde a la convención elegida.

La multiplicidad algebraica de λ es la suma de tamaños de sus bloques; la geométrica es el número de bloques. Si $d_k=\dim\ker(A-\lambda I)^k$ y d₀=0, la diferencia dₖ−dₖ₋₁ cuenta cuántos bloques tienen tamaño al menos k. La cadena de núcleos permite reconstruir tamaños sin adivinar.

Dentro de un bloque, $J=\lambda I+N$ con N nilpotente. Para enteros m≥0, el binomio permite calcular potencias, truncando cuando $N^k=0$. Jordan es valioso para teoría, pero sensible a perturbaciones; en cálculo numérico suele preferirse Schur.
''',r'''$A=\begin{pmatrix}2&1&0\\0&2&1\\0&0&2\end{pmatrix}$ tiene una cadena e₁,e₂,e₃. Para N=A−2I, las nulidades de N,N²,N³ son 1,2,3: un único bloque de tamaño 3. $A^2=4I+4N+N^2=\begin{pmatrix}4&4&1\\0&4&4\\0&0&4\end{pmatrix}$.''','Tener tres veces λ en la diagonal no determina los tamaños de bloques. Necesitas información de los núcleos.','¿Qué tamaños de bloques corresponden a nulidades 2,3,4 para un único autovalor de multiplicidad 4?',proof=r'''Con d₀=0, las diferencias son d₁−d₀=2, d₂−d₁=1 y d₃−d₂=1. Cada diferencia dₖ−dₖ₋₁ cuenta cuántos bloques tienen tamaño al menos k. Así hay 2 bloques de tamaño ≥1, 1 bloque de tamaño ≥2 y ninguno de tamaño ≥3, o sea, ningún bloque de tamaño 3. Por tanto hay un bloque de tamaño 2 y otro de tamaño 1, que suman la multiplicidad 4. En general, el número de bloques de tamaño exactamente k es $(d_k-d_{k-1})-(d_{k+1}-d_k)$.''')
L('5-6','Descomposición en valores singulares',[201,204],'Separar rotaciones, escalas y pérdida de dimensión incluso en matrices rectangulares.',r'''
Para cualquier $A\in K^{m\times n}$ existe una SVD $A=U\Sigma V^*$, con U y V unitarias y Σ rectangular diagonal con entradas no negativas ordenadas. Los valores singulares positivos son las raíces cuadradas de los autovalores positivos de A*A, es decir $\sigma_i=\sqrt{\lambda_i}$, y su número es el rango.

Si $A^*Av_i=\sigma_i^2v_i$ y σᵢ>0, define $u_i=Av_i/\sigma_i$. Los vᵢ ortonormales producen uᵢ ortonormales. Completa las bases de ambos espacios para obtener la SVD completa. No dividas por un valor singular cero: esas direcciones requieren completar núcleos.

La SVD reducida al rango conserva solo los r valores positivos: $A=\sum_{i=1}^r\sigma_i u_i v_i^*$. V* cambia a las direcciones de entrada, Σ escala o anula, y U orienta la salida. A diferencia de la diagonalización, sirve para matrices rectangulares y no exige normalidad.

Los signos o fases de pares uᵢ,vᵢ pueden cambiar coordinadamente sin alterar A. Si hay valores singulares repetidos, hay libertad adicional dentro del subespacio. Por eso una única lista literal de factores no es la única respuesta válida.

La aproximación truncada $A_k=\sum_{i=1}^k\sigma_i u_iv_i^*$ es una mejor aproximación de rango a lo sumo k tanto en norma espectral como de Frobenius. El error de Frobenius al cuadrado es $\sum_{i>k}\sigma_i^2$. Esto conecta directamente con compresión y representación de datos.
''',r'''Para $A=\begin{pmatrix}3&0\\0&1\\0&0\end{pmatrix}$, U=I₃, V=I₂ y Σ=A dan una SVD. Sus valores singulares son 3 y 1. La aproximación de rango 1 conserva solo el 3, y el error de Frobenius es 1. El tercer eje de salida queda fuera de la imagen.''','Los valores singulares no son los autovalores de A en general. Siempre son reales no negativos, incluso si A es compleja.','¿Por qué A*A nunca tiene autovalores negativos?',proof=r'''Para cualquier v se tiene $v^*A^*Av=(Av)^*(Av)\ge0$, porque el producto de un complejo con su conjugado es no negativo. Así $A^*A$ es hermítica y definida positiva o semidefinida, y todos sus autovalores son no negativos. Sus únicos autovalores posibles son los positivos y el cero. Por eso $\sqrt{\lambda_i}$ es siempre real, y por eso los valores singulares se pueden ordenar de mayor a menor sin ambigüedad.''')
L('5-7','Pseudoinversa y aplicaciones a datos',[204,206],'Resolver mínimos cuadrados con la solución de menor norma.',r'''
La pseudoinversa de Moore–Penrose se obtiene de la SVD intercambiando el formato de Σ e invirtiendo solo sus entradas positivas:

$$A^+=V\Sigma^+U^*.$$

Existe y es única para toda matriz. Si A es cuadrada invertible, coincide con A⁻¹. Si tiene columnas independientes, $A^+=(A^*A)^{-1}A^*$. Si tiene filas independientes, $A^+=A^*(AA^*)^{-1}$. Esas fórmulas requieren sus respectivas hipótesis de rango.

Las identidades $AA^+A=A$, $A^+AA^+=A^+$ y la hermiticidad de AA⁺ y A⁺A caracterizan la pseudoinversa. AA⁺ proyecta sobre la imagen de A; A⁺A proyecta sobre la imagen de A*. El vector $x_{min}=A^+b$ es la solución de mínimos cuadrados de menor norma. Las demás se obtienen sumando cualquier vector del núcleo.

Los valores singulares pequeños amplifican el ruido al invertirlos. Truncarlos es una forma de regularización; cambia el problema y debe declararse. El número de condición espectral de una matriz de rango completo en sus dimensiones no nulas es la razón entre su mayor y menor valor singular positivo; para inversión cuadrada, una singular tiene condición infinita.

En análisis de componentes principales se centra la matriz de datos por columnas y se buscan direcciones de variación mediante sus vectores singulares derechos. La elección del rango conserva unas direcciones y descarta otras: interpreta el error, no solo la compresión lograda.
''',r'''Si A=(1 1) y b=2, $A^+=\tfrac12(1,1)^{\mathsf T}$ y xₘᵢₙ=(1,1). Todas las soluciones exactas son (1+t,1−t); su norma al cuadrado es $2+2t^2$, mínima para t=0. Para A=diag(4,0), la pseudoinversa es diag(1/4,0), sin dividir por cero.''','No inviertas valores singulares nulos. Un ajuste de residuo mínimo puede tener muchos vectores de coeficientes; la pseudoinversa selecciona uno.','¿Qué proyección representa AA⁺ y en qué espacio actúa?',proof=r'''$AA^+$ es la proyección ortogonal sobre la imagen de A: toma cualquier b, le quita la componente perpendicular a $\operatorname{im}A$ y conserva la que está en ella. En efecto, $AA^+$ es hermítica y $(AA^+)^2=AA^+$, que son exactamente las condiciones de una proyección ortogonal, y además $AA^+A=A$, lo que garantiza que reproduce cualquier vector de la imagen. Análogamente, $A^+A$ proyecta sobre la imagen de $A^*$, que es el espacio fila.''')

# Ampliaciones solicitadas por auditoría curricular independiente.
by={l['id']:l for t in T for l in t['lessons']}
by['1-4']['body']+=r'''

La notación científica escribe un real no nulo como $x=s\,10^k$, con $1\le |s|<10$ y k entero. Las cifras significativas empiezan en la primera cifra no nula: $0.004560$ tiene cuatro, mientras su escritura $4.560\cdot10^{-3}$ hace explícita la precisión declarada. Redondear a tres cifras significativas da $4.56\cdot10^{-3}$; redondear ese mismo número a tres decimales da $0.005$. Son operaciones diferentes.

Como modelo didáctico binario, una mantisa de cuatro cifras en $1.101_2\cdot2^3$ representa exactamente 13. El número $1.1011_2\cdot2^3=13.5$ queda entre 13 y 14; al redondear a cuatro cifras al par se elige 14. Este modelo no especifica un formato IEEE real: solo muestra que precisión de mantisa y error dependen de la escala.
'''
by['2-3']['body']+=r'''

Un tensor cuadrado es simétrico si intercambiar cualesquiera dos ejes deja sus componentes iguales. Es antisimétrico si cada intercambio cambia el signo. En un antisimétrico sobre ℝ o ℂ, una componente con dos índices iguales vale cero, porque es igual a su opuesta. Para dos ejes, estas propiedades son $A^{\mathsf T}=A$ y $A^{\mathsf T}=-A$; la simetría tensorial no incluye conjugación.

El tensor de Levi–Civita $\varepsilon_{ijk}$ en tres dimensiones vale +1 en permutaciones pares de (1,2,3), −1 en impares y 0 si se repite un índice. Por ejemplo $\varepsilon_{123}=1$, $\varepsilon_{213}=-1$, $\varepsilon_{112}=0$. Permite expresar productos vectoriales y determinantes por contracción de índices, y relacionar contenedores con aplicaciones multilineales.
'''
by['2-4']['example']+=r'''

Para una contracción de tres ejes, fija dos matrices $T_{1ij}=\begin{pmatrix}1&2\\0&1\end{pmatrix}$ y $T_{2ij}=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$. Con u=(1,2), v=(3,1), define $w_k=\sum_{i,j=1}^2T_{kij}u_i v_j$. El primer valor es $3+2+2=7$ y el segundo $1-6=-5$, por lo que w=(7,−5). Cada índice i,j se suma; el índice k conserva las dos componentes de salida.

En ℝ³, $(u\times v)_k=\sum_{i,j}\varepsilon_{kij}u_i v_j$. Para u=e₁ y v=e₂, solo contribuye $\varepsilon_{312}=1$ y el resultado es e₃; al intercambiarlos se obtiene −e₃.
'''
by['4-3']['body']+=r'''

En una QR adaptada al rango r de $A\in K^{m\times n}$, escribe $A=Q_rR_r$ con $Q_r\in K^{m\times r}$, columnas ortonormales que generan la imagen, y $R_r=Q_r^*A\in K^{r\times n}$. Si las columnas pivote no aparecen al principio, el patrón de pivotes de R no coincide necesariamente con una diagonal completa. El pivoteo de columnas permite ordenar las direcciones independientes antes de las dependientes.

Por ejemplo $A=\begin{pmatrix}1&2&3\\0&0&0\end{pmatrix}$ tiene rango 1. Una factorización es $Q_r=(1,0)^{\mathsf T}$ y $R_r=(1\ 2\ 3)$. El ajuste de b=(4,2) impone $x_1+2x_2+3x_3=4$. La solución de menor norma es $(2/7,4/7,6/7)$, y las demás se obtienen sumando el núcleo de A. El residuo de cualquier mejor ajuste es (0,2).
'''
# Mantener orden de temas y añadir la lección al tema III.
saved=T[-1]
T.append(T[2])
L('3-6','Cayley–Hamilton y polinomios de una matriz',[142,144],'Reducir potencias e inversas mediante el polinomio característico.',r'''
Para una matriz cuadrada A, el teorema de Cayley–Hamilton afirma que al sustituir A en su polinomio característico se obtiene la matriz cero. Una evaluación polinómica reemplaza la constante por ese múltiplo de la identidad. Si $p(t)=a_0+a_1t+\cdots+a_nt^n$, entonces $p(A)=a_0I+a_1A+\cdots+a_nA^n$.

Usamos $p(t)=\det(tI-A)$ para este teorema; los apuntes y otras lecciones calculan raíces con $\det(A-tI)$, que difiere por el factor $(-1)^n$ y por tanto tiene los mismos ceros y se anula en A igualmente.

En dos dimensiones, $p(t)=t^2-\operatorname{tr}(A)t+\det A$, por lo que $A^2-\operatorname{tr}(A)A+\det(A)I=0$. Así cualquier potencia alta se reduce a una combinación de I y A. Si det A≠0, multiplicar por A⁻¹ da una expresión para la inversa: $A^{-1}=(\operatorname{tr}(A)I-A)/\det A$.

No hace falta que A sea diagonalizable. Los bloques de Jordan también anulan el polinomio característico, y pueden necesitar factores repetidos. Una demostración general se obtiene a partir de la identidad del adjugado $(tI-A)\operatorname{adj}(tI-A)=p(t)I$, comparando coeficientes antes de evaluar el polinomio matricial. No es válido sustituir directamente t=A dentro de un determinante de entradas escalares.
''',r'''Para $A=\begin{pmatrix}3&1\\0&2\end{pmatrix}$, p(t)=(t−3)(t−2)=t²−5t+6. Entonces A²=5A−6I y A³=19A−30I. La inversa es $(5I-A)/6=\begin{pmatrix}1/3&-1/6\\0&1/2\end{pmatrix}$. Multiplicar A por esta matriz devuelve I.''','Una constante en p(A) significa a₀I, no sumar a₀ a cada entrada. No evaluar det(A−A) como si fuese el argumento del teorema.','¿Qué recurrencia permite calcular Aᵏ si sabes A²=5A−6I?',proof=r'''De $A^2=5A-6I$ se multiplica por A para obtener $A^3=5A^2-6A$, y se sustituye $A^2=5A-6I$: $A^3=5(5A-6I)-6A=19A-30I$. El procedimiento general es el mismo: cada nueva potencia se reduce a una combinación de I y A sustituyendo la anterior. Así, si $A^k=c_1A+c_0I$, entonces $A^{k+1}=c_1A^2+c_0A=c_1(5A-6I)+c_0A=(5c_1+c_0)A-6c_1I$, y los coeficientes siguen una recurrencia.''')
T.pop()
T[2]['map'].append(['Polinomios de matrices',['3-6']])
T[2]['summary'].append(['Cayley–Hamilton',r'$p(A)=0$ para el polinomio característico; permite reducir potencias sin diagonalizar.'])

# Segundos ejemplos trabajados de las lecciones más densas.
import sys
sys.path.insert(0, str(Path(__file__).resolve().parent))
from second_examples import SECOND_EXAMPLES
_by={l['id']:l for t in T for l in t['lessons']}
for _lid,_txt in SECOND_EXAMPLES.items(): _by[_lid]['example']+='\n\n'+_txt

Path('assets').mkdir(exist_ok=True)
Path('assets/content.js').write_text('window.COURSE = '+json.dumps(T,ensure_ascii=False,indent=2)+';\n')
print(len(T),'temas;',sum(len(t['lessons']) for t in T),'lecciones')
