// ===== PRODUCT DATA =====
const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    brand: "Nike",
    cat: "corrida",
    price: 10999.90,
    oldPrice: 12999.90,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #ff3c00, #ff6b35)",
    rating: 4.9,
    reviews: 312,
    desc: "O Nike Air Max 270 combina o maximo de amortecimento Air com um design moderno e estilo icone. Palmilha macia e cabedal em mesh respiravel.",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["#ff3c00", "#1a1a2e", "#ffffff"]
  },
  {
    id: 2,
    name: "Nike Dunk Low Retro",
    brand: "Nike",
    cat: "basquete",
    price: 11999.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #1a1a2e, #16213e)",
    rating: 4.8,
    reviews: 187,
    desc: "O Dunk Low traz o legado do basquete para as ruas. Design retro com acabamento premium em couro e solado duravel.",
    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["#1a1a2e", "#ff3c00", "#ffcc00"]
  },
  {
    id: 3,
    name: "Adidas Ultraboost 22",
    brand: "Adidas",
    cat: "casual",
    price: 10499.90,
    oldPrice: 12499.90,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #2d2d2d, #4a4a4a)",
    rating: 4.7,
    reviews: 524,
    desc: "O Ultraboost entrega retorno de energia incomparavel com entressola Boost e cabedal Primeknit que se adapta ao pe. Conforto o dia todo.",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    colors: ["#2d2d2d", "#f5f5dc", "#ff3c00"]
  },
  {
    id: 4,
    name: "Nike Pegasus 40",
    brand: "Nike",
    cat: "corrida",
    price: 12999.90,
    oldPrice: null,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #00ff88, #00b4d8)",
    rating: 5.0,
    reviews: 98,
    desc: "A 40a edicao do Pegasus traz amortecimento React X para retorno de energia otimizado. O tenis de corrida mais confiavel do mundo.",
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ["#00ff88", "#00b4d8", "#1a1a2e"]
  },
  {
    id: 5,
    name: "Adidas Originals Forum",
    brand: "Adidas",
    cat: "lifestyle",
    price: 11499.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    rating: 4.6,
    reviews: 256,
    desc: "Inspirado no basquete dos anos 80, o Forum combina estilo retro com conforto moderno. Cabedal em couro com detalhes em veludo.",
    sizes: [37, 38, 39, 40, 41, 42, 43],
    colors: ["#8b5cf6", "#1a1a2e", "#f5f5dc"]
  },
  {
    id: 6,
    name: "Nike ZoomX Vaporfly",
    brand: "Nike",
    cat: "corrida",
    price: 15999.90,
    oldPrice: 17999.90,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #ff0055, #ff3c00)",
    rating: 4.8,
    reviews: 421,
    desc: "O tenis mais rapido do mundo. Placa de fibra de carbono e espuma ZoomX para quebrar recordes pessoais em maratona.",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["#ff0055", "#1a1a2e", "#ffffff"]
  },
  {
    id: 7,
    name: "Air Jordan 1 Retro High",
    brand: "Jordan",
    cat: "basquete",
    price: 18999.90,
    oldPrice: null,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #fbbf24, #f59e0b)",
    rating: 4.9,
    reviews: 143,
    desc: "O icone absoluto do streetwear. O Air Jordan 1 High é o tenis que mudou o jogo para sempre. Design atemporal e colacidade extrema.",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    colors: ["#fbbf24", "#1a1a2e", "#ff3c00"]
  },
  {
    id: 8,
    name: "Adidas Stan Smith",
    brand: "Adidas",
    cat: "casual",
    price: 10499.90,
    oldPrice: 12999.90,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #6b7280, #9ca3af)",
    rating: 4.5,
    reviews: 687,
    desc: "OStan Smith é sinônimo de elegancia atemporal. Minimalismo perfeito com cabedal em couro branco e detalhes iconicos em verde.",
    sizes: [35, 36, 37, 38, 39, 40, 41, 42, 43],
    colors: ["#6b7280", "#1a1a2e", "#f5f5dc"]
  },
  {
    id: 9,
    name: "New Balance 550",
    brand: "New Balance",
    cat: "lifestyle",
    price: 11999.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #ec4899, #db2777)",
    rating: 4.7,
    reviews: 198,
    desc: "O NB 550 voltou com tudo! Design retro dos anos 90, couro premium e aquele look que dominou as redes sociais. Conforto e estilo.",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    colors: ["#ec4899", "#1a1a2e", "#ffffff"]
  },
  {
    id: 10,
    name: "Nike Trail Pegasus",
    brand: "Nike",
    cat: "corrida",
    price: 14999.90,
    oldPrice: null,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #059669, #047857)",
    rating: 4.9,
    reviews: 76,
    desc: "Para trilhas e terrenos acidentados. Solado com presas agressivas, impermeabilidade Gore-Tex e amortecimento para longas distancias.",
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: ["#059669", "#1a1a2e", "#fbbf24"]
  },
  {
    id: 11,
    name: "Adidas Yeezy 350 V2",
    brand: "Adidas",
    cat: "lifestyle",
    price: 17999.90,
    oldPrice: 19999.90,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #1e1e1e, #3a3a3a)",
    rating: 4.8,
    reviews: 334,
    desc: "Design futurista de Kanye West. Entressola Boost macia como nuvem e cabedal Primeknit com painel lateral icone.",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["#1e1e1e", "#ffcc00", "#ff3c00"]
  },
  {
    id: 12,
    name: "Puma RS-X Reinvention",
    brand: "Puma",
    cat: "casual",
    price: 10499.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #3b82f6, #2563eb)",
    rating: 4.4,
    reviews: 892,
    desc: "O RS-X traz o estilo retrô do Puma com tecnologia Running System. Design chunky que está dominando as ruas.",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#3b82f6", "#1a1a2e", "#ffffff"]
  },
  {
    id: 13,
    name: "Converse Chuck Taylor",
    brand: "Converse",
    cat: "lifestyle",
    price: 10999.90,
    oldPrice: 12999.90,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #dc2626, #991b1b)",
    rating: 4.7,
    reviews: 1243,
    desc: "O classico absoluto. Canvas resistente, sola em borracha vulcanizada e aquele style que nunca sai de moda. Do palco ao campus.",
    sizes: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
    colors: ["#dc2626", "#1a1a2e", "#ffffff"]
  },
  {
    id: 14,
    name: "Vans Old Skool",
    brand: "Vans",
    cat: "lifestyle",
    price: 10999.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #1a1a1a, #333333)",
    rating: 4.6,
    reviews: 876,
    desc: "O Old Skool é o primeiro modelo Vans com a faixa lateral iconica. Solado waffle e cabedal em lona reforcada para skateboard e life.",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    colors: ["#1a1a1a", "#ffffff", "#1e40af"]
  },
  {
    id: 15,
    name: "Under Armour HOVR",
    brand: "Under Armour",
    cat: "corrida",
    price: 13499.90,
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #0ea5e9, #0284c7)",
    rating: 4.5,
    reviews: 203,
    desc: "Conectado ao app MapMyRun. Amortecimento HOVR que absorve impacto e retorna energia. Telemetria de corrida em tempo real.",
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: ["#0ea5e9", "#1a1a2e", "#10b981"]
  },
  {
    id: 16,
    name: "Reebok Club C 85",
    brand: "Reebok",
    cat: "casual",
    price: 10999.90,
    oldPrice: 12499.90,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #059669, #047857)",
    rating: 4.4,
    reviews: 412,
    desc: "Simplicidade e elegancia. Cabedal em couro branco macio, entressola de espuma e solado em borracha duravel. Conforto premium.",
    sizes: [37, 38, 39, 40, 41, 42, 43, 44],
    colors: ["#ffffff", "#1a1a2e", "#059669"]
  },
  {
    id: 17,
    name: "Asics Gel-Kayano 30",
    brand: "Asics",
    cat: "corrida",
    price: 14499.90,
    oldPrice: null,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #7c3aed, #6d28d9)",
    rating: 4.8,
    reviews: 321,
    desc: "Estabilidade e amortecimento de elite. Tecnologia 4D GUIDANCE SYSTEM e GEL no pe e calcanhar. Para pronadores exigentes.",
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#7c3aed", "#1a1a2e", "#f97316"]
  },
  {
    id: 18,
    name: "Nike Air Force 1 Low",
    brand: "Nike",
    cat: "casual",
    price: 12499.90,
    oldPrice: null,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #f5f5f5, #d4d4d4)",
    rating: 4.9,
    reviews: 2156,
    desc: "O branco mais famoso do mundo. Amortecimento Air, cabedal em couro e design que transcendeu o basquete para virar cultura.",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#ffffff", "#1a1a2e", "#f97316"]
  },
  {
    id: 19,
    name: "Adidas Superstar",
    brand: "Adidas",
    cat: "lifestyle",
    price: 10499.90,
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #fbbf24, #d97706)",
    rating: 4.6,
    reviews: 1567,
    desc: "A biqueira de borracha icone que conquistou as quadras e as ruas. Couro premium com 3 listras e solado em plataforma.",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    colors: ["#ffffff", "#1a1a2e", "#fbbf24"]
  },
  {
    id: 20,
    name: "Nike Blazer Mid 77",
    brand: "Nike",
    cat: "lifestyle",
    price: 11499.90,
    oldPrice: 13499.90,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #84cc16, #65a30d)",
    rating: 4.5,
    reviews: 389,
    desc: "Retrô dos anos 77 com inspiração no basquete. Cabedal em lona vintage, swoosh oversized e solado em borracha marrom.",
    sizes: [37, 38, 39, 40, 41, 42, 43, 44],
    colors: ["#ffffff", "#1a1a2e", "#84cc16"]
  },
  {
    id: 21,
    name: "Puma Suede Classic",
    brand: "Puma",
    cat: "lifestyle",
    price: 10499.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #0891b2, #0e7490)",
    rating: 4.5,
    reviews: 654,
    desc: "O Suede é cultura em forma de tenis. Couro suede premium, faixa Formstrip lateral e solado em borracha. Da breakdance ao street.",
    sizes: [37, 38, 39, 40, 41, 42, 43, 44],
    colors: ["#0891b2", "#1a1a2e", "#dc2626"]
  },
  {
    id: 22,
    name: "New Balance 990v6",
    brand: "New Balance",
    cat: "corrida",
    price: 19999.90,
    oldPrice: null,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #6b7280, #4b5563)",
    rating: 4.9,
    reviews: 87,
    desc: "Feito nos EUA com материалов premium. Amortecimento FuelCell, entressola ENCAP e acabamento em couro e mesh. O melhor da NB.",
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: ["#6b7280", "#1a1a2e", "#d4d4d4"]
  },
  {
    id: 23,
    name: "Jordan 4 Retro",
    brand: "Jordan",
    cat: "basquete",
    price: 24999.90,
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #ea580c, #c2410c)",
    rating: 4.9,
    reviews: 256,
    desc: "A silhueta que revolucionou o design de basquete. Asai unit com amortecimento Air visivel, aba de couro e asas laterais plasticas.",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    colors: ["#ea580c", "#1a1a2e", "#ffffff"]
  },
  {
    id: 24,
    name: "Adidas NMD R1",
    brand: "Adidas",
    cat: "corrida",
    price: 12999.90,
    oldPrice: 14999.90,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #ec4899, #be185d)",
    rating: 4.6,
    reviews: 445,
    desc: "Design urbano com tecnologia Boost. Cabedal em Primeknit, plugs laterais icônicos e entressola com retorno de energia.",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["#ec4899", "#1a1a2e", "#8b5cf6"]
  },
  {
    id: 25,
    name: "Converse Run Star",
    brand: "Converse",
    cat: "lifestyle",
    price: 10999.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #1e293b, #334155)",
    rating: 4.4,
    reviews: 178,
    desc: "O Chuck Taylor reinventado. Platform com sola chunky, biqueira em borracha e design futurista. Estilo que ousa ser diferente.",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    colors: ["#1a1a1a", "#ffffff", "#dc2626"]
  },
  {
    id: 26,
    name: "Under Armour Curry 11",
    brand: "Under Armour",
    cat: "basquete",
    price: 16999.90,
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    rating: 4.7,
    reviews: 134,
    desc: "Assinatura de Stephen Curry. Flow com tracao total no choque, amortecimento UA e suporte lateral para movimentos explosivos.",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    colors: ["#2563eb", "#fbbf24", "#1a1a2e"]
  },
  {
    id: 27,
    name: "Asics Gel-1130",
    brand: "Asics",
    cat: "lifestyle",
    price: 10999.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #a855f7, #7c3aed)",
    rating: 4.5,
    reviews: 267,
    desc: "Y2K aesthetics com tecnologia GEL. Design retrô dos anos 2000 que voltou com tudo. Couro sintetico, mesh e amortecimento visivel.",
    sizes: [37, 38, 39, 40, 41, 42, 43, 44],
    colors: ["#d4d4d4", "#1a1a2e", "#a855f7"]
  },
  {
    id: 28,
    name: "Vans Sk8-Hi",
    brand: "Vans",
    cat: "lifestyle",
    price: 10499.90,
    oldPrice: 12499.90,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #1e1e1e, #404040)",
    rating: 4.6,
    reviews: 723,
    desc: "O high-top que dominou o skate. Cano alto com protecao, solado waffle e sola de borracha vulcanizada. Cultura em forma de tenis.",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    colors: ["#1a1a1a", "#ffffff", "#dc2626"]
  },
  {
    id: 29,
    name: "Reebok Nano X3",
    brand: "Reebok",
    cat: "corrida",
    price: 12499.90,
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #f43f5e, #e11d48)",
    rating: 4.7,
    reviews: 189,
    desc: "Feito para CrossFit e treino funcional. Entressola Flexweave, suporte lateral e traçao total. Performace que não para.",
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#f43f5e", "#1a1a2e", "#ffffff"]
  },
  {
    id: 30,
    name: "Nike Metcon 9",
    brand: "Nike",
    cat: "corrida",
    price: 13999.90,
    oldPrice: 15999.90,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #0d9488, #0f766e)",
    rating: 4.8,
    reviews: 298,
    desc: "O rei do treino funcional. Sola plana para levantamento, corda de escada na lateral e amortecimento React para saltos.",
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#0d9488", "#1a1a2e", "#f97316"]
  },
  {
    id: 31,
    name: "Adidas Gazelle",
    brand: "Adidas",
    cat: "casual",
    price: 10499.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #2563eb, #1e40af)",
    rating: 4.5,
    reviews: 534,
    desc: "Da quadra de atletismo à moda. Suede premium, 3 listras laterais e solado em borracha gum. Minimalismo britânico.",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    colors: ["#2563eb", "#1a1a2e", "#dc2626"]
  },
  {
    id: 32,
    name: "Air Jordan 11 Retro",
    brand: "Jordan",
    cat: "basquete",
    price: 29999.90,
    oldPrice: null,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #1a1a2e, #0f172a)",
    rating: 5.0,
    reviews: 67,
    desc: "O Jordan mais icone de todos. Patente shiny, entressola com Air e carbono. O tenis que MJ usou no filme Space Jam.",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    colors: ["#1a1a2e", "#ffffff", "#dc2626"]
  },
  {
    id: 33,
    name: "New Balance 574",
    brand: "New Balance",
    cat: "lifestyle",
    price: 11499.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #9ca3af, #6b7280)",
    rating: 4.6,
    reviews: 512,
    desc: "O clasico de todos os tempos da New Balance. Camurca premium, sola ENCAP e um design que envelhece bem em qualquer guarda-roupa.",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    colors: ["#9ca3af", "#1a1a2e", "#ffffff"]
  },
  {
    id: 34,
    name: "Asics Gel-Nimbus 25",
    brand: "Asics",
    cat: "corrida",
    price: 13999.90,
    oldPrice: null,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #06b6d4, #0891b2)",
    rating: 4.9,
    reviews: 402,
    desc: "A maxima experiencia de conforto da Asics. Espuma FF BLAST PLUS ECO e GEL no calcanhar para corridas longas sem fadiga.",
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#06b6d4", "#1a1a2e", "#ffffff"]
  },
  {
    id: 35,
    name: "Puma Speedcat",
    brand: "Puma",
    cat: "corrida",
    price: 10499.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #6045e2, #3b82f6)",
    rating: 4.8,
    reviews: 228,
    desc: "Heranca das pistas de automobilismo. Perfil baixo, cabedal leve e aquele visual fast que combina com velocidade.",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    colors: ["#6045e2", "#1a1a2e", "#fbbf24"]
  },
  {
    id: 36,
    name: "Fila Disruptor II",
    brand: "Fila",
    cat: "lifestyle",
    price: 10999.90,
    oldPrice: 12499.90,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #f472b6, #db2777)",
    rating: 4.5,
    reviews: 634,
    desc: "O creepy que dominou os anos 90 e voltou. Sola volumosa, aspecto chunky e presenca que nao passa despercebida.",
    sizes: [35, 36, 37, 38, 39, 40, 41, 42],
    colors: ["#f472b6", "#1a1a2e", "#ffffff"]
  },
  {
    id: 37,
    name: "Hoka Clifton 9",
    brand: "Hoka",
    cat: "corrida",
    price: 15499.90,
    oldPrice: null,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #f43f5e, #e11d48)",
    rating: 4.9,
    reviews: 189,
    desc: "O queridinho dos corredores. Geometria Meta-Rocker e espuma super amortecedora para km sem fim com leveza incrivel.",
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: ["#f43f5e", "#1a1a2e", "#38bdf8"]
  },
  {
    id: 38,
    name: "Brooks Ghost 15",
    brand: "Brooks",
    cat: "corrida",
    price: 14499.90,
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #6366f1, #4f46e5)",
    rating: 4.7,
    reviews: 350,
    desc: "Equilibrio perfeito entre conforto e desempenho. Amortecimento DNA LOFT v3 e transicao suave para o dia a dia.",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["#6366f1", "#1a1a2e", "#f97316"]
  },
  {
    id: 39,
    name: "Salomon Speedcross 6",
    brand: "Salomon",
    cat: "corrida",
    price: 16999.90,
    oldPrice: null,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #16a34a, #15803d)",
    rating: 4.8,
    reviews: 142,
    desc: "Para trilhas extremas. Solado com presas agressivas de 5mm, Quicklace e membrana resistente a agua. Pura adrenalina.",
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: ["#16a34a", "#1a1a2e", "#fbbf24"]
  },
  {
    id: 40,
    name: "On Cloud 5",
    brand: "On",
    cat: "corrida",
    price: 15999.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #38bdf8, #0284c7)",
    rating: 4.7,
    reviews: 415,
    desc: "A sensacao suica. Amortecimento CloudTec com orifícios inovadores que absorvem impacto e devolvem energia a cada passo.",
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#38bdf8", "#1a1a2e", "#e2e8f0"]
  },
  {
    id: 41,
    name: "Mizuno Wave Rider 26",
    brand: "Mizuno",
    cat: "corrida",
    price: 13499.90,
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #f59e0b, #b45309)",
    rating: 4.6,
    reviews: 301,
    desc: "Tecnologia japonesa com placa Wave de estabilidade e espuma Enerzy. O Rider que nunca decepciona nas longas distancias.",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["#f59e0b", "#1a1a2e", "#1e40af"]
  },
  {
    id: 42,
    name: "Saucony Ride 17",
    brand: "Saucony",
    cat: "corrida",
    price: 12999.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #0ea5e9, #0369a1)",
    rating: 4.7,
    reviews: 267,
    desc: "O coringa versatil da Saucony. Espuma PWRRUN + e cabedal em mesh engenierado para corridas, academia e o dia a dia.",
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#0ea5e9", "#1a1a2e", "#f472b6"]
  },
  {
    id: 43,
    name: "Li-Ning Way Of Wade 10",
    brand: "Li-Ning",
    cat: "basquete",
    price: 18999.90,
    oldPrice: null,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #dc2626, #7f1d1d)",
    rating: 4.9,
    reviews: 98,
    desc: "A assinatura de Dwyane Wade. Amortecimento BOOM, cabedal em trama de carbono e tracao de elite para a quadra.",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    colors: ["#dc2626", "#1a1a2e", "#fbbf24"]
  },
  {
    id: 44,
    name: "Adidas Samba OG",
    brand: "Adidas",
    cat: "casual",
    price: 11999.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #22c55e, #15803d)",
    rating: 4.8,
    reviews: 589,
    desc: "De quadras de futebol ao streetwear. Cabedal em camurca, biqueira em suede e o soul da cultura que nunca envelhece.",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    colors: ["#22c55e", "#1a1a2e", "#ffffff"]
  },
  {
    id: 45,
    name: "Vans Era 95",
    brand: "Vans",
    cat: "lifestyle",
    price: 10499.90,
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    rating: 4.4,
    reviews: 496,
    desc: "O skate classico com cano baixo e almofada extra. Lona duravel, solado waffle e estilo que domina desde os anos 90.",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    colors: ["#3b82f6", "#1a1a2e", "#ffffff"]
  },
  {
    id: 46,
    name: "Jordan 1 Low",
    brand: "Jordan",
    cat: "basquete",
    price: 13999.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #fbbf24, #d97706)",
    rating: 4.8,
    reviews: 334,
    desc: "O icone em versao low. Mesma alma do Air Jordan 1, cabedal em couro premium e conforto para o dia inteiro nas ruas.",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    colors: ["#fbbf24", "#1a1a2e", "#ffffff"]
  },
  {
    id: 47,
    name: "Nike Invincible Run 3",
    brand: "Nike",
    cat: "corrida",
    price: 16499.90,
    oldPrice: null,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #f97316, #ea580c)",
    rating: 4.9,
    reviews: 177,
    desc: "Retorno de energia brutal com ZoomX. Cabedal em Flyknit e amortecimento macio para corridas diarias de alto volume.",
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#f97316", "#1a1a2e", "#111827"]
  },
  {
    id: 48,
    name: "Converse One Star",
    brand: "Converse",
    cat: "lifestyle",
    price: 10999.90,
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop&q=80",
    bg: "linear-gradient(135deg, #111827, #374151)",
    rating: 4.5,
    reviews: 288,
    desc: "A estrela que virou lenda. Cabedal em camurca, logotipo em forma de estrela e o visual grunge que marcou o grunge.",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    colors: ["#111827", "#1a1a2e", "#ef4444"]
  }
];

