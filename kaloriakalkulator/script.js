var adatok = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function szamolas(nev){

    let tombindex = 0;
    let szorzo = 0;

    switch(nev){
        case "futas": tombindex = 0; szorzo = 680; break;
        case "focizas": tombindex = 2; szorzo = 550; break;
        case "bringazas": tombindex = 4; szorzo = 480; break;
        case "hegymaszas": tombindex = 6; szorzo = 430; break;
        case "lovaglas": tombindex = 8; szorzo = 360; break;
        case "turazas": tombindex = 10; szorzo = 350; break;
        case "kajakozas": tombindex = 12; szorzo = 330; break;
    }

    adatok[tombindex] = document.getElementById(nev).value;

    if(adatok[tombindex] == "") adatok[tombindex] = 0;
    else adatok[tombindex] = parseInt(adatok[tombindex]);
    adatok[tombindex + 1] = parseInt(adatok[tombindex] / 60 * szorzo);
    document.getElementById(nev + "ki").textContent = adatok[tombindex + 1];

    adatok[14] = 0;
    for(let i = 0; i < 13; i += 2) adatok[14] += adatok[i];
    document.getElementById("percosszesen").textContent = adatok[14];

    adatok[15] = 0;
    for(let i = 1; i < 14; i += 2) adatok[15] += adatok[i];
    document.getElementById("kcalosszesen").textContent = adatok[15];

    document.getElementById("szazalek").textContent = `${(adatok[15] / 2000 * 100).toFixed(1)} %`;
}


function torles(){

    adatok = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    document.getElementById("futas").value = "";
    document.getElementById("focizas").value = "";
    document.getElementById("bringazas").value = "";
    document.getElementById("hegymaszas").value = "";
    document.getElementById("lovaglas").value = "";
    document.getElementById("turazas").value = "";
    document.getElementById("kajakozas").value = "";

    document.getElementById("futaski").textContent = 0;
    document.getElementById("focizaski").textContent = 0;
    document.getElementById("bringazaski").textContent = 0;
    document.getElementById("hegymaszaski").textContent = 0;
    document.getElementById("lovaglaski").textContent = 0;
    document.getElementById("turazaski").textContent = 0;
    document.getElementById("kajakozaski").textContent = 0;

    document.getElementById("percosszesen").textContent = 0;
    document.getElementById("kcalosszesen").textContent = 0;
    document.getElementById("szazalek").textContent = "0 %";
}