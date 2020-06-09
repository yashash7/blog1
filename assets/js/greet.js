function greet() {
    let time = new Date();
    let hrs = time.getHours();
    /*let mins = time.getMinutes();*/
    if(hrs>=0 && hrs<12) {
        return(document.getElementById("greet").innerHTML = "Good Morning,la visita!");
    }
    else if(hrs>=12 && hrs <17) {
        return(document.getElementById("greet").innerHTML = "Good AfterNoon,la visita!");
    }
    else {
        return(document.getElementById("greet").innerHTML = "Good Evening,la visita!");
    }
}
function readmore() {
    document.getElementById("more").width = "430";
    document.getElementById("less").innerHTML="Read Less"
}