// ============================================
//  NYKAA CLONE — script.js
//  Real product images from Wikipedia / public CDNs
//  Fallback emoji shown if image fails to load
// ============================================

// ── PRODUCT DATA ──
// img: reliable public image URL (Wikipedia/Wikimedia used where possible)
// emoji: fallback if image fails
const products = [

  // ── MAKEUP ──
  {
    id:1, brand:"Lakme", emoji:"💄",
    name:"9 to 5 Weightless Mousse Lip & Cheek Color",
    img:"https://www.reliancedigital.in/medias/Lakme-9-to-5-Primer-Matte-Lip-Color-3-9g--515x515.jpg",
    category:"makeup", price:449, mrp:500, stars:4.4, reviews:12800,
    desc:"Airy mousse texture that gives a matte finish. Long-lasting all-day color for lips and cheeks.",
    tags:["Matte","Long Stay","New"]
  },
  {
    id:2, brand:"MAC", emoji:"💋",
    name:"Powder Kiss Liquid Lipcolour – Fever Dream",
    img:"https://images.ctfassets.net/6m9bd13t776q/4HKfLJ1jD9r2JyF56c4oiX/fe2d7aa04099b5e72b3e5f3f17f6f0e1/MAC_Powder_Kiss_Liquid_Lipcolour.jpg",
    category:"makeup", price:1850, mrp:2200, stars:4.6, reviews:8900,
    desc:"Dreamy wearable lip colour with a satin-matte finish that stays comfortable all day.",
    tags:["Premium","Satin Matte","Luxury"]
  },
  {
    id:3, brand:"Maybelline", emoji:"✨",
    name:"Fit Me Matte + Poreless Foundation SPF 22",
    img:"https://www.jiomart.com/images/product/original/490004643/maybelline-new-york-fit-me-matte-poreless-foundation-230-natural-buff-30ml-product-images-o490004643-p590082297-0-202305220917.jpg",
    category:"makeup", price:399, mrp:499, stars:4.3, reviews:24600,
    desc:"Fits skin tone, controls shine and minimizes the look of pores for a flawless finish.",
    tags:["SPF 22","Matte","Bestseller"]
  },
  {
    id:4, brand:"NYX", emoji:"💅",
    name:"Soft Matte Lip Cream – Amsterdam",
    img:"https://www.bigbasket.com/media/uploads/p/xxl/40095985_5-nyx-professional-makeup-soft-matte-lip-cream.jpg",
    category:"makeup", price:625, mrp:750, stars:4.2, reviews:6700,
    desc:"Silky smooth cream formula that dries to a soft matte finish. Long-wear and comfortable.",
    tags:["Matte","Cream","Vegan"]
  },
  {
    id:5, brand:"Nykaa Beauty", emoji:"🎨",
    name:"Wanderlust Eyeshadow Palette – Desert Dunes",
    img:"https://images-static.nykaa.com/media/catalog/product/tr:w-500,h-500/8/9/897f4541801424101_1.jpg",
    category:"makeup", price:799, mrp:999, stars:4.5, reviews:9800,
    desc:"12 warm-toned eyeshadows for every look from day to night. Blendable and pigmented.",
    tags:["Eyeshadow","Warm Tones","Exclusive"]
  },
  {
    id:6, brand:"Lakme", emoji:"👁",
    name:"Absolute Shine Liquid Eye Liner",
    img:"https://www.jiomart.com/images/product/original/490004234/lakme-absolute-shine-liquid-eye-liner-black-4-5-ml-product-images-o490004234-p490004234-0-202301171018.jpg",
    category:"makeup", price:299, mrp:350, stars:4.1, reviews:15400,
    desc:"Ultra-black liquid liner with a precision tip for flawless lines that last all day.",
    tags:["Waterproof","Precision","Bestseller"]
  },

  // ── SKINCARE ──
  {
    id:7, brand:"Cetaphil", emoji:"🧴",
    name:"Moisturizing Cream for Dry & Sensitive Skin 250g",
    img:"https://www.bigbasket.com/media/uploads/p/xxl/40108148_4-cetaphil-moisturizing-cream.jpg",
    category:"skincare", price:449, mrp:550, stars:4.7, reviews:31200,
    desc:"Clinically proven moisturizer that provides intense moisture for 48 hours. Fragrance-free formula.",
    tags:["Sensitive","Fragrance Free","Dermat Tested"]
  },
  {
    id:8, brand:"The Ordinary", emoji:"💧",
    name:"Hyaluronic Acid 2% + B5 Hydration Support",
    img:"https://www.bigbasket.com/media/uploads/p/xxl/40151003_3-the-ordinary-hyaluronic-acid-2-b5.jpg",
    category:"skincare", price:590, mrp:700, stars:4.5, reviews:18700,
    desc:"Multi-depth hydration formula that plumps and moisturizes skin throughout the day.",
    tags:["Hyaluronic","Vegan","Clean Beauty"]
  },
  {
    id:9, brand:"Minimalist", emoji:"🌿",
    name:"10% Niacinamide Face Serum for Acne & Pores",
    img:"https://www.bigbasket.com/media/uploads/p/xxl/40170059_4-be-minimalist-niacinamide-10-zinc-1-serum-30ml.jpg",
    category:"skincare", price:399, mrp:499, stars:4.6, reviews:22100,
    desc:"Reduces acne, controls oil production and visibly minimizes pore size with continued use.",
    tags:["Acne","Niacinamide","Bestseller"]
  },
  {
    id:10, brand:"Forest Essentials", emoji:"🌺",
    name:"Facial Tonic Mist Rose, Jasmine & Vetiver",
    img:"https://www.forestessentialsindia.com/pub/media/catalog/product/cache/f72c0b7804e7e40e89e49fb8e2ea3cf5/f/a/facial_tonic_mist_rose_vetiver_full_3.jpg",
    category:"skincare", price:875, mrp:1000, stars:4.4, reviews:5400,
    desc:"Ayurvedic toner that hydrates, balances skin pH and gives a fresh dewy glow.",
    tags:["Ayurvedic","Toner","Natural"]
  },
  {
    id:11, brand:"Biotique", emoji:"🍋",
    name:"Bio Papaya Ripple Tan Removal Scrub",
    img:"https://www.bigbasket.com/media/uploads/p/xxl/240491_3-biotique-bio-papaya-revitalizing-tan-removal-scrub.jpg",
    category:"skincare", price:149, mrp:199, stars:4.0, reviews:9900,
    desc:"Exfoliates dead skin cells and removes tan for a brighter, glowing complexion.",
    tags:["Scrub","Tan Removal","Natural"]
  },
  {
    id:12, brand:"Kama Ayurveda", emoji:"🌸",
    name:"Rose Jasmine Face Cleanser",
    img:"https://www.kamaayurveda.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/r/o/rose_jasmine_face_cleanser_200ml.jpg",
    category:"skincare", price:695, mrp:795, stars:4.5, reviews:7200,
    desc:"Gentle daily cleanser with pure rose water and jasmine extracts for soft, clean skin.",
    tags:["Ayurvedic","Cleanser","Gentle"]
  },

  // ── HAIRCARE ──
  {
    id:13, brand:"Mamaearth", emoji:"💆",
    name:"Onion Shampoo for Hair Growth & Hair Fall Control",
    img:"https://www.bigbasket.com/media/uploads/p/xxl/40195466_7-mamaearth-onion-shampoo-for-hair-growth.jpg",
    category:"haircare", price:349, mrp:399, stars:4.2, reviews:28900,
    desc:"Powered by onion extract to reduce hair fall up to 96% and stimulate new hair growth.",
    tags:["Anti Hair Fall","Sulphate Free","Bestseller"]
  },
  {
    id:14, brand:"TRESemmé", emoji:"🧖",
    name:"Keratin Smooth Shampoo 580ml",
    img:"https://www.bigbasket.com/media/uploads/p/xxl/253097_3-tresemme-keratin-smooth-shampoo.jpg",
    category:"haircare", price:399, mrp:499, stars:4.1, reviews:14200,
    desc:"Infused with marula oil and keratin for frizz-free hair up to 5 days after use.",
    tags:["Keratin","Frizz Free","Large Size"]
  },
  {
    id:15, brand:"WOW Skin Science", emoji:"🍎",
    name:"Apple Cider Vinegar Shampoo 300ml",
    img:"https://www.bigbasket.com/media/uploads/p/xxl/40087447_4-wow-apple-cider-vinegar-shampoo.jpg",
    category:"haircare", price:349, mrp:449, stars:4.0, reviews:11300,
    desc:"Cleanses the scalp, balances pH and controls dandruff naturally with apple cider vinegar.",
    tags:["ACV","Anti Dandruff","Sulphate Free"]
  },
  {
    id:16, brand:"Nykaa Beauty", emoji:"✨",
    name:"HAIR SECRETS Argan Oil Hair Mask 200ml",
    img:"https://images-static.nykaa.com/media/catalog/product/tr:w-500,h-500/n/y/nykaa-hair-argan-mask.jpg",
    category:"haircare", price:449, mrp:599, stars:4.3, reviews:6100,
    desc:"Deep conditioning mask with argan oil for silky smooth, frizz-free hair.",
    tags:["Argan Oil","Deep Condition","Exclusive"]
  },

  // ── FRAGRANCE ──
  {
    id:17, brand:"Engage", emoji:"🌸",
    name:"W3 Perfume Spray for Women 120ml",
    img:"https://www.bigbasket.com/media/uploads/p/xxl/40087040_3-engage-w3-perfume-spray-for-women.jpg",
    category:"fragrance", price:299, mrp:399, stars:4.2, reviews:19800,
    desc:"A fresh floral fragrance with hints of jasmine, rose and musk for everyday wear.",
    tags:["Floral","Long Lasting","Affordable"]
  },
  {
    id:18, brand:"Ajmal", emoji:"🌹",
    name:"Evoke Silver Edition Eau de Parfum 75ml",
    img:"https://www.ajmalperfume.com/media/catalog/product/cache/e/image/650x650/9df78eab33525d08d6e5fb8d27136e95/e/v/evoke-silver-edition-edp-75ml-he.jpg",
    category:"fragrance", price:775, mrp:950, stars:4.5, reviews:8700,
    desc:"An oriental fragrance with notes of bergamot, saffron and oud for a luxurious scent.",
    tags:["EDP","Oriental","Premium"]
  },
  {
    id:19, brand:"Fogg", emoji:"💨",
    name:"Scent Xpressio Body Spray for Men 150ml",
    img:"https://www.bigbasket.com/media/uploads/p/xxl/250059_4-fogg-scent-xpressio.jpg",
    category:"fragrance", price:235, mrp:299, stars:4.0, reviews:22400,
    desc:"Long-lasting body spray with no gas formula. Gives up to 800 sprays per bottle.",
    tags:["No Gas","Long Stay","Men"]
  },
  {
    id:20, brand:"Kayali", emoji:"🍦",
    name:"Vanilla 28 Eau de Parfum 10ml Mini",
    img:"https://www.sephora.com/productimages/sku/s2512196-main-zoom.jpg",
    category:"fragrance", price:1499, mrp:1800, stars:4.7, reviews:3200,
    desc:"Addictively warm vanilla fragrance with creamy sandalwood base notes. Travel-friendly mini.",
    tags:["Vanilla","Luxury","Mini"]
  },

  // ── NAILS ──
  {
    id:21, brand:"Nykaa Beauty", emoji:"💅",
    name:"Get Cheeky! Nail Enamel – Cherry Bomb",
    img:"https://images-static.nykaa.com/media/catalog/product/tr:w-500,h-500/8/9/891d75d1802164091_1.jpg",
    category:"nails", price:149, mrp:199, stars:4.3, reviews:7600,
    desc:"High-shine nail colour in a vibrant cherry red that lasts up to 7 days without chipping.",
    tags:["Long Stay","Glossy","Exclusive"]
  },
  {
    id:22, brand:"OPI", emoji:"🍎",
    name:"Nail Lacquer – Big Apple Red NL N25 15ml",
    img:"https://www.opi.com/on/demandware.static/-/Sites-OPI-US-Library/default/dw987b74ec/images/OPI_NLN25_BigAppleRed_3600x3600.jpg",
    category:"nails", price:999, mrp:1200, stars:4.6, reviews:4400,
    desc:"OPI's iconic true red. A classic nail lacquer with bold pigment and long-lasting shine.",
    tags:["Premium","Classic","Long Stay"]
  },
  {
    id:23, brand:"Colorbar", emoji:"🫧",
    name:"Pro Nail Lacquer Remover Extra Strength",
    img:"https://www.colorbarcosmetics.com/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/0/2/02_1_1_1.jpg",
    category:"nails", price:149, mrp:199, stars:4.0, reviews:5100,
    desc:"Acetone-free formula with added conditioners to remove nail polish gently.",
    tags:["Acetone Free","Gentle","Extra Strength"]
  },

  // ── WELLNESS ──
  {
    id:24, brand:"Kapiva", emoji:"🌿",
    name:"Get Slim Juice – Apple Cider Vinegar + Ginger",
    img:"https://www.kapiva.in/cdn/shop/files/GetSlimJuice_Front.jpg",
    category:"wellness", price:299, mrp:399, stars:4.1, reviews:14200,
    desc:"Ayurvedic juice blend that supports weight management and boosts digestion naturally.",
    tags:["Ayurvedic","Weight Management","No Sugar"]
  },
  {
    id:25, brand:"Mamaearth", emoji:"🍊",
    name:"Vitamin C Face Serum with Turmeric 30ml",
    img:"https://www.bigbasket.com/media/uploads/p/xxl/40195529_6-mamaearth-vitamin-c-face-serum.jpg",
    category:"wellness", price:499, mrp:599, stars:4.4, reviews:18900,
    desc:"Brightens skin tone and fights signs of aging with the power of Vitamin C and turmeric.",
    tags:["Vitamin C","Brightening","Vegan"]
  },
  {
    id:26, brand:"WOW Life Science", emoji:"💊",
    name:"Organic Apple Cider Vinegar Tablets 60 Tabs",
    img:"https://www.bigbasket.com/media/uploads/p/xxl/40170096_3-wow-life-science-organic-apple-cider-vinegar-tablets.jpg",
    category:"wellness", price:349, mrp:499, stars:4.0, reviews:9800,
    desc:"Easy-to-swallow tablets with 500mg of apple cider vinegar for digestive health.",
    tags:["Organic","Vegan","Supplement"]
  },

  // ── MEN ──
  {
    id:27, brand:"Beardo", emoji:"🧔",
    name:"Beard & Hair Softener Creme 100g",
    img:"https://www.beardo.in/cdn/shop/products/Beard_Softner_Cream-removebg.png",
    category:"men", price:349, mrp:449, stars:4.2, reviews:11200,
    desc:"Softens and tames beard while adding shine and reducing itch for a groomed look.",
    tags:["Beard Care","Moisturizing","Men's"]
  },
  {
    id:28, brand:"Bombay Shaving", emoji:"🫧",
    name:"Charcoal Face Wash with Neem + Tea Tree 100ml",
    img:"https://www.bombayshavingcompany.com/cdn/shop/files/Charcoal_Face_Wash_-_Neem_Tea_Tree_-_100gm_-_Front.jpg",
    category:"men", price:249, mrp:299, stars:4.1, reviews:8700,
    desc:"Deep cleanses pores and removes excess oil and impurities for clearer skin.",
    tags:["Charcoal","Deep Cleanse","Men's"]
  },
  {
    id:29, brand:"Ustraa", emoji:"💈",
    name:"Hair Growth Oil with Castor & Redensyl 100ml",
    img:"https://www.ustraa.com/cdn/shop/products/HairGrowthOilCastor_REDENSYL_FRONT.jpg",
    category:"men", price:399, mrp:499, stars:4.0, reviews:7600,
    desc:"Clinically tested oil that reduces hair fall and promotes new hair growth from roots.",
    tags:["Hair Growth","Castor Oil","Men's"]
  },

  // ── LUXURY ──
  {
    id:30, brand:"Clinique", emoji:"💎",
    name:"Moisture Surge 100H Auto-Replenishing Hydrator 75ml",
    img:"https://www.clinique.com/media/export/cms/products/1100x1375/cl_sku_QJ4N01_1100x1375_0.jpg",
    category:"luxury", price:2450, mrp:2900, stars:4.7, reviews:6700,
    desc:"24-hour gel-cream moisturizer that auto-replenishes hydration for plump, dewy skin.",
    tags:["Luxury","Gel Cream","Dermat Tested"]
  },
  {
    id:31, brand:"Estée Lauder", emoji:"🌙",
    name:"Advanced Night Repair Serum 30ml",
    img:"https://www.esteelauder.com/media/export/cms/products/1100x1375/el_sku_887167349131_1100x1375_0.jpg",
    category:"luxury", price:5200, mrp:6000, stars:4.8, reviews:4200,
    desc:"Award-winning serum that visibly reduces multiple signs of aging overnight for youthful skin.",
    tags:["Anti-Aging","Night Serum","Luxury"]
  },
  {
    id:32, brand:"Charlotte Tilbury", emoji:"💗",
    name:"Pillow Talk Lipstick – Medium Nude Pink",
    img:"https://www.charlottetilbury.com/on/demandware.static/-/Sites-master-catalog-charlottetilbury/default/dw97fcf5df/images/large/Pillow_Talk_Lipstick_1.jpg",
    category:"luxury", price:3200, mrp:3500, stars:4.6, reviews:3100,
    desc:"The iconic nude pink lipstick that flatters every skin tone with a satin finish.",
    tags:["Luxury","Iconic","Satin"]
  }
];

