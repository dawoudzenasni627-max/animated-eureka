const PRODUCTS=[
{name:"Nike Zoom Rival Sprint Glam",brand:"NIKE",cat:"Sprint",price:66.49,old:94.99,discount:"-30%",url:"https://www.nike.com/fr/",img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/ec4b5d29-15ce-41e4-82fb-7e61950a6d59/ZOOM%2BRIVAL%2BSPRINT.png",sizes:["36","37","38","39","40","41","42","43","44","45","46","47"],colors:[["Noir","black"],["Blanc","white"],["Rouge","red"]]},
{name:"Nike Vomero 18",brand:"NIKE",cat:"Demi-fond",price:111.99,old:159.99,discount:"-30%",url:"https://www.nike.com/fr/t/chaussure-de-running-sur-route-vomero-18-pour-SMtmxlKz/HM6803-111",img:"https://images.unsplash.com/photo-1554132797-8b13a0f89cc4?auto=format&fit=crop&w=900&q=90",sizes:["38.5","39","40","40.5","41","42","42.5","43","44","45","45.5","46","47","47.5"],colors:[["Blanc / Volt","white"],["Noir","black"],["Bleu","blue"]]},
{name:"adidas Adizero Adios Pro 4",brand:"ADIDAS",cat:"Demi-fond",price:175,old:250,discount:"-30%",url:"https://www.adidas.fr/running-hommes-outlet",img:"https://assets.adidas.com/images/w_500%2Cf_auto%2Cq_auto/8c3d4d48c7f8488b9c91685a1f4d8f2f_9366/Chaussure_Adizero_Adios_Pro_4_Blanc_JH6257_01_00_standard.jpg",sizes:["40","40 2/3","41 1/3","42","42 2/3","43 1/3","44","44 2/3","45 1/3","46","47 1/3"],colors:[["Blanc","white"],["Noir","black"]]},
{name:"adidas Duramo SL 2",brand:"ADIDAS",cat:"Demi-fond",price:52.50,old:70,discount:"-25%",url:"https://www.adidas.fr/running-hommes-outlet",img:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=90",sizes:["40","41","42","43","44","45","46"],colors:[["Noir","black"],["Bleu","blue"],["Blanc","white"]]},
{name:"PUMA Deviate NITRO 3",brand:"PUMA",cat:"Demi-fond",price:85,old:170,discount:"-50%",url:"https://eu.puma.com/fr/fr/pd/chaussures-de-running-deviate-nitro%C2%A03-homme/309707?swatch=16",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=90",sizes:["40","41","42","43","44","45","46"],colors:[["Blanc / Jaune","white"],["Noir","black"],["Vert","green"]]},
{name:"PUMA SOFTRIDE Enzo 5",brand:"PUMA",cat:"Demi-fond",price:39,old:80,discount:"-51%",url:"https://eu.puma.com/fr/fr/promos/homme/running",img:"https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=900&q=90",sizes:["40","41","42","43","44","45","46"],colors:[["Noir","black"],["Gris","gray"]]},
{name:"Nike T-shirt de running Dri-FIT",brand:"NIKE",cat:"T-shirts",price:23.49,old:32.99,discount:"-28%",url:"https://www.nike.com/fr/w/promotions-running-vetements-37v7jz3yaepz6ymx6",img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=90",sizes:["XS","S","M","L","XL","XXL"],colors:[["Noir","black"],["Blanc","white"],["Bleu","blue"]]},
{name:"PUMA T-shirt de running CLOUDSPUN",brand:"PUMA",cat:"T-shirts",price:26,old:50,discount:"-48%",url:"https://eu.puma.com/fr/fr/pd/t-shirt-de-running-cloudspun-homme/526629?swatch=02",img:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=90",sizes:["XS","S","M","L","XL","XXL"],colors:[["Blanc","white"],["Noir","black"],["Bleu","blue"],["Vert","green"]]},
{name:"adidas Own the Run 3-Stripes",brand:"ADIDAS",cat:"T-shirts",price:22.50,old:45,discount:"-50%",url:"https://www.adidas.fr/running-hommes-outlet",img:"https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=90",sizes:["XS","S","M","L","XL","XXL"],colors:[["Noir","black"],["Blanc","white"]]}
];

let state={cat:"Tous",query:"",cart:[],selected:null,size:null,color:null,qty:1};
const grid=document.getElementById("grid"),search=document.getElementById("search"),cart=document.getElementById("cart"),overlay=document.getElementById("overlay"),items=document.getElementById("items"),count=document.getElementById("count"),total=document.getElementById("total"),toast=document.getElementById("toast"),modal=document.getElementById("productModal");

const money=n=>new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(n);
function renderProducts(){
 const list=PRODUCTS.filter(p=>(state.cat==="Tous"||p.cat===state.cat)&&p.name.toLowerCase().includes(state.query.toLowerCase()));
 grid.innerHTML=list.map(p=>{const i=PRODUCTS.indexOf(p);return '<article class="card"><div class="photo"><span class="promo">'+p.discount+'</span><img src="'+p.img+'" alt="'+p.name+'"></div><div class="info"><div class="brand-name">'+p.brand+' · '+p.cat.toUpperCase()+'</div><h3>'+p.name+'</h3><div class="pricing"><span class="old">'+money(p.old)+'</span><span class="new">'+money(p.price)+'</span></div><button class="add" data-open="'+i+'">Choisir taille & couleur</button><a class="source" href="'+p.url+'" target="_blank" rel="noopener">Fiche vendeur ↗</a></div></article>'}).join("")||'<p class="muted">Aucun produit trouvé.</p>';
}
function renderCart(){
 count.textContent=state.cart.reduce((n,p)=>n+p.qty,0);
 items.innerHTML=state.cart.length?state.cart.map((p,i)=>'<div class="line"><div><h4>'+p.name+'</h4><small>Taille : '+p.size+' · Couleur : '+p.color+' · Qté : '+p.qty+'<br>'+money(p.price*p.qty)+'</small></div><button class="remove" data-remove="'+i+'" type="button">✕</button></div>').join(""):'<div class="empty">Ton panier est vide.</div>';
 total.textContent=money(state.cart.reduce((s,p)=>s+p.price*p.qty,0));
}
function openCart(){cart.classList.add("open");cart.setAttribute("aria-hidden","false");overlay.classList.remove("hidden");document.body.classList.add("lock")}
function closeCart(){cart.classList.remove("open");cart.setAttribute("aria-hidden","true");overlay.classList.add("hidden");document.body.classList.remove("lock")}
function say(t){toast.textContent=t;toast.classList.add("show");clearTimeout(window._toast);window._toast=setTimeout(()=>toast.classList.remove("show"),1500)}
function openModal(i){
 state.selected=PRODUCTS[i];state.size=state.selected.sizes[0];state.color=state.selected.colors[0];state.qty=1;
 document.getElementById("modalImg").src=state.selected.img;document.getElementById("modalImg").alt=state.selected.name;document.getElementById("modalBrand").textContent=state.selected.brand+" · "+state.selected.cat;document.getElementById("modalTitle").textContent=state.selected.name;document.getElementById("modalPrice").textContent=money(state.selected.price);document.getElementById("modalSource").href=state.selected.url;document.getElementById("qty").textContent="1";
 document.getElementById("sizes").innerHTML=state.selected.sizes.map(x=>'<button class="option '+(x===state.size?"selected":"")+'" data-size="'+x+'" type="button">'+x+'</button>').join("");
 document.getElementById("colors").innerHTML=state.selected.colors.map((x,n)=>'<button class="color '+(n===0?"selected":"")+'" title="'+x[0]+'" aria-label="'+x[0]+'" style="background:'+x[1]+'" data-color="'+x[0]+'" type="button"></button>').join("");
 modal.classList.remove("hidden");modal.setAttribute("aria-hidden","false");
}
function closeModal(){modal.classList.add("hidden");modal.setAttribute("aria-hidden","true")}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.cat=b.dataset.cat;renderProducts()}));
search.addEventListener("input",e=>{state.query=e.target.value;renderProducts()});
grid.addEventListener("click",e=>{const b=e.target.closest("[data-open]");if(b)openModal(+b.dataset.open)});
document.getElementById("sizes").addEventListener("click",e=>{const b=e.target.closest("[data-size]");if(!b)return;state.size=b.dataset.size;document.querySelectorAll("[data-size]").forEach(x=>x.classList.toggle("selected",x===b))});
document.getElementById("colors").addEventListener("click",e=>{const b=e.target.closest("[data-color]");if(!b)return;state.color=b.dataset.color;document.querySelectorAll("[data-color]").forEach(x=>x.classList.toggle("selected",x===b))});
document.getElementById("minus").addEventListener("click",()=>{state.qty=Math.max(1,state.qty-1);document.getElementById("qty").textContent=state.qty});
document.getElementById("plus").addEventListener("click",()=>{state.qty=Math.min(10,state.qty+1);document.getElementById("qty").textContent=state.qty});
document.getElementById("addVariant").addEventListener("click",()=>{
 const p=state.selected;const old=state.cart.find(x=>x.name===p.name&&x.size===state.size&&x.color===state.color);
 if(old)old.qty+=state.qty;else state.cart.push({...p,size:state.size,color:state.color,qty:state.qty});
 renderCart();closeModal();say("Ajouté au panier ✓");
});
document.getElementById("modalClose").addEventListener("click",closeModal);
document.getElementById("cartOpen").addEventListener("click",openCart);
document.getElementById("cartClose").addEventListener("click",closeCart);
overlay.addEventListener("click",closeCart);
items.addEventListener("click",e=>{const b=e.target.closest("[data-remove]");if(!b)return;state.cart.splice(+b.dataset.remove,1);renderCart()});
document.getElementById("empty").addEventListener("click",()=>{state.cart=[];renderCart()});
document.getElementById("buyCart").addEventListener("click",()=>{
 if(!state.cart.length){say("Ajoute un produit d'abord");return}
 window.open(state.cart[0].url,"_blank","noopener");
});
renderProducts();renderCart();