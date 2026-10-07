const PRODUCTS=[
{name:"Hoodie Nova",cat:"Hoodies",price:39.99,look:"purple",tag:"NOUVEAU"},
{name:"Sneakers Storm",cat:"Chaussures",price:69.99,look:"dark",tag:"POPULAIRE"},
{name:"T-shirt Essential",cat:"T-shirts",price:24.99,look:"blue",tag:""},
{name:"Casquette Nova",cat:"Accessoires",price:19.99,look:"dark",tag:""},
{name:"Veste Tech",cat:"Vestes",price:79.99,look:"blue",tag:"NOUVEAU"},
{name:"Pantalon Cargo",cat:"Pantalons",price:49.99,look:"dark",tag:""},
{name:"T-shirt Lava",cat:"T-shirts",price:29.99,look:"pink",tag:"DROP"},
{name:"Sac à dos Nova",cat:"Accessoires",price:34.99,look:"purple",tag:""}
];

const state={cat:"Tous",query:"",cart:[]};
const products=document.getElementById("products"),search=document.getElementById("headerSearch"),cart=document.getElementById("cart"),overlay=document.getElementById("overlay"),items=document.getElementById("cartItems"),count=document.getElementById("cartCount"),total=document.getElementById("cartTotal"),toast=document.getElementById("toast");
const money=n=>new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(n);

function modelMarkup(p){
 const body=p.cat==="T-shirts"?"shirt":p.cat==="Vestes"?"jacket":"hoodie";
 if(p.cat==="Chaussures") return '<div class="mini-model"><i class="h"></i><i class="hair"></i><i class="body jacket"></i><i class="arm a1"></i><i class="arm a2"></i><b>✦</b></div>';
 if(p.cat==="Accessoires") return '<div class="mini-model"><i class="h"></i><i class="hair"></i><i class="cap"></i><i class="body jacket"></i><i class="arm a1"></i><i class="arm a2"></i><b>N</b></div>';
 return '<div class="mini-model"><i class="h"></i><i class="hair"></i><i class="body '+body+'"></i><i class="arm a1"></i><i class="arm a2"></i><b>N</b></div>';
}
function renderProducts(){
 const list=PRODUCTS.filter(p=>(state.cat==="Tous"||p.cat===state.cat)&&p.name.toLowerCase().includes(state.query.toLowerCase()));
 products.innerHTML=list.map(p=>{
  const i=PRODUCTS.indexOf(p);
  return '<article class="product"><div class="product-visual '+p.look+'">'+(p.tag?'<span class="product-tag">'+p.tag+'</span>':"")+modelMarkup(p)+'</div><div class="product-info"><div class="product-cat">'+p.cat.toUpperCase()+'</div><h3>'+p.name+'</h3><div class="product-meta"><span class="rating">★★★★★</span><span class="price">'+money(p.price)+'</span></div><button class="buy" type="button" data-add="'+i+'">Ajouter au panier</button></div></article>';
 }).join("") || '<p class="muted">Aucun produit ne correspond à ta recherche.</p>';
}
function renderCart(){
 count.textContent=state.cart.length;
 items.innerHTML=state.cart.length?state.cart.map((p,i)=>'<div class="cart-line"><div><h4>'+p.name+'</h4><small>'+money(p.price)+'</small></div><button class="remove" type="button" data-remove="'+i+'">✕</button></div>').join(""):'<div class="empty">Votre panier est vide.</div>';
 total.textContent=money(state.cart.reduce((s,p)=>s+p.price,0));
}
function openCart(){cart.classList.add("open");overlay.classList.remove("hidden");document.body.classList.add("lock")}
function closeCart(){cart.classList.remove("open");overlay.classList.add("hidden");document.body.classList.remove("lock")}
function showToast(msg){toast.textContent=msg;toast.classList.add("show");clearTimeout(window._toast);window._toast=setTimeout(()=>toast.classList.remove("show"),1500)}

document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.cat=b.dataset.cat;renderProducts()}));
search.addEventListener("input",e=>{state.query=e.target.value;renderProducts()});
products.addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(!b)return;state.cart.push(PRODUCTS[+b.dataset.add]);renderCart();showToast("Produit ajouté au panier ✓")});
items.addEventListener("click",e=>{const b=e.target.closest("[data-remove]");if(!b)return;state.cart.splice(+b.dataset.remove,1);renderCart()});
document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
overlay.addEventListener("click",closeCart);
document.getElementById("checkout").addEventListener("click",()=>{if(!state.cart.length){showToast("Ajoute un produit d'abord");return}closeCart();document.getElementById("about").scrollIntoView({behavior:"smooth"});showToast("Panier prêt à être commandé ✓")});
document.querySelectorAll("[data-jump]").forEach(a=>a.addEventListener("click",()=>{const cat=a.dataset.jump;state.cat=cat;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x.dataset.cat===cat));renderProducts()}));
renderProducts();renderCart();