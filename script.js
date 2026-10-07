const PRODUCTS=[
{name:"Nike Air Force 1 '07",cat:"Chaussures",price:119.99,source:"Nike",url:"https://www.nike.com/fr/",visual:"purple",badge:"RÉEL",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=82"},
{name:"Nike Sportswear Club",cat:"T-shirts",price:24.99,source:"Nike",url:"https://www.nike.com/fr/",visual:"blue",badge:"RÉEL",img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=82"},
{name:"Doudoune courte Moncler Maya",cat:"Hiver",price:1450.00,source:"Moncler",url:"https://www.moncler.com/fr-fr/homme/manteaux/doudounes-courtes/doudoune-courte-a-capuche-moncler-maya-noir-L20911A5360068950999.html",visual:"dark",badge:"RÉEL",img:"https://moncler-cdn.thron.com/api/v1/content-delivery/shares/dpx6uv/contents/K20911A5360068950999_3/image/moncler-maya-%ED%9B%84%EB%93%9C-%EC%87%BC%ED%8A%B8-%EB%8B%A4%EC%9A%B4-%EC%9E%AC%ED%82%B7-%EB%82%A8%EC%84%B1-%EB%B8%94%EB%9E%99-moncler-3.jpg?q=80&w=1300"},
{name:"Parka Wyndham",cat:"Hiver",price:1525.00,source:"Canada Goose",url:"https://www.canadagoose.com/fr-fr/products/wyndham-parka-2048m?variant=53270523248864",visual:"blue",badge:"RÉEL",img:"https://cdn11.bigcommerce.com/s-gwewfpbggc/images/stencil/original/products/7035/50327/2048M-61-Black__17069.1738910325.1280.1280__97589.1760394231.png?c=1"},
{name:"Men's Down Sweater™ Jacket",cat:"Hiver",price:260.00,source:"Patagonia",url:"https://eu.patagonia.com/fr/fr/product/mens-down-sweater-insulated-jacket/84675-BLK.html",visual:"purple",badge:"RÉEL",img:"https://www.montaz.com/cache/imgcatalogue/2026-2027/1024x1024/sl/patagonia-down-sweater-noir.webp"},
{name:"Doudoune légère à capuche",cat:"Hiver",price:0,source:"Lacoste",url:"https://www.lacoste.com/us/lacoste/men/clothing/jackets-coats/BH1966-52.html",visual:"dark",badge:"RÉEL",img:"https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw96880b6c/BH1966_031_24.jpg?impolicy=zoom&imwidth=1920",priceLabel:"Voir le prix"},
{name:"3-Stripes SDP Sportswear Puffer",cat:"Hiver",price:0,source:"adidas",url:"https://adidas.kz/kurtka-3-stripes-sdp-sportswear-hk6669",visual:"blue",badge:"RÉEL",img:"https://assetmanagerpim-res.cloudinary.com/images/w_1560/q_100/f9d2259f2607409aa946aed800a2cd60_9366/HK6669_01_laydown.WebP",priceLabel:"Voir le prix"},
{name:"Sneakers Storm",cat:"Chaussures",price:69.99,source:"Nike",url:"https://www.nike.com/fr/",visual:"purple",badge:"RÉEL",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=82"},
{name:"Casquette Nova",cat:"Accessoires",price:19.99,source:"NOVA",url:"#",visual:"dark",badge:"NOVA",img:"https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=82"}
];
const state={cat:"Tous",query:"",cart:[]};
const products=document.getElementById("products"),search=document.getElementById("headerSearch"),cart=document.getElementById("cart"),overlay=document.getElementById("overlay"),items=document.getElementById("cartItems"),count=document.getElementById("cartCount"),total=document.getElementById("cartTotal"),toast=document.getElementById("toast");
const money=n=>new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(n);

function productVisual(p){
 return '<div class="product-visual '+p.visual+'"><span class="real-badge">'+p.badge+'</span><img class="product-photo" src="'+(p.img||photoFor(p))+'" alt="'+p.name+'"></div>';
}
function photoFor(p){
 const photos={
 "Chaussures":"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=82",
 "T-shirts":"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=82",
 "Hoodies":"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=82",
 "Montres":"https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=82",
 "Accessoires":"https://images.unsplash.com/photo-1556306535-38febf6782e7?auto=format&fit=crop&w=900&q=82",
 "Shorts":"https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=900&q=82"
 };
 return photos[p.cat];
}
function renderProducts(){
 const list=PRODUCTS.filter(p=>(state.cat==="Tous"||p.cat===state.cat)&&p.name.toLowerCase().includes(state.query.toLowerCase()));
 products.innerHTML=list.map(p=>{
  const i=PRODUCTS.indexOf(p);
  return '<article class="product">'+productVisual(p)+'<div class="product-info"><div class="product-cat">'+p.cat.toUpperCase()+'</div><h3>'+p.name+'</h3><div class="product-meta"><span class="rating">★★★★★</span><span class="price">'+(p.price?money(p.price):(p.priceLabel||"Voir le prix"))+'</span></div><button class="buy" type="button" data-add="'+i+'">Ajouter au panier</button><div class="product-source"><a class="source-btn" href="'+p.url+'" target="_blank" rel="noopener">Voir chez '+p.source+' ↗</a></div></div></article>';
 }).join("")||'<p class="muted">Aucun produit trouvé.</p>';
}
function renderCart(){
 count.textContent=state.cart.length;
 items.innerHTML=state.cart.length?state.cart.map((p,i)=>'<div class="cart-line"><div><h4>'+p.name+'</h4><small>'+money(p.price)+'</small></div><button class="remove" data-remove="'+i+'" type="button">✕</button></div>').join(""):'<div class="empty">Votre panier est vide.</div>';
 total.textContent=money(state.cart.reduce((s,p)=>s+p.price,0));
}
function openCart(){cart.classList.add("open");cart.setAttribute("aria-hidden","false");overlay.classList.remove("hidden");document.body.classList.add("lock")}
function closeCart(){cart.classList.remove("open");cart.setAttribute("aria-hidden","true");overlay.classList.add("hidden");document.body.classList.remove("lock")}
function toastMsg(t){toast.textContent=t;toast.classList.add("show");clearTimeout(window._t);window._t=setTimeout(()=>toast.classList.remove("show"),1500)}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.cat=b.dataset.cat;renderProducts()}));
document.querySelectorAll("[data-jump]").forEach(a=>a.addEventListener("click",()=>{state.cat=a.dataset.jump;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x.dataset.cat===state.cat));renderProducts()}));
search.addEventListener("input",e=>{state.query=e.target.value;renderProducts()});
products.addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(!b)return;state.cart.push(PRODUCTS[+b.dataset.add]);renderCart();toastMsg("Ajouté au panier ✓")});
items.addEventListener("click",e=>{const b=e.target.closest("[data-remove]");if(!b)return;state.cart.splice(+b.dataset.remove,1);renderCart()});
document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
overlay.addEventListener("click",closeCart);
document.getElementById("clearBtn").addEventListener("click",()=>{state.cart=[];renderCart()});
document.getElementById("checkout").addEventListener("click",()=>{if(!state.cart.length){toastMsg("Ajoute un produit d'abord");return}toastMsg("Paiement par carte prêt — Stripe doit encore être connecté.");});
renderProducts();renderCart();