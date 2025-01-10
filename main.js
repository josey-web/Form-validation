// Error element selection
const formErrorMessage = document.getElementById("formErrorMessage");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

//form element selection
const submitBtn = document.querySelector(".submitBtn");
const firstName = document.querySelector("#firstName");
const lastName = document.getElementById("lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const form = document.querySelector(".formSectionB");




// handling form submission
form.addEventListener("submit", (e) => {
e.preventDefault();

      verifyFirstName() 
        verifyLastName() 
        verifyEmail() 
        verifyPassword() 
        checkPasswordEntered();
  if (
    !verifyFirstName() ||
    !verifyLastName() ||
    !verifyEmail() ||
    !verifyPassword() ||
    !checkPasswordEntered()
  ) {
    formErrorMessage.textContent = "Please enter correct name and password";
  
    setInterval(() => {
      formErrorMessage.textContent = "";
    }, 20000);
    return false;
  } 
   
    ///Write your next code after successful details
  window.open("http://127.0.0.1:5500/home.html");
});

  



// handle firstname verification

const namePattern = /\s{1,1}/;
const verifyFirstName = () => {
 firstNameError.textContent = "";
 firstName.style.border = "1px solid";
 
  const firstNameValue = firstName.value;
  if (firstNameValue == 0) {
    firstNameError.textContent = "Firstname cannot be empty";
     firstName.style.border = "1px solid red";
    return false;
  }
  if (firstNameValue.length <= 2) {
    firstNameError.textContent = "Firstname must be at least 3 characters";
    firstName.style.border = "1px solid red";
    return false;
  }
  if (!isNaN(firstNameValue)) {
    firstNameError.textContent = "Firstname must start with a character";
    firstName.style.border = "1px solid red";
    return false;
  }
  if (firstNameValue.match(namePattern)) {
    firstNameError.textContent = "Firstname must not have empty spaces";
    firstName.style.border = "1px solid red";
    return false;
  }
  firstNameError.textContent = "";
  firstName.style.border = "1px solid";
  return true;
};


//Event handlers
lastName.addEventListener("keyup", () => {
  verifyLastName();
  });
firstName.addEventListener("keyup", () => {
  verifyFirstName();
});
password.addEventListener("keyup", () => {
  verifyPassword();
});
confirmPassword.addEventListener("click", () => {
    confirmPasswordError.textContent = "";
    confirmPassword.style.border = "1px solid";
});
firstName.addEventListener("click", () => {
    firstNameError.textContent = "";
    firstName.style.border = "1px solid";
});
lastName.addEventListener("click", () => {
    lastNameError.textContent = "";
    lastName.style.border = "1px solid";
});
password.addEventListener("click", () => {
    passwordError.textContent = "";
    password.style.border = "1px solid";
});
email.addEventListener("click", () => {
    emailError.textContent = "";
    email.style.border = "1px solid";
});
email.addEventListener("keyup", () => {
  verifyEmail();
});



// handle lastname verification
const verifyLastName = () => {
  lastName.focus();
 lastNameError.textContent = "";
 lastName.style.border = "1px solid";

 const lastNameValue = lastName.value;
 if (lastNameValue == 0) {
   lastNameError.textContent = "Lastname cannot be empty";
   lastName.style.border = "1px solid red";
   return false;
 }
 if (lastNameValue.length <= 2) {
   lastNameError.textContent = "Lastname must be at least 3 characters";
   lastName.style.border = "1px solid red";
   return false;
 }
 if (!isNaN(lastNameValue)) {
   lastNameError.textContent = "Lastname must start with a character";
   lastName.style.border = "1px solid red";
   return false;
 }
 if (lastNameValue.match(namePattern)) {
   lastNameError.textContent = "Lastname must not have empty spaces";
   lastName.style.border = "1px solid red";
   return false;
 }
 lastNameError.textContent = "";
 lastName.style.border = "1px solid";
 return true;
};

// handle email verification

const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,10}/g;
const verifyEmail = () => {
   emailError.textContent = "";
   email.style.border = "1px solid";
  const emailValue = email.value;
  if (!emailValue.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email address";
    email.style.border = "1px solid red";
    return false;
  }

  emailError.textContent = "";
  email.style.border = "1px solid";
  return true;
};

// handle password verification

    const userPassword = password.value;
const buildPassword = (userPassword) => {
  const passwordDigit = /\d/;
  const passwordLength = /\S{6,}/;
  

  return (
    passwordDigit.test(userPassword) &&
    passwordLength.test(userPassword)
  );
};

const verifyPassword = () => {
  const userPassword = password.value;
      if (!buildPassword(userPassword)) {
    passwordError.textContent = "Password must have a numerical character";
    password.style.border = "1px solid red";
    return false;
    
      } 

if (userPassword.length < 6) {
  passwordError.textContent = `Password must be at least 6 characters long`;
  password.style.border = "1px solid red";
  return false;
}

else {
  passwordError.textContent = "";
  password.style.border = "1px solid";
  return true;
}

  }


// handle password re-enter verification
const checkPasswordEntered = () => {
  const userPassword = password.value;
  const confirmUserPassword = confirmPassword.value
      
  if (confirmUserPassword.trim().length == 0) {
    confirmPasswordError.textContent = `Confirm your password`;
    confirmPassword.style.border = "1px solid red";
    return false;
  }
  
  if (confirmUserPassword === userPassword) {
    confirmPasswordError.textContent = "";
    confirmPassword.style.border = "1px solid";
    return true;
   
  } 
    confirmPasswordError.textContent = `Password does not match`;
    confirmPassword.style.border = "1px solid red";
return false;

};


