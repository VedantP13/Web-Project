document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
        });
        
        let isValid = true;
        
        const fullname = document.getElementById('fullname');
        if (!fullname.value.trim()) {
            document.getElementById('fullname-error').textContent = 'Full name is required';
            isValid = false;
        }
        
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            document.getElementById('email-error').textContent = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address';
            isValid = false;
        }

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
        
        const confirmPassword = document.getElementById('confirm-password');
        if (!confirmPassword.value) {
            document.getElementById('confirm-password-error').textContent = 'Please confirm your password';
            isValid = false;
        } else if (confirmPassword.value !== password.value) {
            document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
            isValid = false;
        }
        
        if (isValid) {
            alert('Form submitted successfully!');
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