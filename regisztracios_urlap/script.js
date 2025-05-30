function bad(name){
    document.getElementById(name).style.border = "solid red";
}


function good(name){
    document.getElementById(name).style.border = "solid lightgreen";
}


function nev_ellenorzes(){
    
    let minta = /^[a-z]{8,20}$/;
    let felhasznalo_nev = document.getElementById("nev").value;
    let hiba = document.getElementById("nev_hiba");
    
    if(minta.test(felhasznalo_nev) == false){
        hiba.textContent = "8-20 karakter hosszú, ékezet nélküli kisbetű";
        bad("nev");
    }
    else{
        hiba.textContent = "";
        good("nev");
    }
}


function email_ellenorzes(){

    let minta = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    let e_mail = document.getElementById("email").value;
    let hiba = document.getElementById("email_hiba");

    if(minta.test(e_mail) == false){
        hiba.textContent = "Nem felel meg a formai követelményeknek.";
        bad("email");
    }
    else{
        hiba.textContent = "";
        good("email");
    }
}


function telefon_ellenorzes(){

    let minta = /^[0-9]{6,12}$/
    let telefon = document.getElementById("telefon").value;
    let hiba = document.getElementById("telefon_hiba");

    if (minta.test(telefon) == false){
        hiba.textContent = "Formátum: 06701234567";
        bad("telefon");
    }
    else {
        hiba.textContent = "";
        good("telefon");
    }
}

