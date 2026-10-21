// ============================================================
// RECEITAS
// alimentos recebe uma lista de ids existentes em alimentos.js.
// Assim uma receita pode estar relacionada a vários alimentos.
// imagem é opcional. Exemplo: "imagens/receitas/mousse-maracuja.jpg"
// ============================================================

window.RECEITAS = [
  {
    id: "mousse-maracuja",
    nome: "Mousse de maracujá",
    tipo: "Doces e sobremesas",
    imagem: "imagens/receitas/moussi-maracuja.jfif",
    alimentos: ["maracuja"],
    tempo: "15 min",
    porcoes: "8 porções",
    restricoes: ["Vegetariana", "Sem glúten"],
    ingredientes: [
      "Polpa de 2 maracujás",
      "1 caixa de creme de leite",
      "1 caixa de leite condensado"
    ],
    preparo: [
      "Bata os ingredientes no liquidificador.",
      "Distribua a mistura em recipientes.",
      "Leve à geladeira até firmar."
    ],
    substituicoes: [
      {
        ingrediente: "Creme de leite",
        substituto: "Pode ser substituído por uma versão sem lactose ou alternativa vegetal adequada."
      },
      {
        ingrediente: "Leite condensado",
        substituto: "Pode ser usada uma versão sem lactose, quando necessário."
      }
    ]
  },
  {
    id: "suco-maracuja",
    nome: "Suco de maracujá",
    tipo: "Bebidas",
    imagem: "imagens/receitas/suco-maracuja.jfif",
    alimentos: ["maracuja"],
    tempo: "5 min",
    porcoes: "3 copos",
    restricoes: ["Vegana", "Sem lactose"],
    ingredientes: [
      "Polpa de 2 maracujás",
      "700 ml de água",
      "Açúcar ou outro adoçante, se desejar"
    ],
    preparo: [
      "Bata rapidamente a polpa com a água.",
      "Coe, se desejar.",
      "Sirva gelado."
    ],
    substituicoes: []
  },
  {
    id: "feijao-simples",
    nome: "Feijão simples",
    tipo: "Pratos principais",
    imagem: "imagens/receitas/.webp",
    alimentos: ["feijao"],
    tempo: "40 min",
    porcoes: "6 porções",
    restricoes: ["Vegetariana", "Sem glúten"],
    ingredientes: [
      "2 xícaras de feijão",
      "Água para o cozimento",
      "2 dentes de alho",
      "1/2 cebola",
      "1 colher de sopa de óleo",
      "Sal a gosto"
    ],
    preparo: [
      "Deixe o feijão de molho quando possível.",
      "Cozinhe até que os grãos estejam macios.",
      "Refogue alho e cebola.",
      "Misture o refogado ao feijão e ajuste o sal."
    ],
    substituicoes: [
      {
        ingrediente: "Óleo",
        substituto: "Pode ser substituído por azeite."
      }
    ]
  },
  {
    id: "salada-grao-de-bico",
    nome: "Salada de grão-de-bico",
    tipo: "Saladas",
    imagem: "imagens/receitas/grao-de-bico.jpg",
    alimentos: ["grao-de-bico"],
    tempo: "20 min",
    porcoes: "4 porções",
    restricoes: ["Vegana", "Sem lactose"],
    ingredientes: [
      "2 xícaras de grão-de-bico cozido",
      "1 tomate picado",
      "1/2 cebola picada",
      "Cheiro-verde a gosto",
      "Azeite e limão a gosto"
    ],
    preparo: [
      "Misture o grão-de-bico, o tomate e a cebola.",
      "Tempere com azeite e limão.",
      "Finalize com cheiro-verde e sirva."
    ],
    substituicoes: []
  },
  {
    id: "bolo-banana-aveia",
    nome: "Bolo de banana com aveia",
    tipo: "Café da manhã",
    imagem: "imagens/receitas/bolo-de-banana.jpg",
    alimentos: ["aveia"],
    tempo: "45 min",
    porcoes: "8 porções",
    restricoes: ["Vegetariana"],
    ingredientes: [
      "3 bananas maduras",
      "2 ovos",
      "1 xícara de aveia em flocos",
      "1 colher de chá de fermento"
    ],
    preparo: [
      "Amasse as bananas.",
      "Misture os ovos e a aveia.",
      "Acrescente o fermento por último.",
      "Asse até dourar e estar completamente cozido."
    ],
    substituicoes: []
  },
{
  id: "tofu-grelhado-ervas",
  nome: "Tofu grelhado com ervas",
  tipo: "Pratos principais",
  imagem: "imagens/receitas/tofu-grelhado.png",
  alimentos: ["tofu", "limao", "alho", "salsinha"],
  tempo: "20 min",
  porcoes: "4 porções",
  restricoes: [
    "Vegetariana",
    "Vegana",
    "Sem lactose",
    "Sem glúten"
  ],
  ingredientes: [
    "1 bloco (cerca de 400 g) de tofu firme ou extra firme",
    "2 colheres de sopa de azeite de oliva",
    "1 colher de sopa de suco de limão",
    "1 colher de chá de alho em pó ou 1 dente de alho picado",
    "1 colher de sopa de ervas secas ou frescas picadas, como salsinha, tomilho ou orégano",
    "Sal a gosto",
    "Pimenta-do-reino a gosto"
  ],
  preparo: [
    "Seque o bloco de tofu com papel-toalha para retirar o excesso de água e corte em fatias grossas.",
    "Em uma tigela, misture o azeite, o suco de limão, o alho, as ervas, o sal e a pimenta-do-reino.",
    "Pincele a mistura em todos os pedaços de tofu.",
    "Aqueça uma frigideira antiaderente em fogo médio.",
    "Coloque as fatias de tofu e grelhe por cerca de 3 a 5 minutos de cada lado, até ficarem douradas."
  ],
  substituicoes: [
    {
      ingrediente: "Alho em pó",
      substituto: "1 dente de alho picado"
    },
    {
      ingrediente: "Ervas",
      substituto: "Salsinha, tomilho ou orégano"
    }
  ]
},
{
id: "chips-cenoura-crocante",
nome: "Chips de cenoura crocante",
tipo: "lanche",
imagem: "imagens/receitas/chips-de-cenoura.png",
alimentos: ["cenoura"],
tempo: "25 minutos",
porcoes: "2",
restricoes: ["vegano", "vegetariano", "sem-gluten", "sem-lactose"],
ingredientes: [
"2 cenouras médias fatiadas bem finas",
"1 fio de azeite",
"Sal a gosto",
"Ervas a gosto"
],
preparo: [
"Preaqueça o forno a 180 °C.",
"Lave e fatie as cenouras em rodelas bem finas.",
"Distribua as fatias em uma assadeira, sem sobrepor.",
"Regue com um fio de azeite e tempere com sal e ervas a gosto.",
"Asse por 20 a 25 minutos, observando para não queimar, até ficarem crocantes.",
"Retire do forno, deixe esfriar um pouco e sirva."
],
substituicoes: [
{
ingrediente: "Azeite",
substituto: "Óleo de abacate"
},
{
ingrediente: "Ervas a gosto",
substituto: "Páprica doce ou alho em pó"
}
]
},
{
id: "bolinho-inhame-assado",
nome: "Bolinho de inhame assado",
tipo: "lanche",
imagem: "imagens/receitas/bolinho-inhame.jpg",
alimentos: ["inhame", "ovo", "aveia"],
tempo: "35 minutos",
porcoes: "2",
restricoes: ["vegetariano"],
ingredientes: [
"2 inhames médios cozidos e amassados",
"1 ovo",
"2 colheres de sopa de aveia em flocos",
"Temperos naturais a gosto"
],
preparo: [
"Cozinhe os inhames até ficarem macios e amasse bem.",
"Em uma tigela, misture o inhame amassado, o ovo, a aveia em flocos e os temperos naturais.",
"Misture até obter uma massa homogênea.",
"Modele a massa em pequenos bolinhos.",
"Disponha os bolinhos em uma assadeira untada ou forrada com papel manteiga.",
"Asse em forno preaquecido a 200 °C por aproximadamente 25 minutos, até ficarem firmes e levemente dourados."
],
substituicoes: [
{
ingrediente: "Ovo",
substituto: "1 colher de sopa de linhaça moída misturada com 3 colheres de sopa de água"
},
{
ingrediente: "Aveia em flocos",
substituto: "Farinha de arroz"
}
]
},
{
id: "pure-mandioquinha",
nome: "Purê de mandioquinha",
tipo: "acompanhamento",
imagem: "imagens/receitas/pure-mandioquinha.webp",
alimentos: ["mandioquinha", "leite", "manteiga"],
tempo: "25 minutos",
porcoes: "4",
restricoes: ["vegetariano", "sem-gluten"],
ingredientes: [
"500 g de mandioquinha",
"1/2 xícara de leite",
"2 colheres de sopa de manteiga gelada"
],
preparo: [
"Descasque a mandioquinha, corte em pedaços e cozinhe em água até ficar bem macia.",
"Escorra a água e transfira a mandioquinha ainda quente para um recipiente.",
"Adicione o leite e a manteiga gelada.",
"Bata ou amasse até obter um purê cremoso e homogêneo.",
"Ajuste a consistência adicionando um pouco mais de leite, se necessário, e sirva."
],
substituicoes: [
{
ingrediente: "Leite",
substituto: "Bebida vegetal sem açúcar"
},
{
ingrediente: "Manteiga",
substituto: "Azeite de oliva"
}
]
},
{
id: "mix-rustico-assado",
nome: "Mix rústico assado",
tipo: "acompanhamento",
imagem: "imagens/receitas/mix-assado.png",
alimentos: ["batata", "mandioquinha", "batata-doce", "abobora", "alho", "alecrim"],
tempo: "40 minutos",
porcoes: "4",
restricoes: ["vegano", "vegetariano", "sem-gluten", "sem-lactose"],
ingredientes: [
"Batata com casca a gosto",
"Mandioquinha a gosto",
"Batata-doce a gosto",
"Abóbora a gosto",
"Sal a gosto",
"Alecrim a gosto",
"Alho a gosto",
"Azeite a gosto"
],
preparo: [
"Preaqueça o forno a 200 °C.",
"Lave bem as batatas e os demais vegetais.",
"Corte a batata com casca, a mandioquinha, a batata-doce e a abóbora em pedaços médios.",
"Coloque os vegetais em uma assadeira e tempere com sal, alecrim, alho picado e azeite.",
"Misture bem para distribuir os temperos por todos os pedaços.",
"Espalhe os vegetais na assadeira sem sobrepor.",
"Asse a 200 °C por aproximadamente 30 a 40 minutos, virando na metade do tempo, até ficarem macios por dentro e dourados por fora."
],
substituicoes: [
{
ingrediente: "Alecrim",
substituto: "Tomilho ou orégano"
},
{
ingrediente: "Azeite",
substituto: "Óleo de girassol"
}
]
},
{
  id: "bolo-de-maracuja",
  nome: "Bolo de maracujá",
  tipo: "bolo",
  imagem: "imagens/receitas/bolo-maracuja.jfif",
  alimentos: ["maracuja", "farinha-de-trigo"],
  tempo: "50 minutos",
  porcoes: "8 porções",
  restricoes: ["glúten", "ovo"],
  ingredientes: [
    "2 xícaras de farinha de trigo",
    "1 xícara de açúcar",
    "3 ovos",
    "½ xícara de óleo",
    "½ xícara de suco de maracujá",
    "1 colher de sopa de fermento"
  ],
  preparo: [
    "Bata os ovos, o óleo, o açúcar e o suco de maracujá.",
    "Coloque a mistura em uma tigela.",
    "Acrescente a farinha de trigo.",
    "Misture o fermento por último.",
    "Coloque a massa em uma forma.",
    "Asse em forno preaquecido a 180 °C por aproximadamente 40 minutos."
  ],
  substituicoes: [
    {
      ingrediente: "Farinha de trigo",
      substituto: "Mistura de farinhas sem glúten própria para bolos."
    },
    {
      ingrediente: "Ovos",
      substituto: "Substituto culinário adequado para bolos."
    },
    {
      ingrediente: "Açúcar",
      substituto: "Mel, substituindo parcialmente e ajustando a quantidade de líquido."
    }
  ]
},
{
  id: "pudim-de-maracuja",
  nome: "Pudim de maracujá",
  tipo: "sobremesa",
  imagem: "imagens/receitas/pudim-maracuja.jfif",
  alimentos: ["maracuja"],
  tempo: "4 horas",
  porcoes: "8 porções",
  restricoes: ["lactose", "proteína do leite"],
  ingredientes: [
    "1 xícara de suco concentrado de maracujá",
    "1 caixa de leite condensado",
    "1 caixa de creme de leite",
    "1 envelope de gelatina sem sabor"
  ],
  preparo: [
    "Prepare a gelatina sem sabor conforme as instruções da embalagem.",
    "Bata o suco concentrado de maracujá, o leite condensado e o creme de leite no liquidificador.",
    "Acrescente a gelatina preparada.",
    "Bata novamente até obter uma mistura homogênea.",
    "Despeje a mistura em uma forma.",
    "Leve à geladeira por aproximadamente 4 horas ou até firmar."
  ],
  substituicoes: [
    {
      ingrediente: "Leite condensado",
      substituto: "Leite condensado sem lactose."
    },
    {
      ingrediente: "Creme de leite",
      substituto: "Creme de leite sem lactose."
    },
    {
      ingrediente: "Leite condensado e creme de leite",
      substituto: "Alternativas vegetais adequadas para pessoas com alergia à proteína do leite, verificando os ingredientes e a possibilidade de contaminação cruzada."
    }
  ]
},
{
    id: "geleia-maracuja",
    nome: "Geleia de maracujá",
    tipo: "Doce",
    imagem: "imagens/receitas/geleia-maracuja.jfif",
    alimentos: ["maracuja"],
    tempo: "",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "Polpa de 4 maracujás",
      "1 xícara de açúcar",
      "½ xícara de água"
    ],
    preparo: [
      "Coloque todos os ingredientes em uma panela.",
      "Misture.",
      "Cozinhe em fogo baixo.",
      "Mexa até engrossar.",
      "Deixe esfriar."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Pode ser adaptado com mel, mas a textura e a conservação podem mudar."
      }
    ]
  },
  {
    id: "creme-acai-banana",
    nome: "Creme de açaí com banana",
    tipo: "Sobremesa",
    imagem: "imagens/receitas/cre-aça.jfif",
    alimentos: ["acai", "banana"],
    tempo: "",
    porcoes: "",
    restricoes: ["gluten"],
    ingredientes: [
      "200 g de polpa de açaí",
      "1 banana",
      "1 colher de mel",
      "Granola"
    ],
    preparo: [
      "Bata o açaí, a banana e o mel.",
      "Coloque em uma tigela.",
      "Acrescente a granola."
    ],
    substituicoes: [
      {
        ingrediente: "Granola",
        substituto: "Usar granola certificada sem glúten ou substituir por frutas picadas."
      },
      {
        ingrediente: "Mel",
        substituto: "Pode ser retirado se a banana já deixar a preparação doce."
      }
    ]
  },
  {
    id: "panqueca-acai",
    nome: "Panqueca de açaí",
    tipo: "Lanche",
    imagem: "imagens/receitas/panqueca-açai.jfif",
    alimentos: ["aveia"],
    tempo: "",
    porcoes: "",
    restricoes: ["ovo", "gluten"],
    ingredientes: [
      "1 banana",
      "1 ovo",
      "½ xícara de farinha de aveia",
      "½ xícara de polpa de açaí"
    ],
    preparo: [
      "Amasse a banana.",
      "Misture o ovo, o açaí e a farinha.",
      "Coloque pequenas porções na frigideira.",
      "Cozinhe dos dois lados."
    ],
    substituicoes: [
      {
        ingrediente: "Farinha de aveia",
        substituto: "Usar aveia certificada sem glúten ou farinha sem glúten adequada."
      },
      {
        ingrediente: "Ovo",
        substituto: "Usar substituto culinário próprio para a receita."
      },
      {
        ingrediente: "Açúcar",
        substituto: "A banana madura ajuda a adoçar naturalmente."
      }
    ]
  },
  {
    id: "vitamina-acai",
    nome: "Vitamina de açaí",
    tipo: "Bebida",
    imagem: "imagens/receitas/vitaminha-açai.jfif",
    alimentos: ["acai", "banana"],
    tempo: "",
    porcoes: "",
    restricoes: ["lactose", "leite"],
    ingredientes: [
      "150 g de açaí",
      "1 banana",
      "200 ml de leite"
    ],
    preparo: [
      "Coloque todos os ingredientes no liquidificador.",
      "Bata até ficar homogêneo.",
      "Sirva gelado."
    ],
    substituicoes: [
      {
        ingrediente: "Leite",
        substituto: "Para intolerância à lactose, usar leite sem lactose ou bebida vegetal. Para alergia à proteína do leite, usar bebida vegetal sem derivados do leite."
      }
    ]
  },
  {
    id: "acai-frutas",
    nome: "Açaí com frutas",
    tipo: "Sobremesa",
    imagem: "imagens/receitas/acai-frutas.jfif",
    alimentos: ["acai", "banana", "morango"],
    tempo: "",
    porcoes: "",
    restricoes: ["gluten"],
    ingredientes: [
      "200 g de polpa de açaí",
      "1 banana",
      "Morangos ou outras frutas",
      "Granola"
    ],
    preparo: [
      "Bata o açaí com a banana.",
      "Coloque em uma tigela.",
      "Corte as frutas.",
      "Coloque as frutas por cima.",
      "Finalize com granola."
    ],
    substituicoes: [
      {
        ingrediente: "Granola",
        substituto: "Usar granola certificada sem glúten ou retirar a granola."
      },
      {
        ingrediente: "Polpa de açaí",
        substituto: "Escolher polpa de açaí sem açúcar adicionado."
      }
    ]
  },
  {
    id: "sorvete-acai-banana",
    nome: "Sorvete de açaí com banana",
    tipo: "Sobremesa",
    imagem: "imagens/receitas/sorvete-de-acai.jfif",
    alimentos: ["acai", "banana"],
    tempo: "",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "300 g de polpa de açaí",
      "2 bananas maduras"
    ],
    preparo: [
      "Corte as bananas.",
      "Congele as bananas.",
      "Bata as bananas congeladas com o açaí.",
      "Coloque em um recipiente.",
      "Leve ao congelador até ficar mais firme."
    ],
    substituicoes: [
      {
        ingrediente: "Leite",
        substituto: "A receita básica não precisa de leite nem de creme de leite."
      },
      {
        ingrediente: "Açúcar",
        substituto: "Não é necessário acrescentar, pois a banana madura já contribui para a doçura."
      }
    ]
  },
  {
    id: "geleia-pitanga",
    nome: "Geleia de pitanga",
    tipo: "Doce",
    imagem: "imagens/receitas/geleia-pitanga.jfif",
    alimentos: ["pitanga", "limao"],
    tempo: "20 minutos",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "2 xícaras de pitangas",
      "1 xícara de açúcar",
      "Suco de ½ limão",
      "½ xícara de água"
    ],
    preparo: [
      "Retire os caroços.",
      "Coloque todos os ingredientes em uma panela.",
      "Cozinhe em fogo baixo por aproximadamente 20 minutos.",
      "Mexa até engrossar."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Pode-se testar uma adaptação com mel, lembrando que a textura e a conservação podem mudar."
      }
    ]
  },
  {
    id: "muffin-pitanga",
    nome: "Muffin de pitanga",
    tipo: "Lanche",
    imagem: "imagens/receitas/muffin-pitanga.jfif",
    alimentos: ["pitanga", "farinha-de-trigo"],
    tempo: "25 minutos",
    porcoes: "",
    restricoes: ["gluten", "lactose", "leite", "ovo"],
    ingredientes: [
      "1 xícara de farinha de trigo",
      "½ xícara de açúcar",
      "1 ovo",
      "½ xícara de leite",
      "½ xícara de pitangas sem sementes",
      "2 colheres de óleo",
      "1 colher de fermento"
    ],
    preparo: [
      "Misture o ovo, o óleo, o açúcar e o leite.",
      "Acrescente a farinha.",
      "Adicione as pitangas.",
      "Coloque o fermento.",
      "Distribua em forminhas.",
      "Asse a 180 °C por aproximadamente 25 minutos."
    ],
    substituicoes: [
      {
        ingrediente: "Farinha de trigo",
        substituto: "Usar mistura de farinhas sem glúten própria para bolos."
      },
      {
        ingrediente: "Leite",
        substituto: "Usar leite sem lactose ou bebida vegetal."
      },
      {
        ingrediente: "Ovo",
        substituto: "Usar substituto culinário adequado."
      },
      {
        ingrediente: "Açúcar",
        substituto: "Pode ser parcialmente substituído por mel, ajustando os líquidos."
      }
    ]
  },
  {
    id: "suco-pitanga",
    nome: "Suco de pitanga",
    tipo: "Bebida",
    imagem: "imagens/receitas/suco-pitanga.jfif",
    alimentos: ["pitanga"],
    tempo: "",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "1 xícara de pitangas",
      "500 ml de água",
      "Açúcar a gosto"
    ],
    preparo: [
      "Bata rapidamente as pitangas com a água.",
      "Coe para retirar os caroços.",
      "Adoce.",
      "Sirva gelado."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Substituir por mel ou não adoçar."
      }
    ]
  },
  {
    id: "sorvete-pitanga",
    nome: "Sorvete de pitanga",
    tipo: "Sobremesa",
    imagem: "imagens/receitas/sorvete-pitanga.webp",
    alimentos: ["pitanga"],
    tempo: "",
    porcoes: "",
    restricoes: ["lactose", "leite"],
    ingredientes: [
      "2 xícaras de pitangas sem sementes",
      "1 caixa de creme de leite",
      "Açúcar a gosto"
    ],
    preparo: [
      "Bata as pitangas.",
      "Acrescente o creme de leite.",
      "Adoce.",
      "Bata até ficar homogêneo.",
      "Coloque em um recipiente.",
      "Leve ao congelador até firmar."
    ],
    substituicoes: [
      {
        ingrediente: "Creme de leite",
        substituto: "Usar creme de leite sem lactose ou creme vegetal adequado."
      },
      {
        ingrediente: "Açúcar",
        substituto: "Ajustar a quantidade ou adaptar com mel, sabendo que a consistência pode mudar."
      }
    ]
  },
  {
    id: "calda-pitanga",
    nome: "Calda de pitanga",
    tipo: "Doce",
    imagem: "imagens/receitas/gelei-pitanga.png",
    alimentos: ["pitanga"],
    tempo: "",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "1 xícara de pitangas",
      "½ xícara de açúcar",
      "½ xícara de água"
    ],
    preparo: [
      "Retire os caroços.",
      "Coloque todos os ingredientes em uma panela.",
      "Cozinhe em fogo baixo.",
      "Mexa até formar uma calda.",
      "Deixe esfriar."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Pode-se testar uma adaptação com mel, ajustando a consistência."
      }
    ]
  },
  {
    id: "bolo-jaca",
    nome: "Bolo de jaca",
    tipo: "Lanche",
    imagem: "imagens/receitas/bolo-jaca.webp",
    alimentos: ["jaca"],
    tempo: "40 minutos",
    porcoes: "",
    restricoes: ["gluten", "lactose", "leite", "ovo"],
    ingredientes: [
      "1 xícara de polpa de jaca madura",
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "3 ovos",
      "½ xícara de óleo",
      "½ xícara de leite",
      "1 colher de sopa de fermento"
    ],
    preparo: [
      "Bata a jaca, os ovos, o óleo, o açúcar e o leite.",
      "Coloque em uma tigela.",
      "Acrescente a farinha.",
      "Misture o fermento por último.",
      "Coloque em uma forma.",
      "Asse a 180 °C por aproximadamente 40 minutos."
    ],
    substituicoes: [
      {
        ingrediente: "Farinha",
        substituto: "Usar mistura de farinhas sem glúten própria para bolos."
      },
      {
        ingrediente: "Leite",
        substituto: "Usar leite sem lactose ou bebida vegetal."
      },
      {
        ingrediente: "Ovo",
        substituto: "Usar substituto culinário adequado."
      },
      {
        ingrediente: "Açúcar",
        substituto: "Pode ser parcialmente substituído por mel, ajustando os líquidos."
      }
    ]
  },
  {
    id: "doce-jaca",
    nome: "Doce de jaca",
    tipo: "Doce",
    imagem: "imagens/receitas/doce-de-jaca.jfif",
    alimentos: ["jaca", "canela"],
    tempo: "20 minutos",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "3 xícaras de jaca madura",
      "1 xícara de açúcar",
      "½ xícara de água",
      "Canela a gosto"
    ],
    preparo: [
      "Faça uma calda com a água, o açúcar e a canela.",
      "Acrescente a jaca.",
      "Cozinhe em fogo baixo por aproximadamente 20 minutos.",
      "Mexa até o doce ficar pronto."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Pode-se reduzir a quantidade ou adaptar com mel, sabendo que a textura e a conservação podem mudar."
      }
    ]
  },
  {
    id: "vitamina-jaca",
    nome: "Vitamina de jaca",
    tipo: "Bebida",
    imagem: "imagens/receitas/vitamina-jaca.jfif",
    alimentos: ["jaca", "banana"],
    tempo: "",
    porcoes: "",
    restricoes: ["lactose", "leite"],
    ingredientes: [
      "1 xícara de jaca madura",
      "250 ml de leite",
      "1 banana"
    ],
    preparo: [
      "Coloque todos os ingredientes no liquidificador.",
      "Bata até ficar cremoso.",
      "Sirva."
    ],
    substituicoes: [
      {
        ingrediente: "Leite",
        substituto: "Usar leite sem lactose ou bebida vegetal."
      },
      {
        ingrediente: "Açúcar",
        substituto: "A banana madura pode adoçar naturalmente."
      }
    ]
  },
  {
    id: "mousse-jaca",
    nome: "Mousse de jaca",
    tipo: "Sobremesa",
    imagem: "imagens/receitas/mousse-jaca.jfif",
    alimentos: ["jaca"],
    tempo: "",
    porcoes: "",
    restricoes: ["lactose", "leite"],
    ingredientes: [
      "2 xícaras de polpa de jaca madura",
      "1 caixa de creme de leite",
      "1 caixa de leite condensado"
    ],
    preparo: [
      "Retire as sementes.",
      "Coloque a polpa no liquidificador.",
      "Acrescente o creme de leite e o leite condensado.",
      "Bata até ficar cremoso.",
      "Coloque em um recipiente.",
      "Leve à geladeira até ficar firme."
    ],
    substituicoes: [
      {
        ingrediente: "Creme de leite e leite condensado",
        substituto: "Para intolerância à lactose, usar versões sem lactose. Para alergia à proteína do leite, escolher alternativas vegetais adequadas."
      }
    ]
  },
  {
    id: "suco-jaca",
    nome: "Suco de jaca",
    tipo: "Bebida",
    imagem: "imagens/receitas/suco-jaca.webp",
    alimentos: ["jaca"],
    tempo: "",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "1 xícara de polpa de jaca",
      "500 ml de água",
      "Açúcar a gosto"
    ],
    preparo: [
      "Retire as sementes.",
      "Bata a polpa com a água.",
      "Coe, se desejar.",
      "Adoce.",
      "Sirva gelado."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Substituir por mel ou não adoçar."
      }
    ]
  },
  {
    id: "salada-caju",
    nome: "Salada de caju",
    tipo: "Salada",
    imagem: "imagens/receitas/sal-caju.jfif",
    alimentos: ["caju", "tomate", "limao"],
    tempo: "",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "2 cajus",
      "1 tomate",
      "Folhas de alface",
      "Suco de ½ limão",
      "Azeite"
    ],
    preparo: [
      "Lave os ingredientes.",
      "Corte o caju e o tomate.",
      "Misture com as folhas de alface.",
      "Tempere com limão e azeite."
    ],
    substituicoes: []
  },
  {
    id: "arroz-caju",
    nome: "Arroz com caju",
    tipo: "Prato principal",
    imagem: "imagens/receitas/arroz-caju.webp",
    alimentos: ["cenoura"],
    tempo: "",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "2 xícaras de arroz cozido",
      "2 cajus picados",
      "1 cenoura pequena",
      "Milho",
      "Cheiro-verde"
    ],
    preparo: [
      "Refogue o caju e a cenoura.",
      "Acrescente o milho.",
      "Coloque o arroz.",
      "Misture bem.",
      "Finalize com cheiro-verde."
    ],
    substituicoes: [
      {
        ingrediente: "Temperos",
        substituto: "Para evitar glúten, conferir os rótulos dos temperos e demais ingredientes."
      }
    ]
  },
  {
    id: "suco-caju",
    nome: "Suco de caju",
    tipo: "Bebida",
    imagem: "imagens/receitas/su-caju.jfif",
    alimentos: ["caju"],
    tempo: "",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "2 cajus maduros",
      "500 ml de água",
      "Açúcar a gosto"
    ],
    preparo: [
      "Retire a castanha.",
      "Corte os cajus.",
      "Bata com a água.",
      "Coe.",
      "Adoce.",
      "Sirva gelado."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Substituir por mel ou não adoçar."
      }
    ]
  },
  {
    id: "geleia-caju",
    nome: "Geleia de caju",
    tipo: "Doce",
    imagem: "imagens/receitas/gel-caju.jfif",
    alimentos: ["caju", "limao"],
    tempo: "",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "3 cajus maduros",
      "1 xícara de açúcar",
      "½ xícara de água",
      "Suco de ½ limão"
    ],
    preparo: [
      "Corte os cajus.",
      "Coloque os ingredientes em uma panela.",
      "Cozinhe em fogo baixo.",
      "Mexa até engrossar.",
      "Deixe esfriar."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Pode-se testar uma adaptação com mel, lembrando que a conservação pode mudar."
      }
    ]
  },
  {
    id: "doce-caju",
    nome: "Doce de caju",
    tipo: "Doce",
    imagem: "imagens/receitas/do-caju.jfif",
    alimentos: ["caju"],
    tempo: "",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "4 cajus maduros",
      "1 xícara de açúcar",
      "½ xícara de água"
    ],
    preparo: [
      "Corte os cajus.",
      "Faça uma calda com a água e o açúcar.",
      "Acrescente os cajus.",
      "Cozinhe em fogo baixo.",
      "Mexa até formar um doce."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Pode-se reduzir a quantidade ou testar uma adaptação com mel, considerando a mudança na textura."
      }
    ]
  },
  {
    id: "geleia-jabuticaba",
    nome: "Geleia de jabuticaba",
    tipo: "Doce",
    imagem: "imagens/receitas/gel.jabu.jfif",
    alimentos: ["jabuticaba", "limao"],
    tempo: "",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "3 xícaras de jabuticabas",
      "1 xícara de açúcar",
      "½ xícara de água",
      "Suco de ½ limão"
    ],
    preparo: [
      "Cozinhe as jabuticabas com a água.",
      "Amasse as frutas.",
      "Coe para retirar as sementes.",
      "Coloque o caldo novamente na panela.",
      "Acrescente o açúcar e o limão.",
      "Cozinhe até engrossar."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Pode-se testar uma adaptação com mel, lembrando que a textura e a conservação podem mudar."
      }
    ]
  },
  {
    id: "bolo-jabuticaba",
    nome: "Bolo de jabuticaba",
    tipo: "Lanche",
    imagem: "imagens/receitas/bo-jabu.jfif",
    alimentos: ["jabuticaba"],
    tempo: "40 minutos",
    porcoes: "",
    restricoes: ["gluten", "lactose", "leite", "ovo"],
    ingredientes: [
      "1 xícara de jabuticabas",
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "3 ovos",
      "½ xícara de óleo",
      "½ xícara de leite",
      "1 colher de fermento"
    ],
    preparo: [
      "Bata as jabuticabas, os ovos, o óleo, o leite e o açúcar.",
      "Coloque a mistura em uma tigela.",
      "Acrescente a farinha.",
      "Misture o fermento.",
      "Coloque em uma forma.",
      "Asse a 180 °C por aproximadamente 40 minutos."
    ],
    substituicoes: [
      {
        ingrediente: "Farinha",
        substituto: "Usar mistura de farinhas sem glúten própria para bolos."
      },
      {
        ingrediente: "Leite",
        substituto: "Usar leite sem lactose ou bebida vegetal."
      },
      {
        ingrediente: "Ovo",
        substituto: "Usar substituto culinário adequado."
      },
      {
        ingrediente: "Açúcar",
        substituto: "Pode ser parcialmente substituído por mel, ajustando os líquidos."
      }
    ]
  },
  {
    id: "suco-jabuticaba",
    nome: "Suco de jabuticaba",
    tipo: "Bebida",
    imagem: "imagens/receitas/su-jabu.jfif",
    alimentos: ["jabuticaba"],
    tempo: "",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "2 xícaras de jabuticabas",
      "500 ml de água",
      "Açúcar a gosto"
    ],
    preparo: [
      "Bata rapidamente as jabuticabas com a água.",
      "Coe.",
      "Adoce.",
      "Sirva gelado."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Substituir por mel ou não adoçar."
      }
    ]
  },
  {
    id: "mousse-jabuticaba",
    nome: "Mousse de jabuticaba",
    tipo: "Sobremesa",
    imagem: "imagens/receitas/mu-jabu.jfif",
    alimentos: ["jabuticaba"],
    tempo: "",
    porcoes: "",
    restricoes: ["lactose", "leite"],
    ingredientes: [
      "2 xícaras de jabuticabas",
      "1 caixa de creme de leite",
      "1 caixa de leite condensado"
    ],
    preparo: [
      "Bata as jabuticabas.",
      "Coe para retirar as sementes.",
      "Bata o suco com o creme de leite e o leite condensado.",
      "Coloque em recipientes.",
      "Leve à geladeira até firmar."
    ],
    substituicoes: [
      {
        ingrediente: "Creme de leite e leite condensado",
        substituto: "Para intolerância à lactose, usar versões sem lactose. Para alergia à proteína do leite, usar alternativas vegetais adequadas."
      }
    ]
  },
  {
    id: "calda-jabuticaba",
    nome: "Calda de jabuticaba",
    tipo: "Doce",
    imagem: "imagens/receitas/mol-jabu.jpg",
    alimentos: ["jabuticaba"],
    tempo: "",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "2 xícaras de jabuticabas",
      "½ xícara de açúcar",
      "½ xícara de água"
    ],
    preparo: [
      "Cozinhe as jabuticabas com a água.",
      "Amasse as frutas.",
      "Coe.",
      "Coloque o líquido novamente na panela.",
      "Acrescente o açúcar.",
      "Cozinhe até formar uma calda."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Pode-se adaptar com mel, lembrando que a textura e a conservação podem mudar."
      }
    ]
  },
  {
    id: "geleia-cereja-rio-grande",
    nome: "Geleia de cereja-do-Rio-Grande",
    tipo: "Doce",
    imagem: "imagens/receitas/gel-cere.jfif",
    alimentos: ["cereja-rio-grande", "limao"],
    tempo: "20 minutos",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "3 xícaras de frutas",
      "1 xícara de açúcar",
      "½ xícara de água",
      "Suco de ½ limão"
    ],
    preparo: [
      "Coloque todos os ingredientes em uma panela.",
      "Cozinhe em fogo baixo.",
      "Mexa até engrossar por aproximadamente 20 minutos."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Pode-se testar uma adaptação com mel, lembrando que a conservação e a textura podem mudar."
      }
    ]
  },
  {
    id: "cupcake-cereja",
    nome: "Cupcake de cereja",
    tipo: "Lanche",
    imagem: "imagens/receitas/cup-cere.jfif",
    alimentos: ["cereja-rio-grande"],
    tempo: "20 minutos",
    porcoes: "",
    restricoes: ["gluten", "lactose", "leite", "ovo"],
    ingredientes: [
      "1 xícara de farinha",
      "½ xícara de açúcar",
      "1 ovo",
      "½ xícara de leite",
      "½ xícara de cerejas picadas",
      "2 colheres de óleo",
      "1 colher de fermento"
    ],
    preparo: [
      "Misture o ovo, o óleo, o açúcar e o leite.",
      "Acrescente a farinha.",
      "Adicione as cerejas.",
      "Coloque o fermento.",
      "Distribua em forminhas.",
      "Asse a 180 °C por aproximadamente 20 minutos."
    ],
    substituicoes: [
      {
        ingrediente: "Farinha",
        substituto: "Usar mistura de farinhas sem glúten própria para bolos."
      },
      {
        ingrediente: "Leite",
        substituto: "Usar leite sem lactose ou bebida vegetal."
      },
      {
        ingrediente: "Ovo",
        substituto: "Usar substituto culinário adequado."
      },
      {
        ingrediente: "Açúcar",
        substituto: "Pode ser parcialmente substituído por mel, ajustando os líquidos."
      }
    ]
  },
  {
    id: "suco-cereja-rio-grande",
    nome: "Suco de cereja-do-Rio-Grande",
    tipo: "Bebida",
    imagem: "imagens/receitas/su-cere.jfif",
    alimentos: ["cereja-rio-grande"],
    tempo: "",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "1 xícara de frutas sem caroço",
      "400 ml de água",
      "Açúcar a gosto"
    ],
    preparo: [
      "Bata as frutas com a água.",
      "Coe.",
      "Adoce.",
      "Sirva gelado."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Substituir por mel ou não adoçar."
      }
    ]
  },
  {
    id: "geleia-cereja-limao",
    nome: "Geleia com limão",
    tipo: "Doce",
    imagem: "imagens/receitas/gel-limo.jfif",
    alimentos: ["cereja-rio-grande", "limao"],
    tempo: "",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "2 xícaras de cereja-do-Rio-Grande",
      "½ xícara de açúcar",
      "Suco de ½ limão"
    ],
    preparo: [
      "Retire os caroços.",
      "Coloque as frutas em uma panela.",
      "Acrescente o açúcar e o limão.",
      "Cozinhe em fogo baixo.",
      "Mexa até engrossar."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Pode-se testar uma adaptação com mel, considerando a mudança na textura e na conservação."
      }
    ]
  },
  {
    id: "creme-cereja",
    nome: "Creme de cereja",
    tipo: "Sobremesa",
    imagem: "imagens/receitas/cre-cere.jfif",
    alimentos: ["cereja-rio-grande", "banana"],
    tempo: "",
    porcoes: "",
    restricoes: ["lactose", "leite"],
    ingredientes: [
      "1 xícara de cerejas sem caroço",
      "1 banana",
      "1 caixa de creme de leite"
    ],
    preparo: [
      "Bata as cerejas e a banana.",
      "Acrescente o creme de leite.",
      "Bata até ficar cremoso.",
      "Coloque em recipientes.",
      "Leve à geladeira."
    ],
    substituicoes: [
      {
        ingrediente: "Creme de leite",
        substituto: "Usar creme de leite sem lactose ou creme vegetal adequado."
      },
      {
        ingrediente: "Açúcar",
        substituto: "A banana madura ajuda a adoçar naturalmente."
      }
    ]
  },
  {
    id: "bolo-uvaia",
    nome: "Bolo de uvaia",
    tipo: "Lanche",
    imagem: "imagens/receitas/bolo-uvaia.jfif",
    alimentos: ["uvaia"],
    tempo: "40 minutos",
    porcoes: "",
    restricoes: ["gluten", "ovo"],
    ingredientes: [
      "1 xícara de polpa de uvaia",
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "3 ovos",
      "½ xícara de óleo",
      "1 colher de fermento"
    ],
    preparo: [
      "Bata a polpa, os ovos, o óleo e o açúcar.",
      "Coloque em uma tigela.",
      "Acrescente a farinha.",
      "Misture o fermento.",
      "Coloque em uma forma.",
      "Asse a 180 °C por aproximadamente 40 minutos."
    ],
    substituicoes: [
      {
        ingrediente: "Farinha",
        substituto: "Usar mistura de farinhas sem glúten própria para bolos."
      },
      {
        ingrediente: "Ovo",
        substituto: "Usar substituto culinário adequado."
      },
      {
        ingrediente: "Açúcar",
        substituto: "Pode ser parcialmente substituído por mel, ajustando os líquidos."
      }
    ]
  },
  {
    id: "geleia-uvaia",
    nome: "Geleia de uvaia",
    tipo: "Doce",
    imagem: "imagens/receitas/geleia-de uvaia.jfif",
    alimentos: ["uvaia", "limao"],
    tempo: "15 a 20 minutos",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "3 xícaras de uvaia",
      "1 xícara de açúcar",
      "½ xícara de água",
      "Suco de ½ limão"
    ],
    preparo: [
      "Coloque todos os ingredientes em uma panela.",
      "Cozinhe em fogo baixo.",
      "Mexa por aproximadamente 15 a 20 minutos.",
      "Retire quando estiver engrossada."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Pode-se adaptar com mel, lembrando que a textura e a conservação podem mudar."
      }
    ]
  },
  {
    id: "suco-uvaia",
    nome: "Suco de uvaia",
    tipo: "Bebida",
    imagem: "imagens/receitas/suco-uvaia.jfif",
    alimentos: ["uvaia"],
    tempo: "",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "1 xícara de polpa de uvaia",
      "500 ml de água",
      "Açúcar a gosto"
    ],
    preparo: [
      "Bata a polpa com a água.",
      "Adoce.",
      "Sirva gelado."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Substituir por mel ou não adoçar."
      }
    ]
  },
  {
    id: "mousse-uvaia",
    nome: "Mousse de uvaia",
    tipo: "Sobremesa",
    imagem: "imagens/receitas/mousse-uvai.jpg",
    alimentos: ["uvaia"],
    tempo: "",
    porcoes: "",
    restricoes: ["lactose", "leite"],
    ingredientes: [
      "1 xícara de polpa de uvaia",
      "1 caixa de creme de leite",
      "1 caixa de leite condensado"
    ],
    preparo: [
      "Bata a polpa no liquidificador.",
      "Acrescente o creme de leite e o leite condensado.",
      "Bata até ficar cremoso.",
      "Coloque em recipientes.",
      "Leve à geladeira até firmar."
    ],
    substituicoes: [
      {
        ingrediente: "Creme de leite e leite condensado",
        substituto: "Para intolerância à lactose, usar versões sem lactose. Para alergia à proteína do leite, usar alternativas vegetais adequadas."
      }
    ]
  },
  {
    id: "calda-uvaia",
    nome: "Calda de uvaia",
    tipo: "Doce",
    imagem: "imagens/receitas/calda-de uvaia.jfif",
    alimentos: ["uvaia"],
    tempo: "",
    porcoes: "",
    restricoes: [],
    ingredientes: [
      "2 xícaras de uvaia",
      "½ xícara de açúcar",
      "½ xícara de água"
    ],
    preparo: [
      "Retire os caroços.",
      "Coloque a fruta, a água e o açúcar em uma panela.",
      "Cozinhe em fogo baixo.",
      "Mexa até formar uma calda."
    ],
    substituicoes: [
      {
        ingrediente: "Açúcar",
        substituto: "Pode-se testar uma adaptação com mel, ajustando a consistência."
      }
    ]
  },
  {
    id: "creme-cupuacu",
    nome: "Creme de cupuaçu",
    tipo: "Sobremesa",
    imagem: "imagens/receitas/cre-cu.jfif",
    alimentos: ["cupuacu"],
    tempo: "3 horas",
    porcoes: "",
    restricoes: ["lactose", "leite"],
    ingredientes: [
      "300 g de polpa de cupuaçu",
      "1 caixa de creme de leite",
      "1 caixa de leite condensado"
    ],
    preparo: [
      "Bata todos os ingredientes no liquidificador.",
      "Coloque em taças.",
      "Leve à geladeira por aproximadamente 3 horas."
    ],
    substituicoes: [
      {
        ingrediente: "Creme de leite e leite condensado",
        substituto: "Para intolerância à lactose, usar versões sem lactose. Para alergia à proteína do leite, usar alternativas vegetais adequadas."
      }
    ]
  },
  {
    id: "bolo-cupuacu",
    nome: "Bolo de cupuaçu",
    tipo: "Lanche",
    imagem: "imagens/receitas/bo-cu.jfif",
    alimentos: ["cupuacu"],
    tempo: "40 minutos",
    porcoes: "",
    restricoes: ["gluten", "ovo"],
    ingredientes: [
      "1 xícara de polpa de cupuaçu",
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "3 ovos",
      "½ xícara de óleo",
      "1 colher de fermento"
    ],
    preparo: [
      "Bata a polpa, os ovos, o óleo e o açúcar.",
      "Misture com a farinha.",
      "Acrescente o fermento.",
      "Coloque em uma forma.",
      "Asse a 180 °C por aproximadamente 40 minutos."
    ],
    substituicoes: [
      {
        ingrediente: "Farinha",
        substituto: "Usar mistura de farinhas sem glúten própria para bolos."
      },
      {
        ingrediente: "Ovo",
        substituto: "Usar substituto culinário adequado."
      },
      {
        ingrediente: "Açúcar",
        substituto: "Pode ser parcialmente substituído por mel, ajustando os líquidos."
      }
    ]
  },
  {
    id: "vitamina-cupuacu",
    nome: "Vitamina de cupuaçu",
    tipo: "Bebida",
    imagem: "imagens/receitas/vit-cu.jfif",
    alimentos: ["cupuacu", "banana"],
    tempo: "",
    porcoes: "",
    restricoes: ["lactose", "leite"],
    ingredientes: [
      "150 g de polpa de cupuaçu",
      "250 ml de leite",
      "1 banana"
    ],
    preparo: [
      "Coloque todos os ingredientes no liquidificador.",
      "Bata até ficar cremoso.",
      "Sirva."
    ],
    substituicoes: [
      {
        ingrediente: "Leite",
        substituto: "Usar leite sem lactose ou bebida vegetal."
      },
      {
        ingrediente: "Açúcar",
        substituto: "A banana madura ajuda a adoçar naturalmente."
      }
    ]
  },
  {
    id: "mousse-cupuacu",
    nome: "Mousse de cupuaçu",
    tipo: "Sobremesa",
    imagem: "imagens/receitas/mu-cu.jfif",
    alimentos: ["cupuacu"],
    tempo: "",
    porcoes: "",
    restricoes: ["lactose", "leite"],
    ingredientes: [
      "300 g de polpa de cupuaçu",
      "1 caixa de creme de leite",
      "1 caixa de leite condensado"
    ],
    preparo: [
      "Bata todos os ingredientes.",
      "Coloque em recipientes.",
      "Leve à geladeira até ficar firme."
    ],
    substituicoes: [
      {
        ingrediente: "Creme de leite e leite condensado",
        substituto: "Para intolerância à lactose, usar versões sem lactose. Para alergia à proteína do leite, usar alternativas vegetais adequadas."
      }
    ]
  },
  {
    id: "sorvete-cupuacu",
    nome: "Sorvete de cupuaçu",
    tipo: "Sobremesa",
    imagem: "imagens/receitas/sov-cu.jfif",
    alimentos: ["cupuacu"],
    tempo: "",
    porcoes: "",
    restricoes: ["lactose", "leite"],
    ingredientes: [
      "300 g de polpa de cupuaçu",
      "1 caixa de creme de leite",
      "½ xícara de açúcar"
    ],
    preparo: [
      "Bata a polpa, o creme de leite e o açúcar.",
      "Coloque em um recipiente.",
      "Leve ao congelador.",
      "Quando começar a firmar, bata novamente.",
      "Volte ao congelador até ficar firme."
    ],
    substituicoes: [
      {
        ingrediente: "Creme de leite",
        substituto: "Usar creme de leite sem lactose ou creme vegetal adequado."
      },
      {
        ingrediente: "Açúcar",
        substituto: "Pode ser adaptado com mel, mas a textura poderá mudar."
      }
    ]
  },
  {
    id: "creme-sapoti",
    nome: "Creme de sapoti",
    tipo: "Sobremesa",
    imagem: "imagens/receitas/cre-sapo.jpeg",
    alimentos: ["sapoti", "banana"],
    tempo: "1 hora",
    porcoes: "",
    restricoes: ["lactose", "leite"],
    ingredientes: [
      "2 sapotis maduros",
      "200 ml de leite",
      "1 banana",
      "1 colher de mel"
    ],
    preparo: [
      "Retire a polpa dos sapotis.",
      "Coloque no liquidificador.",
      "Acrescente a banana, o leite e o mel.",
      "Bata até ficar cremoso.",
      "Leve à geladeira por aproximadamente 1 hora."
    ],
    substituicoes: [
      {
        ingrediente: "Leite",
        substituto: "Usar leite sem lactose ou bebida vegetal."
      },
      {
        ingrediente: "Mel",
        substituto: "Pode ser retirado, pois a fruta madura já é doce."
      }
    ]
  },
  {
    id: "bolo-sapoti",
    nome: "Bolo de sapoti",
    tipo: "Lanche",
    imagem: "imagens/receitas/bolo-sapoti.jfif",
    alimentos: ["sapoti"],
    tempo: "40 minutos",
    porcoes: "",
    restricoes: ["gluten", "ovo"],
    ingredientes: [
      "2 sapotis maduros",
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "3 ovos",
      "½ xícara de óleo",
      "1 colher de fermento"
    ],
    preparo: [
      "Bata os ovos, o óleo, o açúcar e o sapoti.",
      "Misture com a farinha.",
      "Acrescente o fermento.",
      "Coloque em uma forma.",
      "Asse a 180 °C por aproximadamente 40 minutos."
    ],
    substituicoes: [
      {
        ingrediente: "Farinha",
        substituto: "Usar mistura de farinhas sem glúten própria para bolos."
      },
      {
        ingrediente: "Ovo",
        substituto: "Usar substituto culinário adequado."
      },
      {
        ingrediente: "Açúcar",
        substituto: "Pode ser parcialmente substituído por mel, ajustando os líquidos."
      }
    ]
  },
  {
    id: "vitamina-sapoti",
    nome: "Vitamina de sapoti",
    tipo: "Bebida",
    imagem: "imagens/receitas/vitamina-sapoti.jpg",
    alimentos: ["sapoti", "banana"],
    tempo: "",
    porcoes: "",
    restricoes: ["lactose", "leite"],
    ingredientes: [
      "1 sapoti grande",
      "250 ml de leite",
      "1 banana"
    ],
    preparo: [
      "Retire a polpa do sapoti.",
      "Coloque no liquidificador.",
      "Acrescente a banana e o leite.",
      "Bata por aproximadamente 2 minutos.",
      "Sirva."
    ],
    substituicoes: [
      {
        ingrediente: "Leite",
        substituto: "Usar leite sem lactose ou bebida vegetal."
      },
      {
        ingrediente: "Açúcar",
        substituto: "Não é necessário acrescentar, pois o sapoti e a banana são naturalmente doces."
      }
    ]
  },
  {
    id: "mousse-sapoti",
    nome: "Mousse de sapoti",
    tipo: "Sobremesa",
    imagem: "imagens/receitas/muosse-sapoti.jfif",
    alimentos: ["sapoti"],
    tempo: "",
    porcoes: "",
    restricoes: ["lactose", "leite"],
    ingredientes: [
      "2 sapotis maduros",
      "1 caixa de creme de leite",
      "1 caixa de leite condensado"
    ],
    preparo: [
      "Retire a polpa dos sapotis.",
      "Bata a polpa com o creme de leite.",
      "Acrescente o leite condensado.",
      "Bata até ficar homogêneo.",
      "Coloque em recipientes.",
      "Leve à geladeira até firmar."
    ],
    substituicoes: [
      {
        ingrediente: "Creme de leite e leite condensado",
        substituto: "Para intolerância à lactose, usar versões sem lactose. Para alergia à proteína do leite, usar alternativas vegetais adequadas."
      }
    ]
  },
  {
    id: "creme-sapoti-banana",
    nome: "Creme de sapoti com banana",
    tipo: "Sobremesa",
    imagem: "imagens/receitas/sapo-bana.jfif",
    alimentos: ["sapoti", "banana"],
    tempo: "",
    porcoes: "",
    restricoes: ["lactose", "leite"],
    ingredientes: [
      "2 sapotis maduros",
      "1 banana",
      "150 ml de leite"
    ],
    preparo: [
      "Retire a polpa dos sapotis.",
      "Corte a banana.",
      "Coloque tudo no liquidificador.",
      "Bata até formar um creme.",
      "Sirva gelado."
    ],
    substituicoes: [
      {
        ingrediente: "Leite",
        substituto: "Usar leite sem lactose ou bebida vegetal."
      },
      {
        ingrediente: "Açúcar",
        substituto: "Não é necessário acrescentar, pois as frutas maduras já adoçam naturalmente."
      }
    ]
  },
{
id: "bolinho-inhame-assado",
nome: "Bolinho de inhame assado",
tipo: "lanche",
imagem: "imagens/receitas/bolinho-inhame.jpg",
alimentos: ["inhame", "aveia"],
tempo: "35 minutos",
porcoes: "8 bolinhos",
restricoes: [],
ingredientes: [
"2 inhames médios cozidos e amassados",
"1 ovo",
"2 colheres de sopa de aveia em flocos",
"Temperos naturais a gosto"
],
preparo: [
"Cozinhe os inhames e amasse até obter um purê.",
"Misture o inhame amassado com o ovo, a aveia em flocos e os temperos naturais.",
"Modele a massa em formato de bolinhos.",
"Disponha os bolinhos em uma assadeira.",
"Asse em forno preaquecido a 200 °C por aproximadamente 25 minutos, ou até dourarem."
],
substituicoes: [
{
ingrediente: "Ovo",
substituto: "1 colher de sopa de chia hidratada em 3 colheres de sopa de água"
},
{
ingrediente: "Aveia em flocos",
substituto: "Farinha de arroz"
}
]
},
{
    id: "salada-grao-de-bico-berinjela",
    nome: "Salada de pepino, berinjela e grão-de-bico",
    tipo: "salada",
    imagem: "imagens/receitas/sal-grao.webp",
    alimentos: ["grao-de-bico", "pepino", "berinjela", "cebola", "alho", "limao"],
    tempo: "45 minutos",
    porcoes: "4 porções",
    restricoes: ["vegano", "vegetariano", "sem lactose", "sem glúten"],
    ingredientes: [
      "2 xícaras de grão-de-bico cozido e escorrido",
      "1 pepino médio picado",
      "1 berinjela média cortada em cubos",
      "1/2 cebola picada",
      "1 dente de alho amassado",
      "2 colheres (sopa) de azeite",
      "Suco de 1/2 limão",
      "2 colheres (sopa) de cheiro-verde picado",
      "Sal a gosto"
    ],
    preparo: [
      "Se o grão-de-bico estiver cru, deixe de molho por 8 a 12 horas. Descarte a água, cozinhe em água limpa até ficar macio, escorra e deixe esfriar.",
      "Preaqueça o forno a 200 °C.",
      "Coloque a berinjela em uma assadeira, misture com 1 colher de azeite e asse por 20 a 25 minutos, até ficar macia.",
      "Em uma tigela, misture o grão-de-bico, o pepino, a berinjela assada, a cebola e o alho.",
      "Tempere com o restante do azeite, o limão, o cheiro-verde e o sal.",
      "Misture bem e leve à geladeira por cerca de 20 minutos antes de servir."
    ],
    substituicoes: [
      {
        ingrediente: "Pepino",
        substituto: "Tomate picado ou abobrinha cozida"
      },
      {
        ingrediente: "Berinjela",
        substituto: "Abobrinha ou cenoura assada"
      },
      {
        ingrediente: "Limão",
        substituto: "Vinagre de maçã em pequena quantidade"
      },
      {
        ingrediente: "Cheiro-verde",
        substituto: "Salsinha ou coentro"
      }
    ]
  },
  {
    id: "homus-grao-de-bico",
    nome: "Homus (pasta de grão-de-bico)",
    tipo: "pasta",
    imagem: "imagens/receitas/hom-gra.jfif",
    alimentos: ["grao-de-bico", "gergelim", "limao", "alho"],
    tempo: "10 minutos",
    porcoes: "4 porções",
    restricoes: ["vegano", "vegetariano", "sem lactose", "sem glúten"],
    ingredientes: [
      "2 xícaras de grão-de-bico cozido e escorrido",
      "2 colheres (sopa) de tahine (pasta de gergelim)",
      "Suco de 1 limão",
      "1 dente de alho pequeno",
      "2 colheres (sopa) de azeite",
      "1/2 colher (chá) de sal",
      "3 a 6 colheres (sopa) de água"
    ],
    preparo: [
      "Coloque o grão-de-bico, o tahine, o limão, o alho, o azeite e o sal no liquidificador ou processador.",
      "Bata até formar uma pasta.",
      "Acrescente a água aos poucos, batendo até atingir uma consistência cremosa.",
      "Prove e ajuste o limão e o sal.",
      "Transfira para um recipiente e, se desejar, finalize com um fio de azeite."
    ],
    substituicoes: [
      {
        ingrediente: "Tahine",
        substituto: "Pode ser omitido; acrescente um pouco mais de azeite e água para ajustar a textura"
      },
      {
        ingrediente: "Limão",
        substituto: "Vinagre suave em pequena quantidade"
      },
      {
        ingrediente: "Alho",
        substituto: "Pode ser omitido"
      }
    ]
  },
  {
    id: "falafel-grao-de-bico",
    nome: "Falafel (bolinhos de grão-de-bico)",
    tipo: "lanche",
    imagem: "imagens/receitas/falafel-g.jfif",
    alimentos: ["grao-de-bico", "cebola", "alho", "salsinha", "coentro", "cominho"],
    tempo: "1 hora e 15 minutos",
    porcoes: "4 porções",
    restricoes: ["vegano", "vegetariano", "sem lactose"],
    ingredientes: [
      "2 xícaras de grão-de-bico cru, deixado de molho por 12 a 24 horas",
      "1/2 cebola",
      "2 dentes de alho",
      "1/2 xícara de salsinha ou coentro",
      "1 colher (chá) de cominho",
      "1/2 colher (chá) de sal",
      "2 a 4 colheres (sopa) de farinha de grão-de-bico ou farinha de trigo",
      "1 colher (chá) de fermento químico, opcional",
      "Azeite para untar"
    ],
    preparo: [
      "Deixe o grão-de-bico cru de molho por 12 a 24 horas e escorra muito bem. Não utilize grão-de-bico cozido nesta receita.",
      "Processe o grão-de-bico com a cebola, o alho, as ervas, o cominho e o sal até formar uma mistura granulada que possa ser modelada.",
      "Acrescente a farinha aos poucos, somente até dar liga. Se desejar, misture o fermento.",
      "Leve a massa à geladeira por 30 minutos.",
      "Modele bolinhos pequenos e coloque-os em uma assadeira untada.",
      "Asse a 200 °C por cerca de 25 a 35 minutos, virando na metade do tempo, até ficarem firmes e dourados."
    ],
    substituicoes: [
      {
        ingrediente: "Farinha de trigo",
        substituto: "Farinha de grão-de-bico"
      },
      {
        ingrediente: "Salsinha",
        substituto: "Coentro"
      },
      {
        ingrediente: "Cominho",
        substituto: "Pode ser omitido ou substituído por uma pequena quantidade de páprica"
      }
    ]
  },
  {
    id: "hamburguer-grao-de-bico",
    nome: "Hambúrguer de grão-de-bico",
    tipo: "lanche",
    imagem: "imagens/receitas/hamburguer.jfif",
    alimentos: ["grao-de-bico", "cebola", "alho", "aveia", "azeite", "salsinha"],
    tempo: "40 minutos",
    porcoes: "4 porções",
    restricoes: ["vegano", "vegetariano", "sem lactose"],
    ingredientes: [
      "2 xícaras de grão-de-bico cozido e bem escorrido",
      "1/2 cebola picada",
      "1 dente de alho amassado",
      "1/2 xícara de farinha de aveia",
      "1 colher (sopa) de azeite",
      "2 colheres (sopa) de cheiro-verde picado",
      "1/2 colher (chá) de páprica doce, opcional",
      "Sal a gosto"
    ],
    preparo: [
      "Amasse o grão-de-bico com um garfo ou processe rapidamente, sem transformar em uma pasta líquida.",
      "Refogue a cebola e o alho no azeite até ficarem macios.",
      "Misture o refogado ao grão-de-bico e acrescente a farinha de aveia, o cheiro-verde, a páprica e o sal.",
      "Se a massa estiver muito úmida, acrescente mais farinha aos poucos.",
      "Modele os hambúrgueres e leve à geladeira por 15 a 20 minutos.",
      "Grelhe em frigideira untada por 4 a 5 minutos de cada lado ou asse a 200 °C até firmarem e dourarem."
    ],
    substituicoes: [
      {
        ingrediente: "Farinha de aveia",
        substituto: "Farinha de arroz ou farinha de grão-de-bico"
      },
      {
        ingrediente: "Cebola",
        substituto: "Cebola em pó em pequena quantidade"
      },
      {
        ingrediente: "Cheiro-verde",
        substituto: "Salsinha ou coentro"
      }
    ]
  },
  {
    id: "nhoque-grao-de-bico",
    nome: "Nhoque de grão-de-bico",
    tipo: "massa",
    imagem: "imagens/receitas/nho-gra.jfif",
    alimentos: ["grao-de-bico", "farinha-de-trigo", "alho", "azeite", "tomate"],
    tempo: "40 minutos",
    porcoes: "4 porções",
    restricoes: ["vegetariano", "sem lactose"],
    ingredientes: [
      "2 xícaras de grão-de-bico cozido e bem escorrido",
      "1 xícara de farinha de trigo, aproximadamente",
      "1 colher (sopa) de azeite",
      "1 dente de alho amassado, opcional",
      "Sal a gosto",
      "Água para cozinhar o nhoque",
      "Molho de tomate para servir, opcional"
    ],
    preparo: [
      "Amasse ou processe o grão-de-bico até formar um purê espesso.",
      "Misture o azeite, o alho e o sal.",
      "Acrescente a farinha aos poucos, até obter uma massa que possa ser modelada sem grudar excessivamente nas mãos.",
      "Divida a massa em porções e forme rolinhos sobre uma superfície enfarinhada.",
      "Corte os rolinhos em pedaços pequenos.",
      "Cozinhe os nhoques em água fervente, em pequenas porções. Retire com uma escumadeira quando subirem à superfície e estiverem firmes.",
      "Sirva com molho de tomate ou outro molho de sua preferência."
    ],
    substituicoes: [
      {
        ingrediente: "Farinha de trigo",
        substituto: "Mistura de farinha sem glúten própria para massas; a quantidade pode variar"
      },
      {
        ingrediente: "Alho",
        substituto: "Pode ser omitido"
      },
      {
        ingrediente: "Molho de tomate",
        substituto: "Molho caseiro de legumes"
      }
    ]
  },
  {
    id: "brownie-grao-de-bico",
    nome: "Brownie de grão-de-bico",
    tipo: "doce",
    imagem: "imagens/receitas/bro-gra.jfif",
    alimentos: ["grao-de-bico", "ovo", "cacau", "acucar", "oleo-vegetal"],
    tempo: "40 minutos",
    porcoes: "8 porções",
    restricoes: ["vegetariano", "sem lactose", "sem glúten"],
    ingredientes: [
      "300 g de grão-de-bico cozido e bem escorrido",
      "2 ovos",
      "1/2 xícara de cacau em pó sem açúcar",
      "1/3 a 1/2 xícara de açúcar",
      "1/4 de xícara de óleo vegetal",
      "1 colher (chá) de fermento químico",
      "1 colher (chá) de essência de baunilha, opcional",
      "2 colheres (sopa) de água, se necessário",
      "2 colheres (sopa) de gotas de chocolate, opcionais"
    ],
    preparo: [
      "Preaqueça o forno a 180 °C e unte uma forma pequena.",
      "Bata no liquidificador ou processador o grão-de-bico, os ovos, o cacau, o açúcar, o óleo e a baunilha até formar uma mistura homogênea.",
      "Se a massa estiver muito espessa, acrescente a água aos poucos.",
      "Misture o fermento delicadamente. Se desejar, adicione as gotas de chocolate.",
      "Despeje a massa na forma e nivele a superfície.",
      "Asse por aproximadamente 20 a 30 minutos. O centro pode permanecer úmido, mas a massa deve estar firme.",
      "Espere esfriar antes de cortar."
    ],
    substituicoes: [
      {
        ingrediente: "Ovos",
        substituto: "Para cada ovo, use 1 colher (sopa) de linhaça moída misturada a 3 colheres (sopa) de água; deixe descansar por 10 minutos"
      },
      {
        ingrediente: "Açúcar",
        substituto: "Açúcar demerara na mesma quantidade; adoçantes culinários podem exigir ajustes"
      },
      {
        ingrediente: "Gotas de chocolate",
        substituto: "Podem ser omitidas"
      }
    ]
  },
  {
    id: "brigadeiro-grao-de-bico",
    nome: "Brigadeiro com grão-de-bico",
    tipo: "doce",
    imagem: "imagens/receitas/bri-gra.jfif",
    alimentos: ["grao-de-bico", "cacau", "acucar", "leite", "oleo-de-coco"],
    tempo: "30 minutos",
    porcoes: "10 porções",
    restricoes: ["vegetariano", "sem glúten"],
    ingredientes: [
      "1 xícara de grão-de-bico cozido, escorrido e sem excesso de água",
      "3 colheres (sopa) de cacau em pó",
      "3 a 4 colheres (sopa) de açúcar",
      "2 colheres (sopa) de leite ou bebida vegetal",
      "1 colher (sopa) de óleo de coco ou manteiga",
      "1/2 colher (chá) de essência de baunilha, opcional",
      "Cacau em pó ou coco ralado para finalizar, opcional"
    ],
    preparo: [
      "Bata o grão-de-bico com o cacau, o açúcar, o leite e a baunilha até formar uma pasta bem lisa.",
      "Coloque a mistura em uma panela e acrescente o óleo de coco ou a manteiga.",
      "Cozinhe em fogo baixo, mexendo continuamente, até engrossar e começar a desgrudar do fundo da panela.",
      "Transfira para um prato e deixe esfriar completamente.",
      "Para servir de colher, coloque em copinhos. Para enrolar, leve à geladeira até firmar e modele bolinhas com as mãos levemente untadas.",
      "Se desejar, passe as bolinhas no cacau ou no coco ralado."
    ],
    substituicoes: [
      {
        ingrediente: "Leite",
        substituto: "Bebida vegetal compatível com as necessidades alimentares"
      },
      {
        ingrediente: "Manteiga",
        substituto: "Óleo de coco ou margarina sem leite"
      },
      {
        ingrediente: "Açúcar",
        substituto: "Açúcar demerara; adoçantes podem alterar a consistência"
      },
      {
        ingrediente: "Coco ralado",
        substituto: "Pode ser omitido"
      }
    ],
  },
  
