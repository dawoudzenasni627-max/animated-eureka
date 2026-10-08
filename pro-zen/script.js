const PRODUCTS=[
["Nike Air Zoom Pegasus 41","NIKE","Running",89.99,129.99,"-31%","https://www.nike.com/fr/","https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=90"],
["adidas Adizero Boston 12","ADIDAS","Running",94.99,140,"-32%","https://www.adidas.fr/","https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=90"],
["PUMA Deviate NITRO 3","PUMA","Running",99.99,150,"-33%","https://eu.puma.com/fr/fr/","https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=90"],
["Nike ZoomX Vaporfly","NIKE","Chaussures",159.99,230,"-30%","https://www.nike.com/fr/","https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=1000&q=90"],
["ASICS GEL-Nimbus 27","ASICS","Chaussures",149.99,200,"-25%","https://www.asics.com/fr/fr-fr/","https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=90"],
["HOKA Clifton 10","HOKA","Chaussures",160,180,"-11%","https://www.hoka.com/fr/fr/","https://images.unsplash.com/photo-1554132797-8b13a0f89cc4?auto=format&fit=crop&w=1000&q=90"],
["Nike Zoom Rival Sprint","NIKE","Chaussures",66.49,94.99,"-30%","https://www.nike.com/fr/","https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=1000&q=90"],
["adidas Adizero Sprintstar","ADIDAS","Chaussures",56,80,"-30%","https://www.adidas.fr/","https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=90"],
["Nike Dri-FIT Running Tee","NIKE","Vêtements",34.99,45,"-22%","https://www.nike.com/fr/","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=90"],
["adidas Own the Run Tee","ADIDAS","Vêtements",29.99,40,"-25%","https://www.adidas.fr/","https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=90"],
["PUMA Run Ultraform","PUMA","Vêtements",39.99,55,"-27%","https://eu.puma.com/fr/fr/","https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&q=90"],
["Moncler Maya","MONCLER","Hiver",1450,null,"","https://www.moncler.com/fr-fr/","https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=1000&q=90"],
["Canada Goose Wyndham","CANADA GOOSE","Hiver",1525,null,"","https://www.canadagoose.com/fr-fr/","https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=90"],
["Canada Goose Langford","CANADA GOOSE","Hiver",1625,null,"","https://www.canadagoose.com/fr-fr/","https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=90"],
["The North Face 1996 Nuptse","THE NORTH FACE","Hiver",300,null,"","https://www.thenorthface.fr/fr-fr/","https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=90"],
["Patagonia Down Sweater","PATAGONIA","Hiver",260,null,"","https://eu.patagonia.com/fr/fr/","https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=90"],
["Arc'teryx Atom Hoody","ARC'TERYX","Hiver",280,null,"","https://arcteryx.com/fr/fr/","https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&w=1000&q=90"],
["Lacoste Doudoune","LACOSTE","Hiver",220,null,"","https://www.lacoste.com/fr/","https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=90"],
["Dior Sauvage Eau de Toilette","DIOR","Parfums",95,null,"","https://www.dior.com/fr_fr/beauty/","https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1000&q=90"],
["Chanel Bleu de Chanel","CHANEL","Parfums",110,null,"","https://www.chanel.com/fr/parfums/","https://images.unsplash.com/photo-1557170334-a9632e9e5e07?auto=format&fit=crop&w=1000&q=90"],
["YSL Y Eau de Parfum","YSL","Parfums",105,null,"","https://www.yslbeauty.fr/parfum/","https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=90"],
["Rabanne 1 Million","RABANNE","Parfums",90,null,"","https://www.rabanne.com/ww/fragrance/","https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=90"],
["Armani Stronger With You","ARMANI","Parfums",95,null,"","https://www.armani.com/fr-fr/armani-beauty/","https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=90"],
["Jean Paul Gaultier Le Male","JEAN PAUL GAULTIER","Parfums",90,null,"","https://www.jeanpaulgaultier.com/fr/fr/parfums/","https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1000&q=90"]
];

