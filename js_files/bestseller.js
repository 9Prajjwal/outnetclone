import showData from "./data.js";

let data = showData();

let productList =  [];




let appendData = (data) => {

    document.getElementById("products").innerHTML=null;

    let product = document.getElementById("products");
   
    data.forEach((el) => {

        if(el.c1=="Bestseller") {

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
        title1.setAttribute("white-space","nowrap");
    
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
        appendData(data);
        
        console.log("data:",data);
       
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


// ********SORT********


let sorting = () => {
    let prices = document.querySelector("#sortby").value;
    console.log(prices)
    if (prices == "hightolow") {
        data.sort(function (a, b) {
            return b.price - a.price;
            
        });
 console.log(data);
        appendData(data)
    }
    if (prices == "lowtohigh") {
       data.sort(function (a, b) {
            return a.price - b.price;
        });
        appendData(data)
    }
}

document.getElementById('sortby').addEventListener('change', sorting);

//------------title-filter-start----------//

function peserico()  {
    let value = document.querySelector("#peserico").checked;
    console.log(value);
    if (value == true) {
        let peserico_item = data.filter(function (elem, index) {
            return elem.title == "PESERICO";
        });
        appendData(peserico_item);
    } else {
        appendData(data);
    }
}

document.getElementById('peserico').addEventListener('change', peserico);


function dolce() {
    var value = document.querySelector("#dolce").checked;
    console.log(value)
    if (value == true) {
        var dolce_item = data.filter(function (elem, index) {
            return elem.title == "DOLCE & GABBANA";
        });
        appendData(dolce_item);
    } else {
        appendData(data);
    }
}

document.getElementById('dolce').addEventListener('change', dolce);

function valentino() {
    var value = document.querySelector("#valentino").checked;
    console.log(value);
    if (value == true) {
        var valentino_item = data.filter(function (elem, index) {
            return elem.title == "VALENTINO";
        });
        appendData(valentino_item);
    } else {
        appendData(data);
    }
}

document.getElementById('valentino').addEventListener('change', valentino);

function rag() {
    var value = document.querySelector("#rag").checked;
    console.log(value);
    if (value == true) {
        var rag_item = data.filter(function (elem, index) {
            return elem.title == "RAG & BONE";
        });
        appendData(rag_item);
    } else {
        appendData(data);
    }
}

document.getElementById('rag').addEventListener('change', rag);

function iro() {
    let value = document.querySelector("#iro").checked;
    console.log(value);
    if (value == true) {
        let iro_item = data.filter(function (elem, index) {
            return elem.title == "IRO";
        });
        appendData(iro_item);
    } else {
        appendData(data);
    }
}

document.getElementById('iro').addEventListener('change', iro);

function sandro() {
    var value = document.querySelector("#sandro").checked;
    console.log(value);
    if (value == true) {
        var sandro_item = data.filter(function (elem, index) {
            return elem.title == "SANDRO";
        });
        appendData(sandro_item);
    } else {
        appendData(data);
    }
}

document.getElementById('sandro').addEventListener('change',sandro);

         // price filter

        

         function $50to$100() {
            let $ = document.querySelector("#fifty").checked;
            if ($ == true) {
                let $50to$100 = data.filter(function (elem) {
                    if (elem.price > 50  && elem.price <= 100) {
                        return elem.price;
                        
                    }
                    
                });
                appendData($50to$100);
    } else {
        appendData(data);
    }
        }

        document.getElementById('fifty').addEventListener('change', $50to$100);
        
        function $101to$200() {
            var Rs = document.querySelector("#hundred").checked;
            if (Rs == true) {
                var Rs1199toRs2098 = data.filter(function (elem) {
                    if (elem.price > 100 && elem.price <= 200) {
                        return elem.price;
                    }
                });
               appendData(Rs1199toRs2098);
            } else {
               appendData(data)
            }
        }

        document.getElementById('hundred').addEventListener('change',$101to$200);
        
        
        function $201to$500() {
            var Rs = document.querySelector("#twohundred").checked;
            if (Rs == true) {
                var Rs2098toRs3119 = data.filter(function (elem) {
                    if (elem.price > 200 && elem.price <= 500) {
                        return elem.price;
                    }
                });
                appendData(Rs2098toRs3119);
            } else {
               appendData(data)
            }
        }

        document.getElementById('twohundred').addEventListener('change',$201to$500);
        
        function $501andabove() {
            var Rs = document.querySelector("#fivehundred").checked;
            if (Rs == true) {
                var Rs3119toRsabove = data.filter(function (elem) {
                    if (elem.price > 500) {
                        return elem.price;
                    }
                });
                appendData(Rs3119toRsabove);
            } else {
                appendData(data)
            }
        }

        document.getElementById('fivehundred').addEventListener('change',$501andabove);
        
        //----------price-filter-end--------------//
        
        //---------discount-filter-start-----------//
        
        
        
        function above50() {
            var above50 = document.querySelector("#above50").checked;
            if (above50 == true) {
                var above50 = data.filter(function (elem) {
                    if (elem.discount >= 50) {
                        return elem.discount;
                    }
                });
                appendData(above50);
            } else {
                appendData(data)
            }
        }

        document.getElementById('above50').addEventListener('change',above50);
        
        function above60() {
            var above60 = document.querySelector("#above60").checked;
            if (above60 == true) {
                var above60 = data.filter(function (elem) {
                    if (elem.discount >= 60) {
                        return elem.discount;
                    }
                });
                appendData(above60);
            } else {
                appendData(data)
            }
        }

        document.getElementById('above60').addEventListener('change',above60);
        
        function above70() {
            var above70 = document.querySelector("#above70").checked;
            if (above70 == true) {
                var above70 = data.filter(function (elem) {
                    if (elem.discount >= 70) {
                        return elem.discount;
                    }
                });
                appendData(above70);
            } else {
                appendData(data)
            }
        }

        document.getElementById('above70').addEventListener('change',above70);
        