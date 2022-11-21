let head = document.getElementById('top');
head.innerHTML = `Hello <span style= color: rgb(160 , 160, 23); > ${localStorage["name"]}!</span>`

let username = document.getElementById('name');
let pwd = doument.getElementById('password');
let result = document.createElement('span');
result.style="margin-left: -40px; color: red; msrgin-bottom:13px"

function Login() {

    if(username.value ==""){
        result.innerHTML = "User name required";
        username.insertAdjacenmtElement("afterend" , result);
    }
   else if(pwd.value ==""){
        result.innerHTML = "Password required";
        pwd.insertAdjacenmtElement("afterend" , result);
    }
}