const MORE_PRODUCTS=[
["Nike Pegasus 42","NIKE","Running",139.99,null,"","https://www.nike.com/fr/t/chaussure-de-running-sur-route-nike-pegasus-42-pour-homme-M9ckDyR3/IB1873-001","https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=90"],
["adidas Adizero Boston 13","ADIDAS","Running",160,null,"","https://www.adidas.fr/chaussures-running-adizero","https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=90"],
["adidas Adizero Adios Pro 5","ADIDAS","Running",260,null,"","https://www.adidas.fr/running","https://images.unsplash.com/photo-1554132797-8b13a0f89cc4?auto=format&fit=crop&w=1000&q=90"],
["PUMA Deviate NITRO 4","PUMA","Running",170,null,"","https://eu.puma.com/fr/fr/sports/running/chaussures-de-running","https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=90"],
["PUMA MagMax NITRO 2","PUMA","Running",200,null,"","https://eu.puma.com/fr/fr/sports/running/chaussures-de-running","https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=90"],
["ASICS Novablast","ASICS","Running",150,null,"","https://www.asics.com/fr/fr-fr/","https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=90"],
["ASICS Gel-Kayano","ASICS","Running",200,null,"","https://www.asics.com/fr/fr-fr/","https://images.unsplash.com/photo-1554132797-8b13a0f89cc4?auto=format&fit=crop&w=1000&q=90"],
["Nike Dri-FIT ADV Running T-Shirt","NIKE","Vêtements",55,null,"","https://www.nike.com/fr/w/running-tops-37v7jz9om4","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=90"],
["adidas Adizero Running Tee","ADIDAS","Vêtements",50,null,"","https://www.adidas.fr/running","https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=90"],
["PUMA Running Favourite Tee","PUMA","Vêtements",40,null,"","https://eu.puma.com/fr/fr/sports/running","https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&q=90"],
["Nike Dri-FIT Challenger Shorts","NIKE","Vêtements",45,null,"","https://www.nike.com/fr/w/running-shorts-37v7jz9om4","https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=90"],
["adidas Adizero Running Short","ADIDAS","Vêtements",55,null,"","https://www.adidas.fr/running","https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1000&q=90"],
["PUMA Run Ultraform Shorts","PUMA","Vêtements",45,null,"","https://eu.puma.com/fr/fr/sports/running","https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=90"],
["Nike AeroSwift Running Singlet","NIKE","Vêtements",60,null,"","https://www.nike.com/fr/w/running-tops-37v7jz9om4","https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=90"]
];
PRODUCTS.push(...MORE_PRODUCTS);
const NEW_DROP=[
["Nike Alphafly 3","NIKE","Running",299.99,null,"","https://www.nike.com/fr/","https://images.unsplash.com/photo-1554132797-8b13a0f89cc4?auto=format&fit=crop&w=1000&q=90"],
["adidas Adizero Takumi Sen","ADIDAS","Running",180,null,"","https://www.adidas.fr/running","https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=90"],
["ASICS Metaspeed Sky","ASICS","Running",250,null,"","https://www.asics.com/fr/fr-fr/","https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=90"],
["HOKA Mach X 2","HOKA","Running",190,null,"","https://www.hoka.com/fr/fr/","https://images.unsplash.com/photo-1554132797-8b13a0f89cc4?auto=format&fit=crop&w=1000&q=90"],
["Nike Dri-FIT ADV AeroSwift Tee","NIKE","Vêtements",70,null,"","https://www.nike.com/fr/w/running-tops-37v7jz9om4","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=90"],
["adidas Adizero Singlet","ADIDAS","Vêtements",60,null,"","https://www.adidas.fr/running","https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=90"],
["PUMA Run Ultraform Jacket","PUMA","Vêtements",85,null,"","https://eu.puma.com/fr/fr/sports/running","https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&q=90"],
["Nike AeroSwift Running Shorts","NIKE","Vêtements",60,null,"","https://www.nike.com/fr/w/running-shorts-37v7jz9om4","https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=90"]
];
PRODUCTS.push(...NEW_DROP);


