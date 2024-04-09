var fblink = document.getElementById("fblink");
var fbname = document.getElementById("fbname");
var link,name;
document.getElementById("btn").onclick = ()=>{
  var linksize = fblink.value;
  var namesize = fbname.value;
 if(linksize.length<1){
   alert("Link error!")
 }else if(namesize.length<1){
   alert("Please type your name!");
 }else{
   localStorage.setItem("link",fblink.value);
   localStorage.setItem("name",fbname.value);
  location.href="process.html"
 }
}