// ── STATE ──
let currentCategory = 'all';
let currentSort     = 'default';
let cartItems       = [];
let wishlist        = new Set();
let currentModalProduct = null;
let currentSlide    = 0;
let slideTimer      = null;

// ── HERO SLIDER ──
function changeSlide(dir) {
  const total = document.querySelectorAll('.hero-slide').length;
  currentSlide = (currentSlide + dir + total) % total;
  updateSlider();
  resetSlideTimer();
}
function goToSlide(idx) {
  currentSlide = idx;
  updateSlider();
  resetSlideTimer();
}
function updateSlider() {
  document.getElementById('heroSlides').style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}
function resetSlideTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => changeSlide(1), 4500);
}

// ── HELPERS ──
function getDisc(price, mrp) { return Math.round((1 - price / mrp) * 100); }
function renderStars(r) {
  const f = Math.floor(r), h = r % 1 >= 0.5 ? 1 : 0, e = 5 - f - h;
  return '★'.repeat(f) + (h ? '⯨' : '') + '☆'.repeat(e);
}
function fmt(p) { return '₹' + p.toLocaleString('en-IN'); }

function getCatBg(cat) {
  const m = { makeup:'linear-gradient(135deg,#ffe4f0,#ffc2dc)', skincare:'linear-gradient(135deg,#e8f4fd,#c5e3f7)', haircare:'linear-gradient(135deg,#fff3e0,#ffe0b2)', fragrance:'linear-gradient(135deg,#f3e8ff,#e1d5f7)', nails:'linear-gradient(135deg,#fce4ec,#f8bbd9)', wellness:'linear-gradient(135deg,#e8f5e9,#c8e6c9)', men:'linear-gradient(135deg,#e3f2fd,#bbdefb)', luxury:'linear-gradient(135deg,#fff8e1,#ffecb3)' };
  return m[cat] || '#f8f8f8';
}