const SHOE_DROP=[
["Nike Air Max Dn8","NIKE","Chaussures",129.99,null,"","https://www.nike.com/fr/","https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=90"],
["adidas Ultraboost 5","ADIDAS","Chaussures",180,null,"","https://www.adidas.fr/","https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=90"],
["PUMA Fast-R NITRO Elite","PUMA","Chaussures",250,null,"","https://eu.puma.com/fr/fr/","https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=90"],
["ASICS GEL-Cumulus","ASICS","Chaussures",150,null,"","https://www.asics.com/fr/fr-fr/","https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=90"],
["HOKA Bondi 9","HOKA","Chaussures",180,null,"","https://www.hoka.com/fr/fr/","https://images.unsplash.com/photo-1554132797-8b13a0f89cc4?auto=format&fit=crop&w=1000&q=90"],
["New Balance FuelCell Rebel","NEW BALANCE","Chaussures",150,null,"","https://www.newbalance.fr/","https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=90"],
["Saucony Endorphin Speed","SAUCONY","Chaussures",190,null,"","https://www.saucony.com/fr/fr/","https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=90"],
["Brooks Ghost","BROOKS","Chaussures",150,null,"","https://www.brooksrunning.com/fr_fr/","https://images.unsplash.com/photo-1554132797-8b13a0f89cc4?auto=format&fit=crop&w=1000&q=90"],
["Mizuno Wave Rider","MIZUNO","Chaussures",160,null,"","https://emea.mizuno.com/fr/fr/","https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=1000&q=90"],
["On Cloudmonster","ON","Chaussures",180,null,"","https://www.on.com/fr-fr/","https://images.unsplash.com/photo-1554132797-8b13a0f89cc4?auto=format&fit=crop&w=1000&q=90"]
];
PRODUCTS.push(...SHOE_DROP);


const STORE_PRODUCTS=[
["Nike Dri-FIT Academy Hoodie","NIKE","Vêtements",65,null,"","https://www.nike.com/fr/","https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=90"],
["adidas Essentials Sweatshirt","ADIDAS","Vêtements",60,null,"","https://www.adidas.fr/","https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=1000&q=90"],
["PUMA Evostripe Jogger","PUMA","Vêtements",70,null,"","https://eu.puma.com/fr/fr/","https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1000&q=90"],
["Nike Dri-FIT Running Long Sleeve","NIKE","Vêtements",50,null,"","https://www.nike.com/fr/","https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=90"],
["adidas Adizero Wind Jacket","ADIDAS","Vêtements",90,null,"","https://www.adidas.fr/","https://images.unsplash.com/photo-1544923246-77307dd628b5?auto=format&fit=crop&w=1000&q=90"],
["Nike Running Leggings","NIKE","Vêtements",55,null,"","https://www.nike.com/fr/","https://images.unsplash.com/photo-1506629905607-d9c9b5d9e3f2?auto=format&fit=crop&w=1000&q=90"],
["ASICS Core Jacket","ASICS","Vêtements",75,null,"","https://www.asics.com/fr/fr-fr/","https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=90"],
["PRO ZEN Performance Tee","PRO ZEN","Vêtements",35,null,"","#","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=90"],
["PRO ZEN Oversize Hoodie","PRO ZEN","Vêtements",75,null,"","#","https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=90"],
["PRO ZEN Track Pants","PRO ZEN","Vêtements",65,null,"","#","https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1000&q=90"],
["Running Crew Socks 3P","PRO ZEN","Accessoires",18,null,"","#","https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=1000&q=90"],
["Performance Running Cap","PRO ZEN","Accessoires",25,null,"","#","https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1000&q=90"],
["Running Headband","PRO ZEN","Accessoires",15,null,"","#","https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=90"],
["Sport Gloves","PRO ZEN","Accessoires",28,null,"","#","https://images.unsplash.com/photo-1517838277536-f5f99be501f1?auto=format&fit=crop&w=1000&q=90"],
["Performance Arm Sleeves","PRO ZEN","Accessoires",30,null,"","#","https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=90"],
["Running Waist Belt","PRO ZEN","Accessoires",30,null,"","#","https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=90"],
["PRO ZEN Training Backpack","PRO ZEN","Sacs",55,null,"","#","https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=90"],
["PRO ZEN Gym Bag","PRO ZEN","Sacs",45,null,"","#","https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=90"],
["Running Soft Flask 500ml","PRO ZEN","Hydratation",20,null,"","#","https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=90"],
["Sport Water Bottle","PRO ZEN","Hydratation",15,null,"","#","https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=90"],
["Running Towel","PRO ZEN","Accessoires",18,null,"","#","https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=90"],
["Training Resistance Bands","PRO ZEN","Training",25,null,"","#","https://images.unsplash.com/photo-1517838277536-f5f99be501f1?auto=format&fit=crop&w=1000&q=90"],
["Yoga / Training Mat","PRO ZEN","Training",35,null,"","#","https://images.unsplash.com/photo-1599447292180-45fd84092ef4?auto=format&fit=crop&w=1000&q=90"],
["Running Sunglasses","PRO ZEN","Accessoires",40,null,"","#","https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=90"],
["Everyday Sneakers","PRO ZEN","Chaussures",85,null,"","#","https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=90"],
["Training Cross-Training Shoes","PRO ZEN","Chaussures",110,null,"","#","https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=90"],
["Trail Running Shoes","PRO ZEN","Chaussures",125,null,"","#","https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=90"],
["Indoor Training Shoes","PRO ZEN","Chaussures",95,null,"","#","https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=90"],
["Casual Slides","PRO ZEN","Chaussures",35,null,"","#","https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=1000&q=90"],
["PRO ZEN Gift Card 50€","PRO ZEN","Cadeaux",50,null,"","#","https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1000&q=90"]
];
PRODUCTS.push(...STORE_PRODUCTS);
\nconst state={filter:"Tous",query:"",cart:[],selected:null,size:"",color:"",qty:1};
const $=id=>document.getElementById(id);
const money=n=>n==null?"Voir le prix":new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(n);

