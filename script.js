const forms=[
 {title:"Bihar Police Recruitment 2026",cat:"job",badge:"Government Job",qual:"12th Pass",date:"Official notification देखें",apply:"#",notice:"#"},
 {title:"CTET 2026",cat:"form",badge:"Latest Form",qual:"Eligibility के अनुसार",date:"Official notification देखें",apply:"#",notice:"#"},
 {title:"Scholarship Form 2026",cat:"scholarship",badge:"Scholarship",qual:"पात्र छात्रों के लिए",date:"Official portal देखें",apply:"#",notice:"#"},
 {title:"Sarkari Yojana 2026",cat:"yojana",badge:"Yojana",qual:"योजना के नियम देखें",date:"Official portal देखें",apply:"#",notice:"#"},
 {title:"Admit Card Update 2026",cat:"admit",badge:"Admit Card",qual:"आवेदन करने वाले उम्मीदवार",date:"Official website देखें",apply:"#",notice:"#"},
 {title:"Latest Exam Result 2026",cat:"result",badge:"Result",qual:"उम्मीदवार अपना result देखें",date:"Official website देखें",apply:"#",notice:"#"}
];
let active="all";
function render(){
 const q=document.getElementById("search").value.trim().toLowerCase();
 const list=forms.filter(x=>(active==="all"||x.cat===active)&&x.title.toLowerCase().includes(q));
 document.getElementById("count").textContent=list.length+" updates";
 document.getElementById("empty").hidden=list.length>0;
 document.getElementById("forms").innerHTML=list.map(x=>`<article class="card"><span class="badge">${x.badge}</span><h3>${x.title}</h3><div class="meta"><b>Qualification:</b> ${x.qual}<br><b>Last Date:</b> ${x.date}</div><div class="actions"><a class="btn apply" href="${x.apply}" target="_blank" rel="noopener">Apply Online</a><a class="btn notice" href="${x.notice}" target="_blank" rel="noopener">Notification</a></div></article>`).join("");
}
function filterForms(){render()}
function category(c){active=c;render();location.hash="latest"}
render();