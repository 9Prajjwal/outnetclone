function navbar(){
    return `
    <div id="upper">
    <div id="SIGNUP_SIGNIN">
        <span><i class="fa-solid fa-user fa-large"></i></span>
        <p id="userName">Sign-in</p>
    </div>
    <div>
        <p>Your Order</p>
        <p>customer Care</p>
        <p>Delivery</p>
        <p>Returns</p>
    </div>
</div>

<div id="midnav">
    <div>
        <a href="women_home.html">Women</a>
        <a href="mens_home.html">Men</a>
    </div>
    <div style="padding-left:6%">
        <h1>THE OUTNET</h1>
    </div>
    <div>
        <a href="search.html"><i class="fa-solid fa-magnifying-glass"></i></a>
        <a href="search.html" style="margin-left:5px; margin-right: 30%;">Search</a>
        <a href="wishlist.html" style="margin-right:30%"><img id="heart" src="data:image/png;base64,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" height="30px"></a>
        <a href="cart.html"><img src="https://cdn.iconscout.com/icon/free/png-256/checkout-1553147-1314013.png" height="30px"></a>
    </div>
</div>

<div id="lowerNav">
    <a href="womens.html">Just.In</a>
    <a href="bestsellers.html">Bestsellers</a>
    <a href="justin.html">Designers</a>
    <a href="clothing.html">Clothing</a>
    <a href="shoes.html">Shoes</a>
    <a href="justin.html">Bags</a>
    <a href="#">Accessories</a>
    <a href="clothing.html">Sports</a>
    <a href="womens.html">Wardrobe</a>
    <a href="bestsellers.html">70% Off</a>
    <a href="womens.html">Editorials</a>
</div>
<hr id="silverlining">

<div id="bottomNav">
    <div>
        <img src="https://www.theoutnet.com/ycm/resource/blob/1202300/8c41f371b963212fbd38dfd2fde14f42/hanger-data.png" height="50px"/><p>Extra 15% off your clothing order FIRST15</p>
    </div>
    <div>
        <img src="https://www.theoutnet.com/ycm/resource/blob/1213144/676b59aa4d571f46beb0f2c0b7316b2d/delivery-truck-icon-data.png" height="50px"><p>Shop Elavated essentials - shirts, sneakers</p> 
    </div>
    <div>
        <img src="https://www.theoutnet.com/ycm/resource/blob/1257912/a89d1fd400b76c8386958cf7cdcdfaea/mobile-icon-data.png" height="50px">   <p id="f">Extra 20% off when you shop via app</p>
    </div>
</div>
    `
}

document.querySelector("#navbar").innerHTML=navbar();

document.querySelector("#SIGNUP_SIGNIN").addEventListener("click",()=>{
    window.location.href="signup.html"
})

