let nameerror = document.getElementById('name-error');
let phoneerror = document.getElementById('phone-error');
let emailerror = document.getElementById('email-error');
let messageerror = document.getElementById('message-error');
let passworderror = document.getElementById('pass-error');
let confirmpassworderror = document.getElementById('cpass-error');
let submiteerror = document.getElementById('btn-error');

function validatename() {
    let name = document.getElementById('fname').value;
    if (name.length == 0) {
        nameerror.innerHTML = '*name is required!';
        return false;
    }
    if (name.length <= 4) {
        nameerror.innerHTML = '*name is too short!';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameerror.innerHTML = '*Write full name';
        return false;
    }
    nameerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatephone() {
    let phone = document.getElementById('fphone').value;
    if (phone.length == 0) {
        phoneerror.innerHTML = '*number is required!';
        return false;
    }
    if (phone.length !== 10) {
        phoneerror.innerHTML = '*number is of 10 digit!';
        return false;
    }
    if (isNaN(phone)) {
        phoneerror.innerHTML = '*Only digits!';
        return false;
    }
    phoneerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    let email = document.getElementById('femail').value;
    if (email.length == 0) {
        emailerror.innerHTML = '*email is required!';
        return false;
    }
    if (email.length > 25) {
        emailerror.innerHTML = '*email is too long!';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailerror.innerHTML = '*invalid email';
        return false;
    }
    emailerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePass() {
    let pass = document.getElementById('fpass').value;
    if (pass.length < 8) {
        passworderror.innerHTML = '*password is short';
        return false;
    }
    passworderror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateConfirmPass() {
    let cpass = document.getElementById('fcpass').value;
    let pass = document.getElementById('fpass').value;
    if (cpass != pass) {
        confirmpassworderror.innerHTML = '*password missmatch';
        return false;
    }
    confirmpassworderror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatefrom() {
    if (!validatename() || !validatephone() || !validateEmail()) {
        submiteerror.style.display = 'block';
        submiteerror.innerHTML = "please fix error to submit!"
        setTimeout(() => { submiteerror.style.display = 'none' }, 3000);
        return false;
    }
    submiteerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

export default validatefrom;