// ── BUILD PRODUCT CARD ──
function buildCard(p) {
  const disc = getDisc(p.price, p.mrp);
  const wished = wishlist.has(p.id);
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.id       = p.id;
  card.dataset.category = p.category;
  card.dataset.price    = p.price;
  card.dataset.rating   = p.stars;
  card.dataset.discount = disc;
  card.dataset.name     = p.name.toLowerCase();
  card.dataset.brand    = p.brand.toLowerCase();

  card.innerHTML = `
    <div class="product-img-wrap" style="background:${getCatBg(p.category)}">
      <img
        src="${p.img}"
        alt="${p.name}"
        loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <div class="product-img-emoji" style="display:none; font-size:4.5rem; width:100%; height:100%; align-items:center; justify-content:center;">${p.emoji}</div>
      <span class="disc-badge">-${disc}%</span>
      <button class="wish-btn ${wished ? 'wished' : ''}"
        onclick="event.stopPropagation(); toggleWishCard(this, ${p.id})">
        ${wished ? '♥' : '♡'}
      </button>
    </div>
    <div class="product-info">
      <div class="product-brand">${p.brand}</div>
      <div class="product-name">${p.name}</div>
      <div class="stars-row">
        <span class="stars">${renderStars(p.stars)}</span>
        <span class="review-count">(${p.reviews.toLocaleString('en-IN')})</span>
      </div>
      <div class="price-row">
        <span class="price">${fmt(p.price)}</span>
        <span class="mrp">${fmt(p.mrp)}</span>
        <span class="discount">${disc}% OFF</span>
      </div>
    </div>
    <button class="add-bag-btn" onclick="event.stopPropagation(); addToCart(${p.id})">+ Add to Bag</button>
  `;
  card.addEventListener('click', () => openProductModal(p.id));
  return card;
}

