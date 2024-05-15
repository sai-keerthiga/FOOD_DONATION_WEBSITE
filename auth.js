
    const backendBaseUrl = 'http://localhost:8000/api';
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form data
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Make a POST request to login endpoint
        fetch(`${backendBaseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => {
            if (response.ok) {
                // Redirect user to dashboard or perform desired action
                window.location.href = '/dashboard.html';
            } else {
                // Handle login failure
                alert('Login failed. Please check your credentials.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while logging in. Please try again later.');
        });
    });

    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        // Get form data
        const name = document.getElementById('fullName').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        const userData = {
            name: name,
            email: email,
            phone: phone,
            password: password
        };
        console.log(userData);
        
        // Make a POST request to signup endpoint
        fetch(`${backendBaseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (response.ok) {
                // Redirect user to login page or perform desired action
                window.location.href = '/login.html';
            } else {
                // Handle signup failure
                alert('Signup failed. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while signing up. Please try again later.');
        });
    });
