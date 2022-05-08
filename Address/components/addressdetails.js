let addressdetails = () => {
    return `
            <p id="Fname">First Name</p>
            <input type="text" id="firstname">
            <p id="rem1"></p>

            <p id="Lname">Last Name</p>
            <input type="text" id="lastname">
            <p id="rem2"></p>

            <p id="A1">Address line one</p>
            <input type="text" id="address1">
            <p id="rem3"></p>

            <p id="A2">Address line two</p>
            <input type="text" id="address2">

            <p id="city">City</p>
            <input type="text" id="a-city">
            <p id="rem5"></p>

            <p id="province">Province</p>
            <input type="text" id="a-province">
            <p id="rem6"></p>

            <p id="ZIP">ZIP code</p>
            <input type="number" id="a-zip">
            <p id="rem7"></p>

            <p id="phone">Phone Number</p>
            <input type="number" maxlength="10" id="a-phone">
            <p id="rem8"></p>`;
}

let addcontbutton = () => {
    return `<p id="add-cont-button" >Continue</p>`;
}

let optiondetails = () => {
    return `
    <div id="option-head">
                <div id="option-name">
                    <i class="fa-solid fa-circle-dot" id="circle-dot"></i>
                    <p id="Express">Express</p>
                </div>
                <div id="shipping-fee">
                    <p id="a-ship-price">$30</p>
                </div>
            </div>

            <div id="delivery-text">
                <P id="delivery-time">Delivery between 9am-5pm, Monday to Friday</P>
                <p id="reciving-day">Receive your purchase within 3-6 business days after your order has been accepted
                </p>
            </div>`;
}

let contsubmit = () => {
    return `<p id="cont-button">Continue</p>`;
}