{
id: "moqueca-banana-terra",
nome: "Moqueca Capixaba de Banana-da-Terra",
tipo: "prato principal",
imagem: "imagens/receitas/moqueca-capixaba.webp",
alimentos: ["banana-da-terra", "tomate", "cebola", "alho", "coentro", "limao"],
tempo: "25 minutos",
porcoes: "3 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"3 bananas-da-terra maduras",
"2 tomates picados",
"1 cebola fatiada",
"1/2 pimentão vermelho",
"1/2 pimentão amarelo",
"2 dentes de alho",
"2 colheres de sopa de azeite de oliva",
"Suco de 1 limão",
"Coentro a gosto",
"Sal a gosto"
],
preparo: [
"Tempere as bananas com o suco de limão e o sal.",
"Em uma panela, monte camadas de cebola, alho, pimentões, tomate e banana.",
"Regue com azeite, tampe e cozinhe em fogo baixo por 15 minutos.",
"Finalize com coentro e sirva."
],
substituicoes: [
{
ingrediente: "Azeite de oliva",
substituto: "Óleo de coco"
}
]
},
{
id: "vinagrete-caju",
nome: "Vinagrete de Caju",
tipo: "acompanhamento",
imagem: "imagens/receitas/vinagrete-de-caju.webp",
alimentos: ["caju", "tomate", "cebola", "limao", "salsinha"],
tempo: "25 minutos",
porcoes: "3 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"2 cajus frescos em cubos",
"1 tomate sem sementes em cubos",
"1/2 cebola roxa picada",
"1/4 de xícara de azeite",
"Suco de 1 limão",
"Sal a gosto",
"Pimenta a gosto",
"Salsinha a gosto"
],
preparo: [
"Misture o caju, o tomate e a cebola.",
"Adicione o azeite, o suco de limão, o sal, a pimenta e a salsinha.",
"Misture bem e leve à geladeira por 20 minutos antes de servir."
],
substituicoes: [
{
ingrediente: "Salsinha",
substituto: "Coentro fresco"
}
]
},
{
id: "chutney-goiaba",
nome: "Chutney de Goiaba",
tipo: "molho",
imagem: "imagens/receitas/chutney-de-goiabada.webp",
alimentos: ["goiaba", "cebola"],
tempo: "30 minutos",
porcoes: "6 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"4 goiabas vermelhas sem sementes em cubos",
"1/2 cebola picada",
"1/4 de xícara de vinagre de maçã",
"2 colheres de sopa de açúcar demerara",
"1 pedaço pequeno de gengibre ralado",
"1 fio de azeite",
"1 pitada de pimenta-do-reino",
"Sal a gosto"
],
preparo: [
"Refogue a cebola e o gengibre com um fio de azeite.",
"Adicione a goiaba, o vinagre, o açúcar, o sal e a pimenta.",
"Cozinhe em fogo baixo por aproximadamente 20 minutos, mexendo até encorpar."
],
substituicoes: [
{
ingrediente: "Açúcar demerara",
substituto: "Melado de cana"
}
]
},
{
id: "molho-jabuticaba",
nome: "Molho de Jabuticaba para Carnes e Grelhados",
tipo: "molho",
imagem: "imagens/receitas/mol-jabu.jpg",
alimentos: ["jabuticaba", "cebola", "alho"],
tempo: "30 minutos",
porcoes: "4 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"2 xícaras de jabuticabas frescas",
"1/2 xícara de água",
"1/2 cebola roxa picada",
"1 dente de alho",
"1 colher de sopa de azeite",
"1 colher de sopa de açúcar demerara",
"Sal a gosto",
"Pimenta a gosto"
],
preparo: [
"Cozinhe as jabuticabas na água por 10 minutos.",
"Passe as frutas por uma peneira para extrair o suco.",
"Refogue a cebola e o alho no azeite.",
"Adicione o suco de jabuticaba, o açúcar, o sal e a pimenta.",
"Cozinhe em fogo baixo até o molho reduzir e engrossar."
],
substituicoes: [
{
ingrediente: "Açúcar demerara",
substituto: "Melado de cana"
}
]
},
{
id: "ceviche-caju-pitanga",
nome: "Ceviche de Caju com Pitanga",
tipo: "entrada",
imagem: "imagens/receitas/che-caju.webp",
alimentos: ["caju", "pitanga", "cebola", "limao", "coentro"],
tempo: "20 minutos",
porcoes: "3 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"3 cajus em cubos",
"1/2 xícara de polpa de pitanga",
"1/2 cebola roxa fatiada finamente",
"1 pimenta dedo-de-moça sem sementes picada",
"Suco de 2 limões",
"Coentro a gosto",
"Sal a gosto"
],
preparo: [
"Misture o caju, a cebola e a pimenta.",
"Regue com a polpa de pitanga e o suco de limão.",
"Tempere com sal e coentro.",
"Deixe marinar na geladeira por 15 minutos antes de servir."
],
substituicoes: [
{
ingrediente: "Pitanga",
substituto: "Polpa de maracujá"
}
]
},
{
id: "farofa-banana-castanha",
nome: "Farofa de Banana-da-Terra com Castanha-do-Pará",
tipo: "acompanhamento",
imagem: "imagens/receitas/far-banana.jpg",
alimentos: ["banana-da-terra", "farinha-de-mandioca", "castanha-do-para"],
tempo: "20 minutos",
porcoes: "4 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"2 bananas-da-terra em cubos",
"2 xícaras de farinha de mandioca torrada",
"1/2 xícara de castanhas-do-pará picadas",
"1/2 cebola picada",
"3 colheres de sopa de azeite ou óleo de coco",
"Sal a gosto",
"Cheiro-verde a gosto"
],
preparo: [
"Refogue a cebola no azeite até dourar.",
"Adicione a banana e frite até amolecer.",
"Junte as castanhas e a farinha de mandioca.",
"Mexa em fogo baixo por 5 minutos.",
"Ajuste o sal, acrescente o cheiro-verde e sirva."
],
substituicoes: [
{
ingrediente: "Castanha-do-Pará",
substituto: "Castanha-de-caju"
},
{
ingrediente: "Azeite",
substituto: "Óleo de coco"
}
]
},
{
id: "molho-maracuja",
nome: "Molho de Maracujá para Saladas e Peixes",
tipo: "molho",
imagem: "imagens/receitas/mol-maracu.jpg",
alimentos: ["maracuja"],
tempo: "5 minutos",
porcoes: "4 porções",
restricoes: ["sem lactose", "sem glúten"],
ingredientes: [
"Polpa de 2 maracujás com sementes",
"3 colheres de sopa de azeite de oliva",
"1 colher de sopa de melado de cana",
"1 colher de chá de mostarda",
"Sal a gosto",
"Pimenta-do-reino a gosto"
],
preparo: [
"Coloque todos os ingredientes em uma tigela.",
"Bata com um garfo até formar uma emulsão homogênea.",
"Sirva sobre saladas, peixes ou vegetais grelhados."
],
substituicoes: [
{
ingrediente: "Melado de cana",
substituto: "Mel"
},
{
ingrediente: "Mostarda",
substituto: "Uma pequena quantidade de gengibre ralado"
}
]
},
{
id: "risoto-pitanga",
nome: "Risoto de Fundo de Panela com Pitanga",
tipo: "prato principal",
imagem: "imagens/receitas/risoto-de-panela.jpg",
alimentos: ["arroz", "pitanga", "cebola"],
tempo: "30 minutos",
porcoes: "2 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"1 xícara de arroz arbóreo",
"1/2 xícara de polpa de pitanga",
"1/2 cebola picada",
"3 xícaras de caldo de legumes quente",
"2 colheres de sopa de azeite de oliva",
"Sal a gosto",
"Pimenta a gosto"
],
preparo: [
"Refogue a cebola no azeite até ficar translúcida.",
"Adicione o arroz e mexa por alguns minutos.",
"Acrescente o caldo de legumes quente aos poucos, mexendo sempre.",
"Na metade do cozimento, adicione a polpa de pitanga.",
"Continue adicionando o caldo até o arroz ficar al dente.",
"Ajuste o sal e a pimenta e sirva imediatamente."
],
substituicoes: [
{
ingrediente: "Arroz arbóreo",
substituto: "Arroz cateto"
}
]
},
{
id: "salada-manga-castanha",
nome: "Salada Refrescante de Manga com Castanha-de-Caju",
tipo: "salada",
imagem: "imagens/receitas/salada-manga.jfif",
alimentos: ["manga", "castanha-de-caju", "limao"],
tempo: "10 minutos",
porcoes: "2 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"1 manga Palmer firme em tiras",
"1/2 xícara de castanhas-de-caju torradas",
"Folhas de rúcula a gosto",
"Folhas de alface a gosto",
"Suco de 1 limão",
"2 colheres de sopa de azeite de oliva",
"Sal a gosto"
],
preparo: [
"Monte uma base com as folhas de rúcula e alface.",
"Distribua as tiras de manga e as castanhas-de-caju por cima.",
"Tempere com o suco de limão, o azeite e o sal.",
"Sirva imediatamente."
],
substituicoes: [
{
ingrediente: "Castanha-de-caju",
substituto: "Sementes de abóbora torradas"
}
]
},
{
id: "pure-banana-terra",
nome: "Purê de Banana-da-Terra",
tipo: "acompanhamento",
imagem: "imagens/receitas/pure-banana.jpg",
alimentos: ["banana-da-terra"],
tempo: "20 minutos",
porcoes: "4 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"4 bananas-da-terra maduras",
"1 colher de sopa de azeite de oliva",
"1/4 de xícara de água quente ou leite de coco leve",
"1 pitada de noz-moscada",
"Sal a gosto"
],
preparo: [
"Descasque as bananas e cozinhe em água fervente até ficarem macias.",
"Escorra e amasse bem com um garfo ou espremedor.",
"Misture o azeite, o sal, a noz-moscada e a água quente ou o leite de coco.",
"Mexa até obter uma textura aveludada e sirva."
],
substituicoes: [
{
ingrediente: "Leite de coco",
substituto: "Água quente"
}
]
},
{
id: "espetinho-caju-ervas",
nome: "Espetinho de Caju Grelhado com Ervas",
tipo: "acompanhamento",
imagem: "imagens/receitas/espe-caju.jpg",
alimentos: ["caju", "alho", "alecrim"],
tempo: "20 minutos",
porcoes: "3 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"3 cajus firmes cortados em cubos grandes",
"2 colheres de sopa de azeite",
"1 dente de alho picado",
"1 colher de chá de alecrim fresco",
"Sal a gosto",
"Pimenta-do-reino a gosto"
],
preparo: [
"Monte os cubos de caju em espetos de madeira.",
"Tempere com azeite, alho, alecrim, sal e pimenta.",
"Aqueça uma frigideira ou grelha.",
"Grelhe os espetinhos até dourar todos os lados.",
"Sirva ainda quente."
],
substituicoes: [
{
ingrediente: "Alecrim fresco",
substituto: "Tomilho fresco"
}
]
},
{
id: "barbecue-goiaba",
nome: "Molho Barbecue de Goiaba",
tipo: "molho",
imagem: "imagens/receitas/barbe-goi.jpg",
alimentos: ["goiaba", "tomate", "cebola"],
tempo: "20 minutos",
porcoes: "6 porções",
restricoes: ["sem lactose"],
ingredientes: [
"100 g de goiabada cascão picada",
"1/2 xícara de extrato de tomate",
"2 colheres de sopa de vinagre de maçã",
"1 colher de sopa de molho shoyu",
"1/2 colher de chá de fumaça líquida",
"1/2 cebola ralada",
"1 fio de azeite",
"1/2 xícara de água",
"Sal a gosto"
],
preparo: [
"Refogue a cebola com um fio de azeite.",
"Adicione a goiabada e a água, mantendo o fogo baixo até derreter.",
"Junte o extrato de tomate, o vinagre, o shoyu e a fumaça líquida.",
"Cozinhe por aproximadamente 10 minutos, mexendo até encorpar.",
"Ajuste o sal e deixe esfriar antes de servir."
],
substituicoes: [
{
ingrediente: "Molho shoyu",
substituto: "Tamari sem glúten"
},
{
ingrediente: "Goiabada cascão",
substituto: "Goiaba madura cozida com açúcar"
}
]
},
{
id: "creme-acai-banana",
nome: "Creme de Açaí com Banana e Cacau",
tipo: "sobremesa",
imagem: "imagens/receitas/cre-aça.jfif",
alimentos: ["acai", "banana"],
tempo: "10 minutos",
porcoes: "2 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"200 g de polpa de açaí puro congelada",
"2 bananas congeladas em rodelas",
"1 colher de sopa de cacau 100%",
"1 colher de sopa de melado de cana"
],
preparo: [
"Coloque o açaí, as bananas congeladas, o cacau e o melado no processador ou liquidificador potente.",
"Bata até formar um creme denso e homogêneo.",
"Distribua em tigelas e sirva imediatamente."
],
substituicoes: [
{
ingrediente: "Melado de cana",
substituto: "Xarope de agave"
}
]
},
{
id: "cocada-maracuja",
nome: "Cocada Cremosa de Maracujá",
tipo: "sobremesa",
imagem: "imagens/receitas/coca-maracu.jpg",
alimentos: ["maracuja", "coco"],
tempo: "25 minutos",
porcoes: "6 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"Polpa de 2 maracujás frescos",
"2 xícaras de coco ralado fresco",
"1 xícara de açúcar demerara",
"1/2 xícara de água"
],
preparo: [
"Misture a água, o açúcar e a polpa de maracujá em uma panela.",
"Leve ao fogo até o açúcar dissolver.",
"Adicione o coco ralado e cozinhe em fogo baixo, mexendo sempre, por 15 a 20 minutos.",
"Retire do fogo quando a mistura começar a desprender do fundo da panela.",
"Deixe amornar antes de servir."
],
substituicoes: [
{
ingrediente: "Açúcar demerara",
substituto: "Açúcar de coco"
}
]
},
{
id: "mousse-cupuacu",
nome: "Mousse Cremosa de Cupuaçu",
tipo: "sobremesa",
imagem: "imagens/receitas/mou-cu.jfif",
alimentos: ["cupuacu"],
tempo: "1 hora e 10 minutos",
porcoes: "3 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"200 g de polpa de cupuaçu",
"1/2 abacate maduro congelado em pedaços",
"1/3 de xícara de melado de cana",
"1/4 de xícara de água"
],
preparo: [
"Bata no liquidificador a polpa de cupuaçu, o abacate e o melado.",
"Adicione a água aos poucos até atingir uma textura cremosa.",
"Distribua em taças.",
"Leve à geladeira por 1 hora antes de servir."
],
substituicoes: [
{
ingrediente: "Melado de cana",
substituto: "Xarope de agave"
}
]
},
{
id: "sorbet-manga-maracuja",
nome: "Sorbet de Manga com Maracujá",
tipo: "sobremesa",
imagem: "imagens/receitas/sor-man.jfif",
alimentos: ["manga", "maracuja"],
tempo: "10 minutos",
porcoes: "3 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"2 mangas Palmer picadas e congeladas",
"Polpa de 1 maracujá fresco",
"1 colher de sopa de xarope de agave ou melado"
],
preparo: [
"Bata a manga congelada no processador até obter um creme homogêneo.",
"Adicione a polpa de maracujá e o xarope de agave ou melado.",
"Misture delicadamente com uma colher.",
"Sirva em seguida."
],
substituicoes: [
{
ingrediente: "Xarope de agave",
substituto: "Melado de cana"
}
]
},
{
id: "doce-umbu-calda",
nome: "Doce de Umbu em Calda",
tipo: "sobremesa",
imagem: "imagens/receitas/do-umb.jfif",
alimentos: ["umbu", "canela"],
tempo: "25 minutos",
porcoes: "6 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"500 g de umbus maduros lavados",
"1 xícara de açúcar demerara",
"1 canela em pau",
"2 cravos-da-índia",
"1 xícara de água"
],
preparo: [
"Coloque a água, o açúcar, a canela e os cravos em uma panela.",
"Ferva até formar uma calda leve.",
"Adicione os umbus inteiros.",
"Cozinhe em fogo baixo por aproximadamente 15 minutos, até ficarem macios."
],
substituicoes: [
{
ingrediente: "Açúcar demerara",
substituto: "Açúcar de coco"
}
]
},
{
id: "gelado-graviola",
nome: "Gelado de Graviola",
tipo: "sobremesa",
imagem: "imagens/receitas/gel-grav.jfif",
alimentos: ["graviola", "coco", "limao"],
tempo: "4 horas e 10 minutos",
porcoes: "4 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"250 g de polpa de graviola",
"1/2 xícara de leite de coco concentrado",
"3 colheres de sopa de açúcar demerara ou adoçante natural",
"Suco de 1/2 limão"
],
preparo: [
"Bata todos os ingredientes no liquidificador até obter um creme liso.",
"Despeje em formas de picolé ou em um refratário.",
"Leve ao congelador por pelo menos 4 horas antes de servir."
],
substituicoes: [
{
ingrediente: "Açúcar demerara",
substituto: "Melado de cana"
}
]
},
{
id: "goiabada-caseira",
nome: "Goiabada Cascão Caseira",
tipo: "doce",
imagem: "imagens/receitas/goi-cas.jfif",
alimentos: ["goiaba", "limao"],
tempo: "50 minutos",
porcoes: "10 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"1 kg de goiabas vermelhas bem maduras com casca",
"2 xícaras de açúcar demerara",
"Suco de 1/2 limão",
"Água suficiente para bater as goiabas"
],
preparo: [
"Bata as goiabas com um pouco de água no liquidificador.",
"Coe a mistura, mantendo alguns pedaços de casca se desejar.",
"Transfira para uma panela e adicione o açúcar e o suco de limão.",
"Cozinhe em fogo alto, mexendo sempre, até engrossar e soltar do fundo da panela, por cerca de 40 minutos.",
"Deixe esfriar antes de servir ou armazenar."
],
substituicoes: [
{
ingrediente: "Açúcar demerara",
substituto: "Açúcar de coco"
}
]
},
{
id: "geleia-jabuticaba",
nome: "Geleia de Jabuticaba",
tipo: "geleia",
imagem: "imagens/receitas/gel.jabu.jfif",
alimentos: ["jabuticaba"],
tempo: "45 minutos",
porcoes: "10 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"1 kg de jabuticabas frescas",
"1 e 1/2 xícara de açúcar demerara",
"1/2 xícara de água"
],
preparo: [
"Amasse levemente as jabuticabas em uma panela com a água.",
"Cozinhe por 15 minutos até as frutas estourarem.",
"Passe por uma peneira, pressionando levemente para extrair o líquido.",
"Retorne o líquido à panela, adicione o açúcar e cozinhe até atingir o ponto de geleia.",
"Deixe esfriar antes de armazenar em um recipiente limpo."
],
substituicoes: [
{
ingrediente: "Açúcar demerara",
substituto: "Açúcar de coco"
}
]
},
{
id: "compota-caju",
nome: "Compota de Caju em Calda",
tipo: "sobremesa",
imagem: "imagens/receitas/comp-caju.jfif",
alimentos: ["caju", "canela"],
tempo: "50 minutos",
porcoes: "6 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"6 cajus inteiros sem a castanha",
"1 e 1/2 xícara de açúcar",
"2 xícaras de água",
"1 canela em pau"
],
preparo: [
"Lave os cajus e fure-os com um garfo.",
"Esprema delicadamente para retirar o excesso de suco.",
"Faça uma calda com a água, o açúcar e a canela.",
"Adicione os cajus e cozinhe em fogo baixo por aproximadamente 40 minutos, até ficarem macios e translúcidos.",
"Deixe esfriar antes de servir."
],
substituicoes: [
{
ingrediente: "Açúcar",
substituto: "Açúcar demerara"
}
]
},
{
id: "creme-pitaya-banana",
nome: "Creme de Pitaya Rosa com Banana",
tipo: "sobremesa",
imagem: "imagens/receitas/cre-pi.jfif",
alimentos: ["pitaya", "banana", "coco", "limao"],
tempo: "10 minutos",
porcoes: "2 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"1 pitaya rosa congelada em cubos",
"2 bananas congeladas em rodelas",
"2 colheres de sopa de leite de coco fresco",
"Raspas de limão para decorar"
],
preparo: [
"Coloque a pitaya congelada, as bananas e o leite de coco no processador.",
"Bata até atingir a consistência de sorvete.",
"Distribua em tigelas.",
"Decore com raspas de limão e sirva gelado."
],
substituicoes: [
{
ingrediente: "Leite de coco",
substituto: "Bebida vegetal de amêndoas sem açúcar"
}
]
},
{
id: "espetinho-frutas-melado",
nome: "Espetinho de Frutas Nativas Grelhadas com Melado",
tipo: "sobremesa",
imagem: "imagens/receitas/esp-fru.jfif",
alimentos: ["banana-da-terra", "caju", "canela"],
tempo: "20 minutos",
porcoes: "3 porções",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"Cubos de banana-da-terra",
"Cubos de abacaxi",
"Cubos de caju",
"3 colheres de sopa de melado de cana",
"1 pitada de canela em pó"
],
preparo: [
"Monte os cubos de frutas intercalados em espetos de madeira.",
"Pincele com o melado de cana.",
"Polvilhe canela em pó.",
"Grelhe em uma frigideira antiaderente até as frutas caramelizarem levemente."
],
substituicoes: [
{
ingrediente: "Melado de cana",
substituto: "Xarope de agave"
}
]
},
{
id: "docinho-buriti-coco",
nome: "Docinho de Buriti com Coco",
tipo: "sobremesa",
imagem: "imagens/receitas/doc-buri.jfif",
alimentos: ["buriti", "coco"],
tempo: "25 minutos",
porcoes: "12 unidades",
restricoes: ["vegano", "sem lactose", "sem glúten"],
ingredientes: [
"200 g de polpa de buriti",
"1 xícara de coco ralado fino seco",
"1/2 xícara de melado de cana ou açúcar demerara",
"Coco ralado para finalizar"
],
preparo: [
"Misture a polpa de buriti, o coco ralado e o adoçante em uma panela.",
"Cozinhe em fogo baixo, mexendo sempre, até a massa soltar do fundo da panela.",
"Deixe esfriar.",
"Modele a massa em bolinhas.",
"Passe as bolinhas no coco ralado para finalizar."
],
substituicoes: [
{
ingrediente: "Melado de cana",
substituto: "Açúcar demerara"
}
]
},
{
  id: "feijao-com-ou-sem-panela-de-pressao",
  nome: "Feijão com ou sem panela de pressão",
  tipo: "receita",
  imagem: "imagens/receitas/fei-si.jfif",
  alimentos: ["feijao", "cebola", "alho", "azeite", "cheiro-verde", "sal"],
  tempo: "",
  porcoes: "",
  restricoes: [],
  ingredientes: [
    "2 xícaras (chá) de feijão cozido",
    "1/2 cebola picada",
    "2 dentes de alho",
    "1 colher (sopa) de azeite",
    "Cheiro-verde e sal a gosto"
  ],
  preparo: [
    "Se utilizar feijão cru, lave os grãos, deixe de molho e descarte a água do molho.",
    "Cozinhe o feijão até ficar macio.",
    "Refogue a cebola e o alho no azeite.",
    "Junte o feijão e os demais ingredientes e cozinhe até os sabores se integrarem.",
    "Finalize com cheiro-verde e ajuste o sal.",
    "Sirva."
  ],
  substituicoes: []
},
{
  id: "feijao-tropeiro",
  nome: "Feijão tropeiro",
  tipo: "receita",
  imagem: "imagens/receitas/feijão-tropeiro.jpg",
  alimentos: ["feijao", "cebola", "alho", "azeite", "cheiro-verde", "sal", "farinha-de-mandioca"],
  tempo: "",
  porcoes: "",
  restricoes: [],
  ingredientes: [
    "2 xícaras (chá) de feijão cozido",
    "1/2 cebola picada",
    "2 dentes de alho",
    "1 colher (sopa) de azeite",
    "Cheiro-verde e sal a gosto",
    "1/2 a 1 xícara de farinha de mandioca"
  ],
  preparo: [
    "Se utilizar feijão cru, lave os grãos, deixe de molho e descarte a água do molho.",
    "Cozinhe o feijão até ficar macio, mantendo os grãos inteiros.",
    "Refogue a cebola e o alho no azeite.",
    "Acrescente o feijão e os demais ingredientes e cozinhe até os sabores se integrarem.",
    "Adicione a farinha de mandioca aos poucos, ajustando a textura.",
    "Finalize com cheiro-verde e ajuste o sal.",
    "Sirva."
  ],
  substituicoes: []
},
{
  id: "feijoada-tradicional-ou-vegetariana",
  nome: "Feijoada tradicional ou vegetariana",
  tipo: "receita",
  imagem: "imagens/receitas/fei-veg.jpg",
  alimentos: ["feijao", "cebola", "alho", "azeite", "cheiro-verde", "sal"],
  tempo: "",
  porcoes: "",
  restricoes: [],
  ingredientes: [
    "2 xícaras (chá) de feijão cozido",
    "1/2 cebola picada",
    "2 dentes de alho",
    "1 colher (sopa) de azeite",
    "Cheiro-verde e sal a gosto"
  ],
  preparo: [
    "Se utilizar feijão cru, lave os grãos, deixe de molho e descarte a água do molho.",
    "Cozinhe o feijão até ficar macio.",
    "Refogue a cebola e o alho no azeite.",
    "Acrescente o feijão e os demais ingredientes e cozinhe até os sabores se integrarem.",
    "Finalize com os temperos e sirva."
  ],
  substituicoes: []
},