// ===== STATE =====
let cart = loadCart();
let favorites = loadFavorites();
let currentCategory = "todos";
let selectedProduct = null;
let selectedSize = null;
let selectedColor = null;

function loadCart() {
  try { return JSON.parse(localStorage.getItem("eliteCart")) || []; } catch { return []; }
}
function saveCart() {
  localStorage.setItem("eliteCart", JSON.stringify(cart));
}
function loadFavorites() {
  try { return JSON.parse(localStorage.getItem("eliteFavs")) || []; } catch { return []; }
}
function saveFavorites() {
  localStorage.setItem("eliteFavs", JSON.stringify(favorites));
}
function toggleFavorite(id) {
  const idx = favorites.indexOf(id);
  if (idx > -1) favorites.splice(idx, 1);
  else favorites.push(id);
  saveFavorites();
  updateCounts();
}
function updateCounts() {
  const favTotal = favorites.length;
  const cartTotalItems = cart.reduce((s, i) => s + i.qty, 0);
  const favEl = document.getElementById("favCount");
  const cartEl = document.getElementById("cartCount");
  if (favEl) favEl.textContent = favTotal;
  if (cartEl) cartEl.textContent = cartTotalItems;
}

function formatPrice(val) {
  return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// ===== DOM (guarded for use across pages) =====
const productsGrid = document.getElementById("productsGrid");
const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const cartClose = document.getElementById("cartClose");
const cartItems = document.getElementById("cartItems");
const cartFooter = document.getElementById("cartFooter");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const contactForm = document.getElementById("contactForm");

// ===== RENDER PRODUCTS =====
let searchTerm = "";
let brandFilter = "todas";
let priceFilter = "todos";
let sortBy = "relevancia";

function getFilteredProducts() {
  let list = currentCategory === "todos"
    ? products.slice()
    : products.filter(p => p.cat === currentCategory);

  if (searchTerm) {
    const q = searchTerm.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
    );
  }

  if (brandFilter !== "todas") {
    list = list.filter(p => p.brand === brandFilter);
  }

  if (priceFilter !== "todos") {
    list = list.filter(p => {
      if (priceFilter === "10k12k") return p.price >= 10000 && p.price < 12000;
      if (priceFilter === "12k15k") return p.price >= 12000 && p.price < 15000;
      if (priceFilter === "15k20k") return p.price >= 15000 && p.price <= 20000;
      if (priceFilter === "acima20k") return p.price > 20000;
      return true;
    });
  }

  if (sortBy === "menorPreco") list.sort((a, b) => a.price - b.price);
  else if (sortBy === "maiorPreco") list.sort((a, b) => b.price - a.price);
  else if (sortBy === "avaliacao") list.sort((a, b) => b.rating - a.rating);

  return list;
}

