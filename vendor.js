const password = document.getElementById("password");

const showPassword = document.getElementById("showPassword");

showPassword.addEventListener("click", function(){

    if(password.type === "password"){

        password.type = "text";

        showPassword.textContent = "Hide";

    }

    else{

        password.type = "password";

        showPassword.textContent = "Show";

    }

});

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Login Successful!");

    window.location.href = "vendor-dashboard.html";

});