// ── RENDER PRODUCTS ──
function renderProducts(list) {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  if (list.length === 0) {
    grid.innerHTML = `<div class="empty-state"><div class="big-icon">🔍</div><h3>No products found</h3><p>Try a different category or search term.</p></div>`;
    return;
  }
  list.forEach(p => grid.appendChild(buildCard(p)));
  const c = document.getElementById('resultCount');
  if (c) c.textContent = `${list.length} product${list.length !== 1 ? 's' : ''}`;
}

function getList() {
  let list = currentCategory === 'all' ? [...products] : products.filter(p => p.category === currentCategory);
  if (currentSort === 'price-low')  list.sort((a,b) => a.price - b.price);
  if (currentSort === 'price-high') list.sort((a,b) => b.price - a.price);
  if (currentSort === 'rating')     list.sort((a,b) => b.stars - a.stars);
  if (currentSort === 'discount')   list.sort((a,b) => getDisc(b.price,b.mrp) - getDisc(a.price,a.mrp));
  return list;
}

// ── FILTER & SORT ──
function filterCategory(cat, pillEl) {
  currentCategory = cat;
  document.querySelectorAll('.fpill').forEach(p => p.classList.remove('active'));
  if (pillEl) {
    pillEl.classList.add('active');
  } else {
    document.querySelectorAll('.fpill').forEach(p => {
      if (p.textContent.trim().toLowerCase() === cat || (cat === 'all' && p.textContent.trim().toLowerCase() === 'all'))
        p.classList.add('active');
    });
  }
  const titles = { all:'All Products', makeup:'Makeup', skincare:'Skincare', haircare:'Haircare', fragrance:'Fragrance', nails:'Nails', wellness:'Wellness', men:'Men', luxury:'Luxury' };
  const t = document.getElementById('productsTitle');
  if (t) t.textContent = titles[cat] || 'All Products';
  renderProducts(getList());
}

