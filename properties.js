const properties = [
  {id:1,name:"Junjongan 79684",location:"Brunei-Muara",type:"Detached Bungalow",price:160000,landArea:"0.091 - 0.117 AC",floorArea:"1,628.65 Sq. Ft",bed:3,bath:2,carPorch:2,tenure:"Tanah Kekal",status:"Sold Out",availablePlots:0,lat:4.813619,lng:114.880655,image:"Junjongan2.webp",gallery:["Junjongan2.webp","Junjongan1.webp","Junjongan3.webp"],description:"Detached bungalow homes in Junjongan designed for comfortable family living.",features:["3 bedrooms","2 bathrooms","Carporch for 2 cars","Tanah Kekal"],notes:"Sold Out. Price shown is the previous starting price."},
  {id:2,name:"Danau 23163",location:"Tutong",type:"Detached Bungalow",price:175000,landArea:"0.110 - 0.142 AC",floorArea:"1,652 - 1,776 Sq. Ft",bed:3,bath:2,carPorch:2,tenure:"Tanah Kekal",status:"Sold Out",availablePlots:0,lat:4.747467,lng:114.570454,image:"Danau1.webp",gallery:["Danau1.webp","Danau2.webp"],description:"Detached bungalow homes in Danau, Tutong.",features:["3 bedrooms","2 bathrooms","Carporch for 2 cars","Tanah Kekal"],notes:"Sold Out. Price shown is the previous starting price."},
  {id:3,name:"Kasat 23735",location:"Brunei-Muara",type:"Detached Bungalow",price:149900,landArea:"0.100 - 0.115 AC",floorArea:"1,348.93 - 1,390.94 Sq. Ft",bed:3,bath:2,carPorch:2,tenure:"Tanah Kekal",status:"Sold Out",availablePlots:0,lat:4.827175,lng:114.947002,image:"Kasat1.webp",gallery:["Kasat1.webp","Kasat2.webp"],description:"Detached bungalow homes in Kasat.",features:["3 bedrooms","2 bathrooms","Carporch for 2 cars","Tanah Kekal"],notes:"Sold Out. Price shown is the previous starting price."},
  {id:4,name:"Kasat 23737",location:"Brunei-Muara",type:"Detached Bungalow",price:149900,landArea:"0.100 - 0.115 AC",floorArea:"1,348.93 - 1,390.94 Sq. Ft",bed:3,bath:2,carPorch:2,tenure:"Tanah Kekal",status:"Sold Out",availablePlots:0,lat:4.827175,lng:114.947002,image:"Kasat2.webp",gallery:["Kasat2.webp","Kasat1.webp"],description:"Detached bungalow homes in Kasat.",features:["3 bedrooms","2 bathrooms","Carporch for 2 cars","Tanah Kekal"],notes:"Sold Out. Price shown is the previous starting price."},
  {id:5,name:"Mentiri 5230",location:"Brunei-Muara",type:"Semi-Detached Double Storey",price:259000,landArea:"0.067 - 0.076 AC",floorArea:"2,641.64 Sq. Ft",bed:4,bath:4,carPorch:2,tenure:"Tanah Kekal",status:"6 Units Left",detailStatus:"Pending Borang C Submission",availablePlots:6,lat:4.976681,lng:115.018974,image:"Mentiri5230SemiD2.webp",gallery:["Mentiri5230SemiD2.webp","Mentiri5230SemiD1.webp","Mentiri5230SemiD3.webp"],description:"Semi-detached double-storey homes in Mentiri with generous family living spaces.",features:["4 bedrooms","4 bathrooms","Carporch for 2 cars","Tanah Kekal","6 units available"],nextStage:"Start Construction"},
  {id:6,name:"Mentiri 5230",location:"Brunei-Muara",type:"Detached Double Storey",price:268000,landArea:"0.112 AC",floorArea:"2,555.67 Sq. Ft",bed:4,bath:4,carPorch:2,tenure:"Tanah Kekal",status:"Last Unit Left",detailStatus:"Pending Borang C Submission",availablePlots:1,lat:4.976681,lng:115.018974,image:"Mentiri5230Detached2.webp",gallery:["Mentiri5230Detached2.webp","Mentiri5230Detached1.webp"],description:"The detached double-storey option at Mentiri 5230.",features:["4 bedrooms","4 bathrooms","Carporch for 2 cars","Tanah Kekal","Last unit"],nextStage:"Start Construction"},
  {id:7,name:"Mentiri 6469",location:"Brunei-Muara",type:"Detached Double Storey",price:249900,landArea:"0.107 AC",floorArea:"2,490.12 Sq. Ft",bed:4,bath:4,carPorch:2,tenure:"Tanah Kekal",status:"Sold Out",availablePlots:0,lat:4.960988,lng:115.020595,image:"Mentiri64691.webp",gallery:["Mentiri64691.webp","Mentiri64692.webp"],description:"Detached double-storey homes in Mentiri 6469.",features:["4 bedrooms","4 bathrooms","Carporch for 2 cars","Tanah Kekal"],notes:"Sold Out. Price shown is the previous starting price."},
  {id:8,name:"Mentiri 6469",location:"Brunei-Muara",type:"Semi-Detached Double Storey",price:239000,landArea:"0.080 AC",floorArea:"2,487.32 Sq. Ft",bed:4,bath:4,carPorch:2,tenure:"Tanah Kekal",status:"Last Unit Left",detailStatus:"Start Piling",availablePlots:1,promo:"Free water tank and water pump",lat:4.960988,lng:115.020595,image:"Mentiri64693.webp",gallery:["Mentiri64693.webp","Mentiri64694.webp"],description:"The last semi-detached double-storey unit at Mentiri 6469.",features:["4 bedrooms","4 bathrooms","Carporch for 2 cars","Tanah Kekal","Free water tank and water pump.","Last unit"],nextStage:"Start Construction"},
  {id:9,name:"Mentiri 6470",location:"Brunei-Muara",type:"Detached Double Storey",price:245000,landArea:"0.085 AC",floorArea:"2,424.19 Sq. Ft",bed:4,bath:4,carPorch:2,tenure:"Tanah Kekal",status:"Last Unit Left",detailStatus:"Pending Borang C Submission",availablePlots:1,promo:"Free water tank and water pump",lat:4.960988,lng:115.020595,image:"Mentiri64702.webp",gallery:["Mentiri64702.webp","Mentiri64701.webp"],description:"Detached double-storey homes at Mentiri 6470.",features:["4 bedrooms","4 bathrooms","Carporch for 2 cars","Tanah Kekal","Free water tank and water pump.","Last unit"],nextStage:"Start Construction"},
  {id:10,name:"Sengkarai 12898",location:"Tutong",type:"Detached Bungalow",price:153000,landArea:"0.087 - 0.096 AC",floorArea:"1,565.13 Sq. Ft",bed:3,bath:2,carPorch:2,tenure:"Tanah Kekal",status:"Last Unit Left",detailStatus:"Pending OP Earthwork Submission",availablePlots:1,lat:4.809389,lng:114.644854,image:"Sengkarai1.webp",gallery:["Sengkarai1.webp","Sengkarai2.webp"],description:"Detached bungalow homes in Sengkarai, Tutong.",features:["3 bedrooms","2 bathrooms","Carporch for 2 cars","Tanah Kekal","Last unit"],nextStage:"Borang C Building Submission"},
  {id:11,name:"Lambak Kanan 16470",location:"Brunei-Muara",type:"Detached Double Storey",price:295000,landArea:"0.094 - 0.096 AC",floorArea:"2,592.06 - 2,616.71 Sq. Ft",bed:4,bath:4,carPorch:2,tenure:"Tanah Kekal",status:"3 Units Left",detailStatus:"Pending TCP Submission",availablePlots:3,lat:4.974437,lng:114.955691,image:"LambakKanan1.webp",gallery:["LambakKanan1.webp","LambakKanan2.webp","LambakKanan3.webp","LambakKanan4.webp"],description:"Detached double-storey homes in Lambak Kanan.",features:["4 bedrooms","4 bathrooms","Carporch for 2 cars","Tanah Kekal","3 units left"],nextStage:"Preparation for Borang A Submission"},
  {id:12,name:"Masin 12586",location:"Brunei-Muara",type:"Detached Double Storey",price:285000,landArea:"0.117 AC",floorArea:"2,941 Sq. Ft",bed:4,bath:4,carPorch:1,tenure:"Tanah Kekal",status:"Last Unit Left",detailStatus:"Approved ABCi and Borang C",availablePlots:1,lat:4.831979,lng:114.842598,image:"Masin1.webp",gallery:["Masin1.webp","Masin2.webp"],description:"A spacious detached double-storey home in Masin.",features:["4 bedrooms","4 bathrooms","Carporch for 1 car","Tanah Kekal","Last unit"],nextStage:"Start Construction"},
  {id:13,name:"Lumapas 11261",location:"Brunei-Muara",type:"Detached Double Storey",price:249000,landArea:"0.080 - 0.106 AC",floorArea:"2,335 - 2,395 Sq. Ft",bed:4,bath:3,carPorch:2,tenure:"Tanah Kekal",status:"3 Units Left",detailStatus:"Piling Done",availablePlots:3,lat:4.839613,lng:114.917051,image:"Lumapas1.webp",gallery:["Lumapas1.webp","Lumapas2.webp","Lumapas3.webp","Lumapas4.webp"],description:"Detached double-storey homes in Lumapas.",features:["4 bedrooms","3 bathrooms","Carporch for 2 cars","Tanah Kekal","3 units left"],nextStage:"Start Construction"},
  {id:14,name:"Jangsak 26506",location:"Brunei-Muara",type:"Detached Double Storey",price:450000,landArea:"0.190 AC",floorArea:"Approx. 5000 Sq. Ft",bed:6,bath:7,carPorch:2,tenure:"Tanah Kekal",status:"Last Unit Left",detailStatus:"Ready To Move In",availablePlots:1,lat:4.886833,lng:114.867194,image:"Jangsak1.webp",gallery:["Jangsak1.webp","Jangsak2.webp","Jangsak3.webp","Jangsak4.webp","Jangsak5.webp"],description:"A spacious detached double-storey home in Jangsak, ready to move in.",features:["6 bedrooms","7 bathrooms","Carporch for 2 cars","Tanah Kekal","Ready to move in","Last unit"]},
]

