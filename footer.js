function addFooter(){
    return `
    <div id="bag">
      <div id="head">
        <div id="b1">Help and Information</div>
        <div id="b1">Want to stay stylishly in the know?</div>
      </div>
      <div id="neck">
        <div id="d1">
          <div id="ten">
            <p>About Us</p>
            <p>Affiliates</p>
            <p>Careers</p>
            <p>Contact Us</p>
            <p>Help</p>
            <p>Clothing Care Guide</p>
            <p>Fit Analytics</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Our Considered Pledge</p>
          </div>
          <div class="dr">
            <p>Delivery</p>
            <p>Returns</p>
            <p>Track your Order</p>
            <p>Create a Return</p>
            <p>Track your Return</p>
            <p>Cookie Policy</p>
            <p>Cookie Center</p>
            <p>Our Resale Service</p>
          </div>
        </div>
        <div id="d2">
          <p>
            Sign up today for email exclusives including early access to Sale,
            the latest
          </p>
          <p>trends and arrivals from your favorite designers and can’t miss</p>
          <p>promotions.</p>
          <input id="inp" type="text" placeholder="Enter your Email Address" />
          <button>Subscribe</button>
          <p class="c">24/7 Customer Care</p>
          <div id="box">
            <span
              ><i class="fa-solid fa-phone fa-2x"></i>
              <p id="pn">+44 330 022 4250</p></span
            >
          </div>
          <div id="bos">
            <span
              ><i class="fa-solid fa-envelope fa-2x"></i>
              <p id="em">customercare@theoutnet.com</p></span
            >
          </div>
          <p id="social">Stay Social</p>
          <div id="site">
            <span><i class="fa-brands fa-facebook-f fa-2x"></i></span>
            <span><i class="fa-brands fa-twitter fa-2x"></i></span>
            <span><i class="fa-brands fa-pinterest-p fa-2x"></i></span>
            <span><i class="fa-brands fa-youtube fa-2x"></i></span>
            <span><i class="fa-brands fa-instagram fa-2x"></i></span>
          </div>
          <p class="last">
            © 2009 - 2022 THE OUTNET , part of YOOX NET-A-PORTER GROUP. The
            individuals featured on this site do not endorse THE OUTNET or the
            products shown.
          </p>
        </div>
      </div>
    </div>
    `
}

document.querySelector("#footer").innerHTML=addFooter();