function sortProducts(val) {
  currentSort = val;
  renderProducts(getList());
}

function scrollToProducts() {
  const s = document.getElementById('productsSection');
  if (s) s.scrollIntoView({ behavior:'smooth', block:'start' });
}

// ── FILTER BY BRAND ──
function filterBrand(brand) {
  const list = products.filter(p => p.brand === brand);
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  list.forEach(p => grid.appendChild(buildCard(p)));
  const t = document.getElementById('productsTitle');
  if (t) t.textContent = brand;
  const c = document.getElementById('resultCount');
  if (c) c.textContent = `${list.length} product${list.length !== 1 ? 's' : ''}`;
  scrollToProducts();
  showToast(`Showing ${brand} products`);
  document.querySelectorAll('.fpill').forEach(p => p.classList.remove('active'));
}

// ── SEARCH ──
function handleSearch(query) {
  const dd = document.getElementById('searchDropdown');
  if (!query.trim()) { dd.classList.remove('open'); dd.innerHTML=''; return; }
  const matched = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.brand.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 8);
  if (!matched.length) { dd.classList.remove('open'); dd.innerHTML=''; return; }
  dd.innerHTML = matched.map(p => `
    <div class="search-drop-item" onmousedown="selectSearch(${p.id})">
      <img class="search-drop-img" src="${p.img}" alt="${p.name}"
        onerror="this.outerHTML='<span style=font-size:1.6rem>${p.emoji}</span>'" />
      <div>
        <div style="font-weight:600;font-size:13px;">${p.name.substring(0,45)}...</div>
        <div style="font-size:11px;color:#fc2779;">${p.brand} · ${fmt(p.price)}</div>
      </div>
    </div>`).join('');
  dd.classList.add('open');
}

