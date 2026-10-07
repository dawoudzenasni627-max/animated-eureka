const PRODUCTS=[
{name:"Casquette Nova Flame",cat:"Mode",price:24.90,icon:"🧢"},
{name:"T-shirt Nova Lava",cat:"Mode",price:29.90,icon:"👕"},
{name:"Casquette Nova Black",cat:"Mode",price:22.90,icon:"🧢"},
{name:"Casque Nova Air",cat:"Tech",price:79.99,icon:"🎧"},
{name:"Lampe Aura",cat:"Maison",price:29.90,icon:"💡"},
{name:"Montre Pulse",cat:"Tech",price:59.90,icon:"⌚"},
{name:"Sac Urban",cat:"Mode",price:44.90,icon:"🎒"},
{name:"Gourde Active",cat:"Sport",price:19.90,icon:"🥤"},
{name:"Kit Soin Daily",cat:"Beauté",price:24.90,icon:"🧴"},
{name:"Enceinte Mini",cat:"Tech",price:34.90,icon:"🔊"},
{name:"Plaid Cozy",cat:"Maison",price:32.90,icon:"🧺"},
{name:"Baskets Street",cat:"Mode",price:69.90,icon:"👟"},
{name:"Casquette Nova Orange",cat:"Mode",price:26.90,icon:"🧢"},
{name:"T-shirt Nova Oversize",cat:"Mode",price:34.90,icon:"👕"},
{name:"Tapis Fitness",cat:"Sport",price:27.90,icon:"🧘"},
{name:"Mug Studio",cat:"Maison",price:14.90,icon:"☕"}
];

const state={category:"Tous",query:"",cart:[]};
const productsEl=document.getElementById("products");
const searchEl=document.getElementById("search");
const cartPanel=document.getElementById("cartPanel");
const backdrop=document.getElementById("cartBackdrop");
const cartItemsEl=document.getElementById("cartItems");
const cartCountEl=document.getElementById("cartCount");
const cartTotalEl=document.getElementById("cartTotal");

const money=n=>new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(n);

function visibleProducts(){
 return PRODUCTS.filter(p=>
   (state.category==="Tous"||p.cat===state.category) &&
   p.name.toLowerCase().includes(state.query.toLowerCase())
 );
}

function renderProducts(){
 const list=visibleProducts();
 productsEl.innerHTML=list.length?list.map(p=>{
   const index=PRODUCTS.indexOf(p);
   return '<article class="product">'+
    '<div class="product-visual" aria-hidden="true">'+p.icon+'</div>'+
    '<div class="product-info">'+
      '<div class="product-cat">'+p.cat.toUpperCase()+'</div>'+
      '<h3>'+p.name+'</h3>'+
      '<div class="product-row"><span class="price">'+money(p.price)+'</span></div>'+
      '<button class="buy" type="button" data-add="'+index+'">Ajouter au panier</button>'+
    '</div>'+
   '</article>';
 }).join(""):'<p class="muted">Aucun produit ne correspond à ta recherche.</p>';
}

function renderCart(){
 cartCountEl.textContent=state.cart.length;
 if(!state.cart.length){
   cartItemsEl.innerHTML='<div class="cart-empty">Ton panier est vide. Ajoute un produit pour commencer.</div>';
 }else{
   cartItemsEl.innerHTML=state.cart.map((p,i)=>
    '<div class="cart-line">'+
      '<div><h4>'+p.name+'</h4><small>'+money(p.price)+'</small></div>'+
      '<button class="remove" type="button" data-remove="'+i+'" aria-label="Retirer '+p.name+'">✕</button>'+
    '</div>'
   ).join("");
 }
 const total=state.cart.reduce((sum,p)=>sum+p.price,0);
 cartTotalEl.textContent=money(total);
}

function openCart(){
 cartPanel.classList.add("open");
 cartPanel.setAttribute("aria-hidden","false");
 backdrop.classList.remove("hidden");
 document.body.classList.add("no-scroll");
}
function closeCart(){
 cartPanel.classList.remove("open");
 cartPanel.setAttribute("aria-hidden","true");
 backdrop.classList.add("hidden");
 document.body.classList.remove("no-scroll");
}

document.getElementById("filters").addEventListener("click",e=>{
 const btn=e.target.closest(".filter");
 if(!btn)return;
 document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
 btn.classList.add("active");
 state.category=btn.dataset.cat;
 renderProducts();
});

searchEl.addEventListener("input",e=>{
 state.query=e.target.value;
 renderProducts();
});

productsEl.addEventListener("click",e=>{
 const btn=e.target.closest("[data-add]");
 if(!btn)return;
 state.cart.push(PRODUCTS[Number(btn.dataset.add)]);
 renderCart();
 btn.textContent="Ajouté ✓";
 setTimeout(()=>{btn.textContent="Ajouter au panier"},900);
});

cartItemsEl.addEventListener("click",e=>{
 const btn=e.target.closest("[data-remove]");
 if(!btn)return;
 state.cart.splice(Number(btn.dataset.remove),1);
 renderCart();
});

document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
backdrop.addEventListener("click",closeCart);
document.getElementById("clearCart").addEventListener("click",()=>{state.cart=[];renderCart();});

document.getElementById("goCheckout").addEventListener("click",()=>{
 closeCart();
 setTimeout(()=>document.getElementById("commande").scrollIntoView({behavior:"smooth"}),50);
});

document.getElementById("checkoutForm").addEventListener("submit",e=>{
 e.preventDefault();
 if(!state.cart.length){
   alert("Ton panier est vide.");
   openCart();
   return;
 }
 document.getElementById("checkoutForm").classList.add("hidden");
 document.getElementById("checkoutSuccess").classList.remove("hidden");
 state.cart=[];
 renderCart();
});

renderProducts();
renderCart();
