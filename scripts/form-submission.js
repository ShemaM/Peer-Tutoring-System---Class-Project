// Function to handle form submission
async function handleFormSubmission(event, formType) {
    event.preventDefault(); // Prevent default form submission behavior

    // Determine the form and endpoint based on the form type ('register' or 'login')
    const form = formType === 'register' ? document.querySelector('#signup form') : document.querySelector('#signIn form');
    const endpoint = formType === 'register' ? 'http://localhost:5000/register' : 'http://localhost:5000/login';

    // Collect form data
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());

    // Basic form validation (example: check required fields)
    if (!validateForm(userData)) {
        displayMessage('Please fill in all required fields correctly.', 'error');
        return;
    }

    try {
        // Send form data to the backend using Fetch API
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (response.ok) {
            // Success: Handle different responses based on the form type
            if (formType === 'register') {
                displayMessage('Registration successful! Please log in.', 'success');
                form.reset(); // Clear the form after successful registration
                switchToSignIn(); // Switch to sign-in form after registration
            } else {
                displayMessage('Login successful!', 'success');
                localStorage.setItem('token', data.token); // Store the authentication token
                // Redirect to another page, e.g., dashboard
            }
        } else {
            displayMessage(data.error || 'An error occurred. Please try again.', 'error');
        }
    } catch (error) {
        displayMessage('An error occurred. Please check your connection and try again.', 'error');
    }
}

// Utility function for basic form validation
function validateForm(data) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
        data.email && emailPattern.test(data.email) && data.password.length >= 6
    );
}

// Function to display messages
function displayMessage(message, type) {
    alert(`${type === 'success' ? 'Success' : 'Error'}: ${message}`); // Replace with a custom UI alert if needed
}

// Function to switch to the sign-in form
function switchToSignIn() {
    document.getElementById('signup').style.display = 'none';
    document.getElementById('signIn').style.display = 'block';
}

// Event listeners for form submissions
document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.querySelector('#signup form');
    const loginForm = document.querySelector('#signIn form');

    // Attach event listeners to forms
    registrationForm.addEventListener('submit', (event) => handleFormSubmission(event, 'register'));
    loginForm.addEventListener('submit', (event) => handleFormSubmission(event, 'login'));
});