function renderProducts(category) {
  if (!productsGrid) return;
  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    productsGrid.innerHTML = '<p class="no-results">Nenhum tenis encontrado com esses filtros.</p>';
    return;
  }

  productsGrid.innerHTML = filtered.map((p, i) => `
    <div class="product-card" data-id="${p.id}" style="animation-delay: ${i * 0.08}s">
      <button class="card-fav-btn ${favorites.includes(p.id) ? 'fav-active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${p.id}); const b=this; b.classList.toggle('fav-active'); b.innerHTML = favorites.includes(${p.id}) ? '&nbsp;<i class=&quot;fa-solid fa-heart&quot;></i>&nbsp;' : '&nbsp;<i class=&quot;fa-regular fa-heart&quot;></i>&nbsp;';" aria-label="Favoritar">${favorites.includes(p.id) ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>'}</button>
      ${p.badge ? `<span class="product-badge badge-${p.badge}">${
        p.badge === "new" ? "Novo" : p.badge === "sale" ? `${Math.round((1 - p.price / p.oldPrice) * 100)}% OFF` : "Mais Vendido"
      }</span>` : ''}
      <div class="product-image">
        <div class="product-bg" style="background: ${p.bg}"></div>
        <img class="product-shoe-img" src="${p.image}" alt="${p.name}" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="product-shoe-fallback" style="display:none">
          <span>${p.brand.charAt(0)}</span>
        </div>
      </div>
      <div class="product-info">
        <span class="product-brand">${p.brand}</span>
        <span class="product-cat">${p.cat}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          <span class="stars">${getStars(p.rating)}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-bottom">
          <div>
            <span class="product-price">${formatPrice(p.price)}</span>
            ${p.oldPrice ? `<span class="product-old-price">${formatPrice(p.oldPrice)}</span>` : ''}
          </div>
          <button class="product-add-btn" onclick="event.stopPropagation(); quickAdd(${p.id})" aria-label="Adicionar ao carrinho">+</button>
        </div>
        <a href="detalhes.html?id=${p.id}" class="product-details-btn" onclick="event.stopPropagation()">VER DETALHES</a>
      </div>
    </div>
  `).join('');

  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
      window.location.href = "detalhes.html?id=" + card.dataset.id;
    });
  });
}

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  let html = '';
  for (let i = 0; i < full; i++) html += '<i class="fa-solid fa-star"></i>';
  if (half) html += '<i class="fa-solid fa-star-half-stroke"></i>';
  for (let i = full + half; i < 5; i++) html += '<i class="fa-regular fa-star"></i>';
  return html;
}

