/*
default return false, return true if has error
*/
function validateInput(email, password, passwordConfirmation) {
    // check email
     const EMAIL_REG = /[a-zA-Z][a-zA-Z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}/g
     if(email.match(EMAIL_REG)) {
         $("#email").removeClass("is-invalid")
     }else{//emmpty email input or invalid email
         $("#email").addClass("is-invalid")
     }
    // check password
     if(password.length > 2) {
        $("#password").removeClass("is-invalid")
     }else{
         $("#password").addClass("is-invalid")
     }
    // check passwordConfirmation
     if(passwordConfirmation === password) {
         $("#passwordConfirmation").removeClass("is-invalid")
     }else{
         $("#passwordConfirmation").addClass("is-invalid")
     }

     if(!email.match(EMAIL_REG) || password.length <= 2 || password !== passwordConfirmation)
        return true //has errors
     return false
}

function handleClickRegisterBtn() {
    $("#registerBtn").on("click", function(event) {
        event.preventDefault()

        let email = $("#email").val()
        let password = $("#password").val()
        let passwordConfirmation = $("#passwordConfirmation").val()
        let fullName = $("#fullName").val()

        // validate input
        let check =  validateInput(email, password, passwordConfirmation)
        

        if(!check) {
        // send data to node server with ajax
        //url map to http://localhost/register-new-user
        $.ajax({
            url: `${window.location.origin}/register-new-user`,
            method: "POST",
            data: {fullName: fullName, email: email, password: password, passwordConfirmation: passwordConfirmation},
            success: function(data) {
                console.log(data)
            },
            error: function(err) {
                console.log(err)
            }
        })

        }
    })
}


$(document).ready(function() {
   handleClickRegisterBtn()
}) 