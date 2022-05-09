
function search(){
    return `<input id="write" type="text" placeholder="Search THE OUTNET">
    <div id="SEARCH"></div>`
}


let searchData = async(url) =>{

    let res = await fetch(url);
    let data = await res.json();
    return data;
}

let append = (data,SEARCH) =>{

    SEARCH.innerHTML = null;
    data.forEach(({alt_description,urls:{small}}) =>{

        let div = document.createElement("div");

        let divs = document.createElement("div");
        divs.setAttribute("class","divs")
        let h3 = document.createElement("h3");
        h3.setAttribute("class","h3")
        let img = document.createElement("img");
        img.setAttribute("class","image")
        img.addEventListener("click",()=>{
            window.location.href="clothing.html"
        })

        h3.innerText = alt_description;
        img.src = small;

        divs.append(h3)
        div.append(img,divs);
        SEARCH.append(div)
    })
}
export {search}

export {searchData,append}