function ellenorzes(){

    let ertek = document.getElementById("szoveg").value;
    let minta = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

    if (minta.test(ertek) && ertek.length >= 8 && ertek.length <= 20){
        document.getElementById("hiba").textContent = "";
    }
    else{
        document.getElementById("hiba").textContent = "Nem felel meg a formai követelményeknek!";
    }
}

function ellenorzes2(){
    
}