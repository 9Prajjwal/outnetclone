import showData from "./data.js";

let data1 = showData();

let productList =  [];




let appendData = (data1) => {

    let product = document.getElementById("products");
   
    data1.forEach((el) => {

        if(el.category=="Shoes") {

        let box = document.createElement("div");
        box.setAttribute("class","product");
    
        let a=document.createElement("a");
        a.setAttribute("href","product.html");
        a.addEventListener("click", function() {
            addToProductlist(el);                   
        }) 
    
        let img1 = document.createElement("img");
        img1.src = el.img_1;
        img1.addEventListener("mouseenter", function() {
            img1.src=el.img_2;
        })
        img1.addEventListener("mouseleave",function() {
            img1.src=el.img_1;
        })
    
        a.append(img1)
       
    
        let title1 = document.createElement("h3");
        title1.innerText = el.title;
    
        let a_p = document.createElement("p");
        a_p.innerText = el.description;
    
        let price1 = document.createElement("h4");
        price1.innerText = `$${el.price}`;
        price1.style.color="red";
    
        let strprice = document.createElement("a");
        strprice.innerHTML= `$${el.strikedoffprice}    `;
        strprice.setAttribute("class", "strikep")
    
        let offer = document.createElement("a")
        offer.innerHTML= ` ${el.discount}% off`;
       
    
        box.append(a, title1, a_p, price1, strprice, offer)
    
        product.append(box);

    }
       });

}


let displayPage = async () => {
    try{
        appendData(data1);
        
        console.log("data:",data1);
       
    }catch(err) {
        console.log(err);
    }
}

displayPage();



let addToProductlist = (el) => {
    console.log(el);
    productList.push(el);
    localStorage.setItem("Product", JSON.stringify(productList))
};    