// ===== MODAL =====
function openModal(id) {
  selectedProduct = products.find(p => p.id === id);
  if (!selectedProduct) return;

  selectedSize = null;
  selectedColor = null;

  document.getElementById("modalImage").innerHTML = `
    <div style="background:${selectedProduct.bg};position:absolute;inset:0;opacity:0.4"></div>
    <img src="${selectedProduct.image}" alt="${selectedProduct.name}"
         style="position:relative;z-index:1;max-width:85%;max-height:85%;object-fit:contain;border-radius:12px;filter:drop-shadow(0 10px 30px rgba(0,0,0,0.4))"
         onerror="this.style.display='none'">
  `;
  document.getElementById("modalCat").textContent = selectedProduct.brand + " | " + selectedProduct.cat;
  document.getElementById("modalName").textContent = selectedProduct.name;
  document.getElementById("modalRating").innerHTML = `<span class="stars">${getStars(selectedProduct.rating)}</span><span class="rating-count">(${selectedProduct.reviews} avaliacoes)</span>`;
  document.getElementById("modalPrice").innerHTML = `${formatPrice(selectedProduct.price)}${selectedProduct.oldPrice ? ` <span class="product-old-price">${formatPrice(selectedProduct.oldPrice)}</span>` : ''}`;
  document.getElementById("modalDesc").textContent = selectedProduct.desc;

  document.getElementById("modalSizes").innerHTML = selectedProduct.sizes.map(s =>
    `<button class="size-btn" data-size="${s}">${s}</button>`
  ).join('');

  document.getElementById("modalColors").innerHTML = selectedProduct.colors.map(c =>
    `<button class="color-dot" data-color="${c}" style="background:${c}"></button>`
  ).join('');

  document.querySelectorAll(".size-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedSize = Number(btn.dataset.size);
    });
  });

  document.querySelectorAll(".color-dot").forEach(dot => {
    dot.addEventListener("click", () => {
      document.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
      selectedColor = dot.dataset.color;
    });
  });

  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

