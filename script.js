const PRODUCTS=[
{name:"Hoodie Nova",cat:"Hoodies",price:39.99,visual:"purple",icon:"hoodie",tag:"NOUVEAU"},
{name:"T-shirt Essential",cat:"T-shirts",price:24.99,visual:"blue",icon:"tshirt",tag:"POPULAIRE"},
{name:"Veste Tech",cat:"Hoodies",price:79.99,visual:"blue",icon:"jacket",tag:"NOUVEAU"},
{name:"T-shirt Lava",cat:"T-shirts",price:29.99,visual:"red",icon:"tshirt",tag:"DROP"},
{name:"Sneakers Storm",cat:"Chaussures",price:69.99,visual:"purple",icon:"shoe",tag:"BEST"},
{name:"Casquette Nova",cat:"Accessoires",price:19.99,visual:"blue",icon:"cap",tag:""},
{name:"Sac à dos Nova",cat:"Accessoires",price:34.99,visual:"red",icon:"bag",tag:""},
{name:"Bracelet Nova",cat:"Accessoires",price:14.99,visual:"purple",icon:"bracelet",tag:""}
];
let state={cat:"Tous",query:"",cart:[]};

const products=document.getElementById("products");
const search=document.getElementById("search");
const panel=document.getElementById("cartPanel");
const backdrop=document.getElementById("backdrop");
const items=document.getElementById("cartItems");
const count=document.getElementById("cartCount");
const total=document.getElementById("cartTotal");
const toast=document.getElementById("toast");
const money=n=>new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(n);

function modelSVG(type){
  const shirt=type==="tshirt"?"tshirt":type==="jacket"?"jacket":"";
  const cap=type==="cap"?'<div class="cap-shape"></div>':"";
  const bag=type==="bag"?'<div style="position:absolute;z-index:10;left:58px;top:132px;width:76px;height:90px;border:9px solid #15161c;border-radius:18px"></div>':"";
  const shoe=type==="shoe"?'<div style="position:absolute;z-index:10;left:28px;top:240px;width:145px;height:36px;background:#e7ebf5;border-radius:28px 34px 14px 14px;box-shadow:0 10px 0 #151923"></div>':"";
  const bracelet=type==="bracelet"?'<div style="position:absolute;z-index:10;left:24px;top:182px;width:35px;height:35px;border:5px solid #a27bff;border-radius:50%"></div>':"";
  return '<div class="model">'+
    '<div class="m-head"></div><div class="m-hair"></div>'+cap+'<div class="m-neck"></div>'+
    '<div class="m-body '+shirt+'"></div><div class="m-arm left"></div><div class="m-arm right"></div>'+
    '<div class="m-brand">N</div>'+bag+shoe+bracelet+
  '</div>';
}
function visualHTML(p){
  if(p.icon==="shoe"||p.icon==="bag"||p.icon==="bracelet") return modelSVG(p.icon);
  return modelSVG(p.icon);
}
function renderProducts(){
 const list=PRODUCTS.filter(p=>(state.cat==="Tous"||p.cat===state.cat)&&p.name.toLowerCase().includes(state.query.toLowerCase()));
 products.innerHTML=list.length?list.map(p=>{
   const i=PRODUCTS.indexOf(p);
   return '<article class="product"><div class="product-visual '+p.visual+'">'+(p.tag?'<span class="tag">'+p.tag+'</span>':"")+visualHTML(p)+'</div><div class="product-info"><div class="product-cat">'+p.cat.toUpperCase()+'</div><h3>'+p.name+'</h3><div class="product-line"><span class="rating">★★★★★</span><span class="price">'+money(p.price)+'</span></div><button class="buy" data-add="'+i+'" type="button">Ajouter au panier</button></div></article>';
 }).join(""):'<p class="muted">Aucun produit trouvé.</p>';
}
function renderCart(){
 count.textContent=state.cart.length;
 if(!state.cart.length){items.innerHTML='<div class="empty">Ton panier est vide.</div>';}
 else items.innerHTML=state.cart.map((p,i)=>'<div class="cart-line"><div><h4>'+p.name+'</h4><small>'+money(p.price)+'</small></div><button class="remove" data-remove="'+i+'" type="button">✕</button></div>').join("");
 total.textContent=money(state.cart.reduce((s,p)=>s+p.price,0));
}
function openCart(){panel.classList.add("open");panel.setAttribute("aria-hidden","false");backdrop.classList.remove("hidden");}
function closeCart(){panel.classList.remove("open");panel.setAttribute("aria-hidden","true");backdrop.classList.add("hidden");}
function showToast(t){toast.textContent=t;toast.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove("show"),1500)}

document.getElementById("filters").addEventListener("click",e=>{
 const b=e.target.closest(".filter");if(!b)return;
 document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");
 state.cat=b.dataset.cat;renderProducts();
});
search.addEventListener("input",e=>{state.query=e.target.value;renderProducts()});
products.addEventListener("click",e=>{
 const b=e.target.closest("[data-add]");if(!b)return;
 state.cart.push(PRODUCTS[+b.dataset.add]);renderCart();showToast("Ajouté au panier ✓");
});
items.addEventListener("click",e=>{
 const b=e.target.closest("[data-remove]");if(!b)return;
 state.cart.splice(+b.dataset.remove,1);renderCart();
});
document.getElementById("cartOpen").addEventListener("click",openCart);
document.getElementById("cartClose").addEventListener("click",closeCart);
backdrop.addEventListener("click",closeCart);
document.getElementById("clearBtn").addEventListener("click",()=>{state.cart=[];renderCart();});
document.getElementById("orderBtn").addEventListener("click",()=>{
 if(!state.cart.length){showToast("Ajoute d'abord un produit");return}
 closeCart();document.getElementById("about").scrollIntoView({behavior:"smooth"});showToast("Commande de démonstration prête ✓");
});
renderProducts();renderCart();