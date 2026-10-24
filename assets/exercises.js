window.EXERCISES = [
  {
    "id": "t1-01",
    "topic": 1,
    "level": "N",
    "lesson": "1-1",
    "title": "Operar con conjuntos",
    "prompt": "$A=\\{0,2,4,6\\}$, $B=\\{2,3,6\\}$. Introduce los elementos de cada conjunto, separados por punto y coma.",
    "fields": [
      {
        "label": "A ∩ B",
        "answer": [
          2,
          6
        ],
        "kind": "set"
      },
      {
        "label": "A ∖ B",
        "answer": [
          0,
          4
        ],
        "kind": "set"
      }
    ],
    "solution": "Los comunes son 2 y 6. Al quitar de A los que están en B quedan 0 y 4. El orden de escritura no cambia el conjunto.",
    "hints": [
      "Busca primero los elementos comunes.",
      "En A∖B no añadas ningún elemento de B."
    ]
  },
  {
    "id": "t1-02",
    "topic": 1,
    "level": "N",
    "lesson": "1-1",
    "title": "Contar sin enumerar",
    "prompt": "A tiene 4 elementos y B tiene 3. Calcula los cardinales.",
    "fields": [
      {
        "label": "|A × B|",
        "answer": 12,
        "kind": "number"
      },
      {
        "label": "|𝒫(A)|",
        "answer": 16,
        "kind": "number"
      }
    ],
    "solution": "Cada uno de los 4 elementos puede emparejarse con 3: $4\\cdot3=12$. Un subconjunto decide incluir o no cada elemento: $2^4=16$.",
    "hints": [
      "Producto cartesiano: multiplica.",
      "Potencia: cada elemento tiene dos opciones."
    ]
  },
  {
    "id": "t1-03",
    "topic": 1,
    "level": "N",
    "lesson": "1-3",
    "title": "De binario a decimal",
    "prompt": "Convierte $(110101)_2$ a decimal.",
    "fields": [
      {
        "label": "Valor decimal",
        "answer": 53,
        "kind": "number"
      }
    ],
    "solution": "$32+16+4+1=53$. Las posiciones con cero no contribuyen.",
    "hints": [
      "Escribe las potencias de 2 de derecha a izquierda."
    ]
  },
  {
    "id": "t1-04",
    "topic": 1,
    "level": "N",
    "lesson": "1-3",
    "title": "Fracción en binario",
    "prompt": "¿Qué número racional representa $(0.101)_2$?",
    "fields": [
      {
        "label": "Fracción o decimal",
        "answer": 0.625,
        "kind": "number"
      }
    ],
    "solution": "$2^{-1}+2^{-3}=1/2+1/8=5/8$.",
    "hints": [
      "La primera posición tras la coma pesa 1/2."
    ]
  },
  {
    "id": "t1-05",
    "topic": 1,
    "level": "N",
    "lesson": "1-5",
    "title": "Conjugado y módulo",
    "prompt": "Para $z=3-4i$, calcula el conjugado y el módulo. Un complejo se introduce como «parte real; parte imaginaria».",
    "fields": [
      {
        "label": "Conjugado",
        "answer": [
          3,
          4
        ],
        "kind": "vector"
      },
      {
        "label": "Módulo",
        "answer": 5,
        "kind": "number"
      }
    ],
    "solution": "$\\bar z=3+4i$ y $|z|=\\sqrt{9+16}=5$.",
    "hints": [
      "Conjugar cambia solo la parte imaginaria."
    ]
  },
  {
    "id": "t1-06",
    "topic": 1,
    "level": "N",
    "lesson": "1-6",
    "title": "Un ciclo de potencias",
    "prompt": "Calcula $i^{37}$. Introduce parte real y parte imaginaria.",
    "fields": [
      {
        "label": "i³⁷",
        "answer": [
          0,
          1
        ],
        "kind": "vector"
      }
    ],
    "solution": "$37=4\\cdot9+1$ y $i^4=1$, de modo que $i^{37}=i$.",
    "hints": [
      "El ciclo de las potencias tiene longitud 4."
    ]
  },
  {
    "id": "t1-07",
    "topic": 1,
    "level": "M",
    "lesson": "1-2",
    "title": "Preimagen e inyectividad",
    "prompt": "Para $f:\\mathbb R\\to\\mathbb R$, $f(x)=(x-1)^2$, encuentra $f^{-1}(\\{9\\})$. Decide si f es inyectiva.",
    "fields": [
      {
        "label": "Preimagen",
        "answer": [
          -2,
          4
        ],
        "kind": "set"
      },
      {
        "label": "¿Inyectiva?",
        "answer": "no",
        "kind": "choice",
        "options": [
          "sí",
          "no"
        ]
      }
    ],
    "solution": "$(x-1)^2=9$ implica x−1=±3, es decir x=−2 o x=4. Dos entradas distintas con la misma imagen refutan inyectividad.",
    "hints": [
      "Despeja las dos raíces, no solo la positiva."
    ]
  },
  {
    "id": "t1-08",
    "topic": 1,
    "level": "M",
    "lesson": "1-3",
    "title": "Periodo racional",
    "prompt": "Expresa $0.\\overline{27}$ como fracción irreducible. Se acepta la fracción o un decimal equivalente.",
    "fields": [
      {
        "label": "Fracción irreducible (o su decimal)",
        "answer": 0.2727272727272727,
        "kind": "number"
      }
    ],
    "solution": "Si x=0,2727…, entonces 100x−x=27. Por tanto x=27/99=3/11, y 3/11=0,272727…",
    "hints": [
      "Multiplica por 100 para alinear el periodo."
    ]
  },
  {
    "id": "t1-09",
    "topic": 1,
    "level": "M",
    "lesson": "1-4",
    "title": "Error relativo",
    "prompt": "Aproxima $2/3$ por 0,67. Da error absoluto y relativo como números, no porcentajes.",
    "fields": [
      {
        "label": "Error absoluto",
        "answer": 0.0033333333333333335,
        "kind": "number"
      },
      {
        "label": "Error relativo",
        "answer": 0.005,
        "kind": "number"
      }
    ],
    "solution": "$|67/100-2/3|=1/300$. Al dividir entre 2/3 resulta 1/200=0,005.",
    "hints": [
      "Usa fracciones exactas antes de restar."
    ]
  },
  {
    "id": "t1-10",
    "topic": 1,
    "level": "M",
    "lesson": "1-4",
    "title": "Empate al par",
    "prompt": "Redondea los decimales exactos 4,265 y 4,275 a dos decimales, con empate al par.",
    "fields": [
      {
        "label": "4,265 redondeado",
        "answer": 4.26,
        "kind": "number"
      },
      {
        "label": "4,275 redondeado",
        "answer": 4.28,
        "kind": "number"
      }
    ],
    "solution": "Entre 4,26 y 4,27 se elige 4,26 porque 6 es par. Entre 4,27 y 4,28 se elige 4,28 porque 8 es par.",
    "hints": [
      "Comprueba la paridad de la última cifra conservada."
    ]
  },
  {
    "id": "t1-11",
    "topic": 1,
    "level": "M",
    "lesson": "1-5",
    "title": "Dividir en ℂ",
    "prompt": "Calcula $(3+2i)/(1-i)$.",
    "fields": [
      {
        "label": "Parte real; parte imaginaria",
        "answer": [
          0.5,
          2.5
        ],
        "kind": "vector"
      }
    ],
    "solution": "Multiplica por (1+i)/(1+i). El numerador es 1+5i y el denominador 2. Resultado: 1/2+(5/2)i.",
    "hints": [
      "Usa el conjugado del denominador."
    ]
  },
  {
    "id": "t1-12",
    "topic": 1,
    "level": "M",
    "lesson": "1-6",
    "title": "Potencia en forma polar",
    "prompt": "Calcula $(1+i)^8$.",
    "fields": [
      {
        "label": "Parte real; parte imaginaria",
        "answer": [
          16,
          0
        ],
        "kind": "vector"
      }
    ],
    "solution": "$1+i=\\sqrt2e^{i\\pi/4}$, luego la potencia es $16e^{2\\pi i}=16$.",
    "hints": [
      "Eleva el módulo y multiplica el argumento."
    ]
  },
  {
    "id": "t1-13",
    "topic": 1,
    "level": "G",
    "lesson": "1-3",
    "title": "Bases que terminan",
    "prompt": "Encuentra la menor base entera b≥2 en la que 1/12 tiene desarrollo finito. Justifica mediante factores primos.",
    "fields": [
      {
        "label": "Base mínima",
        "answer": 6,
        "kind": "number"
      }
    ],
    "solution": "12=2²·3. La base debe contener los primos 2 y 3, así que debe ser múltiplo de 6. La menor es 6 y $1/12=3/36=(0.03)_6$.",
    "hints": [
      "El denominador debe dividir alguna potencia de b."
    ]
  },
  {
    "id": "t1-14",
    "topic": 1,
    "level": "G",
    "lesson": "1-6",
    "title": "Todas las raíces de −16",
    "prompt": "Para $z^4=-16$, determina el módulo común y los cuatro argumentos entre 0 y 2π, expresados como coeficientes de π.",
    "fields": [
      {
        "label": "Módulo",
        "answer": 2,
        "kind": "number"
      },
      {
        "label": "Coeficientes de π",
        "answer": [
          0.25,
          0.75,
          1.25,
          1.75
        ],
        "kind": "set"
      }
    ],
    "solution": "$-16=16e^{i\\pi}$. Las raíces son $2e^{i(\\pi+2k\\pi)/4}$ para k=0,1,2,3; sus argumentos son π/4,3π/4,5π/4,7π/4.",
    "hints": [
      "Incluye las vueltas completas antes de dividir por 4."
    ]
  },
  {
    "id": "t1-15",
    "topic": 1,
    "level": "G",
    "lesson": "1-6",
    "title": "Multiplicidades",
    "prompt": "Para $p(z)=(z-1)^3(z^2+4)^2$, indica grado, número de raíces distintas y multiplicidad de 2i.",
    "fields": [
      {
        "label": "Grado",
        "answer": 7,
        "kind": "number"
      },
      {
        "label": "Raíces distintas",
        "answer": 3,
        "kind": "number"
      },
      {
        "label": "Multiplicidad de 2i",
        "answer": 2,
        "kind": "number"
      }
    ],
    "solution": "$z^2+4=(z-2i)(z+2i)$. Las raíces son 1 triple, 2i doble y −2i doble; 3+2+2=7.",
    "hints": [
      "Factoriza el cuadrático sobre ℂ."
    ]
  },
  {
    "id": "t1-16",
    "topic": 1,
    "level": "G",
    "lesson": "1-2",
    "title": "Dominios que importan",
    "prompt": "$f:[0,\\infty)\\to[1,\\infty)$, $f(x)=x^2+1$. ¿Es biyectiva? Calcula $f^{-1}(10)$ y justifica unicidad.",
    "fields": [
      {
        "label": "¿Biyectiva?",
        "answer": "sí",
        "kind": "choice",
        "options": [
          "sí",
          "no"
        ]
      },
      {
        "label": "f⁻¹(10)",
        "answer": 3,
        "kind": "number"
      }
    ],
    "solution": "Es estrictamente creciente en el dominio y para todo y≥1 existe la única entrada $\\sqrt{y-1}\\ge0$. Para y=10 resulta 3; −3 no pertenece al dominio.",
    "hints": [
      "La restricción del dominio elimina una de las raíces."
    ]
  },
  {
    "id": "t1-17",
    "topic": 1,
    "level": "G",
    "lesson": "1-5",
    "title": "Una ecuación con conjugación",
    "prompt": "Resuelve $z+2\\bar z=6-3i$ escribiendo z=a+bi.",
    "fields": [
      {
        "label": "a; b",
        "answer": [
          2,
          3
        ],
        "kind": "vector"
      }
    ],
    "solution": "$z+2\\bar z=3a-bi$. Igualar partes reales e imaginarias da 3a=6 y −b=−3, de donde z=2+3i.",
    "hints": [
      "Trata a y b como incógnitas reales."
    ]
  },
  {
    "id": "t1-18",
    "topic": 1,
    "level": "G",
    "lesson": "1-4",
    "title": "Control de precisión",
    "prompt": "¿Cuántos decimales como mínimo garantizan error absoluto ≤0,0005 al redondear al más cercano? Justifica una cota válida para cualquier real.",
    "fields": [
      {
        "label": "Decimales mínimos",
        "answer": 3,
        "kind": "number"
      }
    ],
    "solution": "La cota es $\\tfrac12 10^{-d}$. Con d=3 vale 0,0005. Con d=2 puede llegar a 0,005, así que no garantiza lo pedido.",
    "hints": [
      "Piensa en la mitad de la separación entre dos representaciones consecutivas."
    ]
  },
  {
    "id": "t2-01",
    "topic": 2,
    "level": "N",
    "lesson": "2-1",
    "title": "Subespacio o plano afín",
    "prompt": "Clasifica $S=\\{(x,y):x-2y=0\\}$ y $T=\\{(x,y):x-2y=1\\}$.",
    "fields": [
      {
        "label": "¿S subespacio?",
        "answer": "sí",
        "kind": "choice",
        "options": [
          "sí",
          "no"
        ]
      },
      {
        "label": "¿T subespacio?",
        "answer": "no",
        "kind": "choice",
        "options": [
          "sí",
          "no"
        ]
      }
    ],
    "solution": "S es el núcleo de una ecuación homogénea, cerrado para combinaciones. T no contiene (0,0).",
    "hints": [
      "Comprueba primero el cero."
    ]
  },
  {
    "id": "t2-02",
    "topic": 2,
    "level": "N",
    "lesson": "2-2",
    "title": "Dimensión de polinomios",
    "prompt": "En el espacio real de polinomios de grado a lo sumo 4, indica dimensión y coordenadas de $2-t+3t^4$ en $(1,t,t^2,t^3,t^4)$.",
    "fields": [
      {
        "label": "Dimensión",
        "answer": 5,
        "kind": "number"
      },
      {
        "label": "Coordenadas",
        "answer": [
          2,
          -1,
          0,
          0,
          3
        ],
        "kind": "vector"
      }
    ],
    "solution": "Hay cinco potencias desde 0 hasta 4. Los coeficientes de t² y t³ son cero.",
    "hints": [
      "No omitas el término constante."
    ]
  },
  {
    "id": "t2-03",
    "topic": 2,
    "level": "N",
    "lesson": "2-3",
    "title": "Contar un tensor",
    "prompt": "Un tensor tiene formato 3×4×2. Se permutan los ejes al orden (3,1,2).",
    "fields": [
      {
        "label": "Número de entradas",
        "answer": 24,
        "kind": "number"
      },
      {
        "label": "Nuevo formato",
        "answer": [
          2,
          3,
          4
        ],
        "kind": "vector"
      }
    ],
    "solution": "3·4·2=24. Los nuevos ejes toman longitudes 2,3,4; ninguna entrada desaparece.",
    "hints": [
      "Formato y contenido son cosas distintas."
    ]
  },
  {
    "id": "t2-04",
    "topic": 2,
    "level": "N",
    "lesson": "2-4",
    "title": "Producto rectangular",
    "prompt": "$A=\\begin{pmatrix}1&2&0\\\\0&-1&3\\end{pmatrix}$, $b=(2,1,-1)^{\\mathsf T}$. Calcula Ab.",
    "fields": [
      {
        "label": "Ab",
        "answer": [
          4,
          -4
        ],
        "kind": "vector"
      }
    ],
    "solution": "Primera fila: 2+2=4. Segunda: −1−3=−4. El resultado tiene dos componentes.",
    "hints": [
      "Una componente por fila."
    ]
  },
  {
    "id": "t2-05",
    "topic": 2,
    "level": "N",
    "lesson": "2-6",
    "title": "Norma y distancia",
    "prompt": "Para u=(3,4), v=(3,0), calcula norma de u y distancia entre u y v.",
    "fields": [
      {
        "label": "‖u‖",
        "answer": 5,
        "kind": "number"
      },
      {
        "label": "d(u,v)",
        "answer": 4,
        "kind": "number"
      }
    ],
    "solution": "‖u‖=√(9+16)=5. La diferencia u−v=(0,4) tiene norma 4.",
    "hints": [
      "Resta los vectores antes de medir distancia."
    ]
  },
  {
    "id": "t2-06",
    "topic": 2,
    "level": "N",
    "lesson": "2-5",
    "title": "Inversa 2×2",
    "prompt": "Calcula la inversa de $\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$. Introduce una fila por línea y componentes separadas por punto y coma.",
    "fields": [
      {
        "label": "Matriz inversa",
        "answer": [
          [
            1,
            -1
          ],
          [
            -1,
            2
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "El determinante es 1. Intercambia las entradas diagonales y cambia los signos de las otras: [[1,−1],[−1,2]].",
    "hints": [
      "Comprueba el resultado multiplicando."
    ]
  },
  {
    "id": "t2-07",
    "topic": 2,
    "level": "M",
    "lesson": "2-2",
    "title": "Una base diferente también vale",
    "prompt": "Da dos vectores que formen una base de $S=\\{(x,y,z):x+y-z=0\\}$. Escribe cada vector en una fila.",
    "fields": [
      {
        "label": "Base de S",
        "answer": [
          [
            1,
            0,
            1
          ],
          [
            0,
            1,
            1
          ]
        ],
        "kind": "basis"
      }
    ],
    "solution": "La parametrización (x,y,x+y)=x(1,0,1)+y(0,1,1) proporciona una base. Se aceptan dos vectores independientes cualesquiera que generen el mismo plano.",
    "hints": [
      "Despeja z y usa x e y como parámetros."
    ]
  },
  {
    "id": "t2-08",
    "topic": 2,
    "level": "M",
    "lesson": "2-5",
    "title": "Cambiar coordenadas",
    "prompt": "B=((1,1),(1,−1)). En la notación compacta cada par es uno de los vectores de la base y se coloca como columna. Calcula las coordenadas de x=(5,1) en B.",
    "fields": [
      {
        "label": "[x]B",
        "answer": [
          3,
          2
        ],
        "kind": "vector"
      }
    ],
    "solution": "x=a·b₁+b·b₂ da a+b=5 y a−b=1. Sumando da a=3 y b=2.",
    "hints": [
      "Escribe x=a·b₁+b·b₂."
    ]
  },
  {
    "id": "t2-09",
    "topic": 2,
    "level": "M",
    "lesson": "2-4",
    "title": "No conmutan",
    "prompt": "$A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$, $B=\\begin{pmatrix}1&0\\\\2&1\\end{pmatrix}$. Calcula AB−BA.",
    "fields": [
      {
        "label": "Conmutador",
        "answer": [
          [
            2,
            0
          ],
          [
            0,
            -2
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "AB=[[3,1],[2,1]] y BA=[[1,1],[2,3]]. Al restar queda diag(2,−2).",
    "hints": [
      "Calcula ambos productos completos."
    ]
  },
  {
    "id": "t2-10",
    "topic": 2,
    "level": "M",
    "lesson": "2-6",
    "title": "Producto hermítico",
    "prompt": "u=(1,i), v=(i,1). Calcula u*v con la convención del curso. Un complejo se introduce como «parte real; parte imaginaria».",
    "fields": [
      {
        "label": "Parte real; parte imaginaria",
        "answer": [
          0,
          0
        ],
        "kind": "vector"
      }
    ],
    "solution": "u*=(1,−i), de modo que u*v=i−i=0. Son ortogonales en ℂ².",
    "hints": [
      "Conjuga la primera entrada."
    ]
  },
  {
    "id": "t2-11",
    "topic": 2,
    "level": "M",
    "lesson": "2-7",
    "title": "Un residuo de Gram–Schmidt",
    "prompt": "Usa u=(1,2,0) y v=(2,0,1). Obtén el residuo de v tras quitar su proyección sobre u, sin normalizar.",
    "fields": [
      {
        "label": "Residuo",
        "answer": [
          1.6,
          -0.8,
          1
        ],
        "kind": "vector"
      }
    ],
    "solution": "El coeficiente es (uᵀv)/(uᵀu)=2/5. Resta (2/5)(1,2,0) de v y obtén (8/5,−4/5,1).",
    "hints": [
      "No olvides dividir por uᵀu si u no es unitario."
    ]
  },
  {
    "id": "t2-12",
    "topic": 2,
    "level": "M",
    "lesson": "2-8",
    "title": "Proyectar sobre una recta",
    "prompt": "Proyecta b=(4,2,1) sobre span{(1,0,1)} y calcula la distancia.",
    "fields": [
      {
        "label": "Proyección",
        "answer": [
          2.5,
          0,
          2.5
        ],
        "kind": "vector"
      },
      {
        "label": "Distancia",
        "answer": 2.9154759474226504,
        "kind": "number"
      }
    ],
    "solution": "El coeficiente es 5/2. El residuo (3/2,2,−3/2) tiene norma $\\sqrt{17/2}$.",
    "hints": [
      "La distancia es la norma del residuo."
    ]
  },
  {
    "id": "t2-13",
    "topic": 2,
    "level": "G",
    "lesson": "2-2",
    "title": "Dependencia con parámetro",
    "prompt": "Las columnas de $B_a=\\begin{pmatrix}1&1&0\\\\0&a&1\\\\1&1&1\\end{pmatrix}$ forman una base salvo para qué valor de a? En ese valor, da el rango.",
    "fields": [
      {
        "label": "Valor excepcional",
        "answer": 0,
        "kind": "number"
      },
      {
        "label": "Rango excepcional",
        "answer": 2,
        "kind": "number"
      }
    ],
    "solution": "Resta la fila 1 a la 3: queda (0,0,1). El determinante es a. Para a=0, las dos primeras columnas coinciden y la tercera es independiente: rango 2.",
    "hints": [
      "Busca cuándo el determinante se anula."
    ]
  },
  {
    "id": "t2-14",
    "topic": 2,
    "level": "G",
    "lesson": "2-1",
    "title": "Suma e intersección",
    "prompt": "U=span{e₁,e₂} y W=span{e₂,e₃} en ℝ³. Da una base de U∩W y la dimensión de U+W.",
    "fields": [
      {
        "label": "Base de la intersección",
        "answer": [
          [
            0,
            1,
            0
          ]
        ],
        "kind": "basis"
      },
      {
        "label": "Dimensión de la suma",
        "answer": 3,
        "kind": "number"
      }
    ],
    "solution": "La intersección solo tiene dirección e₂. La fórmula de dimensiones da 2+2−1=3 y la suma es ℝ³.",
    "hints": [
      "Un vector común debe tener tercera y primera componentes cero."
    ]
  },
  {
    "id": "t2-15",
    "topic": 2,
    "level": "G",
    "lesson": "2-8",
    "title": "Matriz de una proyección",
    "prompt": "Construye la matriz de proyección ortogonal sobre el plano x+y+z=0.",
    "fields": [
      {
        "label": "P",
        "answer": [
          [
            0.6666666666666666,
            -0.3333333333333333,
            -0.3333333333333333
          ],
          [
            -0.3333333333333333,
            0.6666666666666666,
            -0.3333333333333333
          ],
          [
            -0.3333333333333333,
            -0.3333333333333333,
            0.6666666666666666
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "El normal n=(1,1,1) tiene nᵀn=3. La proyección sobre el plano es $I-nn^{\\mathsf T}/3$. Es simétrica, idempotente y anula n.",
    "hints": [
      "Proyecta sobre el normal y resta de la identidad."
    ]
  },
  {
    "id": "t2-16",
    "topic": 2,
    "level": "G",
    "lesson": "2-5",
    "title": "Orientar el cambio",
    "prompt": "B=((1,1),(1,−1)), C=((1,0),(1,1)). En la notación compacta cada par entre paréntesis es uno de los vectores de la base, y esos vectores se colocan como COLUMNAS. Da la matriz que transforma coordenadas en B a coordenadas en C.",
    "fields": [
      {
        "label": "C⁻¹B",
        "answer": [
          [
            0,
            2
          ],
          [
            1,
            -1
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "Las columnas de C son (1,0) y (1,1), así que C=[[1,1],[0,1]] y C⁻¹=[[1,−1],[0,1]]. Multiplica C⁻¹B: [[0,2],[1,−1]].",
    "hints": [
      "Pasa primero a canónicas y luego a C."
    ]
  },
  {
    "id": "t2-17",
    "topic": 2,
    "level": "G",
    "lesson": "2-7",
    "title": "Detectar dependencia",
    "prompt": "Gram–Schmidt se aplica a (1,0,1), (2,0,2), (0,1,0), descartando residuos cero. ¿Cuántos vectores retiene? Da una base del complemento ortogonal de su generado.",
    "fields": [
      {
        "label": "Vectores retenidos",
        "answer": 2,
        "kind": "number"
      },
      {
        "label": "Base del complemento",
        "answer": [
          [
            1,
            0,
            -1
          ]
        ],
        "kind": "basis"
      }
    ],
    "solution": "El segundo vector es el doble del primero y no aporta dirección. Ser ortogonal al primero exige x+z=0 y al tercero y=0. El complemento es span{(1,0,−1)}.",
    "hints": [
      "Identifica el vector redundante antes de calcular."
    ]
  },
  {
    "id": "t2-18",
    "topic": 2,
    "level": "G",
    "lesson": "2-3",
    "title": "Normal no significa simétrica",
    "prompt": "$R=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$. Decide si es normal, simétrica y ortogonal sobre ℝ.",
    "fields": [
      {
        "label": "Normal",
        "answer": "sí",
        "kind": "choice",
        "options": [
          "sí",
          "no"
        ]
      },
      {
        "label": "Simétrica",
        "answer": "no",
        "kind": "choice",
        "options": [
          "sí",
          "no"
        ]
      },
      {
        "label": "Ortogonal",
        "answer": "sí",
        "kind": "choice",
        "options": [
          "sí",
          "no"
        ]
      }
    ],
    "solution": "RᵀR=RRᵀ=I: es ortogonal y normal. Rᵀ=−R≠R, luego no es simétrica.",
    "hints": [
      "Calcula RᵀR y compara R con Rᵀ."
    ]
  },
  {
    "id": "t3-01",
    "topic": 3,
    "level": "N",
    "lesson": "3-1",
    "title": "Matriz de una aplicación",
    "prompt": "f(x,y)=(x−y,2x+y,3y). Escribe su matriz canónica.",
    "fields": [
      {
        "label": "Matriz 3×2",
        "answer": [
          [
            1,
            -1
          ],
          [
            2,
            1
          ],
          [
            0,
            3
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "f(e₁)=(1,2,0), f(e₂)=(−1,1,3); son las columnas.",
    "hints": [
      "Evalúa en los dos vectores canónicos."
    ]
  },
  {
    "id": "t3-02",
    "topic": 3,
    "level": "N",
    "lesson": "3-1",
    "title": "Linealidad",
    "prompt": "¿Es lineal f(x,y)=(x+y,xy)?",
    "fields": [
      {
        "label": "Respuesta",
        "answer": "no",
        "kind": "choice",
        "options": [
          "sí",
          "no"
        ]
      }
    ],
    "solution": "f(2,2)=(4,4), pero 2f(1,1)=(4,2). Falla homogeneidad aunque f(0)=0.",
    "hints": [
      "Busca un contraejemplo de homogeneidad."
    ]
  },
  {
    "id": "t3-03",
    "topic": 3,
    "level": "N",
    "lesson": "3-2",
    "title": "Determinante triangular",
    "prompt": "Una triangular 4×4 tiene diagonal (2,−1,3,4). Calcula su determinante.",
    "fields": [
      {
        "label": "Determinante",
        "answer": -24,
        "kind": "number"
      }
    ],
    "solution": "Producto de la diagonal: 2·(−1)·3·4=−24.",
    "hints": [
      "No necesitas las entradas fuera de la diagonal."
    ]
  },
  {
    "id": "t3-04",
    "topic": 3,
    "level": "N",
    "lesson": "3-3",
    "title": "Rango y nulidad",
    "prompt": "A es 4×7 y tiene rango 3. Calcula las dimensiones de ker A y ker A*.",
    "fields": [
      {
        "label": "dim ker A",
        "answer": 4,
        "kind": "number"
      },
      {
        "label": "dim ker A*",
        "answer": 1,
        "kind": "number"
      }
    ],
    "solution": "La nulidad de A es 7−3=4; la de A* es 4−3=1.",
    "hints": [
      "Cada núcleo se resta de la dimensión de su propio dominio."
    ]
  },
  {
    "id": "t3-05",
    "topic": 3,
    "level": "N",
    "lesson": "3-4",
    "title": "Una dirección propia",
    "prompt": "A=diag(2,5). Da un autovector para λ=5.",
    "fields": [
      {
        "label": "Autovector",
        "answer": [
          0,
          1
        ],
        "kind": "eigen",
        "matrix": [
          [
            2,
            0
          ],
          [
            0,
            5
          ]
        ],
        "eigenvalue": 5
      }
    ],
    "solution": "Los vectores (0,t), t≠0, cumplen Av=5v. Cualquier múltiplo no nulo es válido.",
    "hints": [
      "Resuelve (A−5I)v=0."
    ]
  },
  {
    "id": "t3-06",
    "topic": 3,
    "level": "N",
    "lesson": "3-5",
    "title": "Matriz de una forma",
    "prompt": "Escribe la matriz simétrica de q(x,y)=3x²+6xy+2y².",
    "fields": [
      {
        "label": "Matriz",
        "answer": [
          [
            3,
            3
          ],
          [
            3,
            2
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "Las entradas diagonales son 3 y 2. Cada entrada cruzada es la mitad de 6, es decir 3.",
    "hints": [
      "Los dos términos cruzados de xᵀSx se suman."
    ]
  },
  {
    "id": "t3-07",
    "topic": 3,
    "level": "M",
    "lesson": "3-2",
    "title": "Operaciones de filas",
    "prompt": "det A=−3. B se obtiene intercambiando dos filas de A y multiplicando otra fila por 4. Calcula det B.",
    "fields": [
      {
        "label": "det B",
        "answer": 12,
        "kind": "number"
      }
    ],
    "solution": "El intercambio cambia el signo: 3. Multiplicar una fila por 4 da 12.",
    "hints": [
      "Lleva la cuenta de cada factor."
    ]
  },
  {
    "id": "t3-08",
    "topic": 3,
    "level": "M",
    "lesson": "3-3",
    "title": "Núcleo rectangular",
    "prompt": "A tiene filas (1,2,2) y (0,1,−1). Da una base de su núcleo.",
    "fields": [
      {
        "label": "Base",
        "answer": [
          [
            -4,
            1,
            1
          ]
        ],
        "kind": "basis"
      }
    ],
    "solution": "Resolve y=z y x=−2y−2z=−4z, de modo que las soluciones son t(−4,1,1).",
    "hints": [
      "Usa z como variable libre."
    ]
  },
  {
    "id": "t3-09",
    "topic": 3,
    "level": "M",
    "lesson": "3-2",
    "title": "Área orientada",
    "prompt": "Un triángulo tiene vértices (1,1),(4,2),(2,5). Calcula su área.",
    "fields": [
      {
        "label": "Área",
        "answer": 5.5,
        "kind": "number"
      }
    ],
    "solution": "Las aristas son (3,1),(1,4), de determinante 12−1=11. El área del triángulo es 11/2.",
    "hints": [
      "Resta el mismo vértice a los otros dos."
    ]
  },
  {
    "id": "t3-10",
    "topic": 3,
    "level": "M",
    "lesson": "3-4",
    "title": "Espectro simétrico",
    "prompt": "A=[[2,1],[1,2]]. Da el conjunto de autovalores.",
    "fields": [
      {
        "label": "Autovalores",
        "answer": [
          1,
          3
        ],
        "kind": "set"
      }
    ],
    "solution": "det(A−λI)=(2−λ)²−1=(λ−1)(λ−3).",
    "hints": [
      "Factoriza una diferencia de cuadrados."
    ]
  },
  {
    "id": "t3-11",
    "topic": 3,
    "level": "M",
    "lesson": "3-5",
    "title": "Evaluar una forma",
    "prompt": "Para S=[[2,1],[1,3]] y x=(1,−2), calcula xᵀSx.",
    "fields": [
      {
        "label": "Valor",
        "answer": 10,
        "kind": "number"
      }
    ],
    "solution": "2x²+2xy+3y²=2−4+12=10. También Sx=(0,−5), cuyo producto con x es 10.",
    "hints": [
      "El coeficiente cruzado es 2, no 1."
    ]
  },
  {
    "id": "t3-12",
    "topic": 3,
    "level": "M",
    "lesson": "3-4",
    "title": "Núcleo generalizado",
    "prompt": "N=[[0,1,0],[0,0,1],[0,0,0]]. Da las dimensiones de ker N, ker N², ker N³.",
    "fields": [
      {
        "label": "Dimensiones",
        "answer": [
          1,
          2,
          3
        ],
        "kind": "vector"
      }
    ],
    "solution": "N(x,y,z)=(y,z,0), N²(x,y,z)=(z,0,0), N³=0. Las dimensiones son 1,2,3.",
    "hints": [
      "Escribe la acción de N sobre un vector genérico."
    ]
  },
  {
    "id": "t3-13",
    "topic": 3,
    "level": "G",
    "lesson": "3-3",
    "title": "Imagen y núcleo a la vez",
    "prompt": "f(x,y,z)=(x+y,y+z,x+2y+z). Da una base de la imagen y una del núcleo.",
    "fields": [
      {
        "label": "Base imagen",
        "answer": [
          [
            1,
            0,
            1
          ],
          [
            0,
            1,
            1
          ]
        ],
        "kind": "basis"
      },
      {
        "label": "Base núcleo",
        "answer": [
          [
            -1,
            1,
            -1
          ]
        ],
        "kind": "basis"
      }
    ],
    "solution": "La tercera componente de salida suma las dos primeras; la imagen es el plano c=a+b. El núcleo exige x=−y y z=−y. Rango 2 y nulidad 1.",
    "hints": [
      "Observa una relación entre las componentes de salida."
    ]
  },
  {
    "id": "t3-14",
    "topic": 3,
    "level": "G",
    "lesson": "3-2",
    "title": "Determinante paramétrico",
    "prompt": "Aₜ=[[1,t,0],[t,1,0],[0,0,t−2]]. Da todos los valores t para los que es singular.",
    "fields": [
      {
        "label": "Valores",
        "answer": [
          -1,
          1,
          2
        ],
        "kind": "set"
      }
    ],
    "solution": "Por bloques, det Aₜ=(1−t²)(t−2). Los ceros son −1,1,2; fuera de ellos es invertible.",
    "hints": [
      "Separa el bloque 2×2 del escalar final."
    ]
  },
  {
    "id": "t3-15",
    "topic": 3,
    "level": "G",
    "lesson": "3-1",
    "title": "Cambiar la matriz de una aplicación",
    "prompt": "f tiene matriz A=diag(2,3) en canónicas. En B=((1,1),(1,−1)), calcula la matriz de f, usando B tanto en entrada como en salida.",
    "fields": [
      {
        "label": "B⁻¹AB",
        "answer": [
          [
            2.5,
            -0.5
          ],
          [
            -0.5,
            2.5
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "B⁻¹=(1/2)B. Multiplica (1/2)BAB para obtener [[5/2,−1/2],[−1/2,5/2]]. Su traza 5 y determinante 6 coinciden con A.",
    "hints": [
      "La transformación de un endomorfismo es por similitud."
    ]
  },
  {
    "id": "t3-16",
    "topic": 3,
    "level": "G",
    "lesson": "3-5",
    "title": "Clasificar con parámetro",
    "prompt": "qₐ(x,y)=x²+2axy+y². Para a=2, da un vector donde sea negativa y decide si es indefinida.",
    "fields": [
      {
        "label": "Vector con q<0",
        "answer": [
          1,
          -1
        ],
        "kind": "negative",
        "matrix": [
          [
            1,
            2
          ],
          [
            2,
            1
          ]
        ]
      },
      {
        "label": "¿Indefinida?",
        "answer": "sí",
        "kind": "choice",
        "options": [
          "sí",
          "no"
        ]
      }
    ],
    "solution": "q₂(1,−1)=−2 y q₂(1,0)=1. Al tomar ambos signos es indefinida. Por completación: (x+2y)²−3y².",
    "hints": [
      "Busca primero x=−y."
    ]
  },
  {
    "id": "t3-17",
    "topic": 3,
    "level": "G",
    "lesson": "3-4",
    "title": "Multiplicidades distintas",
    "prompt": "A=[[4,1,0],[0,4,0],[0,0,4]]. Para λ=4, calcula multiplicidad algebraica, geométrica y dim ker(A−4I)².",
    "fields": [
      {
        "label": "Algebraica",
        "answer": 3,
        "kind": "number"
      },
      {
        "label": "Geométrica",
        "answer": 2,
        "kind": "number"
      },
      {
        "label": "Núcleo del cuadrado",
        "answer": 3,
        "kind": "number"
      }
    ],
    "solution": "El característico es (4−λ)³. A−4I solo conserva la segunda coordenada en la primera: rango 1, nulidad 2; su cuadrado es cero.",
    "hints": [
      "No confundas la multiplicidad de la raíz con la dimensión del autoespacio."
    ]
  },
  {
    "id": "t3-18",
    "topic": 3,
    "level": "G",
    "lesson": "3-5",
    "title": "Congruencia explícita",
    "prompt": "Completa cuadrados en q=3x²+6xy+5y² usando u=x+y, v=y. Da su matriz en (u,v) y la inercia (positivos,negativos,nulos).",
    "fields": [
      {
        "label": "Matriz",
        "answer": [
          [
            3,
            0
          ],
          [
            0,
            2
          ]
        ],
        "kind": "matrix"
      },
      {
        "label": "Inercia",
        "answer": [
          2,
          0,
          0
        ],
        "kind": "vector"
      }
    ],
    "solution": "Con x=u−v, y=v, resulta q=3u²+2v². El cambio es invertible y ambos coeficientes son positivos.",
    "hints": [
      "Sustituye, expande y cancela el término uv."
    ]
  },
  {
    "id": "t4-01",
    "topic": 4,
    "level": "N",
    "lesson": "4-1",
    "title": "Sistema triangular",
    "prompt": "Resuelve 2x+y=5, 3y=3.",
    "fields": [
      {
        "label": "x; y",
        "answer": [
          2,
          1
        ],
        "kind": "vector"
      }
    ],
    "solution": "Primero y=1; después 2x=4, así x=2.",
    "hints": [
      "Empieza por la última ecuación."
    ]
  },
  {
    "id": "t4-02",
    "topic": 4,
    "level": "N",
    "lesson": "4-1",
    "title": "Compatibilidad",
    "prompt": "Un sistema tiene 5 incógnitas, rango A=3 y rango [A|b]=4. Clasifícalo.",
    "fields": [
      {
        "label": "Tipo",
        "answer": "incompatible",
        "kind": "choice",
        "options": [
          "única solución",
          "infinitas soluciones",
          "incompatible"
        ]
      }
    ],
    "solution": "Los rangos distintos violan Rouché–Frobenius: no tiene solución.",
    "hints": [
      "Compara rangos antes de contar variables libres."
    ]
  },
  {
    "id": "t4-03",
    "topic": 4,
    "level": "N",
    "lesson": "4-1",
    "title": "Variables libres",
    "prompt": "Un sistema compatible con 6 incógnitas tiene rango 4. ¿Cuántos parámetros libres necesita?",
    "fields": [
      {
        "label": "Parámetros",
        "answer": 2,
        "kind": "number"
      }
    ],
    "solution": "6−4=2 variables libres.",
    "hints": [
      "Usa número de incógnitas menos rango."
    ]
  },
  {
    "id": "t4-04",
    "topic": 4,
    "level": "N",
    "lesson": "4-2",
    "title": "Multiplicador de Gauss",
    "prompt": "Para eliminar el 6 situado debajo de un pivote 2, se hace F₂←F₂−mF₁. ¿Cuánto vale m?",
    "fields": [
      {
        "label": "m",
        "answer": 3,
        "kind": "number"
      }
    ],
    "solution": "6/2=3 y 6−3·2=0.",
    "hints": [
      "Resuelve 6−2m=0."
    ]
  },
  {
    "id": "t4-05",
    "topic": 4,
    "level": "N",
    "lesson": "4-3",
    "title": "Leer formatos QR",
    "prompt": "A es real 5×3, con columnas independientes. Da el formato de Q y R en la QR reducida.",
    "fields": [
      {
        "label": "Formato Q",
        "answer": [
          5,
          3
        ],
        "kind": "vector"
      },
      {
        "label": "Formato R",
        "answer": [
          3,
          3
        ],
        "kind": "vector"
      }
    ],
    "solution": "Q conserva tres columnas ortonormales de longitud 5. R es triangular 3×3.",
    "hints": [
      "Las tres columnas de A se expresan en tres direcciones ortonormales."
    ]
  },
  {
    "id": "t4-06",
    "topic": 4,
    "level": "N",
    "lesson": "4-4",
    "title": "Mejor constante",
    "prompt": "Ajusta una constante c a los datos 1,2,6 minimizando la suma de cuadrados.",
    "fields": [
      {
        "label": "c",
        "answer": 3,
        "kind": "number"
      }
    ],
    "solution": "La ecuación normal es 3c=1+2+6=9, luego c=3.",
    "hints": [
      "La columna de diseño tiene tres unos."
    ]
  },
  {
    "id": "t4-07",
    "topic": 4,
    "level": "M",
    "lesson": "4-2",
    "title": "Reconstruir LU",
    "prompt": "Para A=[[3,1],[6,4]], sin permutar, calcula L y U con diagonal de L igual a uno.",
    "fields": [
      {
        "label": "L",
        "answer": [
          [
            1,
            0
          ],
          [
            2,
            1
          ]
        ],
        "kind": "matrix"
      },
      {
        "label": "U",
        "answer": [
          [
            3,
            1
          ],
          [
            0,
            2
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "El multiplicador es 6/3=2. La segunda fila de U es (6,4)−2(3,1)=(0,2).",
    "hints": [
      "Guarda en L el multiplicador usado."
    ]
  },
  {
    "id": "t4-08",
    "topic": 4,
    "level": "M",
    "lesson": "4-1",
    "title": "Una solución y su dirección",
    "prompt": "Resuelve x+y+z=3, y−z=1. Da una solución con z=0 y una base de las direcciones homogéneas.",
    "fields": [
      {
        "label": "Particular",
        "answer": [
          2,
          1,
          0
        ],
        "kind": "vector"
      },
      {
        "label": "Base homogénea",
        "answer": [
          [
            -2,
            1,
            1
          ]
        ],
        "kind": "basis"
      }
    ],
    "solution": "Con z=t, y=1+t y x=2−2t. La solución pedida es (2,1,0) y la dirección (−2,1,1).",
    "hints": [
      "Aísla la variable libre z."
    ]
  },
  {
    "id": "t4-09",
    "topic": 4,
    "level": "M",
    "lesson": "4-3",
    "title": "QR sin radicales difíciles",
    "prompt": "A=[[3,0],[4,5]]. Usando q₁=(3/5,4/5), q₂=(−4/5,3/5), calcula R.",
    "fields": [
      {
        "label": "R",
        "answer": [
          [
            5,
            4
          ],
          [
            0,
            3
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "r₁₁=5, r₁₂=q₁ᵀ(0,5)=4 y r₂₂=q₂ᵀ(0,5)=3. QᵀA=R.",
    "hints": [
      "Multiplica Qᵀ por A."
    ]
  },
  {
    "id": "t4-10",
    "topic": 4,
    "level": "M",
    "lesson": "4-4",
    "title": "Un ajuste inconsistente",
    "prompt": "A tiene única columna (1,2), b=(1,0). Halla el coeficiente óptimo x y el residuo b−Ax.",
    "fields": [
      {
        "label": "x",
        "answer": 0.2,
        "kind": "number"
      },
      {
        "label": "Residuo",
        "answer": [
          0.8,
          -0.4
        ],
        "kind": "vector"
      }
    ],
    "solution": "AᵀA=5 y Aᵀb=1, así x=1/5. El residuo (4/5,−2/5) es ortogonal a (1,2).",
    "hints": [
      "Usa una ecuación normal escalar."
    ]
  },
  {
    "id": "t4-11",
    "topic": 4,
    "level": "M",
    "lesson": "4-5",
    "title": "Schur ya triangular",
    "prompt": "T=[[1,7,2],[0,−2,3],[0,0,4]] es una forma de Schur. Da autovalores, traza y determinante.",
    "fields": [
      {
        "label": "Autovalores",
        "answer": [
          1,
          -2,
          4
        ],
        "kind": "set"
      },
      {
        "label": "Traza",
        "answer": 3,
        "kind": "number"
      },
      {
        "label": "Determinante",
        "answer": -8,
        "kind": "number"
      }
    ],
    "solution": "Los autovalores son la diagonal. La suma es 3 y el producto −8.",
    "hints": [
      "La parte superior fuera de la diagonal no altera esos valores."
    ]
  },
  {
    "id": "t4-12",
    "topic": 4,
    "level": "M",
    "lesson": "4-3",
    "title": "Reflexión de Householder",
    "prompt": "Para v=(1,1), calcula H=I−2vvᵀ/(vᵀv).",
    "fields": [
      {
        "label": "H",
        "answer": [
          [
            0,
            -1
          ],
          [
            -1,
            0
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "vᵀv=2 y vvᵀ es la matriz de unos. Al restarla de I resulta [[0,−1],[−1,0]]. H²=I.",
    "hints": [
      "Forma primero el producto exterior."
    ]
  },
  {
    "id": "t4-13",
    "topic": 4,
    "level": "G",
    "lesson": "4-1",
    "title": "Discusión con parámetro",
    "prompt": "El sistema x+y=1, 2x+(a+1)y=2 tiene un valor excepcional de a. Da ese valor, clasifica el sistema en él y resuelve para a=2.",
    "fields": [
      {
        "label": "a excepcional",
        "answer": 1,
        "kind": "number"
      },
      {
        "label": "Tipo excepcional",
        "answer": "infinitas soluciones",
        "kind": "choice",
        "options": [
          "única solución",
          "infinitas soluciones",
          "incompatible"
        ]
      },
      {
        "label": "Solución a=2",
        "answer": [
          1,
          0
        ],
        "kind": "vector"
      }
    ],
    "solution": "Resta 2 veces la primera ecuación: (a−1)y=0. Si a=1 queda redundancia y x=1−y. Si a≠1, y=0 y x=1.",
    "hints": [
      "No dividas por a−1 sin separar su cero."
    ]
  },
  {
    "id": "t4-14",
    "topic": 4,
    "level": "G",
    "lesson": "4-2",
    "title": "PLU con intercambio",
    "prompt": "A=[[0,2],[1,3]]. Fija P=[[0,1],[1,0]] y PA=LU con L triangular inferior y diagonal de unos. Da L,U y la solución de Ax=(4,7).",
    "fields": [
      {
        "label": "L",
        "answer": [
          [
            1,
            0
          ],
          [
            0,
            1
          ]
        ],
        "kind": "matrix"
      },
      {
        "label": "U",
        "answer": [
          [
            1,
            3
          ],
          [
            0,
            2
          ]
        ],
        "kind": "matrix"
      },
      {
        "label": "x",
        "answer": [
          1,
          2
        ],
        "kind": "vector"
      }
    ],
    "solution": "PA=[[1,3],[0,2]] ya es triangular, por lo que L=I. Pb=(7,4); 2x₂=4 y x₁+3x₂=7, de donde (1,2).",
    "hints": [
      "Permuta también el término independiente."
    ]
  },
  {
    "id": "t4-15",
    "topic": 4,
    "level": "G",
    "lesson": "4-4",
    "title": "Recta de mínimos cuadrados",
    "prompt": "Ajusta α+βt a (0,1),(1,3),(2,2). Da coeficientes y suma mínima de cuadrados de residuos.",
    "fields": [
      {
        "label": "α; β",
        "answer": [
          1.5,
          0.5
        ],
        "kind": "vector"
      },
      {
        "label": "Error cuadrático mínimo",
        "answer": 1.5,
        "kind": "number"
      }
    ],
    "solution": "Las normales son 3α+3β=6 y 3α+5β=7. β=1/2, α=3/2. Residuos (−1/2,1,−1/2); sus cuadrados suman 3/2.",
    "hints": [
      "Construye la matriz de diseño con columnas 1 y t."
    ]
  },
  {
    "id": "t4-16",
    "topic": 4,
    "level": "G",
    "lesson": "4-4",
    "title": "No unicidad y norma mínima",
    "prompt": "A=[[1,1],[2,2]], b=(1,0). Da la solución de mínimos cuadrados de menor norma y una base de las direcciones de todos los minimizadores.",
    "fields": [
      {
        "label": "Mínima norma",
        "answer": [
          0.1,
          0.1
        ],
        "kind": "vector"
      },
      {
        "label": "Direcciones",
        "answer": [
          [
            1,
            -1
          ]
        ],
        "kind": "basis"
      }
    ],
    "solution": "El ajuste depende de s=x+y: minimiza (s−1)²+4s², con s=1/5. La menor norma reparte por igual, x=y=1/10. Cualquier t(1,−1) conserva el ajuste.",
    "hints": [
      "Reduce primero a la variable s=x+y."
    ]
  },
  {
    "id": "t4-17",
    "topic": 4,
    "level": "G",
    "lesson": "4-3",
    "title": "Verificar una QR propuesta",
    "prompt": "Q=[[1/√2,1/√2],[1/√2,−1/√2]], R=[[√2,3/√2],[0,−1/√2]]. Calcula A=QR y decide si la factorización es válida aunque R tenga una entrada diagonal negativa.",
    "fields": [
      {
        "label": "A",
        "answer": [
          [
            1,
            1
          ],
          [
            1,
            2
          ]
        ],
        "kind": "matrix"
      },
      {
        "label": "¿Válida?",
        "answer": "sí",
        "kind": "choice",
        "options": [
          "sí",
          "no"
        ]
      }
    ],
    "solution": "QᵀQ=I y el producto da [[1,1],[1,2]]. El signo negativo no invalida una QR; solo incumple la convención adicional de diagonal positiva para unicidad.",
    "hints": [
      "Validez y normalización de signos son distintas condiciones."
    ]
  },
  {
    "id": "t4-18",
    "topic": 4,
    "level": "G",
    "lesson": "4-5",
    "title": "Schur frente a diagonalización",
    "prompt": "A=[[5,1],[0,5]]. Da la dimensión del autoespacio de 5 y decide si tiene Schur compleja y si es diagonalizable.",
    "fields": [
      {
        "label": "dim E₅",
        "answer": 1,
        "kind": "number"
      },
      {
        "label": "Schur",
        "answer": "sí",
        "kind": "choice",
        "options": [
          "sí",
          "no"
        ]
      },
      {
        "label": "Diagonalizable",
        "answer": "no",
        "kind": "choice",
        "options": [
          "sí",
          "no"
        ]
      }
    ],
    "solution": "A−5I impone y=0. Solo hay una dirección propia, insuficiente para diagonalizar. Ya es triangular, así Q=I y T=A constituyen Schur.",
    "hints": [
      "Calcula el núcleo de A−5I."
    ]
  },
  {
    "id": "t5-01",
    "topic": 5,
    "level": "N",
    "lesson": "5-1",
    "title": "Potencias diagonales",
    "prompt": "D=diag(2,−1,3). Da la diagonal de D³.",
    "fields": [
      {
        "label": "Diagonal",
        "answer": [
          8,
          -1,
          27
        ],
        "kind": "vector"
      }
    ],
    "solution": "Cada entrada se eleva al cubo: 8,−1,27.",
    "hints": [
      "No cubiques toda la lista como un escalar."
    ]
  },
  {
    "id": "t5-02",
    "topic": 5,
    "level": "N",
    "lesson": "5-4",
    "title": "Leer inercia",
    "prompt": "D=diag(4,−2,0,7). Da la inercia en orden positivos, negativos, nulos.",
    "fields": [
      {
        "label": "Inercia",
        "answer": [
          2,
          1,
          1
        ],
        "kind": "vector"
      }
    ],
    "solution": "4 y 7 son positivos, −2 negativo, y hay un cero.",
    "hints": [
      "Cuenta signos, no sumes valores."
    ]
  },
  {
    "id": "t5-03",
    "topic": 5,
    "level": "N",
    "lesson": "5-6",
    "title": "Valores singulares diagonales",
    "prompt": "A=diag(−4,2,0). Da valores singulares en orden decreciente, incluyendo cero, y rango.",
    "fields": [
      {
        "label": "Valores",
        "answer": [
          4,
          2,
          0
        ],
        "kind": "vector"
      },
      {
        "label": "Rango",
        "answer": 2,
        "kind": "number"
      }
    ],
    "solution": "AᵀA=diag(16,4,0); sus raíces son 4,2,0. Dos son positivos.",
    "hints": [
      "Los singulares nunca son negativos."
    ]
  },
  {
    "id": "t5-04",
    "topic": 5,
    "level": "N",
    "lesson": "5-7",
    "title": "Pseudoinversa diagonal",
    "prompt": "Calcula la pseudoinversa de diag(2,0,−4).",
    "fields": [
      {
        "label": "Matriz",
        "answer": [
          [
            0.5,
            0,
            0
          ],
          [
            0,
            0,
            0
          ],
          [
            0,
            0,
            -0.25
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "En esta matriz diagonal real se invierten las entradas no nulas y se conserva cero: diag(1/2,0,−1/4).",
    "hints": [
      "No dividas por la entrada nula."
    ]
  },
  {
    "id": "t5-05",
    "topic": 5,
    "level": "N",
    "lesson": "5-3",
    "title": "Una raíz positiva",
    "prompt": "D=diag(9,4,0). Da la diagonal de su raíz semidefinida positiva.",
    "fields": [
      {
        "label": "Diagonal",
        "answer": [
          3,
          2,
          0
        ],
        "kind": "vector"
      }
    ],
    "solution": "Raíces no negativas entrada a entrada: 3,2,0. No es definida positiva por su cero.",
    "hints": [
      "La condición semidefinida positiva fija los signos."
    ]
  },
  {
    "id": "t5-06",
    "topic": 5,
    "level": "N",
    "lesson": "5-5",
    "title": "Un bloque de Jordan",
    "prompt": "J es un bloque 3×3 para λ=2. Indica multiplicidad algebraica y geométrica.",
    "fields": [
      {
        "label": "Algebraica",
        "answer": 3,
        "kind": "number"
      },
      {
        "label": "Geométrica",
        "answer": 1,
        "kind": "number"
      }
    ],
    "solution": "El bloque tiene tres entradas λ en la diagonal, pero una sola dirección propia.",
    "hints": [
      "La geométrica cuenta bloques, no tamaño total."
    ]
  },
  {
    "id": "t5-07",
    "topic": 5,
    "level": "M",
    "lesson": "5-2",
    "title": "Cholesky",
    "prompt": "Encuentra C triangular inferior con diagonal positiva tal que [[9,3],[3,4]]=CCᵀ.",
    "fields": [
      {
        "label": "C",
        "answer": [
          [
            3,
            0
          ],
          [
            1,
            1.7320508075688772
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "c₁₁=3; 2c₂₁=3 implica c₂₁=1; c₂₂²=4−1=3.",
    "hints": [
      "Iguala las tres entradas independientes de CCᵀ."
    ]
  },
  {
    "id": "t5-08",
    "topic": 5,
    "level": "M",
    "lesson": "5-2",
    "title": "La diagonal en LDU",
    "prompt": "A=[[2,4],[6,15]]. En A=LDU con L y U triangulares con diagonal de unos, da la diagonal de D.",
    "fields": [
      {
        "label": "Diagonal",
        "answer": [
          2,
          3
        ],
        "kind": "vector"
      }
    ],
    "solution": "El multiplicador es 3; la segunda fila residual es (0,3). Los pivotes son 2 y 3.",
    "hints": [
      "D contiene los pivotes de eliminación."
    ]
  },
  {
    "id": "t5-09",
    "topic": 5,
    "level": "M",
    "lesson": "5-3",
    "title": "Diagonalización espectral",
    "prompt": "A=[[3,1],[1,3]]. Da un autovector de norma 1 para el mayor autovalor.",
    "fields": [
      {
        "label": "Vector",
        "answer": [
          0.7071067811865476,
          0.7071067811865476
        ],
        "kind": "unitEigen",
        "matrix": [
          [
            3,
            1
          ],
          [
            1,
            3
          ]
        ],
        "eigenvalue": 4
      }
    ],
    "solution": "El mayor autovalor es 4 y su dirección (1,1). Al normalizar, ±(1,1)/√2. Se aceptan ambos signos.",
    "hints": [
      "Usa simetría y normaliza al final."
    ]
  },
  {
    "id": "t5-10",
    "topic": 5,
    "level": "M",
    "lesson": "5-4",
    "title": "Criterio de Sylvester",
    "prompt": "S=[[a,1],[1,2]]. ¿Para qué c real es S definida positiva exactamente cuando a>c?",
    "fields": [
      {
        "label": "c",
        "answer": 0.5,
        "kind": "number"
      }
    ],
    "solution": "Los menores líderes exigen a>0 y 2a−1>0. La segunda condición implica la primera, así a>1/2.",
    "hints": [
      "Combina ambas desigualdades."
    ]
  },
  {
    "id": "t5-11",
    "topic": 5,
    "level": "M",
    "lesson": "5-5",
    "title": "Potencia de Jordan",
    "prompt": "A=[[2,1],[0,2]]. Calcula A³.",
    "fields": [
      {
        "label": "A³",
        "answer": [
          [
            8,
            12
          ],
          [
            0,
            8
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "A=2I+N, N²=0. A³=8I+12N.",
    "hints": [
      "Aplica el binomio y elimina términos con N²."
    ]
  },
  {
    "id": "t5-12",
    "topic": 5,
    "level": "M",
    "lesson": "5-6",
    "title": "Error de truncación",
    "prompt": "Una matriz tiene valores singulares 5,3,1. Da el error de Frobenius de su mejor aproximación de rango 1 y de rango 2.",
    "fields": [
      {
        "label": "Error rango 1",
        "answer": 3.1622776601683795,
        "kind": "number"
      },
      {
        "label": "Error rango 2",
        "answer": 1,
        "kind": "number"
      }
    ],
    "solution": "Para rango 1 se descartan 3 y 1: √(9+1)=√10. Para rango 2 solo se descarta 1.",
    "hints": [
      "Suma cuadrados de los valores descartados."
    ]
  },
  {
    "id": "t5-13",
    "topic": 5,
    "level": "G",
    "lesson": "5-1",
    "title": "Diagonalización con parámetro",
    "prompt": "Aₐ=[[2,a],[0,2]]. ¿Para qué a es diagonalizable? Justifica con multiplicidades.",
    "fields": [
      {
        "label": "a",
        "answer": 0,
        "kind": "number"
      }
    ],
    "solution": "El único autovalor es 2, algebraica 2. Si a≠0, su autoespacio tiene dimensión 1. Solo a=0 da A=2I y dos direcciones independientes.",
    "hints": [
      "Estudia el rango de A−2I."
    ]
  },
  {
    "id": "t5-14",
    "topic": 5,
    "level": "G",
    "lesson": "5-5",
    "title": "Reconstruir los bloques",
    "prompt": "Para un único autovalor de multiplicidad algebraica 6, las nulidades de (A−λI)^k para k=1,2,3 son 3,5,6. Da los tamaños de los bloques en orden decreciente.",
    "fields": [
      {
        "label": "Tamaños",
        "answer": [
          3,
          2,
          1
        ],
        "kind": "vector"
      }
    ],
    "solution": "Las diferencias 3,2,1 cuentan bloques de tamaño al menos 1,2,3. Hay un bloque de tamaño 3, uno de tamaño 2 y uno de tamaño 1. Suman 6.",
    "hints": [
      "Resta nulidades consecutivas, empezando en d₀=0."
    ]
  },
  {
    "id": "t5-15",
    "topic": 5,
    "level": "G",
    "lesson": "5-4",
    "title": "Un falso criterio",
    "prompt": "S=diag(0,−2,3). Da los tres menores principales líderes y decide si es semidefinida positiva.",
    "fields": [
      {
        "label": "Líderes",
        "answer": [
          0,
          0,
          0
        ],
        "kind": "vector"
      },
      {
        "label": "¿Semidefinida positiva?",
        "answer": "no",
        "kind": "choice",
        "options": [
          "sí",
          "no"
        ]
      }
    ],
    "solution": "Todos los líderes incluyen la primera entrada cero. Sin embargo q(e₂)=−2 y q(e₃)=3; es indefinida. Los líderes no negativos no bastan.",
    "hints": [
      "Busca un vector que refute la positividad."
    ]
  },
  {
    "id": "t5-16",
    "topic": 5,
    "level": "G",
    "lesson": "5-6",
    "title": "SVD de rango uno",
    "prompt": "A=[[3,4],[0,0]]. Da el único valor singular positivo, un vector singular derecho unitario correspondiente y la pseudoinversa.",
    "fields": [
      {
        "label": "σ",
        "answer": 5,
        "kind": "number"
      },
      {
        "label": "Vector derecho",
        "answer": [
          0.6,
          0.8
        ],
        "kind": "unitEigen",
        "matrix": [
          [
            9,
            12
          ],
          [
            12,
            16
          ]
        ],
        "eigenvalue": 25
      },
      {
        "label": "A⁺",
        "answer": [
          [
            0.12,
            0
          ],
          [
            0.16,
            0
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "AᵀA tiene autovalores 25 y 0. Se puede tomar v=(3/5,4/5), u=(1,0). Entonces A⁺=v(1/5)uᵀ. Cambiar ambos signos conserva la SVD.",
    "hints": [
      "Usa AᵀA para hallar la dirección derecha."
    ]
  },
  {
    "id": "t5-17",
    "topic": 5,
    "level": "G",
    "lesson": "5-7",
    "title": "Pseudoinversa y residuo",
    "prompt": "A=[[1,1],[0,0]], b=(4,3). Calcula el minimizador de menor norma, el residuo b−Ax y su norma.",
    "fields": [
      {
        "label": "x mínimo",
        "answer": [
          2,
          2
        ],
        "kind": "vector"
      },
      {
        "label": "Residuo",
        "answer": [
          0,
          3
        ],
        "kind": "vector"
      },
      {
        "label": "Norma residual",
        "answer": 3,
        "kind": "number"
      }
    ],
    "solution": "El mejor ajuste es (4,0), así x+y=4. La menor norma se alcanza repartiendo por igual: (2,2). El componente 3 no puede explicarse por la imagen.",
    "hints": [
      "Separa proyección de b y selección de coeficientes."
    ]
  },
  {
    "id": "t5-18",
    "topic": 5,
    "level": "G",
    "lesson": "5-1",
    "title": "Potencia mediante semejanza",
    "prompt": "A=[[2,1],[0,4]]. Calcula A⁴ y justifica usando una base de autovectores.",
    "fields": [
      {
        "label": "A⁴",
        "answer": [
          [
            16,
            120
          ],
          [
            0,
            256
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "Los autovectores son (1,0) para λ=2 y (1/2,1) para λ=4, así P=[[1,1/2],[0,1]] y D=diag(2,4). Entonces A⁴=PD⁴P⁻¹: las diagonales son 2⁴=16 y 4⁴=256, y la entrada superior derecha es (4⁴−2⁴)/2=120.",
    "hints": [
      "La base propia permite elevar solo D."
    ]
  },
  {
    "id": "t1-19",
    "topic": 1,
    "level": "N",
    "lesson": "1-4",
    "title": "Notación científica",
    "prompt": "Escribe 0,004560 como s·10ᵏ con 1≤s<10. Da s, k y el número de cifras significativas de la escritura original.",
    "fields": [
      {
        "label": "s",
        "answer": 4.56,
        "kind": "number"
      },
      {
        "label": "k",
        "answer": -3,
        "kind": "number"
      },
      {
        "label": "Cifras significativas",
        "answer": 4,
        "kind": "number"
      }
    ],
    "solution": "0,004560=4,560·10⁻³. Los ceros iniciales no cuentan y el cero final expresa precisión: cuatro cifras.",
    "hints": [
      "Empieza a contar en el primer dígito no nulo."
    ]
  },
  {
    "id": "t1-20",
    "topic": 1,
    "level": "M",
    "lesson": "1-4",
    "title": "Mantisa binaria limitada",
    "prompt": "El modelo binario guarda cuatro cifras significativas de mantisa. Redondea el valor exacto (1.1011)₂·2³ al más cercano con empate al par. Da primero el valor exacto y luego el redondeado en decimal.",
    "fields": [
      {
        "label": "Exacto",
        "answer": 13.5,
        "kind": "number"
      },
      {
        "label": "Redondeado",
        "answer": 14,
        "kind": "number"
      }
    ],
    "solution": "La mantisa exacta vale 1+1/2+1/8+1/16=1,6875; multiplicada por 8 da 13,5. Los vecinos de cuatro cifras son 13 y 14; la última cifra binaria de 14 es par (0).",
    "hints": [
      "Los vecinos de cuatro cifras son (1.101)₂·2³ y (1.110)₂·2³."
    ]
  },
  {
    "id": "t2-19",
    "topic": 2,
    "level": "M",
    "lesson": "2-4",
    "title": "Contraer un tensor",
    "prompt": "T tiene dos cortes T₁=[[1,2],[0,1]] y T₂=[[0,1],[−1,0]]. Con u=(1,2), v=(3,1), calcula wₖ=Σᵢⱼ Tₖᵢⱼ uᵢvⱼ.",
    "fields": [
      {
        "label": "w",
        "answer": [
          7,
          -5
        ],
        "kind": "vector"
      }
    ],
    "solution": "Para k=1: 1·1·3+2·1·1+0·2·3+1·2·1=7. Para k=2: 0+1·1·1−1·2·3+0=−5.",
    "hints": [
      "Contrae cada corte como uᵀTₖv."
    ]
  },
  {
    "id": "t2-20",
    "topic": 2,
    "level": "G",
    "lesson": "2-3",
    "title": "Antisimetría de tres índices",
    "prompt": "T es antisimétrico de tres ejes de longitud 3 y T₁₂₃=5. Calcula T₂₁₃, T₃₁₂ y T₁₁₂.",
    "fields": [
      {
        "label": "T₂₁₃",
        "answer": -5,
        "kind": "number"
      },
      {
        "label": "T₃₁₂",
        "answer": 5,
        "kind": "number"
      },
      {
        "label": "T₁₁₂",
        "answer": 0,
        "kind": "number"
      }
    ],
    "solution": "Intercambiar 1 y 2 cambia signo. (3,1,2) es una permutación par, con dos intercambios: conserva signo. Dos índices iguales fuerzan cero.",
    "hints": [
      "Cuenta paridad de intercambios y comprueba índices repetidos."
    ]
  },
  {
    "id": "t3-19",
    "topic": 3,
    "level": "M",
    "lesson": "3-6",
    "title": "Reducir una potencia",
    "prompt": "A es 2×2 con traza 4 y determinante 3. Por Cayley–Hamilton, escribe A³=αA+βI. Da α y β.",
    "fields": [
      {
        "label": "α;β",
        "answer": [
          13,
          -12
        ],
        "kind": "vector"
      }
    ],
    "solution": "A²=4A−3I. Multiplica por A y sustituye: A³=4(4A−3I)−3A=13A−12I.",
    "hints": [
      "La constante del polinomio multiplica a I."
    ]
  },
  {
    "id": "t3-20",
    "topic": 3,
    "level": "G",
    "lesson": "3-6",
    "title": "Una inversa sin Gauss",
    "prompt": "A=[[4,1],[2,1]]. Usa Cayley–Hamilton para calcular A⁻¹ y compruébala por multiplicación.",
    "fields": [
      {
        "label": "A⁻¹",
        "answer": [
          [
            0.5,
            -0.5
          ],
          [
            -1,
            2
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "Traza 5, determinante 2. La identidad A²−5A+2I=0 da A⁻¹=(5I−A)/2=[[1/2,−1/2],[−1,2]].",
    "hints": [
      "Multiplica la identidad por la inversa y despeja."
    ]
  },
  {
    "id": "t4-19",
    "topic": 4,
    "level": "G",
    "lesson": "4-3",
    "title": "QR adaptada al rango",
    "prompt": "A=[[1,2,4],[0,0,0]], b=(5,2). Da una Qᵣ con una columna ortonormal que genere la imagen (como un vector), el minimizador de menor norma y la norma del residuo.",
    "fields": [
      {
        "label": "Columna Qᵣ",
        "answer": [
          1,
          0
        ],
        "kind": "unitSpan",
        "matrix": [
          [
            1,
            2,
            4
          ],
          [
            0,
            0,
            0
          ]
        ]
      },
      {
        "label": "x mínimo",
        "answer": [
          0.23809523809523808,
          0.47619047619047616,
          0.9523809523809523
        ],
        "kind": "vector"
      },
      {
        "label": "Norma residual",
        "answer": 2,
        "kind": "number"
      }
    ],
    "solution": "Puede elegirse Qᵣ=e₁ y Rᵣ=(1 2 4). El mejor ajuste exige x₁+2x₂+4x₃=5. La solución mínima reparte 5 entre los coeficientes de (1,2,4) en proporción inversa a sus cuadrados: (5/21)(1,2,4)=(5/21,10/21,20/21). Residuo (0,2).",
    "hints": [
      "Proyecta b sobre la imagen y reparte la solución en la dirección fila."
    ]
  },
  {
    "id": "t1-21",
    "topic": 1,
    "level": "M",
    "lesson": "1-1",
    "title": "Unión, intersección y producto",
    "prompt": "A={1,2,3} y B={2,3,4}. Da A∩B, A∪B y el cardinal de A×B. Los elementos de un conjunto se separan con punto y coma.",
    "fields": [
      {
        "label": "A ∩ B",
        "answer": [
          2,
          3
        ],
        "kind": "set"
      },
      {
        "label": "A ∪ B",
        "answer": [
          1,
          2,
          3,
          4
        ],
        "kind": "set"
      },
      {
        "label": "|A × B|",
        "answer": 12,
        "kind": "number"
      }
    ],
    "solution": "Los comunes son 2 y 3; la unión tiene cuatro elementos. Cada uno de los 3 elementos de A se empareja con cada uno de los 4 de B: 3·4=12.",
    "hints": [
      "Une primero y cuenta después."
    ]
  },
  {
    "id": "t1-22",
    "topic": 1,
    "level": "G",
    "lesson": "1-1",
    "title": "Dominio y rango de una relación",
    "prompt": "R={(1,2),(2,3)} es una relación sobre {1,2,3}. Da el dominio, el rango y el cardinal de A×A con A={1,2,3}.",
    "fields": [
      {
        "label": "Dominio",
        "answer": [
          1,
          2
        ],
        "kind": "set"
      },
      {
        "label": "Rango",
        "answer": [
          2,
          3
        ],
        "kind": "set"
      },
      {
        "label": "|A × A|",
        "answer": 9,
        "kind": "number"
      }
    ],
    "solution": "Dominio y rango son las primeras y las segundas coordenadas. Una relación sobre A es un subconjunto de A×A, que tiene 3·3=9 pares.",
    "hints": [
      "El rango son las segundas coordenadas."
    ]
  },
  {
    "id": "t1-23",
    "topic": 1,
    "level": "N",
    "lesson": "1-2",
    "title": "Composición e inversa",
    "prompt": "Para f(x)=2x+1, calcula f(f(0)) y f⁻¹(5).",
    "fields": [
      {
        "label": "f(f(0))",
        "answer": 3,
        "kind": "number"
      },
      {
        "label": "f⁻¹(5)",
        "answer": 2,
        "kind": "number"
      }
    ],
    "solution": "f(f(0))=f(1)=3. Para deshacer 2x+1=5 despejamos x=2.",
    "hints": [
      "La composición se aplica de dentro afuera."
    ]
  },
  {
    "id": "t2-21",
    "topic": 2,
    "level": "M",
    "lesson": "2-1",
    "title": "Dependencias en una familia",
    "prompt": "Considera (1,1,2), (1,0,1) y (2,1,3) en ℝ³. Da el rango de la familia y una base de su núcleo.",
    "fields": [
      {
        "label": "Rango",
        "answer": 2,
        "kind": "number"
      },
      {
        "label": "Base del núcleo",
        "answer": [
          [
            -1,
            -1,
            1
          ]
        ],
        "kind": "basis"
      }
    ],
    "solution": "El tercero es la suma de los dos primeros: (1,1,2)+(1,0,1)=(2,1,3). Esa es la relación no trivial v₁+v₂−v₃=0, de modo que el rango es 2 y el núcleo es la recta de (−1,−1,1).",
    "hints": [
      "Busca una combinación no trivial que dé cero."
    ]
  },
  {
    "id": "t2-22",
    "topic": 2,
    "level": "M",
    "lesson": "2-3",
    "title": "Trasponer y adjuntar",
    "prompt": "Para A=[[1,i],[2,3]], da Aᵀ y A*. Como hay entradas complejas, escribe de cada matriz la parte real y la parte imaginaria, con una fila por línea y componentes separadas por punto y coma.",
    "fields": [
      {
        "label": "Aᵀ (parte real)",
        "answer": [
          [
            1,
            2
          ],
          [
            0,
            3
          ]
        ],
        "kind": "matrix"
      },
      {
        "label": "Aᵀ (parte imaginaria)",
        "answer": [
          [
            0,
            0
          ],
          [
            1,
            0
          ]
        ],
        "kind": "matrix"
      },
      {
        "label": "A* (parte real)",
        "answer": [
          [
            1,
            2
          ],
          [
            0,
            3
          ]
        ],
        "kind": "matrix"
      },
      {
        "label": "A* (parte imaginaria)",
        "answer": [
          [
            0,
            0
          ],
          [
            -1,
            0
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "Trasponer intercambia filas y columnas sin conjugar: Aᵀ=[[1,2],[i,3]]. La adjunta además conjuga, así que A*=[[1,2],[−i,3]]. Solo difieren en la posición (2,1), donde la imaginaria pasa de 1 a −1.",
    "hints": [
      "Sobre reales coinciden; aquí no."
    ]
  },
  {
    "id": "t2-23",
    "topic": 2,
    "level": "G",
    "lesson": "2-4",
    "title": "Adjoint of a product",
    "prompt": "A=[[1,2],[0,1]] y B=[[2,0],[1,3]]. Calcula (AB)*.",
    "fields": [
      {
        "label": "(AB)*",
        "answer": [
          [
            4,
            1
          ],
          [
            6,
            3
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "AB=[[4,6],[1,3]], y su adjunta es [[4,1],[6,3]]. Comprueba que coincide con B*A*: el orden se invierte.",
    "hints": [
      "Conmuta el orden de los factores."
    ]
  },
  {
    "id": "t2-24",
    "topic": 2,
    "level": "G",
    "lesson": "2-6",
    "title": "Ortogonalidad y Pitágoras",
    "prompt": "u=(1,2) y v=(2,−1) en ℝ². Comprueba que son ortogonales, calcula sus normas y el producto escalar.",
    "fields": [
      {
        "label": "u*v",
        "answer": 0,
        "kind": "number"
      },
      {
        "label": "‖u‖",
        "answer": 2.23606797749979,
        "kind": "number"
      },
      {
        "label": "‖v‖",
        "answer": 2.23606797749979,
        "kind": "number"
      },
      {
        "label": "‖u+v‖",
        "answer": 3.1622776601683795,
        "kind": "number"
      }
    ],
    "solution": "uᵀv=1·2+2·(−1)=0, luego son ortogonales. Ambas normas valen √5 y ‖u+v‖=‖(3,1)‖=√10, que coincide con √(5+5) por el teorema de Pitágoras.",
    "hints": [
      "Multiplica antes de comparar."
    ]
  },
  {
    "id": "t2-25",
    "topic": 2,
    "level": "N",
    "lesson": "2-7",
    "title": "Normalizar un vector",
    "prompt": "Normaliza u=(1,2,2) a longitud 1.",
    "fields": [
      {
        "label": "Vector unitario",
        "answer": [
          0.3333333333333333,
          0.6666666666666666,
          0.6666666666666666
        ],
        "kind": "vector"
      }
    ],
    "solution": "‖u‖=√(1+4+4)=3, así que el vector unitario es (1/3,2/3,2/3).",
    "hints": [
      "Divide cada componente por la norma."
    ]
  },
  {
    "id": "t2-26",
    "topic": 2,
    "level": "N",
    "lesson": "2-8",
    "title": "Proyectar sobre una recta",
    "prompt": "Proyecta b=(2,4) sobre la recta generada por u=(1,1) y calcula la distancia.",
    "fields": [
      {
        "label": "Proyección",
        "answer": [
          3,
          3
        ],
        "kind": "vector"
      },
      {
        "label": "Distancia",
        "answer": 1.4142135623730951,
        "kind": "number"
      }
    ],
    "solution": "El coeficiente es (uᵀb)/(uᵀu)=6/2=3, luego p=(3,3). El residuo (−1,1) tiene norma √2.",
    "hints": [
      "La distancia es la norma del residuo."
    ]
  },
  {
    "id": "t3-21",
    "topic": 3,
    "level": "M",
    "lesson": "3-1",
    "title": "Construir la matriz con imágenes",
    "prompt": "f(x,y)=(2x−y,x+3y). Escribe su matriz canónica y calcula f(1,1).",
    "fields": [
      {
        "label": "Matriz",
        "answer": [
          [
            2,
            -1
          ],
          [
            1,
            3
          ]
        ],
        "kind": "matrix"
      },
      {
        "label": "f(1;1)",
        "answer": [
          1,
          4
        ],
        "kind": "vector"
      }
    ],
    "solution": "f(e₁)=(2,1) y f(e₂)=(−1,3) son las columnas. Luego f(1,1)=(1,4).",
    "hints": [
      "Las imágenes de la base van en columnas."
    ]
  },
  {
    "id": "t3-22",
    "topic": 3,
    "level": "N",
    "lesson": "3-6",
    "title": "La traza y el determinante bastan",
    "prompt": "Una matriz 2×2 tiene traza 7 y determinante 10. Por Cayley–Hamilton, escribe A²=αA+βI. Da α y β.",
    "fields": [
      {
        "label": "α;β",
        "answer": [
          7,
          -10
        ],
        "kind": "vector"
      }
    ],
    "solution": "El polinomio característico es t²−7t+10, de modo que A²=7A−10I: α=7 y β=−10.",
    "hints": [
      "El coeficiente de A es la traza con signo cambiado."
    ]
  },
  {
    "id": "t4-20",
    "topic": 4,
    "level": "N",
    "lesson": "4-5",
    "title": "Leer una triangular",
    "prompt": "A=[[2,1,0],[0,3,4],[0,0,1]] es triangular superior. Da sus autovalores, su traza y su determinante.",
    "fields": [
      {
        "label": "Autovalores",
        "answer": [
          1,
          2,
          3
        ],
        "kind": "set"
      },
      {
        "label": "Traza",
        "answer": 6,
        "kind": "number"
      },
      {
        "label": "Determinante",
        "answer": 6,
        "kind": "number"
      }
    ],
    "solution": "Los autovalores de una triangular son su diagonal: 2, 3 y 1. La traza es 2+3+1=6 y el determinante 2·3·1=6.",
    "hints": [
      "La diagonal contiene todo el espectro."
    ]
  },
  {
    "id": "t5-19",
    "topic": 5,
    "level": "M",
    "lesson": "5-1",
    "title": "Similitud o congruencia",
    "prompt": "S=diag(2,5) y C=diag(3,1). Calcula CᵀSC, que es una congruencia, y explica por qué no es una similitud.",
    "fields": [
      {
        "label": "CᵀSC",
        "answer": [
          [
            18,
            0
          ],
          [
            0,
            5
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "CᵀSC=diag(18,5). Por congruencia cambian las entradas de la forma: los autovalores 2 y 5 no se conservan. Por similitud se conservarían, y CᵀSC no es semejante a S.",
    "hints": [
      "La congruencia no conserva los valores concretos."
    ]
  },
  {
    "id": "t5-20",
    "topic": 5,
    "level": "N",
    "lesson": "5-2",
    "title": "El multiplicador de eliminación",
    "prompt": "Para A=[[6,3],[3,5]], el multiplicador para anular la entrada 3 situada bajo el pivote 6 es m. Da m y la fila residual.",
    "fields": [
      {
        "label": "m",
        "answer": 0.5,
        "kind": "number"
      },
      {
        "label": "Fila residual",
        "answer": [
          0,
          3.5
        ],
        "kind": "vector"
      }
    ],
    "solution": "m=3/6=1/2. La segunda fila residual es (3,5)−(1/2)(6,3)=(0,7/2).",
    "hints": [
      "Guarda el multiplicador, no el negativo."
    ]
  },
  {
    "id": "t5-21",
    "topic": 5,
    "level": "G",
    "lesson": "5-2",
    "title": "LDL* y Cholesky",
    "prompt": "A=[[4,1],[1,3]] es hermítica definida positiva. Da la factorización A=LDL* con D diagonal y, en consecuencia, un factor C con A=CC*.",
    "fields": [
      {
        "label": "D",
        "answer": [
          [
            4,
            0
          ],
          [
            0,
            2.75
          ]
        ],
        "kind": "matrix"
      },
      {
        "label": "C",
        "answer": [
          [
            2,
            0
          ],
          [
            0.5,
            1.6583123951777
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "El multiplicador es 1/4 y el segundo pivote 3−1/4=11/4, así D=diag(4,11/4) y L=[[1,0],[1/4,1]]. Tomando C=LD^{1/2} se obtiene C=[[2,0],[1/2,√11/2]], y CC*=A.",
    "hints": [
      "C=LD^{1/2}: raíces de los pivotes de D."
    ]
  },
  {
    "id": "t5-22",
    "topic": 5,
    "level": "G",
    "lesson": "5-3",
    "title": "Raíz cuadrada de una hermítica",
    "prompt": "Para A=[[5,1],[1,5]], da la raíz cuadrada semidefinida positiva A^{1/2}.",
    "fields": [
      {
        "label": "A^{1/2}",
        "answer": [
          [
            2.224744871391589,
            0.22474487139158894
          ],
          [
            0.22474487139158894,
            2.224744871391589
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "Los autovalores son 6 y 4, con direcciones (1,1) y (1,−1). Así A^{1/2}=Q diag(√6,2)Qᵀ, que da la matriz indicada. Comprueba que su cuadrado es A.",
    "hints": [
      "Eleva a la mitad en la diagonal de D."
    ]
  },
  {
    "id": "t5-23",
    "topic": 5,
    "level": "M",
    "lesson": "5-7",
    "title": "Ajuste con rango deficiente",
    "prompt": "A=[[1,1],[1,1]] y b=(2,4). Da la pseudoinversa, el minimizador de menor norma, el residuo y su norma.",
    "fields": [
      {
        "label": "A⁺",
        "answer": [
          [
            0.25,
            0.25
          ],
          [
            0.25,
            0.25
          ]
        ],
        "kind": "matrix"
      },
      {
        "label": "x mínimo",
        "answer": [
          1.5,
          1.5
        ],
        "kind": "vector"
      },
      {
        "label": "Residuo",
        "answer": [
          -1,
          1
        ],
        "kind": "vector"
      },
      {
        "label": "Norma residual",
        "answer": 1.4142135623730951,
        "kind": "number"
      }
    ],
    "solution": "A=[[1,1],[1,1]] se escribe u vᵀ con u=v=(1,1)ᵀ, y de ahí A⁺=v uᵀ/(‖u‖²‖v‖²)=(1/4)[[1,1],[1,1]]. Aquí A no tiene filas independientes, así que la fórmula A⁺=A*(AA*)⁻¹ no se puede aplicar. El ajuste es (3,3) y el residuo (−1,1) tiene norma √2.",
    "hints": [
      "Separa proyección y selección de coeficientes."
    ]
  },
  {
    "id": "t5-24",
    "topic": 5,
    "level": "N",
    "lesson": "5-3",
    "title": "Autovalores de una simétrica",
    "prompt": "Para A=[[5,1],[1,5]], da el conjunto de autovalores.",
    "fields": [
      {
        "label": "Autovalores",
        "answer": [
          4,
          6
        ],
        "kind": "set"
      }
    ],
    "solution": "det(A−λI)=(5−λ)²−1=(λ−4)(λ−6).",
    "hints": [
      "Factoriza una diferencia de cuadrados."
    ]
  },
  {
    "id": "e12-1",
    "exam": "e12",
    "topic": 2,
    "level": "N",
    "lesson": "",
    "title": "Pregunta 1",
    "prompt": "Convierte $(10111)_2$ a decimal y calcula el módulo de 5−12i.",
    "fields": [
      {
        "label": "Decimal",
        "answer": 23,
        "kind": "number"
      },
      {
        "label": "Módulo",
        "answer": 13,
        "kind": "number"
      }
    ],
    "solution": "16+4+2+1=23; √(25+144)=13.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "e12-2",
    "exam": "e12",
    "topic": 2,
    "level": "N",
    "lesson": "",
    "title": "Pregunta 2",
    "prompt": "A=[[1,2],[3,1]], x=(2,−1). Calcula Ax y la entrada (1,1) de A⁻¹.",
    "fields": [
      {
        "label": "Ax",
        "answer": [
          0,
          5
        ],
        "kind": "vector"
      },
      {
        "label": "Entrada (1,1) de A⁻¹",
        "answer": -0.2,
        "kind": "number"
      }
    ],
    "solution": "Ax=(2−2,6−1)=(0,5). La fórmula 2×2 de la inversa da la entrada 1/(1−6)=−1/5.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "e12-3",
    "exam": "e12",
    "topic": 2,
    "level": "M",
    "lesson": "",
    "title": "Pregunta 3",
    "prompt": "Calcula (2−i)/(1+2i) y las coordenadas de (4,2) en B=((1,1),(1,−1)).",
    "fields": [
      {
        "label": "Cociente real; imaginaria",
        "answer": [
          0,
          -1
        ],
        "kind": "vector"
      },
      {
        "label": "Coordenadas",
        "answer": [
          3,
          1
        ],
        "kind": "vector"
      }
    ],
    "solution": "El cociente es −i porque (−i)(1+2i)=2−i. Las coordenadas resuelven a+b=4,a−b=2: (3,1).",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "e12-4",
    "exam": "e12",
    "topic": 2,
    "level": "M",
    "lesson": "",
    "title": "Pregunta 4",
    "prompt": "Proyecta (1,2,3) sobre la recta generada por (1,1,1). Da la distancia.",
    "fields": [
      {
        "label": "Proyección",
        "answer": [
          2,
          2,
          2
        ],
        "kind": "vector"
      },
      {
        "label": "Distancia",
        "answer": 1.4142135623730951,
        "kind": "number"
      }
    ],
    "solution": "Coeficiente 6/3=2; residuo (−1,0,1), norma √2.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "e12-5",
    "exam": "e12",
    "topic": 2,
    "level": "G",
    "lesson": "",
    "title": "Pregunta 5",
    "prompt": "Para z³=−8, da módulo y argumentos en [0,2π) como coeficientes de π. Justifica que no faltan raíces.",
    "fields": [
      {
        "label": "Módulo",
        "answer": 2,
        "kind": "number"
      },
      {
        "label": "Coeficientes",
        "answer": [
          0.3333333333333333,
          1,
          1.6666666666666667
        ],
        "kind": "set"
      }
    ],
    "solution": "−8=8e^{iπ}. Módulo 2 y argumentos (π+2kπ)/3 para k=0,1,2: π/3,π,5π/3; son tres raíces distintas.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "e12-6",
    "exam": "e12",
    "topic": 2,
    "level": "G",
    "lesson": "",
    "title": "Pregunta 6",
    "prompt": "En ℝ³, S={x−y+z=0}. Da una base de S y proyecta b=(2,0,1) sobre S.",
    "fields": [
      {
        "label": "Base",
        "answer": [
          [
            1,
            1,
            0
          ],
          [
            -1,
            0,
            1
          ]
        ],
        "kind": "basis"
      },
      {
        "label": "Proyección",
        "answer": [
          1,
          1,
          0
        ],
        "kind": "vector"
      }
    ],
    "solution": "Normal n=(1,−1,1), nᵀb=3 y nᵀn=3. Proyección b−n=(1,1,0). Los dos vectores dados satisfacen la ecuación y son independientes.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "e34-1",
    "exam": "e34",
    "topic": 4,
    "level": "N",
    "lesson": "",
    "title": "Pregunta 1",
    "prompt": "A tiene formato 3×5 y rango 2. Da las nulidades de A y A*.",
    "fields": [
      {
        "label": "Nulidad A",
        "answer": 3,
        "kind": "number"
      },
      {
        "label": "Nulidad A*",
        "answer": 1,
        "kind": "number"
      }
    ],
    "solution": "5−2=3 y 3−2=1.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "e34-2",
    "exam": "e34",
    "topic": 4,
    "level": "N",
    "lesson": "",
    "title": "Pregunta 2",
    "prompt": "Resuelve 2x−y=1, 3y=9 y calcula el determinante de su matriz.",
    "fields": [
      {
        "label": "x;y",
        "answer": [
          2,
          3
        ],
        "kind": "vector"
      },
      {
        "label": "Determinante",
        "answer": 6,
        "kind": "number"
      }
    ],
    "solution": "y=3, x=2. Matriz triangular con producto de diagonal 6.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "e34-3",
    "exam": "e34",
    "topic": 4,
    "level": "M",
    "lesson": "",
    "title": "Pregunta 3",
    "prompt": "A=[[1,2,3],[0,1,2]]. Da una base del núcleo y el rango.",
    "fields": [
      {
        "label": "Base",
        "answer": [
          [
            1,
            -2,
            1
          ]
        ],
        "kind": "basis"
      },
      {
        "label": "Rango",
        "answer": 2,
        "kind": "number"
      }
    ],
    "solution": "y=−2z, x=z. Dos pivotes y núcleo de dimensión 1.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "e34-4",
    "exam": "e34",
    "topic": 4,
    "level": "M",
    "lesson": "",
    "title": "Pregunta 4",
    "prompt": "Factoriza A=[[2,2],[6,8]]=LU con diagonal de L unitaria.",
    "fields": [
      {
        "label": "L",
        "answer": [
          [
            1,
            0
          ],
          [
            3,
            1
          ]
        ],
        "kind": "matrix"
      },
      {
        "label": "U",
        "answer": [
          [
            2,
            2
          ],
          [
            0,
            2
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "Multiplicador 3; la segunda fila residual es (0,2). Comprueba LU=A.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "e34-5",
    "exam": "e34",
    "topic": 4,
    "level": "G",
    "lesson": "",
    "title": "Pregunta 5",
    "prompt": "Ajusta α+βt a (0,0),(1,2),(2,1). Da coeficientes y suma de cuadrados residual.",
    "fields": [
      {
        "label": "α;β",
        "answer": [
          0.5,
          0.5
        ],
        "kind": "vector"
      },
      {
        "label": "Suma residual",
        "answer": 1.5,
        "kind": "number"
      }
    ],
    "solution": "Normales: 3α+3β=3,3α+5β=4. Da α=β=1/2. Residuo (−1/2,1,−1/2), cuadrados suman 3/2.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "e34-6",
    "exam": "e34",
    "topic": 4,
    "level": "G",
    "lesson": "",
    "title": "Pregunta 6",
    "prompt": "Aₐ=[[1,1],[2,a]], b=(1,3). Discute el valor excepcional de a y da la solución para a=3.",
    "fields": [
      {
        "label": "a excepcional",
        "answer": 2,
        "kind": "number"
      },
      {
        "label": "Tipo excepcional",
        "answer": "incompatible",
        "kind": "choice",
        "options": [
          "única solución",
          "infinitas soluciones",
          "incompatible"
        ]
      },
      {
        "label": "Solución a=3",
        "answer": [
          0,
          1
        ],
        "kind": "vector"
      }
    ],
    "solution": "Restar 2 veces la primera ecuación da (a−2)y=1. Si a=2 es imposible. Si a=3, y=1,x=0.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "e5-1",
    "exam": "e5",
    "topic": 5,
    "level": "N",
    "lesson": "",
    "title": "Pregunta 1",
    "prompt": "A=diag(−3,0,2). Da su rango y sus valores singulares en orden decreciente.",
    "fields": [
      {
        "label": "Rango",
        "answer": 2,
        "kind": "number"
      },
      {
        "label": "Valores",
        "answer": [
          3,
          2,
          0
        ],
        "kind": "vector"
      }
    ],
    "solution": "Dos entradas no nulas. Los singulares son los módulos ordenados.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "e5-2",
    "exam": "e5",
    "topic": 5,
    "level": "N",
    "lesson": "",
    "title": "Pregunta 2",
    "prompt": "Una hermítica tiene autovalores −2,−1,0,4. Da su inercia y clasifícala.",
    "fields": [
      {
        "label": "Inercia",
        "answer": [
          1,
          2,
          1
        ],
        "kind": "vector"
      },
      {
        "label": "Clasificación",
        "answer": "indefinida",
        "kind": "choice",
        "options": [
          "definida positiva",
          "semidefinida positiva",
          "indefinida"
        ]
      }
    ],
    "solution": "Toma signos positivos y negativos: indefinida. Inercia (1,2,1).",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "e5-3",
    "exam": "e5",
    "topic": 5,
    "level": "M",
    "lesson": "",
    "title": "Pregunta 3",
    "prompt": "Calcula la Cholesky con diagonal positiva de [[9,3],[3,2]].",
    "fields": [
      {
        "label": "C",
        "answer": [
          [
            3,
            0
          ],
          [
            1,
            1
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "c₁₁=3, c₂₁=1, c₂₂=√(2−1)=1.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "e5-4",
    "exam": "e5",
    "topic": 5,
    "level": "M",
    "lesson": "",
    "title": "Pregunta 4",
    "prompt": "J=[[3,1],[0,3]]. Calcula J² y la dimensión de su autoespacio.",
    "fields": [
      {
        "label": "J²",
        "answer": [
          [
            9,
            6
          ],
          [
            0,
            9
          ]
        ],
        "kind": "matrix"
      },
      {
        "label": "Dimensión",
        "answer": 1,
        "kind": "number"
      }
    ],
    "solution": "J=3I+N, N²=0, así J²=9I+6N. El autoespacio es span e₁.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "e5-5",
    "exam": "e5",
    "topic": 5,
    "level": "G",
    "lesson": "",
    "title": "Pregunta 5",
    "prompt": "A=[[2,0,0],[0,0,0]], b=(6,5). Da la pseudoinversa, el minimizador de menor norma y la norma del residuo.",
    "fields": [
      {
        "label": "A⁺",
        "answer": [
          [
            0.5,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ],
        "kind": "matrix"
      },
      {
        "label": "x mínimo",
        "answer": [
          3,
          0,
          0
        ],
        "kind": "vector"
      },
      {
        "label": "Norma residual",
        "answer": 5,
        "kind": "number"
      }
    ],
    "solution": "Solo se invierte el valor 2. x=(3,0,0) da Ax=(6,0), residuo (0,5); variables libres deben ser cero para mínima norma.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "e5-6",
    "exam": "e5",
    "topic": 5,
    "level": "G",
    "lesson": "",
    "title": "Pregunta 6",
    "prompt": "Para λ único de multiplicidad 5, nulidades de potencias de A−λI: 2,4,5. Da tamaños Jordan. Si una matriz tiene singulares 6,2,1, da su error Frobenius al truncar a rango 1.",
    "fields": [
      {
        "label": "Bloques",
        "answer": [
          3,
          2
        ],
        "kind": "vector"
      },
      {
        "label": "Error",
        "answer": 2.23606797749979,
        "kind": "number"
      }
    ],
    "solution": "Con d₀=0, las diferencias d₁−d₀=2, d₂−d₁=2 y d₃−d₂=1 cuentan los bloques de tamaño ≥1, ≥2 y ≥3: hay un bloque de tamaño 3 y uno de tamaño 2, que suman 5. El error de truncación a rango 1 es √(2²+1²)=√5.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "sim-1",
    "exam": "sim",
    "topic": 5,
    "level": "G",
    "lesson": "",
    "title": "Pregunta 1",
    "prompt": "1. Resuelve z⁴=1: da las cuatro raíces como pares real/imaginaria (una fila por raíz, en cualquier orden). Calcula además (1−i)⁶ y explica el uso de la forma polar.",
    "fields": [
      {
        "label": "Raíces",
        "answer": [
          [
            1,
            0
          ],
          [
            0,
            1
          ],
          [
            -1,
            0
          ],
          [
            0,
            -1
          ]
        ],
        "kind": "rowsSet"
      },
      {
        "label": "Potencia real; imaginaria",
        "answer": [
          0,
          8
        ],
        "kind": "vector"
      }
    ],
    "solution": "Las raíces son e^{ikπ/2}, k=0,1,2,3: 1,i,−1,−i. (1−i)⁶=(√2)⁶e^{-3πi/2}=8i.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "sim-2",
    "exam": "sim",
    "topic": 5,
    "level": "G",
    "lesson": "",
    "title": "Pregunta 2",
    "prompt": "2. S={x+y+z=0}. Da una base, la matriz de proyección ortogonal y la proyección de (3,0,0). Justifica ortogonalidad del residuo.",
    "fields": [
      {
        "label": "Base",
        "answer": [
          [
            1,
            -1,
            0
          ],
          [
            1,
            0,
            -1
          ]
        ],
        "kind": "basis"
      },
      {
        "label": "P",
        "answer": [
          [
            0.6666666666666666,
            -0.3333333333333333,
            -0.3333333333333333
          ],
          [
            -0.3333333333333333,
            0.6666666666666666,
            -0.3333333333333333
          ],
          [
            -0.3333333333333333,
            -0.3333333333333333,
            0.6666666666666666
          ]
        ],
        "kind": "matrix"
      },
      {
        "label": "Proyección",
        "answer": [
          2,
          -1,
          -1
        ],
        "kind": "vector"
      }
    ],
    "solution": "Normal n=(1,1,1); P=I−nnᵀ/3. Aplicar a b da (2,−1,−1); residuo (1,1,1) es perpendicular al plano. Los vectores base son LI y satisfacen la ecuación.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "sim-3",
    "exam": "sim",
    "topic": 5,
    "level": "G",
    "lesson": "",
    "title": "Pregunta 3",
    "prompt": "3. A=[[1,0],[1,1],[1,2]], b=(1,0,2). Plantea normales, encuentra el minimizador y calcula norma residual. Explica por qué es único.",
    "fields": [
      {
        "label": "AᵀA",
        "answer": [
          [
            3,
            3
          ],
          [
            3,
            5
          ]
        ],
        "kind": "matrix"
      },
      {
        "label": "x óptimo",
        "answer": [
          0.5,
          0.5
        ],
        "kind": "vector"
      },
      {
        "label": "Norma residual",
        "answer": 1.224744871391589,
        "kind": "number"
      }
    ],
    "solution": "Aᵀb=(3,4), así x=(1/2,1/2). Ajuste (1/2,1,3/2), residuo (1/2,−1,1/2), norma √(3/2). Las columnas son LI y AᵀA es definida positiva: mínimo único.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  },
  {
    "id": "sim-4",
    "exam": "sim",
    "topic": 5,
    "level": "G",
    "lesson": "",
    "title": "Pregunta 4",
    "prompt": "4. A=[[2,1],[1,2]]. Da autovalores en orden decreciente, una matriz Q ortogonal que diagonalice A y la matriz inversa. Justifica positividad y relación con SVD.",
    "fields": [
      {
        "label": "Autovalores",
        "answer": [
          3,
          1
        ],
        "kind": "vector"
      },
      {
        "label": "Q",
        "answer": [
          [
            0.7071067811865476,
            0.7071067811865476
          ],
          [
            0.7071067811865476,
            -0.7071067811865476
          ]
        ],
        "kind": "spectral",
        "matrix": [
          [
            2,
            1
          ],
          [
            1,
            2
          ]
        ],
        "diagonal": [
          3,
          1
        ]
      },
      {
        "label": "Inversa",
        "answer": [
          [
            0.6666666666666666,
            -0.3333333333333333
          ],
          [
            -0.3333333333333333,
            0.6666666666666666
          ]
        ],
        "kind": "matrix"
      }
    ],
    "solution": "Autovalores 3 y 1 con direcciones (1,1) y (1,−1). Al normalizar se obtiene Q. A⁻¹=Q diag(1/3,1)Qᵀ=(1/3)[[2,−1],[−1,2]]. Es definida positiva; su diagonalización espectral es una SVD con U=V=Q.",
    "hints": [],
    "rubric": [
      "Planteamiento e hipótesis: 2 puntos.",
      "Método y desarrollo justificados: 5 puntos.",
      "Resultados y comprobación: 3 puntos."
    ]
  }
];
window.EXAMS = [
  {
    "id": "e12",
    "title": "Examen I · Escalares y estructura",
    "topics": [
      1,
      2
    ],
    "minutes": 90,
    "questions": [
      "e12-1",
      "e12-2",
      "e12-3",
      "e12-4",
      "e12-5",
      "e12-6"
    ]
  },
  {
    "id": "e34",
    "title": "Examen II · Aplicaciones y sistemas",
    "topics": [
      3,
      4
    ],
    "minutes": 100,
    "questions": [
      "e34-1",
      "e34-2",
      "e34-3",
      "e34-4",
      "e34-5",
      "e34-6"
    ]
  },
  {
    "id": "e5",
    "title": "Examen III · Diagonalización y síntesis",
    "topics": [
      5
    ],
    "minutes": 100,
    "questions": [
      "e5-1",
      "e5-2",
      "e5-3",
      "e5-4",
      "e5-5",
      "e5-6"
    ]
  },
  {
    "id": "sim",
    "title": "Simulacro · Cuatro preguntas de desarrollo",
    "topics": [
      1,
      2,
      3,
      4,
      5
    ],
    "minutes": 120,
    "questions": [
      "sim-1",
      "sim-2",
      "sim-3",
      "sim-4"
    ]
  }
];
