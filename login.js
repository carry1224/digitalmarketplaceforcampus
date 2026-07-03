// Vendor button
const vendorBtn = document.getElementById("vendorBtn");

// Customer button
const customerBtn = document.getElementById("customerBtn");

// Go to Vendor Login Page
vendorBtn.addEventListener("click", function(){

    window.location.href = "vendor-login.html";

});

// Go to Customer Login Page
customerBtn.addEventListener("click", function(){

    window.location.href = "customer-login.html";

});