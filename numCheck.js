const check = document.getElementById('check');
const guess = new URLSearchParams(window.location.search);
const num = guess.get("guess");

if(num === 6){
        check.innerHTML = "You are correct!";
}else{
    check.innerHTML = "Maybe u should try again!";
}