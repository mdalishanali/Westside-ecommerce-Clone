let mob=document.getElementById("bkcolor");
function toEmail(){
    if(mob.innerText=="USE EMAIL"){
    document.getElementById("bkcolor").innerText="USE MOBILE";
    document.getElementById("mobile").type="email";
    document.getElementById("mobile").placeholder="EMAIL(OTP will be send for verification)";
    }
    else{
        document.getElementById("bkcolor").innerText="USE EMAIL";
        document.getElementById("mobile").type="number";
    document.getElementById("mobile").placeholder="MOBILE(OTP will be send for verification)"; 
    }
}

var x=Math.floor(Math.random()*(999999-100000+1)+100000);


function sendOtp(){
    var conatiner=document.getElementById("container");
    var con=document.getElementById("verify");
    var empty=document.getElementById("mobile").value;
    if(document.getElementById("mobile").type=="number"){
    if(empty==""){
        alert("Please enter the Mobile Number!")
    }
    else if(empty.length!=10||empty[0]==0){
      
        alert("Invalid Mobile Number")
    }
    else if(empty.length==10){
        con.style.display="none";
        conatiner.style.display="block";
        setTimeout(()=>{
            alert("OTP="+x);
        },2500);
        
    }
}
else if(document.getElementById("mobile").type=="email"){
    if(empty==""){
        alert("Please enter the Email Id!")
    }
    else{
        if(validateEmail(empty)){
            con.style.display="none";
                conatiner.style.display="block";
                setTimeout(()=>{
                    alert("OTP="+x);
                },2500);
        }
        else{
        alert("Invalid Email Id");
        }
    }
   
}
}

function validateEmail(email){
    const mailformat=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(mailformat.test(email.toLowerCase())){
        return true;
    }
    else{
        return false;
    }
}
function resendOtp(){
    var conatiner=document.getElementById("container");
    var con=document.getElementById("verify");
    con.style.display="none";
        conatiner.style.display="block";
    setTimeout(()=>{
        alert("OTP="+x);
    },2500);
}


function verification(){
    
    var input=document.getElementById("input-otp").value;
    let container=document.getElementById("container");
    let con=document.getElementById("verify");
    let bkcolor=document.getElementById("bkcolor");
    let mobile=document.getElementById("mobile");
    let first_name=document.getElementById("first-name");
    let last_name=document.getElementById("last-name");
    let mob=document.getElementById("mob");
    let email_id=document.getElementById("email-id");
    let create=document.getElementById("create");


    console.log(typeof(input));

    
    if(input==""){
        alert("Enter the OTP");
    }
    else{
   

        if(+(input)===x){
            container.style.display="none";
            con.style.display="none";
            bkcolor.style.display="none";
            mobile.style.display="none";
           first_name.style.display="block";
            last_name.style.display="block";
            mob.style.display="block";
            email_id.style.display="block";
            create.style.display="block"



         
        }
    
else{
    alert("Invalid OTP,please enter a valid OTP");

}
}
}

function toHome(){
    let arr=[];
    let first_name=document.getElementById("first-name").value;
    let last_name=document.getElementById("last-name").value;
    let mob=document.getElementById("mob").value;
    let email_id=document.getElementById("email-id").value;
let count=0;
    let details={
        first:first_name,
        last:last_name,
        mobile:mob,
        email:email_id
    }
    for(var z in details){
        if(details[z]!==""){

            count++;
        }

    }
        if(count==4){

           
            localStorage.setItem("Account_detail",JSON.stringify(details));
            window.location.href="index.html";
        }
        else{
            alert("Enter the required details!!");
          
        }
    
}
