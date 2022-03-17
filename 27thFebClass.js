let num = Math.floor(Math.random()*100)+1;
function checkNumber() {
    let val = document.getElementById("id1").value;
    if(val == '') {
        alert("Enter a number");
    }
    else {
    let num1 = parseInt(val);
    if(num1===num) {
        document.getElementById("id2").innerHTML = "Got the answer correctly!";
    }
    else if(num1 > num) {
        document.getElementById("id2").innerHTML = "Guess a smaller number";
    }
    else {
        document.getElementById("id2").innerHTML = "Guess a greater number";
    }
}
}