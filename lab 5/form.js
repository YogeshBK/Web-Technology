function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Name: at least 3 characters and no numbers
    let namePattern = /^[A-Za-z ]+$/;
    if (name.length < 3 || !namePattern.test(name)) {
        alert("Name must be at least 3 characters and contain no numbers.");
        return false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Enter a valid email address.");
        return false;
    }

    // Password validation
    let passwordPattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@!#$%^&*]).{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters and include uppercase, lowercase, number and special character.");
        return false;
    }

    alert("Registration Successful!");
    return true;
}