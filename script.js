var nameError = document.getElementById('name-error')
var nameError = document.getElementById('firstname-error')
var nameError = document.getElementById('date-error')
var phoneError = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')
var emailError = document.getElementById('repeatemail-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')
function validateName(){
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
// function validatefirstName(){
//     var firstname = document.getElementById('contact-firstname').value;

//     if (firstname.length == 0) {
//         nameError.innerHTML = 'First name is required';
//         return false;
//     }
//     if (!firstname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
//         firstnameError.innerHTML = 'Write first name';
//         return false;
//     }
//     nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
//     return true;
// }




function validateDate(){
    var date = document.getElementById('contact-date').value;
    
    if (date.length == 0) {
        dateError.innerHTML = 'Date of birth is required';
        return false;
    }
    if (date.length !== dd/mm/yyyy) {
        dateError.innerHTML = 'Date should be dd/mm/yyyy';
        return false;
    }
    if (!dateError.match(/^[0-9]{10}$/)) {
        dateError.innerHTML = 'Only digits and slashes please.';
        return false;
    }
    dateError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone nomber is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone nomber should be 10 digits';
        return false;
    }
    if (!phoneError.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits allowed please.';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if (email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validaterepeatEmail(){
    var repeatemail = document.getElementById('contact-repeatemail').value;

    if (repeatemail.length == 0){
        repeatemailError.innerHTML = 'Email is required'
        return false;
    }
    if (!repeatemail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        repeatemailError.innerHTML = 'Email Invalid'
        return false;
    }
    repeatemailemailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validateForm(){
    if (!validateName() || !validateFirstName() || !validateDate() || !validatePhone() || !validateEmail() || !validaterepeatEmail() || !validateMessage()) {
        submitError.style.display = 'block'
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function () { submitError.style.display = 'none';}, 3000);
        return false;
    }
}
