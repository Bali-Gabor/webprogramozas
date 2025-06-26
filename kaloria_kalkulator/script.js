function szamolas(){
    let futas = document.getElementById("futasbe").value;
    let fut = parseInt(futas / 60 * 680);
    document.getElementById("futaski").textContent = fut;

    let focizas = document.getElementById("focizasbe").value;
    let foci = parseInt(focizas / 60 * 550);
    document.getElementById("focizaski").textContent = foci;

    let bringazas = document.getElementById("bringazasbe").value;
    let bringa = parseInt(bringazas / 60 * 480);
    document.getElementById("bringazaski").textContent = bringa;

    let hegymaszas = document.getElementById("hegymaszasbe").value;
    let hegy = parseInt(hegymaszas / 60 * 430);
    document.getElementById("hegymaszaski").textContent = hegy;

    let lovaglas = document.getElementById("lovaglasbe").value;
    let lovagol = parseInt(lovaglas / 60 * 430);
    document.getElementById("lovaglaski").textContent = lovagol;

    let turazas = document.getElementById("turazasbe").value;
    let tura = parseInt(turazas / 60 * 430);
    document.getElementById("turazaski").textContent = tura;

    let kajakozas = document.getElementById("kajakozasbe").value;
    let kajak = parseInt(kajakozas / 60 * 430);
    document.getElementById("kajakozaski").textContent = kajak;

    document.getElementById("percossz").textContent = `${(+futas + +focizas + +bringazas + +hegymaszas + +lovaglas + +turazas + +kajakozas)}`;
    
    let osszeg = fut + foci + bringa + hegy + lovagol + tura + kajak;
    document.getElementById("kcalossz").textContent = osszeg;

    let szam =(osszeg / 2000 * 100).toFixed(0);
    document.getElementById("arany").textContent = `${szam} %`;
}


function torles(){
    document.getElementById("futasbe").value = "";
    document.getElementById("focizasbe").value = "";
    document.getElementById("bringazasbe").value = "";
    document.getElementById("hegymaszasbe").value = "";
    document.getElementById("lovaglasbe").value = "";
    document.getElementById("turazasbe").value = "";
    document.getElementById("kajakozasbe").value = "";
  
    szamolas();
}