if (modalClose) modalClose.addEventListener("click", closeModal);
if (modalOverlay) modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

const modalAddBtn = document.getElementById("modalAddBtn");
if (modalAddBtn) {
  modalAddBtn.addEventListener("click", () => {
    if (!selectedSize) {
      showToast("Selecione um tamanho!");
      return;
    }
    addToCart(selectedProduct, selectedSize, selectedColor || selectedProduct.colors[0]);
    closeModal();
  });
}

// ===== CART =====
function addToCart(product, size, color) {
  const existing = cart.find(item => item.id === product.id && item.size === size && item.color === color);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: product.id, name: product.name, image: product.image, brand: product.brand, price: product.price, size, color, qty: 1 });
  }
  saveCart();
  updateCart();
  updateCounts();
  showToast(`${product.name} adicionado ao carrinho!`);
}

function quickAdd(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    addToCart(product, product.sizes[Math.floor(product.sizes.length / 2)], product.colors[0]);
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartCount) cartCount.textContent = totalItems;

  if (!cartItems || !cartFooter) return;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Seu carrinho esta vazio.</p>';
    cartFooter.style.display = "none";
  } else {
    cartItems.innerHTML = cart.map((item, i) => `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}" style="width:50px;height:50px;object-fit:cover;border-radius:8px"
               onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 50 50%22><rect fill=%22%23333%22 width=%2250%22 height=%2250%22/><text x=%2225%22 y=%2230%22 text-anchor=%22middle%22 fill=%22white%22 font-size=%2214%22>${item.brand.charAt(0)}</text></svg>'">
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-size">Tam: ${item.size} | Qtd: ${item.qty}</div>
          <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${i})" aria-label="Remover">&times;</button>
      </div>
    `).join('');
    cartFooter.style.display = "block";

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    if (cartTotal) cartTotal.textContent = formatPrice(total);
  }
}

