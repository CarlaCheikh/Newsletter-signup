//error
let requiredLabel = document.querySelector('#error');
let inputEmail = document.querySelector('#email');


//submit
let submit = document.querySelector('#submit');

// dismiss message
let dismissBtn = document.querySelector('#dismiss-btn');

// section sign-up
let signUp = document.querySelector('#sign-up');

// section success-message
let successMessage = document.querySelector('#success-message');

//form
let form = document.querySelector('form');

//email success change
let emailChange = document.querySelector('#email-succes');

function switchSection() {
    successMessage.classList.toggle("hidden");
    signUp.classList.toggle("hidden");
}

function submitEmail(email) {
    emailChange.textContent = email;
}

function isValid(str) {
    let regEx = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return regEx.test(str);
}

function showErrors() {
    
inputEmail.classList.add("error-input");
requiredLabel.classList.remove("hidden");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
     let validEmail = isValid(inputEmail.value);
     
     if (!validEmail || !(inputEmail.value)) {
       return showErrors();
     } 
     if(validEmail) {

        return submitEmail(inputEmail.value);
     }
     switchSection();
});


dismissBtn.addEventListener("click", () =>{
    switchSection();
    submitEmail();
});

