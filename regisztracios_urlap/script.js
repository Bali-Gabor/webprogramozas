function piros(name){
    document.getElementById(name).style.border = "solid red";
}


function zold(name){
    document.getElementById(name).style.border = "solid lightgreen";
}


var controll_nev = false;
var controll_email = false;
var controll_telefon = false;
var controll_datum = false;
var controll_jelszo_ujra = false;
var controll_elfogad = false;


function nev_ellenorzes(){
    
    let minta = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{8,20}$/;
    let felhasznalo_nev = document.getElementById("nev").value;
    let hiba = document.getElementById("nev_hiba");
        
    if(minta.test(felhasznalo_nev) == false){
        hiba.textContent = "8-20 karakter hosszú, ékezet nélküli kis és nagybetű.";
        piros("nev");
        controll_nev = false;
    }
    else{
        hiba.textContent = "";
        zold("nev");
        controll_nev = true;
    }
}


function email_ellenorzes(){

    let minta = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    let e_mail = document.getElementById("email").value;
    let hiba = document.getElementById("email_hiba");

    if(minta.test(e_mail) == false){
        hiba.textContent = "Nem felel meg a formai követelményeknek.";
        piros("email");
        controll_email = false;
    }
    else{
        hiba.textContent = "";
        zold("email");
        controll_email = true;
    }
}


function telefon_ellenorzes(){

    let minta = /^[0-9]{8,20}$/
    let telefon = document.getElementById("telefon").value;
    let hiba = document.getElementById("telefon_hiba");

    if (minta.test(telefon) == false){
        hiba.textContent = "Formátum: 06701234567";
        piros("telefon");
        controll_telefon = false;
    }
    else {
        hiba.textContent = "";
        zold("telefon");
        controll_telefon = true;
    }
}


function datum_ellenorzes(){

    let datum = document.getElementById("datum").value;
    let hiba = document.getElementById("datum_hiba");
    let datum_ma = new Date();
    let datum18 = new Date(datum);
    datum18.setFullYear(datum18.getFullYear() + 18);

    if(datum_ma < datum18){
        hiba.textContent = "Csak 18 év felettiek regisztrálhatnak!";
        piros("datum");
        controll_datum = false;
    }
    else {
        hiba.textContent = "";
        zold("datum");
        controll_datum = true;
    }
}


function jelszo_ellenorzes(){
     let minta = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,20}$/;
     let jelszo = document.getElementById("jelszo").value;
     let hiba = document.getElementById("jelszo_hiba");

     if(minta.test(jelszo) == false){
        hiba.textContent = "8-20 karakter hosszú, szám, kis és nagy ékezet nélküli betűk.";
        piros("jelszo");
     }
     else{
        hiba.textContent = "";
        zold("jelszo");
     }

     let jelszo_ujra = document.getElementById("jelszo_ujra").value;

     if(jelszo_ujra){
        jelszo_ujra_ellenorzes();
     }
}


function jelszo_ujra_ellenorzes(){
    let jelszo = document.getElementById("jelszo").value;
    let jelszo_ujra = document.getElementById("jelszo_ujra").value;
    let hiba = document.getElementById("jelszo_ujra_hiba");

    if(jelszo != jelszo_ujra){
        hiba.textContent = "A jelszónak egyeznie kell!";
        piros("jelszo_ujra");
        controll_jelszo_ujra = false;
    }
    else{
        hiba.textContent = "";
        zold("jelszo_ujra");
        controll_jelszo_ujra = true;
    }
}


function elfogad_ellenorzes(){
    let elfogad = document.getElementById("elfogad");
    let hiba = document.getElementById("elfogad_hiba");

    if(elfogad.checked){
        hiba.textContent = "";
        controll_elfogad = true;
    }
    else{
        hiba.textContent = "Az ASZF-et el kell fogadni.";
        controll_elfogad = false;
    }
}


function regisztracio(){
    
    if(controll_nev && controll_email && controll_telefon && controll_datum && controll_jelszo_ujra && controll_elfogad){
        document.getElementById("oldal").style.backgroundColor = "white";
        document.getElementById("keret").style.visibility = "hidden";
        let szoveg = document.getElementById("oldal");
        szoveg.innerHTML = "Sikeres regisztráció!";
        szoveg.style.color = "green";
        szoveg.style.textAlign = "center";
        szoveg.style.fontWeight = "bold";
    }   
}