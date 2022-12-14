const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
var namecorrect = false;
var emailcorrect = false;
var passwordcorrect = false;
var password2correct = false;
var pwd="";
function checksuccess(){
    document.getElementById("successmessage").innerHTML = "";
    if(namecorrect && emailcorrect 
        && password2correct && passwordcorrect){
            document.getElementById("successmessage").innerHTML = "Sign up successful";
        }
    else{
        document.getElementById("successmessage").innerHTML = "Enter information correctly";
    }
}
function checkname(){
    let name = document.getElementById("nameip").value;
    const nameregex = /^[A-Za-z]+$/;
    if(name.match(nameregex)){
        namecorrect = true;
        document.getElementById("nameerror").innerHTML = "";
        //console.log(name+"ok");
    }
    else{
        namecorrect = false;
        if(name.toString().trim() !=""){
            document.getElementById("nameerror").innerHTML = "Enter valid name";
        }
        
        //console.log(name);
    }
    
}
function checkemail(){
    let email = document.getElementById("emailip").value;
    const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(emailregex)){
        emailcorrect = true;
        document.getElementById("emailerror").innerHTML = "";
        console.log(email+"ok");
    }
    else{
        emailcorrect = false;
        if(email.toString().trim() !=""){
            document.getElementById("emailerror").innerHTML = "Enter valid email";
        }
        
        console.log(email);
    }
}
function checkpassword(){
    
    let password = document.getElementById("passwordip").value;
    const passwordregex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(password.match(passwordregex)){
        passwordcorrect = true;
        document.getElementById("passworderror").innerHTML = "";
        console.log(password+"ok");
        pwd = password;
    }
    else{
        passwordcorrect = false;
        if(password.toString().trim() !=""){
            document.getElementById("passworderror").innerHTML = "Enter valid password";
        }
        
        console.log(password);
    }
}
function checkpassword2(){
    let password2 = document.getElementById("password2ip").value;
    if(password2 == pwd){
        document.getElementById("passworderror2").innerHTML = "";
        password2correct = true;
    }
    else{
        password2correct = false;
        document.getElementById("passworderror2").innerHTML = "Passwords don't match";
    }   
}
