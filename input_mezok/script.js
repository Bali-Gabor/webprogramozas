function valtozas(){
    let piros = document.getElementById("red").value * 2.55;
    let piros_szoveg = document.getElementById("redt");
    let zold = document.getElementById("green").value * 2.55;
    let zold_szoveg = document.getElementById("greent");
    let kek = document.getElementById("blue").value * 2.55;
    let kek_szoveg = document.getElementById("bluet");
    
    piros_szoveg.value = Math.round(piros);
    zold_szoveg.value = Math.round(zold);
    kek_szoveg.value = Math.round(kek);

    document.getElementById("pkod").textContent = Math.round(piros);
    document.getElementById("zkod").textContent = Math.round(zold);
    document.getElementById("kkod").textContent = Math.round(kek);


    let szin = `rgb(${piros}, ${zold}, ${kek})`;    
    document.getElementById("doboz").style.backgroundColor = szin;
}


function valtozas_gomb(){
    let piros_szoveg = document.getElementById("redt").value;
    let zold_szoveg = document.getElementById("greent").value;
    let kek_szoveg = document.getElementById("bluet").value;

    if (piros_szoveg == 0 && piros_szoveg.length != 1){
        document.getElementById("red").value = 0;
        document.getElementById("pkod").textContent = 0;
        document.getElementById("redt").value = "0";
        piros_szoveg = "0";
    }

    if (zold_szoveg == 0 && zold_szoveg.length != 1){
        document.getElementById("green").value = 0;
        document.getElementById("zkod").textContent = 0;
        document.getElementById("greent").value = "0";
        zold_szoveg = "0";
    }

    if (kek_szoveg == 0 && kek_szoveg.length != 1){
        document.getElementById("blue").value = 0;
        document.getElementById("kkod").textContent = 0;
        document.getElementById("bluet").value = "0";
        kek_szoveg = "0";
    }

    if (piros_szoveg >= 0 && piros_szoveg <=255 &&
        zold_szoveg >= 0 && zold_szoveg <=255 &&
        kek_szoveg >= 0 && kek_szoveg <= 255){

        document.getElementById("pkod").textContent = piros_szoveg;
        document.getElementById("zkod").textContent = zold_szoveg;
        document.getElementById("kkod").textContent = kek_szoveg;

        document.getElementById("red").value = Math.round(piros_szoveg / 2.55);
        document.getElementById("green").value = Math.round(zold_szoveg / 2.55);
        document.getElementById("blue").value = Math.round(kek_szoveg / 2.55);

        let szin = `rgb(${piros_szoveg}, ${zold_szoveg}, ${kek_szoveg})`;    
        document.getElementById("doboz").style.backgroundColor = szin;
    }
}