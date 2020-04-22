const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const submit = document.getElementById('submit')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs();
})




function checkInputs(){

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()


    //validate username
    if(usernameValue === '' || usernameValue === null){
        setErrorFor(username, 'Username cannot be empty')
    } else{
        setSuccessFor(username)
    }

    //validate email
    if(emailValue == '' || emailValue == null){
        setErrorFor(email, "Email cannot be empty")
    } else if(!isEmail(emailValue)){
        setErrorFor(email, "Email is not valid")
    } else{
        setSuccessFor(email)
    }


    //validate password 1
    if(passwordValue === "" || passwordValue === null){
        setErrorFor(password, "Password cannot be empty")
    } else if(passwordValue == 'password'){
        setErrorFor(password, 'Password cannot be password')
    } else if(passwordValue.length > 6 ){
        setErrorFor(password, 'Password cannot be less then 6 characters')
    } else if( passwordValue < 20 ){
        setErrorFor(password, 'Password cannot be greater then 20 characters')
    } else {
        setSuccessFor(password)
    }

    //validate password 2
    if(password2Value === "" || password2Value === null){
        setErrorFor(password2, "Confirm password cannot be empty")
    } else if(password2Value !== passwordValue){
        setErrorFor(password2, "Both passwords are not same")
    }else{
        setSuccessFor(password2)
    }


}


function setErrorFor(input, msg){

    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = msg;

    formControl.classList = 'form-control error'

}


function setSuccessFor(input){

    const formControl = input.parentElement;
    // const small = formControl.querySelector('small')

    // small.innerText = msg;

    formControl.classList = 'form-control success'

}


function isEmail(email){
    
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}