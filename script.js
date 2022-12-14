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
//declaring global variables to store state of the checks
var namecorrect = false;
var emailcorrect = false;
var passwordcorrect = false;
var password2correct = false;
var pwd="";

/**
 * Function to check all 4 checks are met
 * triggered by "Sign in" button click
 */
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

/**
 * Function to check name entered is in the correct format
 * triggered by keyup in name field 
 */
function checkname(){
    //reading input in field
    let name = document.getElementById("nameip").value;

    //defining specialized regex expression for name
    const nameregex = /^[A-Za-z]+$/;
    if(name.match(nameregex)){
        namecorrect = true;
        document.getElementById("nameerror").innerHTML = "";
        
    }
    else{
        namecorrect = false;
        //handling empty input
        if(name.toString().trim() !=""){
            document.getElementById("nameerror").innerHTML = "Enter valid name";
        }
        
        
    }
    
}

/**
 * Function to check email entered is in the correct format
 * triggered by keyup in email field 
 */
function checkemail(){
    //reading input in field
    let email = document.getElementById("emailip").value;

    //defining specialized regex expression for email
    const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.match(emailregex)){
        emailcorrect = true;
        document.getElementById("emailerror").innerHTML = "";
        console.log(email+"ok");
    }
    else{
        emailcorrect = false;

        //handling empty input
        if(email.toString().trim() !=""){
            document.getElementById("emailerror").innerHTML = "Enter valid email";
        }
        
        console.log(email);
    }
}

/**
 * Function to check password entered is in the correct format
 * triggered by keyup in password field 
 */
function checkpassword(){
    //reading input in field
    let password = document.getElementById("passwordip").value;

    //defining specialized regex expression for password
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
            document.getElementById("passworderror").innerHTML = "Minumum: 1-Symbol, 1-Uppercase, 1-Lowercase";
            pwd = password;
        }
        
        console.log(password);
    }
}

/**
 * Function to check both the passwords match
 * triggered by keyup in second password field
 * error message is note dependendent on validation of password
 */
function checkpassword2(){
    //reading input in field
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
