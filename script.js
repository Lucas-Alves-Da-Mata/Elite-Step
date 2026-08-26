// ===== PRODUCT DATA =====
const products = [
  {
    id: 1,
    name: "VELOCITY X PRO",
    cat: "corrida",
    price: 599.90,
    oldPrice: 799.90,
    badge: "sale",
    emoji: "👟",
    bg: "linear-gradient(135deg, #ff3c00, #ff6b35)",
    rating: 4.9,
    reviews: 312,
    desc: "Tenis de corrida de alta performance com amortecimento React e cabedal em mesh respiravel. Idealis para competicoes e treinos intenso.",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["#ff3c00", "#1a1a2e", "#ffffff"]
  },
  {
    id: 2,
    name: "DUNK FORCE BK",
    cat: "basquete",
    price: 749.90,
    oldPrice: null,
    badge: "new",
    emoji: "🏀",
    bg: "linear-gradient(135deg, #1a1a2e, #16213e)",
    rating: 4.8,
    reviews: 187,
    desc: "Tenis de basquete com suporte de tornozelo reforcado e tracao em quadra. Design ousado para dominar a linha de tres pontos.",
    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["#1a1a2e", "#ff3c00", "#ffcc00"]
  },
  {
    id: 3,
    name: "AIR COMFORT V2",
    cat: "casual",
    price: 349.90,
    oldPrice: 449.90,
    badge: "sale",
    emoji: "👞",
    bg: "linear-gradient(135deg, #2d2d2d, #4a4a4a)",
    rating: 4.7,
    reviews: 524,
    desc: "Conforto o dia todo com palmilha de espuma viscoelastica e design minimalista. Perfeito para o dia a dia com estilo.",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    colors: ["#2d2d2d", "#f5f5dc", "#ff3c00"]
  },
  {
    id: 4,
    name: "NEON RUSH",
    cat: "corrida",
    price: 899.90,
    oldPrice: null,
    badge: "hot",
    emoji: "⚡",
    bg: "linear-gradient(135deg, #00ff88, #00b4d8)",
    rating: 5.0,
    reviews: 98,
    desc: "Edicao limitada com tecnologia de retorno de energia e design aerodinamico. Para quem quer quebrar recordes.",
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ["#00ff88", "#00b4d8", "#1a1a2e"]
  },
  {
    id: 5,
    name: "URBAN STYLE",
    cat: "lifestyle",
    price: 459.90,
    oldPrice: null,
    badge: "new",
    emoji: "🥾",
    bg: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    rating: 4.6,
    reviews: 256,
    desc: "Tenis lifestyle com design premium e materiais sustentaveis. Do estacionamento para a rua com atitude.",
    sizes: [37, 38, 39, 40, 41, 42, 43],
    colors: ["#8b5cf6", "#1a1a2e", "#f5f5dc"]
  },
  {
    id: 6,
    name: "SPEED DEMON",
    cat: "corrida",
    price: 679.90,
    oldPrice: 849.90,
    badge: "sale",
    emoji: "🏃",
    bg: "linear-gradient(135deg, #ff0055, #ff3c00)",
    rating: 4.8,
    reviews: 421,
    desc: "Leveza extrema com apenas 220g. Placa de carbono para impulsao maxima nas provas de meia maratona.",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["#ff0055", "#1a1a2e", "#ffffff"]
  },
  {
    id: 7,
    name: "SLAM MASTER",
    cat: "basquete",
    price: 829.90,
    oldPrice: null,
    badge: "hot",
    emoji: "👟",
    bg: "linear-gradient(135deg, #fbbf24, #f59e0b)",
    rating: 4.9,
    reviews: 143,
    desc: "Domine a area com amortecimento Zoom Air e tracao multidirecional. Inspirado nas quadras da NBA.",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    colors: ["#fbbf24", "#1a1a2e", "#ff3c00"]
  },
  {
    id: 8,
    name: "COMFORT WALK",
    cat: "casual",
    price: 279.90,
    oldPrice: 379.90,
    badge: "sale",
    emoji: "👞",
    bg: "linear-gradient(135deg, #6b7280, #9ca3af)",
    rating: 4.5,
    reviews: 687,
    desc: "Tenis casual com entressola EVA de alta densidade. Caminhe horas sem sentir cansaco.",
    sizes: [35, 36, 37, 38, 39, 40, 41, 42, 43],
    colors: ["#6b7280", "#1a1a2e", "#f5f5dc"]
  },
  {
    id: 9,
    name: "RETRO VIBE",
    cat: "lifestyle",
    price: 549.90,
    oldPrice: null,
    badge: "new",
    emoji: "🥾",
    bg: "linear-gradient(135deg, #ec4899, #db2777)",
    rating: 4.7,
    reviews: 198,
    desc: "Inspired nos tenis dos anos 90 com toque moderno. Acabamento premium e detalhes em couro.",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    colors: ["#ec4899", "#1a1a2e", "#ffffff"]
  },
  {
    id: 10,
    name: "TRAIL BLAZER",
    cat: "corrida",
    price: 999.90,
    oldPrice: null,
    badge: "hot",
    emoji: "⛰️",
    bg: "linear-gradient(135deg, #059669, #047857)",
    rating: 4.9,
    reviews: 76,
    desc: "Para trilhas e terrenos acidentados. Solado Vibram com presas agressivas e impermeabilidade total.",
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: ["#059669", "#1a1a2e", "#fbbf24"]
  },
  {
    id: 11,
    name: "STREET KING",
    cat: "lifestyle",
    price: 629.90,
    oldPrice: 799.90,
    badge: "sale",
    emoji: "👑",
    bg: "linear-gradient(135deg, #1e1e1e, #3a3a3a)",
    rating: 4.8,
    reviews: 334,
    desc: "Tenis premium com design exclusivo. Edicao limitada com numeracao e caixa de colecionador.",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["#1e1e1e", "#ffcc00", "#ff3c00"]
  },
  {
    id: 12,
    name: "BASIC FLEX",
    cat: "casual",
    price: 199.90,
    oldPrice: null,
    badge: "new",
    emoji: "👟",
    bg: "linear-gradient(135deg, #3b82f6, #2563eb)",
    rating: 4.4,
    reviews: 892,
    desc: "Tenis versatil para todas as ocasioes. Solado flexivel e cabedal resistente, otimo custo-beneficio.",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#3b82f6", "#1a1a2e", "#ffffff"]
  }
];

