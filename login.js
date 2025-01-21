const message = document.getElementById("message");
const param = new URLSearchParams(window.location.search);
const username = param.get("username");
const pw = param.get("pw");

if(username.toLowerCase() === "adminuser" && pw === "adminPassword"){
    window.location.href = "index.html";
} else if(!username || !pw){
    message.innerHTML = 'Not correct credential, try again'
} else{
    message.innerHTML = "You are not admin!";
}