function selectSearch(id) {
  openProductModal(id);
  document.getElementById('searchInput').value = '';
  document.getElementById('searchDropdown').classList.remove('open');
}

function showSearchDropdown() {
  const q = document.getElementById('searchInput').value;
  if (q.trim().length > 0) handleSearch(q);
}
function hideSearchDropdown() {
  setTimeout(() => document.getElementById('searchDropdown').classList.remove('open'), 150);
}
function triggerSearch() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  if (!q) { filterCategory('all'); scrollToProducts(); return; }
  const cat = ['makeup','skincare','haircare','fragrance','nails','wellness','men','luxury'].find(c => c.includes(q)||q.includes(c));
  if (cat) { filterCategory(cat); scrollToProducts(); return; }
  const matched = products.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
  renderProducts(matched);
  scrollToProducts();
  document.getElementById('searchDropdown').classList.remove('open');
}

// ── PRODUCT MODAL ──
function openProductModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  currentModalProduct = p;
  const disc = getDisc(p.price, p.mrp);

  // Image
  const imgEl  = document.getElementById('modalProductImg');
  const emojiEl = document.getElementById('modalImgEmoji');
  const wrap   = document.getElementById('modalImgWrap');
  wrap.style.background = getCatBg(p.category);
  imgEl.src = p.img;
  imgEl.alt = p.name;
  imgEl.style.display = 'block';
  emojiEl.style.display = 'none';
  imgEl.onerror = () => {
    imgEl.style.display = 'none';
    emojiEl.style.display = 'flex';
    emojiEl.textContent = p.emoji;
  };

  document.getElementById('modalBrand').textContent   = p.brand;
  document.getElementById('modalTitle').textContent   = p.name;
  document.getElementById('modalStars').textContent   = renderStars(p.stars) + ' ' + p.stars;
  document.getElementById('modalReviews').textContent = `(${p.reviews.toLocaleString('en-IN')} reviews)`;
  document.getElementById('modalPrice').textContent   = fmt(p.price);
  document.getElementById('modalMrp').textContent     = fmt(p.mrp);
  document.getElementById('modalDiscount').textContent= `${disc}% OFF`;
  document.getElementById('modalDesc').textContent    = p.desc;
  document.getElementById('modalBadge').innerHTML     = `<span class="disc-badge">-${disc}%</span>`;
  document.getElementById('modalTags').innerHTML      = p.tags.map(t=>`<span class="modal-tag">${t}</span>`).join('');

  const wb = document.getElementById('modalWishBtn');
  if (wb) { wb.innerHTML = wishlist.has(p.id) ? '♥ Wishlisted' : '♡ Wishlist'; wb.classList.toggle('wished', wishlist.has(p.id)); }

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  currentModalProduct = null;
}
function closeModalOnBg(e) { if (e.target === document.getElementById('modalOverlay')) closeModal(); }
function addToCartFromModal() { if (currentModalProduct) { addToCart(currentModalProduct.id); closeModal(); } }

