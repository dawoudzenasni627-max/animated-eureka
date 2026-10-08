const PRODUCTS=[["Nike Air Zoom Pegasus 41","NIKE","Running",89.99,129.99,"-31%","https://www.nike.com/fr/","https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=90"],["adidas Adizero Boston 12","ADIDAS","Running",94.99,140,"-32%","https://www.adidas.fr/","https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=90"],["PUMA Deviate NITRO 3","PUMA","Running",99.99,150,"-33%","https://eu.puma.com/fr/fr/","https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=90"],["Nike ZoomX Vaporfly","NIKE","Chaussures",159.99,230,"-30%","https://www.nike.com/fr/","https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=1000&q=90"],["ASICS GEL-Nimbus 27","ASICS","Chaussures",null,null,"","https://www.asics.com/fr/fr-fr/","https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=90"],["HOKA Clifton 10","HOKA","Chaussures",null,null,"","https://www.hoka.com/fr/fr/","https://images.unsplash.com/photo-1554132797-8b13a0f89cc4?auto=format&fit=crop&w=1000&q=90"],["Nike Zoom Rival Sprint","NIKE","Chaussures",66.49,94.99,"-30%","https://www.nike.com/fr/","https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=1000&q=90"],["adidas Adizero Sprintstar","ADIDAS","Chaussures",56,80,"-30%","https://www.adidas.fr/","https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=90"],["Nike Dri-FIT Running Tee","NIKE","Vêtements",null,null,"","https://www.nike.com/fr/","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=90"],["adidas Own the Run Tee","ADIDAS","Vêtements",null,null,"","https://www.adidas.fr/","https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=90"],["PUMA Run Ultraform","PUMA","Vêtements",null,null,"","https://eu.puma.com/fr/fr/","https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&q=90"],["Moncler Maya","MONCLER","Hiver",1450,null,"","https://www.moncler.com/fr-fr/","https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=1000&q=90"],["Canada Goose Wyndham","CANADA GOOSE","Hiver",1525,null,"","https://www.canadagoose.com/fr-fr/","https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=90"],["Canada Goose Langford","CANADA GOOSE","Hiver",1625,null,"","https://www.canadagoose.com/fr-fr/","https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=90"],["The North Face 1996 Nuptse","THE NORTH FACE","Hiver",null,null,"","https://www.thenorthface.fr/fr-fr/","https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=90"],["Patagonia Down Sweater","PATAGONIA","Hiver",260,null,"","https://eu.patagonia.com/fr/fr/","https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=90"],["Arc'teryx Atom Hoody","ARC'TERYX","Hiver",null,null,"","https://arcteryx.com/fr/fr/","https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&w=1000&q=90"],["Lacoste Doudoune","LACOSTE","Hiver",null,null,"","https://www.lacoste.com/fr/","https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=90"],["Dior Sauvage Eau de Toilette","DIOR","Parfums",null,null,"","https://www.dior.com/fr_fr/beauty/","https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1000&q=90"],["Chanel Bleu de Chanel","CHANEL","Parfums",null,null,"","https://www.chanel.com/fr/parfums/","https://images.unsplash.com/photo-1557170334-a9632e9e5e07?auto=format&fit=crop&w=1000&q=90"],["YSL Y Eau de Parfum","YSL","Parfums",null,null,"","https://www.yslbeauty.fr/parfum/","https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=90"],["Rabanne 1 Million","RABANNE","Parfums",null,null,"","https://www.rabanne.com/ww/fragrance/","https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=90"],["Armani Stronger With You","ARMANI","Parfums",null,null,"","https://www.armani.com/fr-fr/armani-beauty/","https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=90"],["Jean Paul Gaultier Le Male","JEAN PAUL GAULTIER","Parfums",null,null,"","https://www.jeanpaulgaultier.com/fr/fr/parfums/","https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1000&q=90"]];
let state={filter:"Tous",query:"",cart:[],selected:null,size:null,color:null,qty:1};
const grid=document.getElementById("productGrid"),runningGrid=document.getElementById("runningGrid"),perfumeGrid=document.getElementById("perfumeGrid");
const search=document.getElementById("search"),cart=document.getElementById("cart"),overlay=document.getElementById("overlay"),items=document.getElementById("cartItems"),count=document.getElementById("count"),cartTotal=document.getElementById("cartTotal");
const modal=document.getElementById("productModal"),toast=document.getElementById("toast"),money=n=>n?new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(n):"Voir le prix";

