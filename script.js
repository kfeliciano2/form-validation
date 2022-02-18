const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// show in put error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
    
}

//show successful message

function showSuccess(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// check email is valid


//event listener
form.addEventListener('submit', function(e){
    e.preventDefault();
    //username
    if(username.value === ''){
        showError(username ,'username is required');
    } else{
        showSuccess(username);
    }

    //email
    if(email.value === ''){
        showError(email ,'email is required');
    } else{
        showSuccess(email);
    }

    //password

    if(password.value === ''){
        showError(password ,'password is required');
    } else{
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2 ,'password 2 is required');
    } else{
        showSuccess(password2);
    }

});