import showData from "./data.js";

let data = showData();

let productList =  [];




let appendData = (data) => {

    let product = document.getElementById("products");
   
    data.forEach((el) => {

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

// appendData(data);

let addToProductlist = (el) => {
    console.log(el);
    productList.push(el);
    localStorage.setItem("Product", JSON.stringify(productList))
};    

// ********SORT********
document.getElementById('sortby').addEventListener('change', sorting);

let sorting = () => {
    let prices = document.querySelector("#sortby").value;
    console.log(prices)
    if (prices == "hightolow") {
        data.sort(function (a, b) {
            return b.price - a.price;
        });
        appendData(data)
    }
    if (prices == "lowtohigh") {
       data.sort(function (a, b) {
            return a.price - b.price;
        });
        appendData(data)
    }
}


//------------title-filter-start----------//

function peserico() {
    let value = document.querySelector("#peserico").checked;
    console.log(value);
    if (value =="PESERICO") {
        let peserico_item = data.filter(function (elem, index) {
            return elem.title == "PESERICO";
        });
        appendData(peserico_item);
    } else {
        appendData(data);
    }
}

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

function sandro() {
    var value = document.querySelector("#sandro").checked;
    console.log(value);
    if (value == true) {
        var sandro_item = womenData.filter(function (elem, index) {
            return elem.title == "SANDRO";
        });
        appendData(sandro_item);
    } else {
        appendData(data);
    }
}

         // price filter

         document.getElementById('50to100').addEventListener('change', $50to$100);

         function $50to$100() {
            let $ = document.querySelector("#50to100").checked;
            if ($ == true) {
                let $50to$100 = womenData.filter(function (elem) {
                    if (elem.price > 50  && elem.price <= 100) {
                        return elem.price;
                        
                    }
                    console.log($50to$100);
                });
                appendData($50to$100);
    } else {
        appendData(data);
    }
        }
        
        
        function $101to$200() {
            var Rs = document.querySelector("#Rs1199toRs2098").checked;
            if (Rs == true) {
                var Rs1199toRs2098 = womenData.filter(function (elem) {
                    if (elem.price > 1199 && elem.price <= 2098) {
                        return elem.price;
                    }
                });
                displayDataWomen(Rs1199toRs2098);
            } else {
                displayDataWomen(womenData)
            }
        }
        
        function Rs2098toRs3119() {
            var Rs = document.querySelector("#Rs2098toRs3119").checked;
            if (Rs == true) {
                var Rs2098toRs3119 = womenData.filter(function (elem) {
                    if (elem.price > 2098 && elem.price <= 3119) {
                        return elem.price;
                    }
                });
                displayDataWomen(Rs2098toRs3119);
            } else {
                displayDataWomen(womenData)
            }
        }
        
        function Rs3119toRsabove() {
            var Rs = document.querySelector("#Rs3119toRsabove").checked;
            if (Rs == true) {
                var Rs3119toRsabove = womenData.filter(function (elem) {
                    if (elem.price > 3119) {
                        return elem.price;
                    }
                });
                displayDataWomen(Rs3119toRsabove);
            } else {
                displayDataWomen(womenData)
            }
        }
        
        //----------price-filter-end--------------//
        
        //---------discount-filter-start-----------//
        
        
        
        function above50() {
            var above50 = document.querySelector("#above50").checked;
            if (above50 == true) {
                var above50 = womenData.filter(function (elem) {
                    if (elem.discount >= 50) {
                        return elem.discount;
                    }
                });
                displayDataWomen(above50);
            } else {
                displayDataWomen(womenData)
            }
        }
        
        function above60() {
            var above60 = document.querySelector("#above60").checked;
            if (above60 == true) {
                var above60 = womenData.filter(function (elem) {
                    if (elem.discount >= 60) {
                        return elem.discount;
                    }
                });
                displayDataWomen(above60);
            } else {
                displayDataWomen(womenData)
            }
        }
        
        function above70() {
            var above70 = document.querySelector("#above70").checked;
            if (above70 == true) {
                var above70 = womenData.filter(function (elem) {
                    if (elem.discount >= 70) {
                        return elem.discount;
                    }
                });
                displayDataWomen(above70);
            } else {
                displayDataWomen(womenData)
            }
        }
        