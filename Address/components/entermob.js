let mob = () => {
    return `
    <input type="text" id="mobile" placeholder="enter mobile" maxlength="10"> <br>
    <p id="entermob"></p>
    <button id="submit">Submit</button>`;
}

let otp = () => {
    return `
        <input type="text" maxlength="1" id="digit1">
        <input type="text" maxlength="1" id="digit2">
        <input type="text" maxlength="1" id="digit3">
        <input type="text" maxlength="1" id="digit4">
         <br>
        <p id="counter"></p>
        <button id="sub">Confirm</button>`;
}

let image = () => {
    return `<img id="loading" src="https://flevix.com/wp-content/uploads/2019/07/Ball-Drop-Preloader-1-1.gif" alt="">`
    
}

let done = () => {
    return `<button id="tohome">Go To HomePage</button>`;
}

let resend = () => {
    return `<p id="resend">Resend</p>`;
}

export {mob, otp, image, resend, done};