function sizesFor(p){if(p.cat==="Parfums")return["30 ml","50 ml","100 ml"];if(p.cat==="Hiver")return["XS","S","M","L","XL","XXL"];if(p.cat==="Vêtements")return["XS","S","M","L","XL","XXL"];return["36","37","38","39","40","41","42","43","44","45","46","47"];}
function colorsFor(p){if(p.cat==="Parfums")return["Standard"];return["Noir","Blanc","Bleu","Rouge","Vert"];}
function cardHTML(p){
 const idx=PRODUCTS.indexOf(p);
 const pricing=p.price?((p.old?'<span class="old">'+money(p.old)+'</span>':"")+'<span class="price">'+money(p.price)+'</span>'):'<span class="price">Voir le prix</span>';
 return '<article class="product-card" data-open="'+idx+'"><div class="product-photo">'+(p.discount?'<span class="tag">'+p.discount+'</span>':"")+'<img src="'+p.img+'" alt="'+p.name+'" loading="lazy" onerror="this.parentElement.classList.add(\'image-fallback\');this.remove()"></div><div class="product-info"><div class="product-brand">'+p.brand+' · '+p.cat.toUpperCase()+'</div><h3>'+p.name+'</h3><div class="product-meta"><span class="rating">★★★★★</span><span>'+pricing+'</span></div><div class="click-hint">Cliquer pour voir la fiche →</div></div></article>';
}
function miniHTML(p){const idx=PRODUCTS.indexOf(p);return '<article class="mini-card" data-open="'+idx+'"><div class="mini-photo"><img src="'+p.img+'" alt="'+p.name+'" loading="lazy"></div><div><strong>'+p.name+'</strong><span>'+p.brand+'</span></div></article>'}
function perfumeHTML(p){const idx=PRODUCTS.indexOf(p);return '<article class="perfume-card" data-open="'+idx+'"><div class="perfume-photo"><img src="'+p.img+'" alt="'+p.name+'" loading="lazy"></div><div><small>'+p.brand+'</small><h3>'+p.name+'</h3></div></article>'}
function render(){
 const list=PRODUCTS.filter(p=>(state.filter==="Tous"||p.cat===state.filter)||(state.filter==="Running"&&["Running","Chaussures"].includes(p.cat))||(state.filter==="Promotion"&&p.discount)).filter(p=>p.name.toLowerCase().includes(state.query.toLowerCase()));
 grid.innerHTML=list.map(cardHTML).join("")||'<p class="muted">Aucun produit trouvé.</p>';
 runningGrid.innerHTML=PRODUCTS.filter(p=>["Running","Chaussures"].includes(p.cat)).slice(0,6).map(miniHTML).join("");
 perfumeGrid.innerHTML=PRODUCTS.filter(p=>p.cat==="Parfums").slice(0,5).map(perfumeHTML).join("");
}
function renderCart(){
 count.textContent=state.cart.reduce((n,p)=>n+p.qty,0);
 items.innerHTML=state.cart.length?state.cart.map((p,i)=>'<div class="cart-row"><div><h4>'+p.name+'</h4><small>Taille : '+p.size+' · Couleur : '+p.color+' · Qté : '+p.qty+'<br>'+(p.price?money(p.price*p.qty):"Prix à vérifier")+'</small></div><button class="remove" data-remove="'+i+'">✕</button></div>').join(""):'<div class="empty">Ton panier est vide.</div>';
 const t=state.cart.filter(p=>p.price).reduce((s,p)=>s+p.price*p.qty,0);cartTotal.textContent=t?money(t):"Voir les prix";
}
function setFilter(f){state.filter=f;document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.filter===f));render();document.getElementById("products").scrollIntoView({behavior:"smooth"});}
function openCart(){cart.classList.add("open");overlay.classList.remove("hidden");document.body.classList.add("lock")}
function closeCart(){cart.classList.remove("open");overlay.classList.add("hidden");document.body.classList.remove("lock")}
function say(t){toast.textContent=t;toast.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>toast.classList.remove("show"),1700)}
function speakBismillah(){
 if(!("speechSynthesis" in window)){say("Ton navigateur ne prend pas en charge la voix");return}
 window.speechSynthesis.cancel();
 const u=new SpeechSynthesisUtterance("Allez, Bismillah, achète-moi pour ton fils !");
 u.lang="fr-FR";
 u.rate=0.95;
 u.pitch=1.05;
 window.speechSynthesis.speak(u);
}
function openModal(i){
 const p=PRODUCTS[i],sizes=sizesFor(p),colors=colorsFor(p);
 speakBismillah();
 state.selected=p;state.size=sizes[0];state.color=colors[0];state.qty=1;
 document.getElementById("modalImg").src=p.img;document.getElementById("modalImg").alt=p.name;document.getElementById("modalBrand").textContent=p.brand+" · "+p.cat.toUpperCase();document.getElementById("modalTitle").textContent=p.name;document.getElementById("modalPrice").textContent=p.price?money(p.price):"Voir le prix";document.getElementById("modalDescription").textContent="Choisis ta taille, ta couleur et ta quantité avant d'ajouter l'article au panier.";document.getElementById("official").href=p.url;document.getElementById("qty").textContent="1";
 document.getElementById("sizes").innerHTML=sizes.map((x,n)=>'<button class="option '+(n===0?"selected":"")+'" data-size="'+x+'">'+x+'</button>').join("");
 document.getElementById("colors").innerHTML=colors.map((x,n)=>'<button class="option '+(n===0?"selected":"")+'" data-color="'+x+'">'+x+'</button>').join("");
 modal.classList.remove("hidden");modal.setAttribute("aria-hidden","false");
}
function closeModal(){modal.classList.add("hidden");modal.setAttribute("aria-hidden","true")}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>setFilter(b.dataset.filter)));
document.querySelectorAll("[data-filter]").forEach(a=>a.addEventListener("click",()=>setFilter(a.dataset.filter)));
document.querySelectorAll("[data-filter-link]").forEach(a=>a.addEventListener("click",()=>setFilter(a.dataset.filterLink)));
search.addEventListener("input",e=>{state.query=e.target.value;render()});
document.addEventListener("click",e=>{const b=e.target.closest("[data-open]");if(b)openModal(+b.dataset.open)});
document.getElementById("sizes").addEventListener("click",e=>{const b=e.target.closest("[data-size]");if(!b)return;state.size=b.dataset.size;document.querySelectorAll("#sizes .option").forEach(x=>x.classList.toggle("selected",x===b))});
document.getElementById("colors").addEventListener("click",e=>{const b=e.target.closest("[data-color]");if(!b)return;state.color=b.dataset.color;document.querySelectorAll("#colors .option").forEach(x=>x.classList.toggle("selected",x===b))});
document.getElementById("minus").addEventListener("click",()=>{state.qty=Math.max(1,state.qty-1);document.getElementById("qty").textContent=state.qty});
document.getElementById("plus").addEventListener("click",()=>{state.qty=Math.min(10,state.qty+1);document.getElementById("qty").textContent=state.qty});
document.getElementById("addVariant").addEventListener("click",()=>{const p=state.selected,found=state.cart.find(x=>x.id===PRODUCTS.indexOf(p)&&x.size===state.size&&x.color===state.color);if(found)found.qty+=state.qty;else state.cart.push({...p,id:PRODUCTS.indexOf(p),size:state.size,color:state.color,qty:state.qty});renderCart();closeModal();say("Article ajouté au panier ✓")});
document.getElementById("modalClose").addEventListener("click",closeModal);
document.getElementById("playVoice").addEventListener("click",speakBismillah);
document.getElementById("cartOpen").addEventListener("click",openCart);
document.getElementById("cartClose").addEventListener("click",closeCart);
overlay.addEventListener("click",closeCart);
items.addEventListener("click",e=>{const b=e.target.closest("[data-remove]");if(!b)return;state.cart.splice(+b.dataset.remove,1);renderCart()});
document.getElementById("empty").addEventListener("click",()=>{state.cart=[];renderCart()});
document.getElementById("checkout").addEventListener("click",()=>{if(!state.cart.length){say("Ajoute un article d'abord");return}say("Bismillah — vérifie ta commande avant le paiement.")});
render();renderCart();