{
  id: "tutu-de-feijao",
  nome: "Tutu de feijão",
  tipo: "receita",
  imagem: "imagens/receitas/tut-fei.jfif",
  alimentos: ["feijao", "cebola", "alho", "azeite", "cheiro-verde", "sal", "farinha-de-mandioca"],
  tempo: "",
  porcoes: "",
  restricoes: [],
  ingredientes: [
    "2 xícaras (chá) de feijão cozido",
    "1/2 cebola picada",
    "2 dentes de alho",
    "1 colher (sopa) de azeite",
    "Cheiro-verde e sal a gosto",
    "1/2 a 1 xícara de farinha de mandioca"
  ],
  preparo: [
    "Se utilizar feijão cru, lave os grãos, deixe de molho e descarte a água do molho.",
    "Cozinhe o feijão até ficar macio.",
    "Refogue a cebola e o alho no azeite.",
    "Acrescente o feijão e os demais ingredientes.",
    "Adicione a farinha de mandioca aos poucos, até alcançar a consistência desejada.",
    "Finalize com cheiro-verde e ajuste o sal.",
    "Sirva."
  ],
  substituicoes: []
},
{
  id: "feijao-preto-facil",
  nome: "Feijão preto fácil",
  tipo: "receita",
  imagem: "imagens/receitas/feijao-preto.jpg",
  alimentos: ["feijao-preto", "cebola", "alho", "azeite", "cheiro-verde", "sal"],
  tempo: "",
  porcoes: "",
  restricoes: [],
  ingredientes: [
    "2 xícaras (chá) de feijão cozido",
    "1/2 cebola picada",
    "2 dentes de alho",
    "1 colher (sopa) de azeite",
    "Cheiro-verde e sal a gosto"
  ],
  preparo: [
    "Se utilizar feijão cru, lave os grãos, deixe de molho e descarte a água do molho.",
    "Cozinhe o feijão até ficar macio.",
    "Refogue a cebola e o alho no azeite.",
    "Junte o feijão e os demais ingredientes e cozinhe até os sabores se integrarem.",
    "Finalize com cheiro-verde e ajuste o sal.",
    "Sirva."
  ],
  substituicoes: []
},
{
  id: "sopa-de-feijao",
  nome: "Sopa de feijão",
  tipo: "receita",
  imagem: "imagens/receitas/sop-fei.jfif",
  alimentos: ["feijao", "cebola", "alho", "azeite", "cheiro-verde", "sal"],
  tempo: "",
  porcoes: "",
  restricoes: [],
  ingredientes: [
    "2 xícaras (chá) de feijão cozido",
    "1/2 cebola picada",
    "2 dentes de alho",
    "1 colher (sopa) de azeite",
    "Cheiro-verde e sal a gosto"
  ],
  preparo: [
    "Se usar feijão cru, lave, deixe de molho e descarte a água do molho.",
    "Cozinhe o feijão até ficar macio.",
    "Refogue a cebola e o alho no azeite.",
    "Junte o feijão e os demais ingredientes.",
    "Cozinhe até os sabores se integrarem.",
    "Finalize com os temperos e sirva."
  ],
  substituicoes: []
},{
  id: "feijao-cremoso",
  nome: "Feijão cremoso",
  tipo: "receita",
  imagem: "imagens/receitas/fei-cre.jfif",
  alimentos: ["feijao", "cebola", "alho", "azeite", "cheiro-verde", "sal"],
  tempo: "",
  porcoes: "",
  restricoes: [],
  ingredientes: [
    "2 xícaras (chá) de feijão cozido",
    "1/2 cebola picada",
    "2 dentes de alho",
    "1 colher (sopa) de azeite",
    "Cheiro-verde e sal a gosto"
  ],
  preparo: [
    "Se usar feijão cru, lave, deixe de molho e descarte a água.",
    "Cozinhe até ficar macio.",
    "Refogue a cebola e o alho no azeite.",
    "Acrescente o feijão e cozinhe até os sabores se integrarem.",
    "Ajuste a textura conforme necessário.",
    "Finalize com os temperos e sirva."
  ],
  substituicoes: []
},
{
  id: "dobradinha-com-feijao-branco",
  nome: "Dobradinha com feijão branco",
  tipo: "receita",
  imagem: "imagens/receitas/drob-fei.jfif",
  alimentos: ["feijao-branco", "cebola", "alho", "azeite", "cheiro-verde", "sal", "carne"],
  tempo: "",
  porcoes: "",
  restricoes: [],
  ingredientes: [
    "2 xícaras (chá) de feijão cozido",
    "1/2 cebola picada",
    "2 dentes de alho",
    "1 colher (sopa) de azeite",
    "Cheiro-verde e sal a gosto",
    "100 a 200 g de carne ou embutido, conforme a receita"
  ],
  preparo: [
    "Se usar feijão cru, lave, deixe de molho e descarte a água.",
    "Cozinhe o feijão até ficar macio.",
    "Refogue a cebola e o alho no azeite e doure a proteína escolhida, se houver.",
    "Junte o feijão e os demais ingredientes.",
    "Cozinhe até os sabores se integrarem.",
    "Finalize com os temperos e sirva."
  ],
  substituicoes: []
},
{
  id: "feijao-tropeiro-mineiro",
  nome: "Feijão tropeiro mineiro",
  tipo: "receita",
  imagem: "imagens/receitas/feijao-tropeiro-mineiro.webp",
  alimentos: ["feijao", "cebola", "alho", "azeite", "cheiro-verde", "sal", "farinha-de-mandioca"],
  tempo: "",
  porcoes: "",
  restricoes: [],
  ingredientes: [
    "2 xícaras (chá) de feijão cozido",
    "1/2 cebola picada",
    "2 dentes de alho",
    "1 colher (sopa) de azeite",
    "Cheiro-verde e sal a gosto",
    "1/2 a 1 xícara de farinha de mandioca"
  ],
  preparo: [
    "Se usar feijão cru, lave, deixe de molho e descarte a água.",
    "Cozinhe o feijão até ficar macio, procurando manter os grãos inteiros.",
    "Refogue a cebola e o alho no azeite.",
    "Junte o feijão e os demais ingredientes.",
    "Acrescente a farinha aos poucos, ajustando a textura.",
    "Finalize com os temperos e sirva."
  ],
  substituicoes: []
},
{
  id: "farofa-de-feijao-fradinho",
  nome: "Farofa de feijão-fradinho",
  tipo: "receita",
  imagem: "imagens/receitas/faro-fei.webp",
  alimentos: ["feijao-fradinho", "cebola", "alho", "azeite", "cheiro-verde", "sal", "farinha-de-mandioca"],
  tempo: "",
  porcoes: "",
  restricoes: [],
  ingredientes: [
    "2 xícaras (chá) de feijão cozido",
    "1/2 cebola picada",
    "2 dentes de alho",
    "1 colher (sopa) de azeite",
    "Cheiro-verde e sal a gosto",
    "1/2 a 1 xícara de farinha de mandioca"
  ],
  preparo: [
    "Se usar feijão cru, lave, deixe de molho e descarte a água.",
    "Cozinhe o feijão até ficar macio.",
    "Refogue a cebola e o alho no azeite.",
    "Acrescente o feijão e os temperos.",
    "Adicione a farinha aos poucos até atingir a textura desejada.",
    "Finalize com cheiro-verde e sirva."
  ],
  substituicoes: []
},
{
  id: "salada-de-lentilha",
  nome: "Salada de lentilha",
  tipo: "receita",
  imagem: "imagens/receitas/sal-len.jfif",
  alimentos: ["lentilha", "cebola", "alho", "cenoura", "azeite", "louro", "sal", "tomate", "pepino", "limao"],
  tempo: "",
  porcoes: "",
  restricoes: [],
  ingredientes: [
    "2 xícaras de lentilha",
    "1 cebola",
    "2 dentes de alho",
    "1 cenoura",
    "2 colheres (sopa) de azeite",
    "Louro, sal e ervas",
    "Tomate, pepino e ervas",
    "Suco de limão"
  ],
  preparo: [
    "Lave a lentilha e retire as impurezas.",
    "Refogue a cebola, o alho e a cenoura no azeite.",
    "Junte a lentilha, cubra com água e cozinhe até o ponto desejado.",
    "Para a salada, escorra a lentilha e deixe esfriar.",
    "Acrescente tomate, pepino e ervas.",
    "Tempere com suco de limão, sal e os demais temperos.",
    "Misture e sirva."
  ],
  substituicoes: []
},
{
  id: "lentilha-da-fortuna",
  nome: "Lentilha da fortuna",
  tipo: "receita",
  imagem: "imagens/receitas/lentilha-da-fortuna.webp",
  alimentos: ["lentilha", "cebola", "alho", "cenoura", "azeite", "louro", "sal"],
  tempo: "",
  porcoes: "",
  restricoes: [],
  ingredientes: [
    "2 xícaras de lentilha",
    "1 cebola",
    "2 dentes de alho",
    "1 cenoura",
    "2 colheres (sopa) de azeite",
    "Louro, sal e ervas"
  ],
  preparo: [
    "Lave a lentilha e retire as impurezas.",
    "Refogue a cebola, o alho e a cenoura no azeite.",
    "Acrescente a lentilha e cubra com água.",
    "Cozinhe até atingir o ponto desejado.",
    "Ajuste os temperos.",
    "Sirva."
  ],
 
},

