(()=>{"use strict";(function(){const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("div");return t.classList.add("section"),t.setAttribute("id","landing"),t.textContent="Landing Page",t}()),t.appendChild(function(){const t=document.createElement("div");return t.classList.add("section"),t.setAttribute("id","about"),t.textContent="About Page",t}()),t.appendChild(function(){const t=document.createElement("div");return t.classList.add("section"),t.setAttribute("id","project"),t.textContent="Project Page",t}()),t.appendChild(function(){const t=document.createElement("div");return t.classList.add("section"),t.setAttribute("id","blog"),t.textContent="Blog Page",t}())})(),document.addEventListener("DOMContentLoaded",(function(){function t(t){t.preventDefault();const e=t.currentTarget.getAttribute("id"),n=document.getElementById(e);n&&window.scrollTo({top:n.offsetTop,behavior:"smooth"})}document.querySelectorAll(".section").forEach((e=>{e.addEventListener("click",t)}))}))})();