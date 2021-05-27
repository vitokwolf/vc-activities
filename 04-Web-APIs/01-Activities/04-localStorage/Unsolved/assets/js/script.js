var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var signUpButton = document.querySelector('#sign-up');
var msgDiv = document.querySelector('#msg');
var userEmailSpan = document.querySelector('#user-email');
var userPasswordSpan = document.querySelector('#user-password');

function renderLastRegistered() {

// start my own code
  // TODO: Retrieve the last email and password from localStorage
  var emailInput = localStorage.getItem("#email");
  var passwordInput = localStorage.getItem("#password");
  // TODO: If they are null, return early from this function
  if (!emailInput || !passwordInput) {
    return ;
  }
  // TODO: Otherwise set the text of the 'userEmailSpan' and 'userPasswordSpan' to the corresponding values from localStorage
  else {
    userEmailSpan.textContent = emailInput;
    userPasswordSpan.textContent = passwordInput;
  };

// end my own code
};

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  var email = document.querySelector('#email').value;
  var password = document.querySelector('#password').value;


  if (email === '') {
    displayMessage('error', 'Email cannot be blank');
  } else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
  } else {
    displayMessage('success', 'Registered successfully');

    // TODO: Save email and password to localStorage
    var email = localStorage.setItem("#email", JSON.stringify(email));
    // TODO: Render the last registered email and password
    var password = localStorage.setItem("#password", JSON.stringify(password));
  }
});
