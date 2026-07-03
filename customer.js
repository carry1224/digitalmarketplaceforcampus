// Show/Hide Password (Login Page)

const togglePassword = document.getElementById("togglePassword");

if(togglePassword){

const password =
document.getElementById("password");

togglePassword.addEventListener("click",function(){

if(password.type==="password"){

password.type="text";

togglePassword.textContent="Hide";

}

else{

password.type="password";

togglePassword.textContent="Show";

}

});

}

// Login

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Login Successful!");

window.location.href="customer-dashboard.html";

});

}

// Profile Picture Preview

const picture=
document.getElementById("profilePicture");

if(picture){

picture.addEventListener("change",function(){

const file=this.files[0];

if(file){

const reader=new FileReader();

reader.onload=function(e){

const preview=
document.getElementById("preview");

preview.src=e.target.result;

preview.style.display="block";

}

reader.readAsDataURL(file);

}

});

}

// Registration Validation

const signupForm=
document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",function(e){

e.preventDefault();

const pass=
document.getElementById("createPassword").value;

const confirm=
document.getElementById("confirmPassword").value;

if(pass!==confirm){

alert("Passwords do not match.");

return;

}

alert("Registration Successful!");

window.location.href="customer-dashboard.html";

});

}