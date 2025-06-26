var fut = 0;
var futas = 0;
var foci = 0;
var focizas = 0;
var bringa = 0;
var bringazas = 0;
var hegy = 0;
var hegymaszas = 0;
var lo = 0;
var lovaglas = 0;
var tura = 0;
var turazas = 0;
var kajak = 0;
var kajakozas = 0;

function bevitel(nev){

    switch (nev){
        case "fut":
            fut = parseInt(document.getElementById("fut").value); 
            futas = parseInt(fut / 60 * 680);
            document.getElementById("futki").textContent = futas;
            break;
        case "foci":
            foci = parseInt(document.getElementById("foci").value);
            focizas = parseInt(foci / 60 * 550);
            document.getElementById("fociki").textContent = focizas;
            break;
        case "bringa":
            bringa = parseInt(document.getElementById("bringa").value);
            bringazas = parseInt(bringa / 60 * 480);
            document.getElementById("bringaki").textContent = bringazas;
            break;
        case "hegy":
            hegy = parseInt(document.getElementById("hegy").value);
            hegymaszas = parseInt(hegy / 60 * 430);
            document.getElementById("hegyki").textContent = hegymaszas;
            break;
        case "lo":
            lo = parseInt(document.getElementById("lo").value);
            lovaglas = parseInt(lo / 60 * 360);
            document.getElementById("loki").textContent = lovaglas;
            break;
        case "tura":
            tura = parseInt(document.getElementById("tura").value);
            turazas = parseInt(tura / 60 * 350);
            document.getElementById("turaki").textContent = turazas;
            break;    
        case "kajak":
            kajak = parseInt(document.getElementById("kajak").value);
            kajakozas = parseInt(kajak / 60 * 330);
            document.getElementById("kajakki").textContent = kajakozas;
            break;
        default:
            document.getElementById("futki").textContent = "0";
            document.getElementById("fociki").textContent ="0";
            document.getElementById("bringaki").textContent = "0";
            document.getElementById("hegyki").textContent = "0";
            document.getElementById("loki").textContent = "0";
            document.getElementById("turaki").textContent = "0";
            document.getElementById("kajakki").textContent = "0";
            break;
    }

    document.getElementById("percossz").textContent = fut + foci + bringa + hegy + lo + tura + kajak;
    let osszeg = futas + focizas + bringazas + hegymaszas + lovaglas + turazas + kajakozas
    document.getElementById("kcalossz").textContent = osszeg;
    document.getElementById("szazalek").textContent = `${(osszeg / 2000 * 100).toFixed(0)} %`;
}


function torles(){
    document.getElementById("fut").value = "";
    document.getElementById("foci").value = "";
    document.getElementById("bringa").value = "";
    document.getElementById("hegy").value = "";
    document.getElementById("lo").value = "";
    document.getElementById("tura").value = "";
    document.getElementById("kajak").value = "";
    
    bevitel();

    document.getElementById("percossz").textContent = "0";
    document.getElementById("kcalossz").textContent = "0";
    document.getElementById("szazalek").textContent = "0 %";
}