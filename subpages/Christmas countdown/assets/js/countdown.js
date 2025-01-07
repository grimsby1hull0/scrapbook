var countDownDate = new Date("Dec 25, 2021 00:00:00").getTime();



var x = setInterval(function() {
var now = new Date().getTime();



var distance = countDownDate - now;



var days = Math.floor(distance / (1000 * 60 * 60 * 24));



var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
if (hours < 10) {
hours = "0" + hours;
}



var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
if (minutes < 10) {
minutes = "0" + minutes;
}

var seconds = Math.floor((distance % (1000 * 60)) / 1000);
if (seconds < 10) {
seconds = "0" + seconds;
}



document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
}, 1000);