function sizes(p){return p[2]==="Parfums"?["30 ml","50 ml","100 ml"]:p[2]==="Chaussures"||p[2]==="Running"?["36","37","38","39","40","41","42","43","44","45","46","47"]:["XS","S","M","L","XL","XXL"];}
function colors(p){return p[2]==="Parfums"?["Standard"]:["Noir","Blanc","Bleu","Rouge","Vert"];}

function card(p,i){
 const price=p[3]!=null?money(p[3]):"Voir le prix";
 const oldPrice=p[4]!=null?'<span class="old">'+money(p[4])+'</span>':"";
 const tag=p[5]?'<span class="tag">'+p[5]+'</span>':"";
 return '<article class="product-card" data-open="'+i+'"><div class="product-photo">'+tag+'<img src="'+p[7]+'" alt="'+p[0]+'" loading="lazy"></div><div class="product-info"><div class="product-brand">'+p[1]+' · '+p[2].toUpperCase()+'</div><h3>'+p[0]+'</h3><div class="product-meta"><span class="rating">★★★★★</span><span>'+oldPrice+'<span class="price">'+price+'</span></span></div><a class="official-card-link" href="'+p[6]+'" target="_blank" rel="noopener" onclick="event.stopPropagation()">VOIR CHEZ '+p[1]+' ↗</a><div class="click-hint">Cliquer pour choisir →</div></div></article>';
}
function render(){
 const list=PRODUCTS.filter(p=>{
  const cat=state.filter;
  const ok=cat==="Tous"||(cat==="Running"&&["Running","Chaussures"].includes(p[2]))||(cat==="Promotion"&&p[5])||p[2]===cat;
  return ok&&p[0].toLowerCase().includes(state.query.toLowerCase());
 });
 $("productGrid").innerHTML=list.length?list.map((p)=>card(p,PRODUCTS.indexOf(p))).join(""):'<p class="muted">Aucun produit trouvé.</p>';
 $("runningGrid").innerHTML=PRODUCTS.filter(p=>["Running","Chaussures"].includes(p[2])).slice(0,6).map((p)=>'<article class="mini-card" data-open="'+PRODUCTS.indexOf(p)+'"><div class="mini-photo"><img src="'+p[7]+'" alt="'+p[0]+'"></div><div><strong>'+p[0]+'</strong><span>'+p[1]+"</span></div></article>").join("");
 $("perfumeGrid").innerHTML=PRODUCTS.filter(p=>p[2]==="Parfums").slice(0,5).map((p)=>'<article class="perfume-card" data-open="'+PRODUCTS.indexOf(p)+'"><div class="perfume-photo"><img src="'+p[7]+'" alt="'+p[0]+'"></div><div><small>'+p[1]+'</small><h3>'+p[0]+"</h3></div></article>").join("");
}
function openModal(i){
 const p=PRODUCTS[i];state.selected=i;state.qty=1;state.size=sizes(p)[0];state.color=colors(p)[0];
 $("modalImg").src=p[7];$("modalImg").alt=p[0];$("modalBrand").textContent=p[1]+" · "+p[2].toUpperCase();$("modalTitle").textContent=p[0];$("modalPrice").textContent=money(p[3]);$("modalDescription").textContent="Choisis les variantes puis ajoute l'article au panier. Le lien ci-dessous ouvre le site officiel de la marque.";
 $("official").href=p[6];$("qty").textContent="1";
 $("sizes").innerHTML=sizes(p).map((x,i)=>'<button class="option '+(i===0?"selected":"")+'" data-size="'+x+'">'+x+"</button>").join("");
 $("colors").innerHTML=colors(p).map((x,i)=>'<button class="option '+(i===0?"selected":"")+'" data-color="'+x+'">'+x+"</button>").join("");
 $("productModal").classList.remove("hidden");
}
function closeModal(){$("productModal").classList.add("hidden");}
function renderCart(){
 $("count").textContent=state.cart.reduce((s,x)=>s+x.qty,0);
 $("cartItems").innerHTML=state.cart.length?state.cart.map((x,i)=>'<div class="cart-row"><div><h4>'+x.name+'</h4><small>'+x.size+" · "+x.color+" · x"+x.qty+"<br>"+money(x.price*x.qty)+"</small></div><button class="remove" data-remove=""+i+'">✕</button></div>').join(""):'<div class="empty">Ton panier est vide.</div>';
 const total=state.cart.reduce((s,x)=>s+x.price*x.qty,0);$("cartTotal").textContent=money(total);
}
function setFilter(f){state.filter=f;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x.dataset.filter===f));render();$("products").scrollIntoView({behavior:"smooth"});}

