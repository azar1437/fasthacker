


const setTheme = (theme) => {
    const root = document.querySelector(":root");
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--color", theme.color);
    root.style.setProperty("--primary-color", theme.primaryColor);
    root.style.setProperty("--glass-color", theme.glassColor);
};







document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.querySelector('form');
  
    // Add a submit event listener to the form
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get the input values
      var username = document.querySelector('input[type="text"]').value;
      var password = document.querySelector('input[type="password"]').value;
  
      // Validate the input values (example validation)
      if (username.trim() === '') {
        alert('Please enter a username');
        return;
      }
  
      if (password.trim() === '') {
        alert('Please enter a password');
        return;
      }
  
      // Make an API request with the input values
      var endpoint = 'https://d55d-103-28-246-101.ngrok-free.app/api/XUsers/login';
      var requestBody = {
        username: username,
        password: password
      };
  
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning':123
        },
        body: JSON.stringify(requestBody)
      })
      .then(function(response) {
        if (response.ok) {
          // API request was successful
          alert('Login successful');
          // Do something with the response data if needed
        } else {
          // API request failed
          alert('Login failed');
        }
      })
      .catch(function(error) {
        // Error occurred during the API request
        console.error('Error:', error);
      });
    });
  });
  