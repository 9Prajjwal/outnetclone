function RegisterNow(e){

    if(e.isTrusted=true){

        document.querySelector("#first_name").innerHTML=null;

        document.querySelector("#last_name").innerHTML=null;

        document.querySelector("#Pass_description").innerText=null;

        document.querySelector("#Subscription").innerHTML=null;

        document.querySelector("#Pass>p").innerText="Create New Password";

        let p=document.createElement("p");
        p.innerText="First Name";

        let input=document.createElement("input");

        document.querySelector("#first_name").append(p,input);

        // p.innerText="Last Name";
        p1=document.createElement("p")
        p1.innerText="Last Name"

        let input1=document.createElement("input");

        document.querySelector("#last_name").append(p1,input1);

        document.querySelector("#Pass_description").innerText="Your password must be eight characters or more and contain an uppercase letter and number";

        let p2=document.createElement("p");
        p2.innerText="Want to remain stylishly in the know? Please tick here to receive THE OUTNET's promotional emails.";
        p2.style.opacity="0.8"

        let div=document.createElement("div");
        div.innerHTML=`<label class="Confirmation">Yes please!
            <input type="radio" name="radio">
            <span class="Check"></span>
        </label>
      
        <label class="Confirmation">No thanks
            <input type="radio" name="radio">
            <span class="Check"></span>
        </label>`;

        let p3=document.createElement("p");
        p3.innerText="Find out more about our Privacy Policy"
        p3.style.opacity="0.8";


        document.querySelector("#Subscription").append(p2,div,p3);

        document.querySelector("#Sign_in_button>p").innerText="Register";

        // document.querySelector("#last_name").append(p,input);

    }
    
}


function format(e){

    if(e.isTrusted=true){

        document.querySelector("#Pass>p").innerText="Password";

        document.querySelector("#first_name").innerHTML=null;

        document.querySelector("#last_name").innerHTML=null;

        document.querySelector("#Pass_description").innerText=null;

        document.querySelector("#Subscription").innerHTML=null;

        document.querySelector("#Sign_in_button>p").innerText="Sign In"

    }

}


let SignUP = async ()=>{
    let Name = document.querySelector("#first_name>input").value +" "+ document.querySelector("#last_name>input").value;
    let Email =document.querySelector("#Email").value;
    let Password =document.querySelector("#Password").value;
    let Username = document.querySelector("#Email").value;
    document.querySelector("#mobile").value=Math.random()*10000000000;
    document.querySelector("#description").value="hello world"

    let form_data ={
        name:Name,
        email:Email,
        password:Password,
        username:Username,
        mobile: document.querySelector("#mobile").value,
        description:document.querySelector("#description").value,
    }

    console.log(form_data)

    form_data=JSON.stringify(form_data);

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{

    method:"POST",
    body:form_data,
    headers:{
        "Content-Type":"application/json"
    },
    });

    let data= await res.json();

    if(data.error==true){
        alert(`${data.message}`);
        return;
    }

    if(data.error==false){
        alert("Registration successful");
        window.location.reload();
    }

};



let login = async () => {

    if(document.querySelector("#Email").value=="" && document.querySelector("#Password").value==""){
        alert("Email and password fields can not be empty");
        return;
    }

    if(document.querySelector("#Email").value==""){
        alert("Enter Your Email");
        return;
    }

    if(document.querySelector("#Password").value==""){
        alert("Enter Your password");
        return;
    }


    let user_data={
        username: document.querySelector("#Email").value,
        password: document.querySelector("#Password").value
    };

    user_data=JSON.stringify(user_data);

    let res=await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
        method:"POST",
        body:user_data,
        headers:{
            "Content-Type":"application/json"
        }
    });

    let data=await res.json();
    // console.log("hello",data)

    if(data.error==true){
        alert(`${data.message}`);
        return;
    }

    

    let username= document.querySelector("#Email").value;
    
    getUserdetails(username,data.token);

};



let getUserdetails = async (username,token) => {

    let res=await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        headers:{Authorization:`Bearer ${token}`}
    });

    let data= await res.json();

    if(data.username==document.querySelector("#Email").value){
        alert("Login successful");
        document.querySelector("#Email").value=null;
        window.location.href="women_home.html"
    }

}



function SignUp_Register(obj){
    
    if(obj.innerText=="Register"){
        SignUP();
    }

    if(obj.innerText=="Sign In"){
        login();
    }
}


