let helper = (id) => {
    return document.getElementById(id);
}

let amount = JSON.parse(localStorage.getItem("amount"));
let taxc = JSON.parse(localStorage.getItem("tax"));
helper("a-cost").innerText = `(${Number(amount[0]).toFixed(2)})`;

let item = JSON.parse(localStorage.getItem("items"));
helper("items").innerText = `(${item})`

helper("review").addEventListener("click",() => {
    window.location.href = "cart.html";
})

import { addressdetails, addcontbutton, optiondetails, contsubmit, card, carddetails, billbook } from "../js_files/addressdetails.js";

helper("details").innerHTML = addressdetails();

helper("ship-submit").innerHTML = addcontbutton();

helper("option-box").innerHTML = optiondetails();

helper("option-sub").innerHTML = contsubmit();

helper("paydetail-box").innerHTML = card();

helper("billing-box").innerHTML = billbook();

let storedata = () => {

    let a = helper("firstname").value;
    let b = helper("lastname").value;
    let c = helper("address1").value;
    let d = helper("address2").value;
    let e = helper("a-city").value;
    let f = helper("a-province").value;
    let g = helper("a-zip").value;
    let h = helper("a-phone").value;

    helper("firstname").addEventListener("input", () => {
        helper("firstname").style.border = "1px solid black";
        helper("rem1").innerText = null;
    });

    helper("lastname").addEventListener("input", () => {
        helper("lastname").style.border = "1px solid black";
        helper("rem2").innerText = null;
    });

    helper("address1").addEventListener("input", () => {
        helper("address1").style.border = "1px solid black";
        helper("rem3").innerText = null;
    });

    helper("a-city").addEventListener("input", () => {
        helper("a-city").style.border = "1px solid black";
        helper("rem5").innerText = null;
    });

    helper("a-province").addEventListener("input", () => {
        helper("a-province").style.border = "1px solid black";
        helper("rem6").innerText = null;
    });

    helper("a-zip").addEventListener("input", () => {
        helper("a-zip").style.border = "1px solid black";
        helper("rem7").innerText = null;
    });

    helper("a-phone").addEventListener("input", () => {
        helper("a-phone").style.border = "1px solid black";
        helper("rem8").innerText = null;
    });

    if (a === "" && b === "" && c === "" && e === "" && f === "" && g === "" && h === "") {
        helper("firstname").style.border = "1px solid firebrick";
        helper("rem1").innerText = "First Name is required";
        helper("lastname").style.border = "1px solid firebrick";
        helper("rem2").innerText = "Last Name is required";
        helper("address1").style.border = "1px solid firebrick";
        helper("rem3").innerText = "Address line one is required";
        helper("a-city").style.border = "1px solid firebrick";
        helper("rem5").innerText = "City is required";
        helper("a-province").style.border = "1px solid firebrick";
        helper("rem6").innerText = "Province is required";
        helper("a-zip").style.border = "1px solid firebrick";
        helper("rem7").innerText = "ZIP Code is required";
        helper("a-phone").style.border = "1px solid firebrick";
        helper("rem8").innerText = "Phone is required";
    }

    if (a === "") {
        helper("firstname").style.border = "1px solid firebrick";
        helper("rem1").innerText = "First Name is required";
    } else if (b === "") {
        helper("lastname").style.border = "1px solid firebrick";
        helper("rem2").innerText = "Last Name is required";
    } else if (c === "") {
        helper("address1").style.border = "1px solid firebrick";
        helper("rem3").innerText = "Address line one is required";
    } else if (e === "") {
        helper("a-city").style.border = "1px solid firebrick";
        helper("rem5").innerText = "City is required";
    } else if (f === "") {
        helper("a-province").style.border = "1px solid firebrick";
        helper("rem6").innerText = "Province is required";
    } else if (g === "") {
        helper("a-zip").style.border = "1px solid firebrick";
        helper("rem7").innerText = "ZIP Code is required";
    } else if (h === "") {
        helper("a-phone").style.border = "1px solid firebrick";
        helper("rem8").innerText = "Phone is required";
    } else {

        let userdata = {
            firstname: a,
            lastname: b,
            address1: c,
            address2: d,
            city: e,
            province: f,
            zip: g,
            phone: h,
        }

        localStorage.setItem("userdata", JSON.stringify(userdata));


        let userbill = JSON.parse(localStorage.getItem("userdata"));

        let billingdetails = document.createElement("div");
        billingdetails.setAttribute("class", "billingdetails");

        let name1 = document.createElement("p");
        name1.innerText = userbill.firstname;

        let name2 = document.createElement("p");
        name2.innerText = userbill.lastname;

        let add1 = document.createElement("p");
        add1.innerText = userbill.address1;

        let add2 = document.createElement("p");
        add2.innerText = userbill.address2;

        let city1 = document.createElement("p");
        city1.innerText = userbill.city;

        let province1 = document.createElement("p");
        province1.innerText = userbill.province;

        let zip1 = document.createElement("p");
        zip1.innerText = userbill.zip;

        let phone1 = document.createElement("p");
        phone1.innerText = userbill.phone;

        billingdetails.append(name1, name2, add1, add2, city1, province1, zip1, phone1);

        helper("prevbillingadd").innerHTML = null;
        helper("prevbillingadd").append(billingdetails);


        helper("details").innerHTML = null;

        let sr1 = helper("sr-1");
        sr1.style.border = "1px solid green";
        sr1.innerHTML = "	&#10003;";
        sr1.style.color = "green";

        let storeduserdata = document.createElement("div");
        storeduserdata.setAttribute("class", "storeduserdata");

        let firstname = document.createElement("p");
        firstname.innerText = userdata.firstname;

        let lastname = document.createElement("p");
        lastname.innerText = userdata.lastname;

        let address1 = document.createElement("p");
        address1.innerText = userdata.address1;

        let address2 = document.createElement("p");
        address2.innerText = userdata.address2;

        let city = document.createElement("p");
        city.innerText = userdata.city;

        let province = document.createElement("p");
        province.innerText = userdata.province;

        let zip = document.createElement("p");
        zip.innerText = userdata.zip;

        let phone = document.createElement("p");
        phone.innerText = userdata.phone;

        storeduserdata.append(firstname, lastname, address1, address2, city, province, zip, phone);

        helper("details").append(storeduserdata);

        let submitbtn = helper("add-cont-button");
        submitbtn.innerHTML = null;
        submitbtn.style.backgroundColor = "white";

        helper("add-edit").innerText = "Edit";
    }
};

