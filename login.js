document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
        });
        
        let isValid = true;
        
        const username = document.getElementById('username');
        const usernameRegex = /^[a-zA-Z0-9]+$/;
        if (!username.value.trim()) {
            document.getElementById('username-error').textContent = 'Username is required';
            isValid = false;
        } else if (!usernameRegex.test(username.value)) {
            document.getElementById('username-error').textContent = 'Username should not contain spaces or special characters';
            isValid = false;
        }
        
        const password = document.getElementById('password');
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
        if (!password.value) {
            document.getElementById('password-error').textContent = 'Password is required';
            isValid = false;
        } else if (!passwordRegex.test(password.value)) {
            document.getElementById('password-error').textContent = 
                'Password must be at least 8 characters and include lowercase, uppercase, numbers, and special characters';
            isValid = false;
        }
        
        if (isValid) {
            if (username.value === 'kaustubh' && password.value === 'Vit@1234') {
                window.location.href = 'homepage.html';
            } else {
                document.getElementById('login-error').textContent = 'Wrong username or password';
            }
        }
    });
});

function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const icon = passwordInput.nextElementSibling.querySelector('i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}