// ── WISHLIST ──
function toggleWish(btn) {
  if (!currentModalProduct) return;
  const id = currentModalProduct.id;
  if (wishlist.has(id)) { wishlist.delete(id); btn.innerHTML='♡ Wishlist'; btn.classList.remove('wished'); showToast('Removed from Wishlist'); }
  else { wishlist.add(id); btn.innerHTML='♥ Wishlisted'; btn.classList.add('wished'); showToast('❤️ Added to Wishlist!'); }
  const cw = document.querySelector(`.product-card[data-id="${id}"] .wish-btn`);
  if (cw) { cw.classList.toggle('wished',wishlist.has(id)); cw.textContent = wishlist.has(id) ? '♥' : '♡'; }
}

function toggleWishCard(btn, id) {
  if (wishlist.has(id)) { wishlist.delete(id); btn.classList.remove('wished'); btn.textContent='♡'; showToast('Removed from Wishlist'); }
  else { wishlist.add(id); btn.classList.add('wished'); btn.textContent='♥'; showToast('❤️ Added to Wishlist!'); }
}

// ── CART ──
function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const ex = cartItems.find(c => c.id === id);
  if (ex) { ex.qty++; showToast(`${p.brand} quantity updated`); }
  else { cartItems.push({...p, qty:1}); showToast('🛒 Added to bag!'); }
  updateCartBadge();
}