helper("add-cont-button").addEventListener("click", storedata);

//After clicking on edit in shipping address.

let refill = () => {

    let sr1 = helper("sr-1");
    sr1.style.border = "1px solid black";
    sr1.innerHTML = "1";
    sr1.style.color = "black";

    helper("details").innerHTML = null;
    helper("add-edit").innerText = null;

    helper("details").innerHTML = addressdetails();
    helper("ship-submit").innerHTML = addcontbutton();

    let userdata = JSON.parse(localStorage.getItem("userdata"));


    helper("firstname").value = userdata.firstname;
    helper("lastname").value = userdata.lastname;
    helper("address1").value = userdata.address1;
    helper("address2").value = userdata.address2;
    helper("a-city").value = userdata.city;
    helper("a-province").value = userdata.province;
    helper("a-zip").value = userdata.zip;
    helper("a-phone").value = userdata.phone;

    helper("add-cont-button").addEventListener("click", storedata);
    /*let Fname = document.createElement("p");
    Fname.setAttribute("id","Fname");
    Fname.innerText = "First Name";
    let firstname = document.createElement("input");
    firstname.setAttribute("id","firstname");
    firstname.value = userdata.firstname;

    let Lname = document.createElement("p");
    Lname.setAttribute("id","Lname");
    Lname.innerText = "Last Name";
    let lastname = document.createElement("input");
    lastname.setAttribute("id","lastname");
    lastname.value = userdata.lastname;

    let A1 = document.createElement("p");
    A1.setAttribute("id","A1");
    A1.innerText = "Address line one";
    let address1 = document.createElement("input");
    address1.setAttribute("id","address1");
    address1.value = userdata.address1;

    helper("details").append(Fname,firstname,Lname,lastname,A1,address1);*/


}
helper("add-edit").addEventListener("click", refill);



