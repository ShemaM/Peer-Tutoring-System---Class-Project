// Function to toggle the visibility of the form section
function toggleFormVisibility() {
    const formSection = document.getElementById('form-section');
    formSection.style.display = formSection.style.display === 'none' ? 'block' : 'none';
}

// Function to toggle between Sign In and Sign Up forms
function toggleForm(formType) {
    if (formType === 'signin') {
        document.getElementById('signin-form').style.display = 'block';
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('form-title').textContent = 'Sign In';
        document.getElementById('sign-up-link').style.display = 'block';
        document.getElementById('sign-in-link').style.display = 'none';
    } else if (formType === 'signup') {
        document.getElementById('signin-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
        document.getElementById('form-title').textContent = 'Sign Up';
        document.getElementById('sign-in-link').style.display = 'block';
        document.getElementById('sign-up-link').style.display = 'none';
    }
}

// Function to redirect user based on role
function redirectToDashboard(role) {
    console.log('Redirecting to dashboard for role:', role);
    if (role === 'tutee') {
        window.location.href = 'Tutee Dashboard.html';
    } else if (role === 'tutor') {
        window.location.href = 'Tutor Dashboard.html';
    } else {
        console.error('Invalid role specified');
    }
}

// Sign Up Button Event
const signUpButton = document.getElementById('signup-btn');
signUpButton.addEventListener('click', () => {
    const fullName = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const role = document.getElementById('signup-role').value;

    if (fullName && email && password && password === confirmPassword && role) {
        sessionStorage.setItem('userRole', role);
        redirectToDashboard(role);
    } else {
        alert('Please complete all fields correctly');
    }
});

// Sign In Button Event
const signInButton = document.getElementById('signin-btn');
signInButton.addEventListener('click', () => {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    const role = document.getElementById('user-role').value;

    if (email && password && role) {
        sessionStorage.setItem('userRole', role);
        alert('Sign In successful!');
        redirectToDashboard(role);
    } else {
        alert('Please complete all fields correctly');
    }
});
