var nameError = document.getElementById('name-error')
var firstnameError = document.getElementById('firstname-error')
var dateError = document.getElementById('date-error')
var phoneError = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')
// var cemailError = document.getElementById('cemail-error')
var pwError = document.getElementById('pw-error')
// var cpwError = document.getElementById('cpassword-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')

function validateGender() {
  var gender = document.getElementById('regist_gender').value;
  if (gender.length == 0) {
    
  }
}

function validateName(){
    var name = document.getElementById('regist_name').value;
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


function validatefirstName(){
    var firstname = document.getElementById('regist_firstname').value;
    if (firstname.length == 0) {
        firstnameError.innerHTML = 'First name is required';
        return false;
    }
    if (!firstname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        firstnameError.innerHTML = 'Write first name';
        return false;
    }
    firstnameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}


function validateDate(){
    var date = document.getElementById('regist_date').value;
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
    var phone = document.getElementById('regist_phone').value;
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

function validateMail(){
    var email = document.getElementById('regist_email').value;
    if (email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email invalid'
        return false;
    }
        emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
        return true;
}
// function validateCmail(){
//     var cemail = document.getElementById('regist_cemail').value;
//     if (cemail.length == 0){
//     cemailError.innerHTML = 'Email match is invalide'
//         return false;
//     }
//     if (!cemail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
//     cemailError.innerHTML = 'Email invalid'
//         return false;
//     }
//     cemailError.innerHTML = '<i class="fa-solid fa-check"></i>';
//     return true;
// }


function validatePw() {
  var password = document.getElementById('regist_password').ariaValueMax;
  if (pw.length == 0) {
    pwError.innerHTML = 'Password match is incorrect'
    return false;
  }
  pwError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true
}

// function validateCpassword() {
//   var cpw = document.getElementById('regist_cpassword').ariaValueMax;
//   if (cpw.length == 0) {
//     cpwError.innerHTML = 'Password match is incorrect'
//     return false;
//   }
//   cpwError.innerHTML = '<i class="fa-solid fa-check"></i>';
//   return true
// }


 function validateMessage() {
    var message = document.getElementById('regist_message').value;
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
    if (!validateName() || !validatefirstName() || !validateDate() || !validatePhone() || !validateMail() || !validatePassword()) {
    submitError.style.display = 'block'
    submitError.innerHTML = 'Please fix error to submit';
    setTimeout(function () { submitError.style.display = 'none';}, 3000);
    return false;
    }
 }