// Shipping Section

let selectoption = () => {
    let sr2 = helper("sr-2");
    sr2.style.border = "1px solid green";
    sr2.innerHTML = "	&#10003;";
    sr2.style.color = "green";

    helper("ship-edit").innerText = "Edit";

    let optbox = helper("option-box");
    optbox.innerHTML = null;
    optbox.style.border = "1px solid white";

    let optpackage = document.createElement("div");
    optpackage.setAttribute("class", "package");

    let express = document.createElement("p");
    express.innerText = "Express - $30"

    let delitime = document.createElement("p");
    delitime.innerText = "Delivery between 9am-5pm, Monday to Friday";

    let reciday = document.createElement("p");
    reciday.innerText = "Receive your purchase within 3-6 business days after your order has been accepted";

    optpackage.append(express, delitime, reciday);
    optbox.append(optpackage);

    let submitbtn = helper("cont-button");
    submitbtn.innerHTML = null;
    submitbtn.style.backgroundColor = "white";
}

let reselect = () => {
    let sr2 = helper("sr-2");
    sr2.style.border = "1px solid black";
    sr2.innerHTML = "2";
    sr2.style.color = "black";

    let optbox = helper("option-box");
    optbox.style.borderTop = "1px solid gray";
    optbox.style.borderBottom = "1px solid gray";

    helper("option-box").innerHTML = null;

    helper("option-box").innerHTML = optiondetails();
    helper("option-sub").innerHTML = contsubmit();

    helper("cont-button").addEventListener("click", selectoption);
}


helper("ship-edit").addEventListener("click", reselect);
helper("cont-button").addEventListener("click", selectoption);

let choosepaypal = () => {
    helper("firstcircle").innerHTML = null;
    helper("card-details").innerHTML = null;
    helper("circle").innerHTML = `<i class="fa-solid fa-circle-dot" id="circle-dot"></i>`;

    helper("pay-note").innerText = "You'll be redirected to Paypal to complete your purchase";
}

helper("circle").addEventListener("click", choosepaypal);

let choosecard = () => {
    helper("pay-note").innerText = null;
    helper("circle").innerHTML = null;

    helper("firstcircle").innerHTML = `<i class="fa-solid fa-circle-dot" id="circle-dot"></i>`;
    helper("card-details").innerHTML = carddetails();
}

helper("firstcircle").addEventListener("click", choosecard);


let Lbilladdress = () => {
    helper("same-circle").innerHTML = null;
    helper("lastcircle").innerHTML = `<i class="fa-solid fa-circle-dot" id="circle-dot"></i>`;

    helper("form").innerHTML = addressdetails();

}

helper("lastcircle").addEventListener("click", Lbilladdress)

let change = () => {
    helper("same-circle").innerHTML = `<i class="fa-solid fa-circle-dot" id="circle-dot"></i>`;
    helper("form").innerHTML = null;
    helper("lastcircle").innerHTML = null;
}

helper("same-circle").addEventListener("click", change);


