const PRODUCTS=[
{name:"Nike Air Force 1 '07",cat:"Chaussures",price:119.99,source:"Nike",url:"https://www.nike.com/fr/t/chaussure-nike-air-force-1-07-pour-homme-n8juM1H2/CW2288-001",visual:"purple",badge:"RÉEL"},
{name:"Nike Sportswear Club",cat:"T-shirts",price:24.99,source:"Nike",url:"https://www.nike.com/fr/t/t-shirt-nike-sportswear-club-pour-homme-bVD3j8",visual:"blue",badge:"RÉEL"},
{name:"Veste à capuche Essentials 3-Stripes",cat:"Hoodies",price:45.50,source:"adidas",url:"https://www.adidas.fr/sweat-shirt-a-capuche-entierement-zippee-molleton-3-bandes-essentials/GK9051.html",visual:"dark",badge:"RÉEL"},
{name:"G-SHOCK GMA-S2100PR-4A",cat:"Montres",price:99.90,source:"Casio",url:"https://gshock.casio.com/fr/",visual:"pink",badge:"RÉEL"},
{name:"New York Yankees Game 9FORTY M-Crown Snapback",cat:"Accessoires",price:38.99,source:"New Era",url:"https://www.neweracap.com/pages/team/new-york-yankees",visual:"purple",badge:"RÉEL"},
{name:"Short Essentials French Terry 3-Stripes",cat:"Shorts",price:21.45,source:"adidas",url:"https://www.adidas.fr/short-essentials-french-terry-3-stripes/GK9597.html",visual:"blue",badge:"RÉEL"}
];
const state={cat:"Tous",query:"",cart:[]};
const products=document.getElementById("products"),search=document.getElementById("headerSearch"),cart=document.getElementById("cart"),overlay=document.getElementById("overlay"),items=document.getElementById("cartItems"),count=document.getElementById("cartCount"),total=document.getElementById("cartTotal"),toast=document.getElementById("toast");
const money=n=>new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(n);

function productVisual(p){
 return '<div class="product-visual '+p.visual+'"><span class="real-badge">'+p.badge+'</span><img class="product-photo" src="'+photoFor(p)+'" alt="'+p.name+'"></div>';
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
  return '<article class="product">'+productVisual(p)+'<div class="product-info"><div class="product-cat">'+p.cat.toUpperCase()+'</div><h3>'+p.name+'</h3><div class="product-meta"><span class="rating">★★★★★</span><span class="price">'+money(p.price)+'</span></div><button class="buy" type="button" data-add="'+i+'">Ajouter au panier</button><div class="product-source"><a class="source-btn" href="'+p.url+'" target="_blank" rel="noopener">Voir chez '+p.source+' ↗</a></div></div></article>';
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
document.getElementById("checkout").addEventListener("click",()=>{if(!state.cart.length){toastMsg("Ajoute un produit d'abord");return}const url=state.cart[0].url;window.open(url,"_blank","noopener");});
renderProducts();renderCart();