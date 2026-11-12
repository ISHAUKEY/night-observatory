const objects=[
  {
    "name": "Mercury",
    "type": "planet",
    "symbol": "☿",
    "meta": "Smallest planet · Closest to the Sun",
    "description": "Mercury is the smallest planet and the closest to the Sun. It has an enormous iron core, a heavily cratered surface and almost no atmosphere to retain heat."
  },
  {
    "name": "Venus",
    "type": "planet",
    "symbol": "♀",
    "meta": "Earth-sized · The hottest planet",
    "description": "Venus has a thick carbon-dioxide atmosphere and clouds of sulfuric acid. Its powerful greenhouse effect makes its surface hotter than Mercury's."
  },
  {
    "name": "Earth",
    "type": "planet",
    "symbol": "🌍",
    "meta": "Our home · The only known world with life",
    "description": "Earth is the third planet from the Sun. Its liquid-water oceans, protective atmosphere and active geology make it the only world currently known to support life."
  },
  {
    "name": "Mars",
    "type": "planet",
    "symbol": "♂",
    "meta": "The red planet · A world of ancient rivers",
    "description": "Mars is a cold desert world with a thin atmosphere. Its surface preserves evidence that liquid water flowed there billions of years ago."
  },
  {
    "name": "Jupiter",
    "type": "planet",
    "symbol": "♃",
    "meta": "Gas giant · King of the planets",
    "description": "Jupiter is the largest planet in our Solar System. Its atmosphere hosts enormous storms, including the Great Red Spot, and it has a large family of moons."
  },
  {
    "name": "Saturn",
    "type": "planet",
    "symbol": "♄",
    "meta": "Gas giant · A spectacular ring system",
    "description": "Saturn is famous for its bright rings, made mostly of countless pieces of ice and rock. It is less dense than water."
  },
  {
    "name": "Uranus",
    "type": "planet",
    "symbol": "♅",
    "meta": "Ice giant · Rotates on its side",
    "description": "Uranus is an ice giant with a blue-green atmosphere containing methane. Its extreme axial tilt makes it appear to rotate on its side."
  },
  {
    "name": "Neptune",
    "type": "planet",
    "symbol": "♆",
    "meta": "Ice giant · Supersonic winds",
    "description": "Neptune is the most distant recognised planet from the Sun. It is dark, cold and swept by some of the fastest winds measured in the Solar System."
  },
  {
    "name": "Ceres",
    "type": "planet",
    "symbol": "⚳",
    "meta": "Dwarf planet · Largest object in the asteroid belt",
    "description": "Ceres is the only dwarf planet in the inner Solar System. It contains water-bearing minerals and bright salt deposits inside some craters."
  },
  {
    "name": "Pluto",
    "type": "planet",
    "symbol": "♇",
    "meta": "Dwarf planet · Icy world in the Kuiper Belt",
    "description": "Pluto is a dwarf planet with mountains of water ice, nitrogen glaciers and a thin atmosphere that expands and collapses as it travels around the Sun."
  },
  {
    "name": "Haumea",
    "type": "planet",
    "symbol": "◇",
    "meta": "Dwarf planet · Fast-spinning and elongated",
    "description": "Haumea is a distant dwarf planet in the Kuiper Belt. Its rapid rotation gives it an elongated shape, and it has two known moons and a ring."
  },
  {
    "name": "Makemake",
    "type": "planet",
    "symbol": "✧",
    "meta": "Dwarf planet · Frozen methane surface",
    "description": "Makemake is a dwarf planet beyond Neptune. Its surface is extremely cold and contains frozen methane and ethane."
  },
  {
    "name": "Eris",
    "type": "planet",
    "symbol": "✦",
    "meta": "Dwarf planet · Similar in size to Pluto",
    "description": "Eris is a distant dwarf planet in the scattered disc. Its discovery helped prompt the modern definition of a planet."
  },
  {
    "name": "Moon",
    "type": "planet",
    "symbol": "☾",
    "meta": "Earth's natural satellite · Our nearest celestial neighbour",
    "description": "The Moon is Earth's only natural satellite. Its phases repeat about every 29.5 days, and its surface preserves a record of ancient impacts."
  },
  {
    "name": "Europa",
    "type": "planet",
    "symbol": "✧",
    "meta": "Jupiter's moon · An ocean beneath the ice",
    "description": "Europa is covered by a bright shell of water ice. Evidence suggests a global salty ocean may lie beneath its frozen surface."
  },
  {
    "name": "Ganymede",
    "type": "planet",
    "symbol": "◉",
    "meta": "Jupiter's moon · Largest moon in the Solar System",
    "description": "Ganymede is larger than the planet Mercury. It has an icy surface, a likely subsurface ocean and its own magnetic field."
  },
  {
    "name": "Io",
    "type": "planet",
    "symbol": "●",
    "meta": "Jupiter's moon · The most volcanically active world",
    "description": "Io is covered in active volcanoes powered by tidal heating from Jupiter and neighbouring moons."
  },
  {
    "name": "Callisto",
    "type": "planet",
    "symbol": "◌",
    "meta": "Jupiter's moon · Ancient, cratered surface",
    "description": "Callisto is one of Jupiter's large moons. Its heavily cratered surface preserves some of the oldest landscapes in the Solar System."
  },
  {
    "name": "Titan",
    "type": "planet",
    "symbol": "◉",
    "meta": "Saturn's moon · Lakes of liquid methane",
    "description": "Titan has a thick nitrogen-rich atmosphere and lakes and seas of liquid methane and ethane on its surface."
  },
  {
    "name": "Enceladus",
    "type": "planet",
    "symbol": "✧",
    "meta": "Saturn's moon · Water-rich plumes",
    "description": "Enceladus ejects plumes of water vapour and ice from fractures near its south pole, hinting at a subsurface ocean."
  },
  {
    "name": "Triton",
    "type": "planet",
    "symbol": "◐",
    "meta": "Neptune's moon · An unusual retrograde orbit",
    "description": "Triton travels around Neptune in the opposite direction to the planet's rotation. It is thought to be a captured Kuiper Belt object."
  },
  {
    "name": "Sirius",
    "type": "star",
    "symbol": "✦",
    "meta": "The brightest star in Earth's night sky",
    "description": "Sirius is a binary star system in Canis Major. Its brightness comes from its relative closeness and the intrinsic luminosity of its main star."
  },
  {
    "name": "Polaris",
    "type": "star",
    "symbol": "✧",
    "meta": "The North Star · A guide to the north",
    "description": "Polaris lies close to the north celestial pole. Because of this alignment, it appears nearly fixed in the sky while other stars seem to circle it."
  },
  {
    "name": "Betelgeuse",
    "type": "star",
    "symbol": "✹",
    "meta": "Red supergiant · Orion's shoulder",
    "description": "Betelgeuse is a red supergiant nearing the later stages of its stellar life. It is so large that it would extend beyond the orbit of Mars if placed at the Sun's position."
  },
  {
    "name": "Vega",
    "type": "star",
    "symbol": "✦",
    "meta": "Bright star in Lyra · A nearby landmark",
    "description": "Vega is one of the brightest stars in the night sky and was among the first stars to have its distance measured using parallax."
  },
  {
    "name": "Orion Nebula",
    "type": "deep",
    "symbol": "☄",
    "meta": "Stellar nursery · About 1,300 light-years away",
    "description": "The Orion Nebula is a nearby region where gas and dust collapse to form new stars. It can be spotted with the naked eye under dark skies."
  },
  {
    "name": "Andromeda Galaxy",
    "type": "deep",
    "symbol": "◎",
    "meta": "Our large galactic neighbour",
    "description": "The Andromeda Galaxy is a spiral galaxy roughly 2.5 million light-years away. It is the most distant object commonly visible to the unaided eye."
  },
  {
    "name": "Pleiades",
    "type": "deep",
    "symbol": "✺",
    "meta": "The Seven Sisters · An open star cluster",
    "description": "The Pleiades is a young star cluster in Taurus. Several of its bright blue stars are visible together as a tiny dipper-like group."
  },
  {
    "name": "Crab Nebula",
    "type": "deep",
    "symbol": "✧",
    "meta": "Supernova remnant · A star's explosive remains",
    "description": "The Crab Nebula is the expanding remnant of a supernova observed in 1054. A rapidly spinning neutron star lies at its centre."
  }
];
const grid=document.getElementById("objectGrid"),search=document.getElementById("search");let activeFilter="all";
function renderObjects(){const q=search.value.toLowerCase();const shown=objects.filter(o=>(activeFilter==="all"||o.type===activeFilter)&&(o.name.toLowerCase().includes(q)||o.meta.toLowerCase().includes(q)));grid.innerHTML=shown.map(o=>`<article class="object-card" tabindex="0" data-name="${o.name}"><span class="object-symbol">${o.symbol}</span><h3>${o.name}</h3><p>${o.meta}</p></article>`).join("")||'<p class="muted">No objects found. Try another search.</p>';grid.querySelectorAll(".object-card").forEach(card=>{const open=()=>showObject(card.dataset.name);card.addEventListener("click",open);card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}})})}
function showObject(name){const o=objects.find(x=>x.name===name);if(!o)return;document.getElementById("dialogTitle").textContent=o.name;document.getElementById("dialogType").textContent=o.type.toUpperCase()+" · "+o.meta;document.getElementById("dialogDescription").textContent=o.description;document.getElementById("objectDialog").showModal()}
document.getElementById("closeDialog").addEventListener("click",()=>document.getElementById("objectDialog").close());search.addEventListener("input",renderObjects);document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");activeFilter=b.dataset.filter;renderObjects()}));renderObjects();
const dateInput=document.getElementById("observeDate");dateInput.value=new Date().toISOString().slice(0,10);document.getElementById("makePlan").addEventListener("click",()=>{const date=dateInput.value;if(!date){alert("Please choose a date first.");return}document.getElementById("planTitle").textContent="Plan for "+new Date(date+"T12:00:00").toLocaleDateString(undefined,{day:"numeric",month:"long",year:"numeric"});const tasks=["Check the local weather forecast and cloud cover","Choose a dark, safe observing location","Pack water, a warm layer and a red-light torch","Charge your phone and any observing equipment","Give your eyes 20–30 minutes to adjust to darkness","Start with a bright, easy target before exploring"];document.getElementById("checklist").innerHTML=tasks.map(t=>`<li><label><input type="checkbox"> ${t}</label></li>`).join("")});
function moonFor(dateString){const date=new Date(dateString+"T12:00:00");const knownNew=Date.UTC(2000,0,6,18,14);const days=(date.getTime()-knownNew)/86400000;const age=((days%29.530588853)+29.530588853)%29.530588853;const phase=age/29.530588853;const illumination=(1-Math.cos(2*Math.PI*phase))/2;let name;if(age<1.85||age>27.68)name="New moon";else if(age<5.53)name="Waxing crescent";else if(age<9.22)name="First quarter";else if(age<12.91)name="Waxing gibbous";else if(age<16.61)name="Full moon";else if(age<20.30)name="Waning gibbous";else if(age<23.99)name="Last quarter";else name="Waning crescent";const shadow=document.getElementById("moonShadow");const waxing=phase<.5;const offset=(waxing?1:-1)*(1-illumination)*100;shadow.style.transform=`translateX(${offset}%)`;document.getElementById("moonPhase").textContent=name;document.getElementById("moonPercent").textContent=Math.round(illumination*100)+"% illuminated"}
const moonDate=document.getElementById("moonDate");moonDate.value=new Date().toISOString().slice(0,10);moonDate.addEventListener("change",()=>moonFor(moonDate.value));moonFor(moonDate.value);
const storageKey="nightObservatoryEntries";function getEntries(){try{return JSON.parse(localStorage.getItem(storageKey)||"[]")}catch{return []}}function saveEntries(entries){localStorage.setItem(storageKey,JSON.stringify(entries))}
function renderEntries(){const entries=getEntries();const host=document.getElementById("journalEntries");host.innerHTML=entries.map((e,i)=>`<article class="entry"><button class="delete-entry" data-index="${i}" aria-label="Delete entry">×</button><small>${new Date(e.date).toLocaleDateString()}</small><h3>${escapeHTML(e.title)}</h3><p>${escapeHTML(e.text)}</p></article>`).join("")||'<p class="muted">No observations saved yet.</p>';host.querySelectorAll(".delete-entry").forEach(b=>b.addEventListener("click",()=>{const all=getEntries();all.splice(Number(b.dataset.index),1);saveEntries(all);renderEntries()}))}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
document.getElementById("journalForm").addEventListener("submit",e=>{e.preventDefault();const title=document.getElementById("entryTitle").value.trim(),text=document.getElementById("entryText").value.trim();if(!title||!text)return;const entries=getEntries();entries.unshift({title,text,date:new Date().toISOString()});saveEntries(entries);e.target.reset();renderEntries()});renderEntries();