const container = document.querySelector(".container"),
	pwShowHide = document.querySelectorAll(".showHidePw"),
	pwFields = document.querySelectorAll(".password"),
	signUp = document.querySelector(".signup-link"),
	login = document.querySelector(".login-link");

//   js code to show/hide password and change icon
pwShowHide.forEach(eyeIcon => {
	eyeIcon.addEventListener("click", () => {
		pwFields.forEach(pwField => {
			if (pwField.type === "password") {
				pwField.type = "text";

				pwShowHide.forEach(icon => {
					icon.classList.replace("uil-eye-slash", "uil-eye");
				})
			} else {
				pwField.type = "password";

				pwShowHide.forEach(icon => {
					icon.classList.replace("uil-eye", "uil-eye-slash");
				})
			}
		})
	})
})

// js code to appear signup and login form
signUp.addEventListener("click", () => {
	container.classList.add("active");
});
login.addEventListener("click", () => {
	container.classList.remove("active");
});



//declaring global variables to store state of the checks
var namecorrect = false;
var emailcorrect = false;
var passwordcorrect = false;
var password2correct = false;

let data = {
	name: "",
	email: "",
	password: "",
	password2: ""
}

let errors = {
	nameErr: "",
	emailErr: "",
	passwordErr: "",
	password2Err: ""
}

//global password variable
var pwd = "";


/**
 * Function to check all 4 checks are met
 * triggered by "Sign in" button click
 */
function checksuccess() {
	document.getElementById("successmessage").innerHTML = "";
	if (namecorrect && emailcorrect
		&& password2correct && passwordcorrect) {
		document.getElementById("successmessage").innerHTML = "Sign up successful";
	}
	else {
		document.getElementById("successmessage").innerHTML = "Enter 	 correctly";
	}
}

/**
 * Function to check name entered is in the correct format
 * triggered by keyup in name field 
 */
function checkname() {
	//reading input in field

	let name = document.getElementById("nameip").value;

	//defining specialized regex expression for name
	const nameregex = /^[A-Za-z]+$/;	

	
		if (name.match(nameregex)) {
			namecorrect = true;
			document.getElementById("nameerror").innerHTML = "";
			
		}
		else {		
			
			namecorrect = false;					
			
			//handling empty input
			if (name.toString().trim() != "") {
				document.getElementById("nameerror").innerHTML = "Enter valid name";
			}		
		}	
		

}

/**
 * Function to check email entered is in the correct format
 * triggered by keyup in email field 
 */
function checkemail() {
	//reading input in field
	let email = document.getElementById("emailip").value;

	//defining specialized regex expression for email
	const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (email.match(emailregex)) {
		emailcorrect = true;

		//handling empty input
		if (email.toString().trim() != "") {
			document.getElementById("emailerror").innerHTML = "ok";
		}
		
		//console.log(email + "ok");
	}
	else {
		emailcorrect = false;
		document.getElementById("emailerror").innerHTML = "";
		

		//console.log(email);
	}
}

/**
 * Function to check password entered is in the correct format
 * triggered by keyup in password field 
 */

/**
 * Function to check both the passwords match
 * triggered by keyup in second password field
 * error message is note dependendent on validation of password
 */
function checkpassword2() {
	//reading input in field
	let password2 = document.getElementById("password2ip").value;

	if (password2 == pwd && passwordcorrect) {
		document.getElementById("passworderror2").innerHTML = "Password is correct/ match ok";
		password2correct = true;
	}
	else {
		password2correct = false;
		document.getElementById("passworderror2").innerHTML = "";
	}
}

function isGood(password) {
	var password_strength = document.getElementById("password-text");
	
	//TextBox left blank.
	if (password.length == 0) {
		password_strength.innerHTML = "";
		return;
	}

	//Regular Expressions.
	var reqarr = ["uppercase", "lowercase", "number", "special"];
	var regexarr = [];
	var regex = new Array();
	regex.push("[A-Z]"); //Uppercase Alphabet.
	regex.push("[a-z]"); //Lowercase Alphabet.
	regex.push("[0-9]"); //Digit.
	regex.push("[$@$!%*#?&]"); //Special Character.

	var passed = 0;

	//Validate for each Regular Expression.
	for (var i = 0; i < regex.length; i++) {
		regexarr.push(new RegExp(regex[i]).test(password));
		if (new RegExp(regex[i]).test(password)) {
			passed++;
		}
	}
	console.log(regexarr);
	for(let i=0;i<regexarr.length;i++){	
		if(regexarr[i]){
			document.getElementById(reqarr[i]).style.color = "green";
		}
		else{
			document.getElementById(reqarr[i]).style.color = "red";
		}	
		
	}
	//Display status.
	var strength = "";
	switch (passed) {
		case 0:
		case 1:
		case 2:
			strength = "<small class='progress-bar bg-danger' style='width: 40%'>Weak</small>";
			break;
		case 3:
			strength = "<small class='progress-bar bg-warning' style='width: 60%'>Medium</small>";
			break;
		case 4:
			strength = "<small class='progress-bar bg-success' style='width: 100%'>Strong</small>";
			break;

	}
	password_strength.innerHTML = strength;
	const passwordregex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

	if (password.match(passwordregex)) {
		passwordcorrect = true;
		document.getElementById("passworderror").innerHTML = "Password ok	";
		//console.log(password + "ok");
		pwd = password;
	}
	else {
		passwordcorrect = false;
		if (password.toString().trim() != "") {
			document.getElementById("passworderror").innerHTML = 	"";	
			pwd = password;
		}

	}
}