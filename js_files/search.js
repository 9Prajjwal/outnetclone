
import {search} from "./searchByname.js";
let s = document.getElementById("search");
s.innerHTML = search();

import {searchData,append} from "./searchByname.js"

let SEARCH = document.getElementById("SEARCH");

let srch = document.getElementById("write");
srch.addEventListener("input",Items)

function Items(){

    let products = document.getElementById("write").value;
    let url = `https://api.unsplash.com/search/photos/?query=${products}&per_page=20&client_id=jI77eHtLOdtrJsGFXuSIFnvKMosX4-wBHnB5475aXmw`
    searchData(url).then((res) =>{

        console.log(res);
        append(res.results,SEARCH);
    })
}