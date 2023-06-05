function ageInDays(){
    var birthYear = prompt("Hello there, what year were you born ? ")
    var yourAgeInDays = (2023 - birthYear) * 365;
    // console.log(yourAgeInDays);
    var yourAgeInDays = document.getElementById("output").innerHTML = "⚜ you are " + yourAgeInDays +" days old !";
}

function reset(){
    var yourAgeInDays = document.getElementById("output").innerHTML = "✨Happy Coding✨";
}
reset()