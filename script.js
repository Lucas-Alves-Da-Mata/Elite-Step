// ===== PRODUCT DATA =====
const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    brand: "Nike",
    cat: "corrida",
    price: 599.90,
    oldPrice: 799.90,
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
    price: 749.90,
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
    price: 349.90,
    oldPrice: 449.90,
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
    price: 899.90,
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
    price: 459.90,
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
    price: 679.90,
    oldPrice: 849.90,
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
    price: 829.90,
    oldPrice: null,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop&q=80",
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
    price: 279.90,
    oldPrice: 379.90,
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
    price: 549.90,
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
    price: 999.90,
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
    price: 629.90,
    oldPrice: 799.90,
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
    price: 199.90,
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
    price: 299.90,
    oldPrice: 399.90,
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
    price: 349.90,
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
    price: 729.90,
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
    price: 379.90,
    oldPrice: 499.90,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop&q=80",
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
    price: 849.90,
    oldPrice: null,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=400&fit=crop&q=80",
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
    price: 549.90,
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
    price: 449.90,
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop&q=80",
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
    price: 499.90,
    oldPrice: 649.90,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=400&fit=crop&q=80",
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
    price: 399.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=600&h=400&fit=crop&q=80",
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
    price: 1299.90,
    oldPrice: null,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=400&fit=crop&q=80",
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
    price: 999.90,
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=400&fit=crop&q=80",
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
    price: 579.90,
    oldPrice: 729.90,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=300&fit=crop&q=80",
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
    price: 429.90,
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
    price: 879.90,
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=300&fit=crop&q=80",
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
    price: 499.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=300&fit=crop&q=80",
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
    price: 399.90,
    oldPrice: 499.90,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=400&fit=crop&q=80",
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
    price: 649.90,
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=300&fit=crop&q=80",
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
    price: 799.90,
    oldPrice: 999.90,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop&q=80",
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
    price: 329.90,
    oldPrice: null,
    badge: "new",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=300&fit=crop&q=80",
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
    price: 1199.90,
    oldPrice: null,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=300&fit=crop&q=80",
    bg: "linear-gradient(135deg, #1a1a2e, #0f172a)",
    rating: 5.0,
    reviews: 67,
    desc: "O Jordan mais icone de todos. Patente shiny, entressola com Air e carbono. O tenis que MJ usou no filme Space Jam.",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    colors: ["#1a1a2e", "#ffffff", "#dc2626"]
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
function renderProducts(category) {
  if (!productsGrid) return;
  const filtered = category === "todos"
    ? products
    : products.filter(p => p.cat === category);

  productsGrid.innerHTML = filtered.map((p, i) => `
    <div class="product-card" data-id="${p.id}" style="animation-delay: ${i * 0.08}s">
      <button class="card-fav-btn ${favorites.includes(p.id) ? 'fav-active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${p.id}); this.classList.toggle('fav-active'); this.textContent = favorites.includes(${p.id}) ? '♥' : '♡';" aria-label="Favoritar">${favorites.includes(p.id) ? '♥' : '♡'}</button>
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
            <span class="product-price">R$ ${p.price.toFixed(2)}</span>
            ${p.oldPrice ? `<span class="product-old-price">R$ ${p.oldPrice.toFixed(2)}</span>` : ''}
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
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
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
  document.getElementById("modalPrice").innerHTML = `R$ ${selectedProduct.price.toFixed(2)}${selectedProduct.oldPrice ? ` <span class="product-old-price">R$ ${selectedProduct.oldPrice.toFixed(2)}</span>` : ''}`;
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
          <div class="cart-item-price">R$ ${(item.price * item.qty).toFixed(2)}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${i})" aria-label="Remover">&times;</button>
      </div>
    `).join('');
    cartFooter.style.display = "block";

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    if (cartTotal) cartTotal.textContent = `R$ ${total.toFixed(2)}`;
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
document.addEventListener("mousemove", (e) => {
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
