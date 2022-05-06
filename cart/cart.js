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

// localStorage.setItem("cart", JSON.stringify(data));
let total_price= 0;

let cartData= JSON.parse(localStorage.getItem("cart"));
document.getElementById("count1").innerText= cartData.length +" "+"Items";

function displayCart(){
    let total_price= 0;
    cartData.forEach(function(el, index){
        let box= document.createElement("div");
        box.id= "box";
        let box1= document.createElement("div");
        box1.id="box1";
        let box2= document.createElement("div");
        box2.id="box2";
        let box3= document.createElement("div");
        box3.id="box3";
        let box21= document.createElement("div");
        box21.id="box21";
        let box22= document.createElement("div");
        box22.id= "box22";
        let image= document.createElement("img");
        let name= document.createElement("h3");
        let des= document.createElement("p");
        let pric= document.createElement("p");
        let dollar= document.createElement("p");
        let dollar_box= document.createElement("div");
        dollar_box.id="dollar_box"
        let stkprice= document.createElement("p");
        let discount= document.createElement("p")
        let minus= document.createElement("button");
        let plus= document.createElement("button");
        let count= document.createElement("p");
        count.id="count";
        let remove= document.createElement("button");
        let addwish= document.createElement("button");

        image.src= el.img_1;
        box1.append(image);
        name.innerText= el.title;
        des.innerText= el.description;
        pric.innerText= el.price;
        dollar.innerText= "$"
        stkprice.innerText= `Striked off price $ ${el.strikedoffprice}`;
        stkprice.id= "stkprice"
        discount.innerText= el.discount;
        count.innerText= 1;
        minus.innerText= "-";
        //-------------------------
        minus.addEventListener("click", function(el){
            if(Number(count.innerText) > 1){
                count.innerText --;
                document.getElementById("count").innerText= count.innerText;
                total_price = total_price- Number(pric.innerText);
                console.log(total_price);
                document.getElementById("sub_total").innerText= total_price;
                document.getElementById("final").innerText= total_price +(30+ 0.18*total_price);
                document.getElementById("tax").innerText= (0.18*total_price).toFixed(2);
                }
                
        })
        //-------------------------
        plus.innerText= "+";
        //-------------------------
        plus.addEventListener("click", function(el){
            if(Number(count.innerText) < 6){
                count.innerText ++;
                document.getElementById("count").innerText= count.innerText;
                total_price += Number(pric.innerText);
                console.log(total_price);
                document.getElementById("sub_total").innerText= total_price;
                document.getElementById("final").innerText= total_price +(30+ 0.18*total_price);
                document.getElementById("tax").innerText= (0.18*total_price).toFixed(2);
                }
                
        })
        //-------------------------
        dollar_box.append(dollar, pric)
        box21.append(minus, count, plus);
        box22.append(stkprice, discount)
        box2.append(name, des, dollar_box, box22, box21);
        remove.innerText= "🗑";
        //-----Remove Item---------
        remove.addEventListener("click", function(){
            removeItem(el, index)
        })
        //-------------------------
        addwish.innerText= "♡"
        ///-----add to wishlist----
        addwish.addEventListener("click", function(){
            addtoWishlist(el, index);
        })
        box3.append(remove, addwish);
        box.append(box1, box2, box3);
        document.getElementById("list").append(box);

        total_price += Number(el.price);
        document.getElementById("sub_total").innerText= total_price;
        document.getElementById("final").innerText= total_price;
    })
}
displayCart();

function removeItem(el, index){
    cartData.splice(index, 1);
    console.log(cartData)
    localStorage.setItem("cart", JSON.stringify(cartData));
    window.location.reload();
};

function addtoWishlist(el, index){
    let data3= JSON.parse(localStorage.getItem("wishlist"));
    data3.push(cartData[index]);
    localStorage.setItem("wishlist", JSON.stringify(data3)); 
}

    let a= document.getElementById("sub_total").innerText;
    let b= document.getElementById("shipping").innerText= 30;

    let c= document.getElementById("tax").innerText= (a*0.18).toFixed(2);

    let final= Number(a)+ Number(b)+ Number(c);
    document.getElementById("final").innerText= final

    document.getElementById("saving").innerText= `You are saving 0$`;

function promocode(){
    if(document.getElementById("promo_input").value==="MAY20"){
        let d= Number(document.getElementById("final").innerText)
        d= 0.8*d;
        document.getElementById("final").innerText= d.toFixed(2);
        let f= d*0.2
        document.getElementById("saving").innerText= `You are saving $ ${f.toFixed(2)}`;
    }
    else{
        alert("Invalid Promocode")
    }
}
document.getElementById("apply").addEventListener("click", promocode);

function gotoPayment(){
    window.location.href= "";
}
document.getElementById("checkout").addEventListener("click", gotoPayment)

