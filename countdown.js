function countdown(){
    const d = document.getElementById("day");
    const h = document.getElementById("hour");
    const m = document.getElementById("min");
    const s = document.getElementById("sec");

    let soon = new Date("May 26, 2021 17:00:00").getTime();
    let today = new Date().getTime();

    let distance = soon - today;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   if (seconds < 10){
       seconds = '0' + seconds;
   }
   if (minutes < 10){
       minutes = '0' + minutes;
   }
   if (hours < 10){
       hours = '0' + hours;
   }
   if (days < 10){
       days = '0' + days;
   }
    
    d.innerHTML = days + "d";
    h.innerHTML = hours + "h";
    m.innerHTML = minutes + "m";
    s.innerHTML = seconds + "s";

    if (today > soon){
        clearInterval(clock);
    }
}
var clock = setInterval(countdown, 1000);