// ===== STATE =====
let cart = [];
let currentCategory = "todos";
let selectedProduct = null;
let selectedSize = null;
let selectedColor = null;

// ===== DOM =====
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
  const filtered = category === "todos"
    ? products
    : products.filter(p => p.cat === category);

  productsGrid.innerHTML = filtered.map((p, i) => `
    <div class="product-card" data-id="${p.id}" style="animation-delay: ${i * 0.08}s">
      ${p.badge ? `<span class="product-badge badge-${p.badge}">${
        p.badge === "new" ? "Novo" : p.badge === "sale" ? `${Math.round((1 - p.price / p.oldPrice) * 100)}% OFF` : "Mais Vendido"
      }</span>` : ''}
      <div class="product-image">
        <div class="product-bg" style="background: ${p.bg}"></div>
        <span class="product-shoe">${p.emoji}</span>
      </div>
      <div class="product-info">
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
      </div>
    </div>
  `).join('');

  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => openModal(Number(card.dataset.id)));
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

  document.getElementById("modalImage").innerHTML = `<div style="background:${selectedProduct.bg};position:absolute;inset:0;opacity:0.4"></div><span style="position:relative;z-index:1">${selectedProduct.emoji}</span>`;
  document.getElementById("modalCat").textContent = selectedProduct.cat;
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

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.getElementById("modalAddBtn").addEventListener("click", () => {
  if (!selectedSize) {
    showToast("Selecione um tamanho!");
    return;
  }
  addToCart(selectedProduct, selectedSize, selectedColor || selectedProduct.colors[0]);
  closeModal();
});

// ===== CART =====
function addToCart(product, size, color) {
  const existing = cart.find(item => item.id === product.id && item.size === size && item.color === color);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: product.id, name: product.name, emoji: product.emoji, price: product.price, size, color, qty: 1 });
  }
  updateCart();
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
  cartCount.textContent = totalItems;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Seu carrinho esta vazio.</p>';
    cartFooter.style.display = "none";
  } else {
    cartItems.innerHTML = cart.map((item, i) => `
      <div class="cart-item">
        <div class="cart-item-emoji">${item.emoji}</div>
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
    cartTotal.textContent = `R$ ${total.toFixed(2)}`;
  }
}

function toggleCart(open) {
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

cartBtn.addEventListener("click", () => toggleCart(true));
cartClose.addEventListener("click", () => toggleCart(false));
cartOverlay.addEventListener("click", () => toggleCart(false));

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
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    nav.classList.remove("open");
  });
});

// ===== CONTACT FORM =====
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showToast("Mensagem enviada com sucesso!");
  contactForm.reset();
});

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
