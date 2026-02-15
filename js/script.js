// Show/Hide Password
function togglePassword(id) {
let input = document.getElementById(id);
if (input.type === "password") {
input.type = "text";
} else {
input.type = "password";
}
}

// Login validation
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
e.preventDefault();
alert("Login Successful (Dummy)");
});

// Register validation
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
e.preventDefault();

let pass = document.getElementById("password").value;
let confirm = document.getElementById("confirmPassword").value;

if (pass !== confirm) {
alert("Passwords do not match!");
return;
}

alert("Registration Successful (Dummy)");
});

// AJAX username check
document.getElementById("username")?.addEventListener("blur", function() {
let username = this.value;

fetch("check-user.php?username=" + username)
.then(response => response.text())
.then(data => {
document.getElementById("userMsg").innerHTML = data;
});
});