let review = () => {

    let invoke = () => {

        helper("pay-edit").innerText = "Edit";
        let sr3 = helper("sr-3");
        sr3.style.border = "1px solid green";
        sr3.innerHTML = "	&#10003;";
        sr3.style.color = "green";

        if (helper("firstcircle").innerHTML === "") {
            helper("card-options").innerHTML = null;
            helper("card-options").style.borderTop = "1px solid white";
            helper("paydetail-box").style.borderBottom = "1px solid white";
            helper("pay-pal-section").style.borderTop = "1px solid white";

        }

        if (helper("circle").innerHTML === null) {
            helper("pay-pal-section").innerHTML = null;
            helper("card-options").style.borderTop = "1px solid white";
            helper("paydetail-box").style.borderBottom = "1px solid white";
            helper("pay-pal-section").style.borderTop = "1px solid white";
        }

        helper("billing-box").innerHTML = null;

        let reviewbox = document.createElement("div");
        reviewbox.setAttribute("class", "reviewdiv");

        let rhead = document.createElement("p");
        rhead.setAttribute("class", "rhead");
        rhead.innerText = "Order Summary";

        let line1 = document.createElement("div");
        line1.setAttribute("class", "line");

        let line1_left = document.createElement("div");
        line1_left.setAttribute("class", "left");

        let line1_right = document.createElement("div");
        line1_right.setAttribute("class", "right");

        let subtotal = document.createElement("p");
        subtotal.setAttribute("class", "subtotal");
        subtotal.innerText = "Sub-Total";
        line1_left.append(subtotal);

        let subtotprice = document.createElement("p");
        subtotprice.setAttribute("class", "subtotprice");
        let subtotalp = JSON.parse(localStorage.getItem("subtotal"));
        subtotprice.innerText = `$${Number(subtotalp)}`;
        line1_right.append(subtotprice);

        let line2 = document.createElement("div");
        line2.setAttribute("class", "line");

        let line2_left = document.createElement("div");
        line2_left.setAttribute("class", "left");

        let line2_right = document.createElement("div");
        line2_right.setAttribute("class", "right");

        let shipping = document.createElement("p");
        shipping.setAttribute("class", "shipping");
        shipping.innerText = "Shipping";
        line2_left.append(shipping);

        let shipprice = document.createElement("p");
        shipprice.setAttribute("class", "shipprice");
        shipprice.innerText = `$${30}`;
        line2_right.append(shipprice);

        let line3 = document.createElement("div");
        line3.setAttribute("class", "line");

        let line3_left = document.createElement("div");
        line3_left.setAttribute("class", "left");

        let line3_right = document.createElement("div");
        line3_right.setAttribute("class", "right");

        let tax = document.createElement("p");
        tax.setAttribute("class", "tax");
        tax.innerText = "Taxes & Duties";
        line3_left.append(tax);

        let taxprice = document.createElement("p");
        taxprice.setAttribute("class", "taxprice");
        let taxc = JSON.parse(localStorage.getItem("tax"));
        taxprice.innerText = `$${Number(taxc[0])}`;
        line3_right.append(taxprice);

        let line4 = document.createElement("div");
        line4.setAttribute("class", "line4");

        let line4_left = document.createElement("div");
        line4_left.setAttribute("class", "left");

        let line4_right = document.createElement("div");
        line4_right.setAttribute("class", "right");

        let total = document.createElement("p");
        total.setAttribute("class", "total");
        total.innerText = "Total (USD)";
        line4_left.append(total);

        let totalprice = document.createElement("p");
        totalprice.setAttribute("class", "totalprice");
        totalprice.innerText = `$${(Number(amount[0])).toFixed(2)}`;
        line4_right.append(totalprice);

        let line5 = document.createElement("div");
        line5.setAttribute("class","save");

        let saved = document.createElement("p");
        saved.setAttribute("class","saved");
        let savings=JSON.parse(localStorage.getItem("savings"))
        saved.innerText = `You're saving ${savings}$`;

        line1.append(line1_left, line1_right);
        line2.append(line2_left, line2_right);
        line3.append(line3_left, line3_right);
        line4.append(line4_left, line4_right);
        line5.append(saved);

        let notediv = document.createElement("div");
        notediv.setAttribute("class", "notediv");

        notediv.innerHTML = `<i id="info" class="fa-solid fa-circle-info"></i>`

        let note = document.createElement("p");
        note.setAttribute("class", "note");
        note.innerText = "Includes all taxes and/or duties";
        notediv.append(note);

        let btn = document.createElement("btn");
        btn.setAttribute("class", "btn");
        btn.innerText = "Buy Now";
        btn.addEventListener("click", () => {
            window.location.href = "../html/paymentspage.html";
        });

        reviewbox.append(rhead, line1, line2, line3, line4, line5, notediv, btn);

        helper("billing-box").append(reviewbox);
    };




    if (helper("card-details").innerHTML !== "") {

        let aaa = () => {

            helper("a-name-on-card").addEventListener("input", () => {
                helper("a-name-on-card").style.border = "1px solid black";
                helper("card1").innerText = null;
            });

            helper("a-card-number").addEventListener("input", () => {
                helper("a-card-number").style.border = "1px solid black";
                helper("card2").innerText = null;
            });

            helper("a-month").addEventListener("input", () => {
                helper("a-month").style.border = "1px solid black";
                helper("card3").innerText = null;
            });

            helper("a-year").addEventListener("input", () => {
                helper("a-year").style.border = "1px solid black";
                helper("card3").innerText = null;
            });

            helper("a-cvv").addEventListener("input", () => {
                helper("a-cvv").style.border = "1px solid black";
                helper("card4").innerText = null;
            });

            let a = helper("a-name-on-card").value;
            let b = helper("a-card-number").value;
            let c = helper("a-month").value;
            let d = helper("a-year").value;
            let e = helper("a-cvv").value;

            if (a === "" && b === "" && c === "" && d === "" && e === "") {
                helper("a-name-on-card").style.border = "1px solid firebrick";
                helper("card1").innerText = "Name On Card is required";
                helper("a-card-number").style.border = "1px solid firebrick";
                helper("card2").innerText = "Card Number is required";
                helper("a-year").style.border = "1px solid firebrick";
                helper("a-month").style.border = "1px solid firebrick";
                helper("card3").innerText = "Expiry date is required";
                helper("a-cvv").style.border = "1px solid firebrick";
                helper("card4").innerText = "CVV is required";
            }

            if (a === "") {
                helper("a-name-on-card").style.border = "1px solid firebrick";
                helper("card1").innerText = "Name On Card is required";
            } else if (b === "") {
                helper("a-card-number").style.border = "1px solid firebrick";
                helper("card2").innerText = "Card Number is required";
            } else if (c === "") {
                helper("a-month").style.border = "1px solid firebrick";
                helper("card3").innerText = "Expiry month is required";
            } else if (d === "") {
                helper("a-year").style.border = "1px solid firebrick";
                helper("card3").innerText = "Expiry year is required";
            } else if (c === "" && d === "") {
                helper("a-year").style.border = "1px solid firebrick";
                helper("a-month").style.border = "1px solid firebrick";
                helper("card3").innerText = "Expiry date is required";
            } else if (e === "") {
                helper("a-cvv").style.border = "1px solid firebrick";
                helper("card4").innerText = "CVV is required";
            } else {
                invoke();
            }
        }

        if (helper("prevbillingadd").innerHTML === "") {
            storedata();
        } else if (helper("card-details").innerHTML !== ""){
            aaa();
        }else{
            invoke();
        }

    } else if (helper("circle").innerHTML !== "") {
        if (helper("prevbillingadd").innerHTML === "") {
            storedata();
        } else {
            invoke();
        }
    }

}

