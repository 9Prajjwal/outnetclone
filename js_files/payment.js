let helper = (id) => {
    return document.getElementById(id);
}

import { mob, otp, image, resend, done } from "./entermob.js";

helper("entermobile").innerHTML = mob();


let submit = () => {

    helper("mobile").addEventListener("input", () => {
        helper("entermob").innerText = "";
        helper("mobile").style.border = "1px solid black";
    })

    if (helper("mobile").value === "") {
        helper("entermob").innerText = "Enter Mobile";
        helper("entermob").style.color = "firebrick";
        helper("mobile").style.border = "1px solid firebrick";
    } else {
        alert("OTP send to your mobile");
        helper("entermobile").innerHTML = null;
        helper("entermobile").innerHTML = otp();

        let counttime = () => {
            const starttime = 1;
            let time = starttime * 60;
            let timer = helper("counter");
            let counter = () => {
                const minute = Math.floor(time / 60);
                let second = time % 60;

                if (second < 10) {
                    second = "0" + second;
                }
                timer.innerHTML = `${minute}:${second}`;
                time--;

                if (timer.innerHTML === "-1:0-1") {
                    clearInterval(id);
                    timer.innerHTML = resend();
                    helper("resend").addEventListener("click", resendagain);
                }
                
            };

            let id = setInterval(counter, 1000);
        };
        
        counttime();

        let resendagain = () => {
            alert("OTP send to your mobile");
            counttime();
        }

        helper("sub").addEventListener("click", enter);
    }
};

helper("submit").addEventListener("click", submit);




let enter = () => {
    let a = helper("digit1").value;
    let b = helper("digit2").value;
    let c = helper("digit3").value;
    let d = helper("digit4").value;

    if (a === "1" && b === "7" && c === "0" && d === "3") {

        helper("entermobile").innerHTML = null;

        let i = 0;

        let id = setInterval(() => {

            i++;

            switch (i) {
                case 1: helper("entermobile").innerHTML = image();
                    break;

                case 2: alert("Getting Payment Details");
                    break;

                case 5: alert("Payment Successfull");
                    break;

                case 8:
                    helper("loading").src = "https://dealsnaijashop.com/wp-content/uploads/2020/09/icon_confirmation-1.gif";
                    helper("done").innerHTML = done();
                    helper("tohome").addEventListener("click",() => {
                        window.location.href = "./women_home.html"
                    })
                    alert("Order Confirmed");
                    break;

                case 9: stop();
            }

        }, 1000);

        let stop = () => {
            clearInterval(id);
        };

    } else {
        alert("Wrong OTP");
        helper("digit1").value = "";
        helper("digit2").value = "";
        helper("digit3").value = "";
        helper("digit4").value = "";
        
    };
}



