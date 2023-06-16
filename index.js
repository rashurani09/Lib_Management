const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

// To create a toggle functionality in JavaScript to show or hide an element,
// you can use the classList property and the toggle() method

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})

document.getElementById("signupButton").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get the input field values
  const emailInput = document.querySelector(".signup .field input[type='email']");
  const passwordInput = document.querySelector(".signup .field input[type='password']");
  
  // Perform form validation
  const emailRegex = /^\S+@\S+\.\S+$/; // Email format regex
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Password format regex
  
  if (!emailRegex.test(emailInput.value.trim())) {
    alert("Please enter a valid email address.");
    return;
  }
  
  if (!passwordRegex.test(passwordInput.value.trim())) {
    alert("Please enter a valid password. It must contain at least 8 characters with at least one letter and one number.");
    return;
  }
  
  // If both email and password formats are valid
  window.location.assign("next-page.html"); // Redirect to the next page
});