let card = () => {
    return `
    <div id="card-options">
    <div id="firstcircle">
        <i class="fa-solid fa-circle-dot" id="circle-dot"></i>
    </div>
    
    <img id="visa"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZwMVgysVuVCri1wCOhlwqDZ5Zdw7MIGdIGNh7Sp2kxDBH3w-x4lDkuQkJ_C0aDT5UJU&usqp=CAU"
        alt="">
    <img id="jcb"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1200px-JCB_logo.svg.png"
        alt="">
    <img id="amex"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///80mNglk9YpldenzuyLwOd4tOJqrN+gyOmr0e2iy+oZkdbm7vgwldfs8/qvzuuUwebA2vBzrt/1+PxJntrc6PVAm9mOvOSWwObK3fG61O3U4/NUotvi7Pdtrd9PoNqBteKXxui32PAAitPR4fJip9200OyEvOVUp90hTllRAAAHLklEQVR4nO2d23raOhBGjd0CjYIJGEgg4ZA2JH3/J9xYMyNLtgQ4Ea3d/a+L9sNHLes0lkRIEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgSyxnP751mR+z56/o5R+DtPsMPvLPCt6dzu4DmXr9nOBQ/e2kX006Kj4j2I8MJNJRe8G7/uRgSfq9rWD+t5Pclmzb0vC1T2W0JP1oabj/2yluzapdY7PtVy0sUe26/nX/DNOfrQx/9q0angy/tTL80UPDOxjCsOvAEIbdB4Yw7D4whGH3gSEMuw8MYdh9YAjD7gNDGHYfGLY1zOr4tumtgeMvce5e9QNuYjjajRx2WXasbdJb5fjmvguYBGR777m7420NF40zHpVvEnZIitljq7uXjHn2K1sE1pLsarkY1zB9b5yR/1p6rrOkdKZtp6BPHHQSJquA4GM9hZENPfOtB+8M5UhX0E+slEiSoz418GzeGxOcUQ29hW7ry0OaalVvrW7OlIsl0sDE7nOjoYlrqLwyfsoFAS+t7m14Vmrt35NPPOUqoqEpdNMxM7WSJdvGr7ooT9OB2tCutdk11rvy13EArubvUt1zvuKMPy+aWRjVMOUb3Ver5+7NmVMl29RT+bk4tYZca1/M4Uo3H/e/Qovx1NRJTXHUF1V7vtDcIxjVUNZ1jM1B6bgyTGvHPSne+VbtmZBheDlE6hTPkdusPnkTF9EwfeKDVtW2hWlcLcNUl85cccKG1ZO/aDhIraq+o0tKQdn4T4toKCme6TtRsqsmwTLkFoZrYW4l7LIhH1JyYEFuVpeBs+IZZjs+5kVfd+xudAydXmJs7XAMVQ06LpNKx127VP7ggrt4hpJsWjY1KR51LkrGsuGq5n3CvoZtuChqzFiRWmyudFKZkxdfKxPXcM+HHHTIcWBTUzm1YfawoHRVbSyle0HPwzFs3HzKod48MeGpkhgjvOo1mmHKDTmVlrJyHOmpOoZjykor+NHhW8rbzxsmD6z1JMGZlrX23NRwkFsmui2htk3qCedhQVHHRNrYLefd+BrDZM5178CvJkfePjvX+kYyPBVLQi/P1Bla6EongQ4bJlQcTUepq1M2T64zLPasRv9KX7QM1cGYhtJP0eJFeseg1o7fkMRwS1fgxNFTUM8ew8Hc5iDH25EnF5vz65YjGU4kiN5xO6MfLRk+OYYcWikqvFSS94nP0BmbWDWzy3T+x3NZGMswdbpvWbR61A98JZE2Ga6praEqpPvOMgL3GDqYlb5rSYEJ4C58eSCWIe+nWiYZutFHU3YZQ15IrZ8CxSGrpIWhRLGZdEPNd95bGEqvRy2lZGiS6I+UXZUheWdlQ3+grsJv6C+lJgETKaTBvj6qoQS/lPjdkKEQRvfvlSF5l9FOQWnL/YbzXdXQ7IZkmFtR/YCl7/9AKc2k46WKN6iNXer+3TKkgOtUzGjbIfEa+noLJ79Mbxh4qYhpKG8Qb6GnWTiGOR9WUIy+vd5QWk36Lx3y5sb4WnRDJyT13WTjGPJx2dwab7vKUExWbxzectxQnKuKMQwlQMlD9ynLk234zG8JOpXrqw3lPUst5VsR0qadq4pRDHMnBc7ICpenpWNo99Er+9yzhlLd9DORdwtuUM90GREMTUhKzcxiPbN4oAL56BrOqpGc95Dh6tXlgZ+KojNG/JGf7uGWb0/yHCnAtwafSgo6YeIaWkM5zuiV01vUxtnYSK5fUFXMXjhg3d/wDVgiGCp61suthiZK0tm7YyhVyrwgX4ppTHoPcmGuzPKKuAxl4tcNpbZTTNyYiuA24WXjGHLWDibyPK40tL8TOjXvw/bHGxhKPMUvfo3ZJw4CaHBDDPnoTHq0Kw2lTBIccnPFlNfj6IYpJzqf6NpSDfYZF1XVJTOskmxptNpMsIzVNWPetSm1BV+VOhyumdENM25nlq/VzMLbYLFYDHjgZmvPQlRD1jS3YT6+XTVvQS/TYyna5tL08fkmY94mOLTRo9jZ3rPHQ+vvk2/UInCOtyp+1VDNmgfxqEIamGtzJw239/6jgpxegZ3xVhvf1MxXDSeegzj4CE3Sbxzzccs/7aCbbNPJ1Cji52Gtfyck3Fj5rzFzzEMLDgLwHKja+Hd73m6+aJh5aoSZagnM1K7tfL//1aoe5iuJ3QLT3NPY62lWwyZVWL337C3376wPqfeYEFVs5rtzSew89K5LOr83czZP2q2KunDnrLkkCuvaYNgDYAjD7gNDGHYfGMKw+8AQht0HhjDsPjCEYfeBIQy7Dwz/d4b//t8vnfXQsN3foA19uajDhL6NGSCw3qHTtFwo8L1vxbRasnMl2/OLqrtH6DvR/0wmpm2z8MTvPileu6jHoeiRYrr/3M+UfKh+VMZMDT/zAx4ly1G5orXbnFL4+ys/plPMvn3vNnezT/+ODgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwC/4DeiilD058fOgAAAAASUVORK5CYII="
        alt="">
    <img id="mastercard"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefJBRR_q1L3nOKFQ-2IbOA3MCNb4U08k8R_ybMwBl2K3fDHPhve3u6OE2X61VskFcxeM&usqp=CAU"
        alt="">
</div>

<div id="card-details">
    
    <p id="name-on-card">Name On Card</p>
    <input type="text" id="a-name-on-card">
    <p id="card1"></p>

    <p id="card-number">Card Number</p>
    <input type="number" id="a-card-number">
    <p id="card2"></p>

    <p id="card-number">Expiry Date</p>
    <div id="exp-date">
        <input type="number" id="a-month" placeholder="MM">
        <p id="dash">&horbar;</p>
        <input type="number" id="a-year" placeholder="YY">
    </div>
    <p id="card3"></p>

    <p id="cvv">CVV</p>
    <div id="card-cvv">
        <input type="number" id="a-cvv">
        <img id="cvvdemo" src="https://cdn.webcorp.com/img/faq/credit-card-cvv.png" alt="">
    </div>
    <p id="tip">Security code on the back of your card</p>
    <p id="card4"></p>
    
</div>

<div id="pay-pal-section">
    <div id="circle"></div>
    <img id="paypal-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBITbx9b9cEi0X6jTeD8edh6u5q_cwEEqExO48zICpWIDsdvcPHeiMxOtSohgsmdB0gU&usqp=CAU"
        alt="">
</div>

<p id="pay-note"></p>
    `;
}


let carddetails = () => {
    return `
    <p id="name-on-card">Name On Card</p>
    <input type="text" id="a-name-on-card">
    <p id="card1"></p>

    <p id="card-number">Card Number</p>
    <input type="number" id="a-card-number">
    <p id="card2"></p>

    <p id="card-number">Expiry Date</p>
    <div id="exp-date">
        <input type="number" id="a-month" placeholder="MM">
        <p id="dash">&horbar;</p>
        <input type="number" id="a-year" placeholder="YY">
    </div>
    <p id="card3"></p>

    <p id="cvv">CVV</p>
    <div id="card-cvv">
        <input type="number" id="a-cvv">
        <img id="cvvdemo" src="https://cdn.webcorp.com/img/faq/credit-card-cvv.png" alt="">
    </div>
    <p id="tip">Security code on the back of your card</p>
    <p id="card4"></p>
    `;
}

let billbook = () => {
    return `
    <p id="b-headline">Billing Address</p>

        <div id="billing-add-details">
            <div id="last-address">
                <div id="same-circle">
                    <i class="fa-solid fa-circle-dot" id="circle-dot"></i>
                </div>
                <p id="sameaddtext">Same as Shipping Address</p>
            </div>

            <div id="prevbillingadd"></div>
        </div>

        <div id="another-address">
            <div id="newadd">
                <div id="lastcircle"></div>
                <p id="b-tip">Choose another Billing Address</p> 
            </div>  

            <div id="form"></div>
        </div>

        

        <p id="review-btn">Review My Order</p>
    `;
}

export { addressdetails, addcontbutton, optiondetails, contsubmit, card, carddetails, billbook };