helper("review-btn").addEventListener("click", review);


let ppaybox = () => {
    let sr3 = helper("sr-3");
    sr3.style.border = "1px solid black";
    sr3.innerText = "3";
    sr3.style.color = "black";

    helper("paydetail-box").innerHTML = null;

    helper("paydetail-box").innerHTML = card();
    helper("circle").addEventListener("click", choosepaypal);
    helper("firstcircle").addEventListener("click", choosecard);

    helper("billing-box").innerHTML = null;
    helper("billing-box").innerHTML = billbook();


    helper("review-btn").addEventListener("click", review);



    let userbill = JSON.parse(localStorage.getItem("userdata"));

    let billingdetails = document.createElement("div");
    billingdetails.setAttribute("class", "billingdetails");

    let name1 = document.createElement("p");
    name1.innerText = userbill.firstname;

    let name2 = document.createElement("p");
    name2.innerText = userbill.lastname;

    let add1 = document.createElement("p");
    add1.innerText = userbill.address1;

    let add2 = document.createElement("p");
    add2.innerText = userbill.address2;

    let city1 = document.createElement("p");
    city1.innerText = userbill.city;

    let province1 = document.createElement("p");
    province1.innerText = userbill.province;

    let zip1 = document.createElement("p");
    zip1.innerText = userbill.zip;

    let phone1 = document.createElement("p");
    phone1.innerText = userbill.phone;

    billingdetails.append(name1, name2, add1, add2, city1, province1, zip1, phone1);

    helper("prevbillingadd").append(billingdetails);



    helper("lastcircle").addEventListener("click", Lbilladdress);
    helper("same-circle").addEventListener("click", change);
    helper("review-btn").addEventListener("click", review);
}

helper("pay-edit").addEventListener("click", ppaybox);