{
  id: "lentilha-com-costelinha-de-porco-e-linguica",
  nome: "Lentilha com costelinha de porco e linguiça",
  tipo: "receita",
  imagem: "imagens/receitas/lentilhas-a-espanhola.jpg",
  alimentos: ["lentilha", "cebola", "alho", "cenoura", "azeite", "louro", "sal", "carne"],
  tempo: "",
  porcoes: "",
  restricoes: [],
  ingredientes: [
    "2 xícaras de lentilha",
    "1 cebola",
    "2 dentes de alho",
    "1 cenoura",
    "2 colheres (sopa) de azeite",
    "Louro, sal e ervas",
    "100 a 200 g de carne ou embutido, conforme a receita"
  ],
  preparo: [
    "Lave a lentilha e retire as impurezas.",
    "Refogue a cebola, o alho e a cenoura no azeite.",
    "Acrescente a lentilha e cubra com água.",
    "Cozinhe até a lentilha atingir o ponto desejado.",
    "Acrescente a carne ou o embutido conforme a preparação.",
    "Ajuste os temperos e sirva."
  ],
  substituicoes: [
    {
      ingrediente: "carne ou embutido",
      substituto: "cogumelos dourados, cenoura marinada, tofu defumado ou vegetal grelhado"
    }
  ]
},
{
  id: "lentilha-com-legumes",
  nome: "Lentilha com legumes",
  tipo: "receita",
  imagem: "imagens/receitas/leg-len.jfif",
  alimentos: ["lentilha", "cebola", "alho", "cenoura", "azeite", "louro", "sal"],
  tempo: "",
  porcoes: "",
  restricoes: [],
  ingredientes: [
    "2 xícaras de lentilha",
    "1 cebola",
    "2 dentes de alho",
    "1 cenoura",
    "2 colheres (sopa) de azeite",
    "Louro, sal e ervas"
  ],
  preparo: [
    "Lave a lentilha e retire as impurezas.",
    "Refogue a cebola, o alho e a cenoura no azeite.",
    "Acrescente a lentilha e cubra com água.",
    "Cozinhe até atingir o ponto desejado.",
    "Acrescente os legumes previstos na preparação.",
    "Ajuste os temperos e sirva."
  ],
},
{
  id: "sopa-de-ervilha",
  nome: "Sopa de ervilha",
  tipo: "receita",
  imagem: "imagens/receitas/sop-erv.jpg",
  alimentos: ["ervilha", "cebola", "alho", "azeite", "sal", "agua"],
  tempo: "",
  porcoes: "",
  restricoes: [],
  ingredientes: [
    "2 xícaras de ervilha seca ou 3 xícaras de ervilha fresca/congelada",
    "1 cebola",
    "2 dentes de alho",
    "1 colher (sopa) de azeite",
    "Sal e ervas",
    "500 a 1.000 ml de água ou caldo caseiro"
  ],
  preparo: [
    "Se usar ervilha seca, lave e deixe de molho quando possível.",
    "Refogue a cebola e o alho no azeite.",
    "Junte a ervilha e o líquido. Cozinhe até ficar macia.",
    "Para obter uma sopa ou creme, bata até alcançar a textura desejada.",
    "Se houver proteína, prepare-a separadamente e misture no final.",
    "Ajuste os temperos e sirva."
  ],
  substituicoes: []
},
{
  id: "macarronese-de-frango-com-ervilha",
  nome: "Macarronese de frango com ervilha",
  tipo: "receita",
  imagem: "imagens/receitas/maca.jfif",
  alimentos: ["ervilha", "cebola", "alho", "azeite", "sal", "frango"],
  tempo: "",
  porcoes: "",
  restricoes: [],
  ingredientes: [
    "2 xícaras de ervilha seca ou 3 xícaras de ervilha fresca/congelada",
    "1 cebola",
    "2 dentes de alho",
    "1 colher (sopa) de azeite",
    "Sal e ervas",
    "100 a 200 g da proteína indicada"
  ],
  preparo: [
    "Se usar ervilha seca, lave e deixe de molho quando possível.",
    "Refogue a cebola e o alho no azeite.",
    "Junte a ervilha e o líquido. Cozinhe até ficar macia.",
    "Para sopa ou creme, bata até alcançar a textura desejada.",
    "Prepare a proteína separadamente e misture no final.",
    "Ajuste os temperos e sirva."
  ],
},
{
  id: "hamburguer-de-ervilha",
  nome: "Hambúrguer de ervilha",
  tipo: "receita",
  imagem: "imagens/receitas/ham-erv.jfif",
  alimentos: ["ervilha", "cebola", "alho", "azeite", "sal"],
  tempo: "",
  porcoes: "",
  restricoes: [],
  ingredientes: [
    "2 xícaras de ervilha seca ou 3 xícaras de ervilha fresca/congelada",
    "1 cebola",
    "2 dentes de alho",
    "1 colher (sopa) de azeite",
    "Sal e ervas"
  ],
  preparo: [
    "Lave a ervilha seca e deixe de molho quando possível.",
    "Refogue a cebola e o alho no azeite.",
    "Junte a ervilha e o líquido. Cozinhe até ficar macia.",
    "Para sopa ou creme, bata até obter a textura desejada.",
    "Se houver proteína, prepare-a separadamente e misture no final.",
    "Ajuste os temperos e sirva."
  ],
},
{
  id: "pasta-de-amendoim",
  nome: "Pasta de amendoim",
  tipo: "receita",
  imagem: "imagens/receitas/past-amen.jfif",
  alimentos: ["amendoim", "sal", "acucar", "canela"],
  tempo: "",
  porcoes: "",
  restricoes: ["alergia-a-amendoim"],
  ingredientes: [
    "500 g de amendoim torrado sem sal",
    "1 pitada de sal",
    "Açúcar mascavo ou canela (opcionais)"
  ],
  preparo: [
    "Aqueça o amendoim rapidamente.",
    "Processe até começar a virar pasta, raspando as laterais quando necessário.",
    "Continue processando até ficar cremoso.",
    "Ajuste o sal e os sabores e guarde em um pote limpo."
  ],
  substituicoes: [
    {
      ingrediente: "amendoim",
      substituto: "outra base adequada em caso de alergia (não trocar automaticamente por castanhas)"
    }
  ]
},

]
  