function removeFromCart(id) {
  cartItems = cartItems.filter(c => c.id !== id);
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  document.getElementById('cartCount').textContent = cartItems.reduce((s,c) => s + c.qty, 0);
}

function renderCart() {
  const body   = document.getElementById('cartBody');
  const empty  = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');
  const total  = document.getElementById('cartTotal');

  if (!cartItems.length) {
    body.innerHTML = '';
    body.appendChild(empty);
    empty.style.display = 'flex';
    footer.style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  footer.style.display = 'block';

  body.innerHTML = cartItems.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}"
        onerror="this.outerHTML='<div class=cart-item-emoji>${item.emoji}</div>'" />
      <div class="cart-item-info">
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-name">${item.name.substring(0,42)}...</div>
        <div class="cart-item-price">${fmt(item.price)} × ${item.qty}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">🗑</button>
    </div>`).join('');
  body.appendChild(empty);
  total.textContent = fmt(cartItems.reduce((s,c) => s + c.price * c.qty, 0));
}

function openCart()  { renderCart(); document.getElementById('cartOverlay').classList.add('open'); document.getElementById('cartDrawer').classList.add('open'); }
function closeCart() { document.getElementById('cartOverlay').classList.remove('open'); document.getElementById('cartDrawer').classList.remove('open'); }

// ── LOGIN ──
function openLoginModal()   { document.getElementById('loginOverlay').classList.add('open');    document.body.style.overflow='hidden'; }
function closeLoginModal()  { document.getElementById('loginOverlay').classList.remove('open'); document.body.style.overflow=''; }
function closeLoginOnBg(e)  { if (e.target===document.getElementById('loginOverlay')) closeLoginModal(); }
function sendOTP() {
  const ph = document.getElementById('loginPhone').value;
  if (ph.length !== 10 || isNaN(ph)) { showToast('⚠️ Enter a valid 10-digit mobile number'); return; }
  showToast(`✅ OTP sent to +91 ${ph} (Demo)`);
  closeLoginModal();
}

// ── SIDEBAR ──
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('open');
}

// ── NEWSLETTER ──
function subscribeNewsletter() {
  const email = document.getElementById('newsletterEmail').value;
  if (!email || !email.includes('@')) { showToast('⚠️ Enter a valid email'); return; }
  showToast('🎉 Subscribed! Watch your inbox for a welcome offer.');
  document.getElementById('newsletterEmail').value = '';
}

// ── TOAST ──
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.innerHTML = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ── BACK TO TOP ──
window.addEventListener('scroll', () => {
  document.getElementById('backTop').classList.toggle('visible', window.scrollY > 400);
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 80);
});

// ── KEYBOARD ──
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeLoginModal(); closeCart(); }
});

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(getList());
  resetSlideTimer();
});
