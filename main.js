let  username = document.getElementById("name").value
let pwd = document. getElementById("password").value
let email = document.getElementById("email").value
let result1 = document.getElementById("result")
function check()
{
        if(password.value == "") 
        { 
            let result = "Username is required";
            result1.innerHTML=result
        }
        else if(username.value == "") 
        { 
            let result = "username is required";
            result1.innerHTML=result
        }  
        else if(email.value == "") 
        { 
            let result = "email is required" ;
            result1.innerHTML=result
        }

        else
        {
            localStorage("name")= username.value;
            window.location.href="index2.html"
        }
    }