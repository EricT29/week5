var halloween = new Date(new Date().getFullYear(), 10, 31).getTime();

var countdown = setInterval(function() {
    var now = new Date().getTime();

    var difference = halloween - now;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (difference < 0) {
        clearInterval(countdown);
        document.getElementById("demo").style.color = "orange";
        document.getElementById("demo").innerHTML = "🎃 It's Halloween! 🎃";
    }
}, 1000)