function toggleCart(open) {
  if (!cartSidebar || !cartOverlay) return;
  if (open) {
    cartSidebar.classList.add("open");
    cartOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  } else {
    cartSidebar.classList.remove("open");
    cartOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

if (cartBtn) cartBtn.addEventListener("click", () => toggleCart(true));
if (cartClose) cartClose.addEventListener("click", () => toggleCart(false));
if (cartOverlay) cartOverlay.addEventListener("click", () => toggleCart(false));

// ===== CATEGORIES =====
document.querySelectorAll(".cat-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".cat-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    currentCategory = card.dataset.cat;
    renderProducts(currentCategory);
  });
});

// ===== SEARCH / FILTERS / SORT =====
const searchInput = document.getElementById("searchInput");
const brandSelect = document.getElementById("brandFilter");
const priceSelect = document.getElementById("priceFilter");
const sortSelect = document.getElementById("sortSelect");

function populateBrands() {
  if (!brandSelect) return;
  const brands = [...new Set(products.map(p => p.brand))].sort();
  brandSelect.insertAdjacentHTML('beforeend', brands.map(b =>
    `<option value="${b}">${b}</option>`
  ).join(''));
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    searchTerm = searchInput.value.trim();
    renderProducts(currentCategory);
  });
}

if (brandSelect) {
  brandSelect.addEventListener("change", () => {
    brandFilter = brandSelect.value;
    renderProducts(currentCategory);
  });
}