document.addEventListener("click",e=>{
 const open=e.target.closest("[data-open]"); if(open){openModal(Number(open.dataset.open));return;}
 const size=e.target.closest("[data-size]"); if(size){state.size=size.dataset.size;document.querySelectorAll("#sizes .option").forEach(x=>x.classList.toggle("selected",x===size));return;}
 const color=e.target.closest("[data-color]"); if(color){state.color=color.dataset.color;document.querySelectorAll("#colors .option").forEach(x=>x.classList.toggle("selected",x===color));return;}
 const rem=e.target.closest("[data-remove]"); if(rem){state.cart.splice(Number(rem.dataset.remove),1);renderCart();}
});
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>setFilter(b.dataset.filter)));
document.querySelectorAll("[data-filter]").forEach(a=>a.addEventListener("click",()=>setFilter(a.dataset.filter)));
document.querySelectorAll("[data-filter-link]").forEach(a=>a.addEventListener("click",()=>setFilter(a.dataset.filterLink)));
$("search").addEventListener("input",e=>{state.query=e.target.value;render();});
$("modalClose").addEventListener("click",closeModal);
$("cartOpen").addEventListener("click",()=>{$("cart").classList.add("open");$("overlay").classList.remove("hidden");});
$("cartClose").addEventListener("click",()=>{$("cart").classList.remove("open");$("overlay").classList.add("hidden");});
$("overlay").addEventListener("click",()=>{$("cart").classList.remove("open");$("overlay").classList.add("hidden");});
$("minus").addEventListener("click",()=>{state.qty=Math.max(1,state.qty-1);$("qty").textContent=state.qty;});
$("plus").addEventListener("click",()=>{state.qty=Math.min(10,state.qty+1);$("qty").textContent=state.qty;});
$("addVariant").addEventListener("click",()=>{const p=PRODUCTS[state.selected];const item={name:p[0],price:p[3]||0,size:state.size,color:state.color,qty:state.qty};state.cart.push(item);renderCart();closeModal();$("toast").textContent="Article ajouté au panier ✓";$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),1600);});
$("empty").addEventListener("click",()=>{state.cart=[];renderCart();});
$("checkout").addEventListener("click",()=>{$("toast").textContent=state.cart.length?"Bismillah — vérifie ta commande avant le paiement.":"Ajoute un article d'abord";$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),1800);});
$("playVoice").addEventListener("click",()=>{if("speechSynthesis" in window){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance("Allez, Bismillah, achète-moi pour ton fils !");u.lang="fr-FR";speechSynthesis.speak(u);}});
render();
renderCart();