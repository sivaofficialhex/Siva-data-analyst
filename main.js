/* ===== EDIT YOUR CONTENT HERE ===== */
const services=[
["Excel Data Cleaning","Fix duplicates, blanks, inconsistent dates and messy text so your numbers can be trusted."],
["MIS Reporting","Clear weekly and monthly reports that show sales, costs and performance in one place."],
["Power BI Dashboards","Interactive dashboards built from your Excel data, with filters and key numbers up front."],
["Reporting Automation","Power Query refresh flows so reports update without copy-and-paste work."],
["Business Performance Analysis","Find what drives sales, profit and stock problems, and what to do next."]];

const steps=[["Understand Data","Learn your goals and files."],["Clean Data","Fix errors and standardise."],["Analyse","Find patterns and drivers."],["Build Dashboard","Turn results into visuals."],["Deliver Insights","Explain findings plainly."]];

const T="Portfolio demonstration (sample data)";
const projects=[
{id:"sales",title:"Sales & Profit Analytics",short:"Sales, profit and margin by product and region.",img:"assets/images/sales-dashboard.png",
 problem:"A small retailer cannot see which products and regions make profit. [Edit: describe the scenario.]",
 dataset:"Sample sales table (orders, products, regions, cost, revenue). [Edit: rows, columns, date range.]",
 cleaning:"Removed duplicates, fixed date formats, handled blanks, standardised category names. [Edit with your real steps.]",
 tools:"Excel, Power Query, Power BI",
 kpis:"Total Sales, Total Profit, Profit Margin %, Orders. [Edit: add your real values from the dashboard.]",
 insights:"[Edit: write 3 findings you actually observed in your dashboard.]",
 limits:"Sample data only; results do not describe any real business."},
{id:"inventory",title:"Inventory & Business Performance",short:"Stock levels, slow movers and stock-out risk.",img:"assets/images/inventory-dashboard.png",
 problem:"A shop holds too much slow stock and runs out of fast sellers. [Edit.]",
 dataset:"Sample inventory and sales table. [Edit: fields and period.]",
 cleaning:"[Edit: e.g. unified SKU names, fixed negative stock, merged tables in Power Query.]",
 tools:"Excel, Power Query, Power BI",
 kpis:"Stock Value, Stock Turnover, Low-Stock Items, Slow-Moving Items. [Edit with real values.]",
 insights:"[Edit: write findings you actually observed.]",
 limits:"Sample data only; no real stock decisions were made from it."},
{id:"ecom",title:"E-commerce Orders Dashboard",short:"Orders, revenue and trends from an online store dataset.",img:"assets/images/ecommerce-dashboard.png",
 problem:"An online seller wants to see order trends and best categories. [Edit.]",
 dataset:"ecommerce_raw_data.xlsx (2024 orders; Raw_Data, Clean_data, Analysis sheets). [Edit if different.]",
 cleaning:"[Edit: your cleaning steps from the Clean_data sheet.]",
 tools:"Excel, Power Query, Power BI, DAX",
 kpis:"Total Revenue, Orders, Average Order Value. [Edit with real values.]",
 insights:"[Edit: findings you actually observed.]",
 limits:"Practice dataset; not a real client project."}];

/* ===== RENDER (no need to edit below) ===== */
const $=s=>document.querySelector(s);
$("#serviceGrid").innerHTML=services.map(s=>`<article class="card"><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join("");
$("#steps").innerHTML=steps.map(s=>`<li><b>${s[0]}</b><span>${s[1]}</span></li>`).join("");
$("#projectGrid").innerHTML=projects.map(p=>`<article class="card"><span class="tag">${T}</span><h3>${p.title}</h3><p>${p.short}</p><div class="actions"><a class="btn ghost small" href="#d-${p.id}" data-open="${p.id}">See details</a></div></article>`).join("");
const rows=[["Business problem","problem"],["Dataset","dataset"],["Cleaning process","cleaning"],["Tools","tools"],["KPIs","kpis"],["Insights","insights"],["Limitations","limits"]];
$("#projectDetails").innerHTML=projects.map(p=>`<details id="d-${p.id}"><summary>${p.title}</summary><p class="note">${T}</p><dl>${rows.map(r=>`<dt>${r[0]}</dt><dd>${p[r[1]]}</dd>`).join("")}</dl><figure class="shot"><img src="${p.img}" alt="${p.title} dashboard screenshot" loading="lazy" onerror="this.parentNode.textContent='Add your screenshot at ${p.img}'"></figure></details>`).join("");
document.querySelectorAll("[data-open]").forEach(a=>a.addEventListener("click",()=>{$("#d-"+a.dataset.open).open=true}));

/* Hero chart: illustrative sample values */
(()=>{const v=[40,55,48,70,64,86,92],W=420,H=240,bw=34,g=24;
let b="",pts=[];v.forEach((n,i)=>{const x=20+i*(bw+g),h=n*2;b+=`<rect x="${x}" y="${H-h-20}" width="${bw}" height="${h}" rx="5" fill="#3b82f6" opacity=".55"/>`;pts.push(`${x+bw/2},${H-h-30}`)});
$("#heroChart").innerHTML=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Sample bar and line chart">${b}<polyline class="line" points="${pts.join(" ")}" fill="none" stroke="#2dd4bf" stroke-width="3" stroke-linecap="round"/></svg>`})();

/* Mobile menu */
const btn=document.querySelector(".burger"),menu=$("#menu");
btn.addEventListener("click",()=>{const o=menu.classList.toggle("open");btn.setAttribute("aria-expanded",o)});
menu.addEventListener("click",e=>{if(e.target.tagName==="A"){menu.classList.remove("open");btn.setAttribute("aria-expanded",false)}});
$("#year").textContent=new Date().getFullYear();