let galleryIndex = 0;

const money = n => n ? "<small>STARTING FROM</small><strong>$" + n.toLocaleString("en-US") + "</strong>" : "<small>PRICE</small><strong>ENQUIRE</strong>";

function populateFilters(){
  const loc=document.getElementById("locationFilter"), type=document.getElementById("typeFilter");
  [...new Set(properties.map(p=>p.location))].sort().forEach(v=>loc.insertAdjacentHTML("beforeend",`<option>${v}</option>`));
  [...new Set(properties.map(p=>p.type))].sort().forEach(v=>type.insertAdjacentHTML("beforeend",`<option>${v}</option>`));
}

function renderProperties(){
  const loc = document.getElementById("locationFilter").value;
  const type = document.getElementById("typeFilter").value;
  const max = Number(document.getElementById("priceFilter").value || 0);
  const sort = document.getElementById("sortFilter")?.value || "available";

  let filtered = properties.filter(p =>
    (!loc || p.location === loc) &&
    (!type || p.type === type) &&
    (!max || !p.price || p.price <= max)
  );

  // SORT PROPERTIES
  if(sort === "available"){
    filtered.sort((a,b) =>
      (b.availablePlots || 0) - (a.availablePlots || 0)
    );
  }

  if(sort === "sold"){
    filtered.sort((a,b) =>
      (a.availablePlots || 0) - (b.availablePlots || 0)
    );
  }

  if(sort === "price-low"){
    filtered.sort((a,b) =>
      (a.price || 0) - (b.price || 0)
    );
  }

  if(sort === "price-high"){
    filtered.sort((a,b) =>
      (b.price || 0) - (a.price || 0)
    );
  }

  if(sort === "name"){
    filtered.sort((a,b) =>
      a.name.localeCompare(b.name)
    );
  }

  document.getElementById("resultCount").textContent =
    `${filtered.length} listing${filtered.length !== 1 ? "s" : ""}`;

  document.getElementById("propertyGrid").innerHTML = filtered.map(p => `
    <article class="property-card">

      <div class="property-image"
        style="background-image:url('${p.image}')">

        <span class="status ${p.status === "Sold Out" ? "sold" : ""}">
          ${p.status}
        </span>

      </div>

      <div class="card-body">

        <div class="location">
          ${p.location.toUpperCase()} · ${p.type.toUpperCase()}
        </div>

        <h3>${p.name}</h3>

        <div class="specs">
          <span>🛏 ${p.bed} Bed</span>
          <span>🛁 ${p.bath} Bath</span>
          <span>📐 Land: ${p.landArea}</span>
          <span>🏠 Total Floor: ${p.floorArea}</span>
        </div>

        <div class="price-row">
          <span class="price">${money(p.price)}</span>

          <a class="details"
            href="#"
            onclick="openModal(${p.id});return false;">
            VIEW DETAILS →
          </a>
        </div>

      </div>
    </article>
  `).join("");
}

