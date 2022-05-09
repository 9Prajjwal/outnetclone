

let wishData= JSON.parse(localStorage.getItem("wishlist"));

function displayList(){
    wishData.forEach(function(el, index){
        let box= document.createElement("div");
        box.id="box_mumbai";
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
            addtoCartfun(el, index);
            addtoBag.innerText= "Added to bag"
        })
        let remove= document.createElement("button");

        remove.innerText= "✖";
        box_top.append(remove);
        remove.addEventListener("click", function(){
            removeWishlist(el, index)
        })

        image.src= el.img_1;
        image.id="image_wish"
        
        if(el.title==undefined){
            name.innerText= el.brand;
        }

        else if(el.brand==undefined){
            name.innerText=el.title;
        }




        des.innerText= el.description;
        pric.innerText= "$"+el.price;
        stkprice.innerText= "$"+el.strikedoffprice;
        stkprice.id= "stkprice";
        discount.innerText= el.discount;
        addtoBag.innerText= "Add to Bag";
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