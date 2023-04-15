var countDownDate = new Date("May 13, 2023 00:00:00").getTime();
      
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("timer").innerHTML = days + " Days " + hours + " Hours " 
  + minutes + " Mins left."
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "LIVE RIGHT NOW";
  }
}, 1000);