window.onload = ()=>{
  
var link = localStorage.getItem("link");
var name = localStorage.getItem("name");
document.getElementById("link").textContent=link;
document.getElementById("name").textContent=name;
}