function openModal(id){
  const p=properties.find(x=>x.id===id);
  window.currentGallery = p.gallery || [p.image];
  galleryIndex = 0;
  const maps=`https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`;
  document.getElementById("modalContent").innerHTML=`
    <div class="modal-grid">
      <div class="modal-gallery">
        <img id="galleryImage" class="modal-photo" src="${(p.gallery||[p.image])[0]}" alt="${p.name}">
        ${(p.gallery||[p.image]).length>1?`<button class="gallery-prev" onclick="changeGallery(-1)">‹</button><button class="gallery-next" onclick="changeGallery(1)">›</button><div class="gallery-count"><span id="galleryCount">1 / ${(p.gallery||[p.image]).length}</span></div>`:""}
      </div>
      <div>
        <div class="location">${p.location.toUpperCase()} · ${p.type.toUpperCase()}</div>
        <h2 id="modalTitle">${p.name}</h2><div class="price">${money(p.price)}</div>
        <p>${p.description}</p>
        ${p.promo?`<p class="promo"><strong>PROMOTION:</strong> ${p.promo}</p>`:""}
        <ul>${p.features.map(x=>`<li>${x}</li>`).join("")}</ul>
        <div class="property-details">
          <div><b>Land Area</b><span>${p.landArea}</span></div>
          <div><b>Total Floor Area</b><span>${p.floorArea}</span></div>
          <div><b>Bedrooms</b><span>${p.bed}</span></div>
          <div><b>Bathrooms</b><span>${p.bath}</span></div>
          <div><b>Car Porch</b><span>${p.carPorch} Cars</span></div>
          <div><b>Tenure</b><span>${p.tenure}</span></div>
          <div><b>Available Plots</b><span>${p.availablePlots}</span></div>
        </div>
        <div class="property-status">
  <p><strong>Status:</strong> ${p.detailStatus || p.status}</p>
</div>

${p.nextStage ? `
<div class="property-next-stage">
  <p><strong>Next Stage:</strong> ${p.nextStage}</p>
</div>
` : ""}
        <div class="modal-actions">
          <a class="button dark" href="${maps}" target="_blank">📍 VIEW LOCATION</a>
          <a class="button dark" href="https://wa.me/6738211222?text=${encodeURIComponent("Hi Kimi, I'm interested in "+p.name+". Please send me the latest details and availability.")}" target="_blank">ENQUIRE ON WHATSAPP</a>
        </div>
      </div>
    </div>`;
  const modal = document.getElementById("modal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
  const closeBtn = modal.querySelector(".close");
  if(closeBtn) closeBtn.focus();
}
function changeGallery(direction){
  if(!window.currentGallery || window.currentGallery.length<2) return;
  galleryIndex=(galleryIndex+direction+window.currentGallery.length)%window.currentGallery.length;
  document.getElementById("galleryImage").src=window.currentGallery[galleryIndex];
  const count=document.getElementById("galleryCount");
  if(count) count.textContent=`${galleryIndex+1} / ${window.currentGallery.length}`;
}
function closeModal(){
  const modal = document.getElementById("modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}
document.getElementById("modal").addEventListener("click",e=>{
  if(e.target.id==="modal") closeModal();
});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape") closeModal();
});
populateFilters();renderProperties();
