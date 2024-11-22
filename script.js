let lamp = false;
function accendiespengilalampadina() {
    lamp = !lamp;
    
    if (lamp) {
        const imgclass = document.getElementById ("img-lamp");
        imgclass.src = "./img/yellow_lamp.png";
    } else {
        const imgclass = document.getElementById ("img-lamp");
        imgclass.src = "./img/white_lamp.png";
    } 
    console.log(lamp)
}
console.log("lampfuori", lamp);