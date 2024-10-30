document.addEventListener("DOMContentLoaded", function() {
    const signInContainer = document.getElementById('signIn');
    const signUpContainer = document.getElementById('signup');
    const signInButton = document.getElementById('signInButton');
    const signUpButton = document.getElementById('signUpButton');

    // Show Sign Up form and hide Sign In form
    signUpButton.addEventListener('click', function() {
        signUpContainer.style.display = 'block';
        signInContainer.style.display = 'none';
    });

    // Show Sign In form and hide Sign Up form
    signInButton.addEventListener('click', function() {
        signInContainer.style.display = 'block';
        signUpContainer.style.display = 'none';
    });

    // Callback function to handle Google Sign-In response
    window.handleCredentialResponse = function(response) {
        const signupForm = document.getElementById('signupForm');
        const idTokenField = document.createElement('input');
        idTokenField.type = 'hidden';
        idTokenField.name = 'id_token';
        idTokenField.value = response.credential;
        signupForm.appendChild(idTokenField);
        signupForm.submit(); // Submit the form with the ID token to your server for further processing
    };
});