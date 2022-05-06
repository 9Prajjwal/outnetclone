// let data = [
//     {
//         img_1:"https://www.theoutnet.com/variants/images/36856120585104777/F/w720_q80.jpg",

//         img_2:"https://www.theoutnet.com/variants/images/36856120585104777/E/w1020_q80.jpg",

//         title:"STELLA MCCARTNEY",

//         description:"Oversized floral-print cotton shirt",

//         price:"220",

//         strikedoffprice:"490",

//         discount:"55% off",
//     },

//     {
//         img_1:"https://www.theoutnet.com/variants/images/42247633208268985/F/w720_q80.jpg",

//         img_2:"https://www.theoutnet.com/variants/images/42247633208268985/R/w1020_q80.jpg",

//         title:"BALMAIN",

//         description:"Flocked tulle-paneled ruched jersey mini dress",

//         price:"1594",

//         strikedoffprice:"3,186",

//         discount:"50% off",
//     },

//     {
//         img_1:"https://www.theoutnet.com/variants/images/38063312420896001/F/w720_q80.jpg",

//         img_2:"https://www.theoutnet.com/variants/images/38063312420896001/R/w1020_q80.jpg",

//         title:"TOM FORD",

//         description:"Striped knitted sweater",

//         price:"574",

//         strikedoffprice:"1,641",

//         discount:"65% off",
//     }
// ]

// localStorage.setItem("wishlist", JSON.stringify(data));

let wishData= JSON.parse(localStorage.getItem("wishlist"));

function displayList(){
    wishData.forEach(function(el, index){
        let box= document.createElement("div");
        box.id="box";
        let box_top= document.createElement("div");
        box_top.id="box_top";
        let box_down= document.createElement("div");
        box_down.id="box_down";
        let image= document.createElement("img");
        let imagDiv= document.createElement("div");
        imagDiv.id="imageDIv"
        let name= document.createElement("h3");
        let des= document.createElement("p");
        let pric= document.createElement("p");
        pric.id="price"
        let box_dis= document.createElement("div");
        box_dis.id="box_dis";
        let stkprice= document.createElement("p");
        let discount= document.createElement("p");
        let addtoBag= document.createElement("button");
        addtoBag.id="addtoBag";
        addtoBag.addEventListener("click", function(){
            addtoCartfun(el, index)
        })
        let remove= document.createElement("button");

        remove.innerText= "✖";
        box_top.append(remove);
        remove.addEventListener("click", function(){
            removeWishlist(el, index)
        })

        image.src= el.img_1;
        image.id="image_wish"
        name.innerText= el.title;
        des.innerText= el.description;
        pric.innerText= "$"+el.price;
        stkprice.innerText= "$"+el.strikedoffprice;
        stkprice.id= "stkprice";
        discount.innerText= el.discount;
        addtoBag.innerText= "Add to Cart";
        box_dis.append(stkprice, discount)
        imagDiv.append(image)
        box_down.append(imagDiv, name, des, pric, box_dis);

        box.append(box_top, box_down, addtoBag);
        document.getElementById("wishlist").append(box);
    })
}

displayList();

function removeWishlist(el, index){
    wishData.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishData));
    window.location.reload();
};

function addtoCartfun(el, index){
    let data= JSON.parse(localStorage.getItem("cart"));
    data.push(wishData[index]);
    localStorage.setItem("cart", JSON.stringify(data))
}