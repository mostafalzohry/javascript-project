function check(e){
    var uservalue = document.getElementById("name").value;
    if(uservalue.length < 7){
        document.getElementById("invalid").innerHTML = "invalid name";
        e.preventDefault();
    }else{
        document.getElementById("invalid").innerHTML = "";
    }
}

function valtrationEmail(e){
    var email = document.getElementById("email").value;
    var regex = new RegExp(/^[a-z|0-9]{2,}\@[a-z]{3,}\.(com|net)$/);
    var valid = regex.test(email);
    if(!valid){
        document.getElementById("validemail").innerHTML="invalid Email";
        e.preventDefault();
    }else{
        document.getElementById("validemail").innerHTML="";
    }
}

function checkPassword(e){
    var onepass = document.getElementById("password").value,
        twopass = document.getElementById("repassword").value,
        text = document.getElementById("checkpassword");
    if(onepass != twopass){
        text.innerHTML = "password and repeat password should be the same";
        e.preventDefault();
    }else{
        text.innerHTML = "";
    }
}

function validationForm(e){
    check(e);
    checkPassword(e);
    valtrationEmail(e);
}