function changeIcon(){
    var icono = document.getElementById("icono");
    if(icono.className == "bi bi-chevron-down"){
        icono.className = "bi bi-chevron-up";
    } else if(icono.className == "bi bi-chevron-up") {
        icono.className = "bi bi-chevron-down";
    }
}