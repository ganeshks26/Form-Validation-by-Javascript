function validate(){
    var username=document.getElementById("username").value; //this is the way to get the value from input field
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var cpassword=document.getElementById("cpassword").value;
    console.log(username,email,password,cpassword);

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordmatch(password,cpassword)
    
}
/*three validation is added-1.invalid for the first time
                            2.valid for the first time
                            3.valid after invalid condition*/

function checkusername(username){
    if(username.length>7){
        document.getElementById("username").classList.add("success")
        document.getElementById("username").classList.replace("error","success")    //use replace instead of add    //adding css proprty directly to javascript   
        document.getElementById("username_error").innerText=" "
    }else{
        document.getElementById("username").classList.add("error")
        document.getElementById("username_error").innerText="username must be 8 letters long"
    }
}

function checkemail(email){
    if(email.length>8 && email.includes("@gmail")){
        document.getElementById("email").classList.add("success")
        document.getElementById("email").classList.replace("error","success")    //use replace instead of add    //adding css proprty directly to javascript   
        document.getElementById("email_error").innerText=" "
    }else{
        document.getElementById("email").classList.add("error");
        document.getElementById("email_error").innerText="Email must include @gmail, 8 letters long"
    }
}

function checkpassword(password){
    if(password.length>8){
        document.getElementById("password").classList.add("success")
        document.getElementById("password").classList.replace("error","success")    //use replace instead of add    //adding css proprty directly to javascript   
        document.getElementById("password_error").innerText=" "
    }else{
        document.getElementById("password").classList.add("error");
        document.getElementById("password_error").innerText="password must be 8 letters long"
    }
}

function checkpasswordmatch(password,cpassword){
    if(password == cpassword){
        console.log(password,cpassword)
        document.getElementById("cpassword").classList.add("success")
        document.getElementById("cpassword").classList.replace("error","success") 
        document.getElementById("cpassword_error").innerText=" "
    }
    else{
        document.getElementById("cpassword").classList.add("error");
        document.getElementById("cpassword_error").innerText="password not matched"
    }
} 