if (priceSelect) {
  priceSelect.addEventListener("change", () => {
    priceFilter = priceSelect.value;
    renderProducts(currentCategory);
  });
}

if (sortSelect) {
  sortSelect.addEventListener("change", () => {
    sortBy = sortSelect.value;
    renderProducts(currentCategory);
  });
}

populateBrands();

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById("themeToggle");
function applyTheme(theme) {
  if (theme === "light") {
    document.body.setAttribute("data-theme", "light");
    if (themeToggle) themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    document.body.removeAttribute("data-theme");
    if (themeToggle) themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
  localStorage.setItem("eliteTheme", theme);
}
(function initTheme() {
  const saved = localStorage.getItem("eliteTheme");
  applyTheme(saved === "light" ? "light" : "dark");
})();
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.body.getAttribute("data-theme") === "light";
    applyTheme(isLight ? "dark" : "light");
  });
}

// ===== MOBILE MENU =====
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    if (nav) nav.classList.toggle("open");
  });
}

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    if (menuToggle) menuToggle.classList.remove("active");
    if (nav) nav.classList.remove("open");
  });
});

// ===== CONTACT FORM =====
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Mensagem enviada com sucesso!");
    contactForm.reset();
  });
}

// ===== TOAST =====
function showToast(msg) {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

// ===== SCROLL HEADER =====
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    header.style.padding = "10px 0";
    header.style.background = "rgba(13, 13, 13, 0.95)";
  } else {
    header.style.padding = "16px 0";
    header.style.background = "rgba(13, 13, 13, 0.85)";
  }

  lastScroll = scrollY;
});

