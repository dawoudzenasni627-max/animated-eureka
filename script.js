const products=[
["Casquette Nova Flame","Mode",24.90,"🧢"],["T-shirt Nova Lava","Mode",29.90,"👕"],["Casquette Nova Black","Mode",22.90,"🧢"],["Casque Nova Air","Tech",79.99,"🎧"],["Lampe Aura","Maison",29.90,"💡"],["Montre Pulse","Tech",59.90,"⌚"],["Sac Urban","Mode",44.90,"🎒"],["Gourde Active","Sport",19.90,"🥤"],["Kit Soin Daily","Beauté",24.90,"🧴"],["Enceinte Mini","Tech",34.90,"🔊"],["Plaid Cozy","Maison",32.90,"🧺"],["Baskets Street","Mode",69.90,"👟"],["Casquette Nova Orange","Mode",26.90,"🧢"],["T-shirt Nova Oversize","Mode",34.90,"👕"],["Tapis Fitness","Sport",27.90,"🧘"],["Mug Studio","Maison",14.90,"☕"]
];
let category="Tous",cart=[];
const productsEl=document.querySelector("#products"),search=document.querySelector("#search");
function render(){
 const q=search.value.toLowerCase();
 productsEl.innerHTML=products.filter(p=>(category==="Tous"||p[1]===category)&&p[0].toLowerCase().includes(q)).map((p,i)=>`
 <article class="card"><div class="pic">${p[3]}</div><div class="info"><div class="cat">${p[1]}</div><h3>${p[0]}</h3><div class="price">${p[2].toFixed(2).replace(".",",")} €</div><button class="buy" onclick="add(${products.indexOf(p)})">Ajouter au panier</button></div></article>`).join("");
}
function add(i){cart.push(products[i]);renderCart()}
function renderCart(){
 document.querySelector("#count").textContent=cart.length;
 document.querySelector("#cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-row"><span>${p[3]} ${p[0]}<br><b>${p[2].toFixed(2).replace(".",",")} €</b></span><button class="qty" onclick="removeItem(${i})">✕</button></div>`).join(""):"<p>Ton panier est vide.</p>";
 document.querySelector("#total").textContent=cart.reduce((s,p)=>s+p[2],0).toFixed(2).replace(".",",")+" €";
}
function removeItem(i){cart.splice(i,1);renderCart()}
document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");category=b.dataset.cat;render()});
search.oninput=render;
const cartEl=document.querySelector("#cart"),overlay=document.querySelector("#overlay");
function openCart(){cartEl.classList.add("open");overlay.classList.remove("hidden")}
function closeCart(){cartEl.classList.remove("open");overlay.classList.add("hidden")}
document.querySelector("#cartBtn").onclick=openCart;document.querySelector("#closeCart").onclick=closeCart;overlay.onclick=closeCart;
document.querySelector("#checkout").onclick=()=>{if(!cart.length)return alert("Ton panier est vide.");document.querySelector("#modal").classList.remove("hidden")};
document.querySelector("#closeModal").onclick=()=>document.querySelector("#modal").classList.add("hidden");
document.querySelector("#checkoutForm").onsubmit=e=>{e.preventDefault();document.querySelector("#checkoutForm").classList.add("hidden");document.querySelector("#success").classList.remove("hidden");cart=[];renderCart()};
render();renderCart();
