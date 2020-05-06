function greet() {
    var time = new Date();
    var hrs = time.getHours();
    var mins = time.getMinutes();
    if(hrs>=0 && hrs<12) {
        return(document.getElementById("greet").innerHTML = "Good Morning!");
    }
    else if(hrs>=12 && hrs <17) {
        return(document.getElementById("greet").innerHTML = "Good AfterNoon!");
    }
    else {
        return(document.getElementById("greet").innerHTML = "Good Evening!");
    }
}
greet();
