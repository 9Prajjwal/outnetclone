let data = JSON.parse(localStorage.getItem("Product"));

let wishListData = JSON.parse(localStorage.getItem("wishlist")) || [];

let bagData = JSON.parse(localStorage.getItem("cart")) || [];


console.log(data);

let appendData = (data) => {

    data.forEach(el => {
        
    
    let box = document.getElementById("details");
    console.log(el.title,el.brand)

    
    let title1 = document.createElement("h3");
    if(el.title == undefined){
       
    
    title1.innerText = el.brand;
    }
    else if(el.brand == undefined){
        
    
    title1.innerText = el.title;
    }

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


    let radiosize=document.createElement("div");
    radiosize.innerHTML=`<label class="container">S
    <input type="radio" checked="checked" name="radio">
    <span class="checkmark"></span>
  </label>
  <label class="container">M
    <input type="radio" name="radio">
    <span class="checkmark"></span>
  </label>
  <label class="container">L
    <input type="radio" name="radio">
    <span class="checkmark"></span>
  </label>
  <label class="container">XL
    <input type="radio" name="radio">
    <span class="checkmark"></span>
  </label>`
  radiosize.style.margin="34px"


    let color = document.createElement("p")
    color.innerHTML=`Color: ${el.color}`;
    color.style.marginBottom="30px"

    let atb = document.createElement("div")
    atb.setAttribute("class", "addToBag")
    atb.innerText = "Add to Bag";
    atb.style.cursor = "pointer"
    atb.style.color = "white"
    atb.style.backgroundColor= "Black"

    atb.addEventListener("click", function() {
        addToBag(el)
        
        atb.innerText = "ADDED TO Bag"
    })


  
    let atw = document.createElement("div")
    atw.setAttribute("class", "wishListp")
    atw.textContent = "Add to Wishlist";
    atw.style.cursor = "pointer";


    atw.addEventListener("click", function() {
        addToWishlist(el)
        atw.innerText = "ADDED TO Wishlist"
        setTimeout(()=>{
          window.location.href="signup.html"
        },1500)
        
    })

   box.append(title1,a_p,price1,strprice,offer,radiosize,color,atb,atw)
    });
};


function addToWishlist(element) {
    // console.log(element)
    wishListData.push(element)
    localStorage.setItem("wishlist", JSON.stringify(wishListData))
}

function addToBag(element) {
    // console.log(element)
    bagData.push(element)
    localStorage.setItem("cart", JSON.stringify(bagData))
}

appendData(data);

let appendImage = (data) => {
    let box=document.getElementById("images");

    data.forEach(el => {
        
        let img = document.createElement("img");
        img.src=el.img_1;

        box.append(img);
    });
}

appendImage(data);