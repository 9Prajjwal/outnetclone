
import {navbar} from "../components/navbar.js"
let n = document.getElementById("navbar");
n.innerHTML = navbar();

let s = document.getElementById("sch");
s.addEventListener("click",change)
function change(){
    window.location.href = "search.html";
}

let m = document.getElementById("mn");
m.addEventListener("click",move)
function move(){
    window.location.href = "men.html";
}

let w = document.getElementById("wn");
w.addEventListener("click",moved)
function moved(){
    window.location.href = "women.html";
}