// ===== KEYBOARD =====
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    toggleCart(false);
  }
});

// ===== INIT =====
renderProducts("todos");
updateCounts();

// ===== PRELOADER =====
const preloaderEl = document.getElementById("preloader");
window.addEventListener("load", () => {
  setTimeout(() => {
    if (preloaderEl) preloaderEl.classList.add("hide");
  }, 1500);
});

// ===== PARTICLE SYSTEM =====
const canvas = document.getElementById("particles");
let particles = [];
let ctx = null;
let animating = false;
if (canvas) {
  ctx = canvas.getContext("2d");
}

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * (canvas ? canvas.width : 1);
    this.y = Math.random() * (canvas ? canvas.height : 1);
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.color = Math.random() > 0.7 ? "#ff0040" : Math.random() > 0.5 ? "#00ff88" : "#ffcc00";
  }
  update() {
    if (!canvas) return;
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
  }
  draw() {
    if (!ctx) return;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

for (let i = 0; i < 60; i++) {
  particles.push(new Particle());
}

function animateParticles() {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}
if (canvas) animateParticles();

// ===== AGGRESSIVE HOVER SOUND EFFECT (visual) =====
let lastTrailTime = 0;
document.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastTrailTime < 30) return;
  lastTrailTime = now;

  const trail = document.createElement("div");
  trail.style.cssText = `
    position: fixed;
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    width: 4px;
    height: 4px;
    background: ${Math.random() > 0.5 ? '#ff0040' : '#00ff88'};
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.5s ease;
    opacity: 0.8;
  `;
  document.body.appendChild(trail);
  requestAnimationFrame(() => {
    trail.style.transform = `translate(${(Math.random() - 0.5) * 40}px, ${(Math.random() - 0.5) * 40}px)`;
    trail.style.opacity = "0";
  });
  setTimeout(() => trail.remove(), 500);
});

// ===== SCROLL REVEAL ANIMATION =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0) rotate(0deg)";
    }
  });
}, observerOptions);

document.querySelectorAll(".sobre-card, .banner, .contact-form").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px) rotate(1deg)";
  el.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
  observer.observe(el);
});
