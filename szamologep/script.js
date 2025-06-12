var szam = "";
var szam1;
var szam2;
var muvelet = "";
var felirat = "";
var bekapcsol = false;

document.getElementById("onoff").textContent = "ON";
document.getElementById("onoff").style.backgroundColor = "red";

function nyom(nev){
    document.getElementById(nev).style.backgroundColor = "grey";
    document.getElementById(nev).style.border = "2px solid black";
}


function felenged(nev){
    document.getElementById(nev).style.backgroundColor = "white";
    document.getElementById(nev).style.border = "2px solid grey";
}


function nulla_lenyomas(){
    if (bekapcsol){
        felirat += "0";
        szam += "0";
        document.getElementById("kijelzo").value = felirat;
    }
}


function egy_lenyomas(){
    if (bekapcsol){
        felirat += "1";
        szam += "1";
        document.getElementById("kijelzo").value = felirat;
    }   
}


function ketto_lenyomas(){
    if (bekapcsol){
        felirat += "2";
        szam += "2";
        document.getElementById("kijelzo").value = felirat;
    }
}


function harom_lenyomas(){
    if (bekapcsol){
        felirat += "3";
        szam += "3";
        document.getElementById("kijelzo").value = felirat;
    }  
}


function negy_lenyomas(){
    if (bekapcsol){
        felirat += "4";
        szam += "4";
        document.getElementById("kijelzo").value = felirat;
    }
}


function ot_lenyomas(){
    if (bekapcsol){
        felirat += "5";
        szam += "5";
        document.getElementById("kijelzo").value = felirat;
    }
}


function hat_lenyomas(){
    if (bekapcsol){
        felirat += "6";
        szam += "6";
        document.getElementById("kijelzo").value = felirat;
    }  
}


function het_lenyomas(){
    if (bekapcsol){
        felirat += "7";
        szam += "7";
        document.getElementById("kijelzo").value = felirat;
    } 
}


function nyolc_lenyomas(){
    if (bekapcsol){
        felirat += "8";
        szam += "8";
        document.getElementById("kijelzo").value = felirat;
    }
}


function kilenc_lenyomas(){
    if (bekapcsol){
        felirat += "9";
        szam += "9";
        document.getElementById("kijelzo").value = felirat;
    }    
}


function pont_lenyomas(){
    if (bekapcsol){
        felirat += ",";
        szam += ".";
        document.getElementById("kijelzo").value = felirat;
    } 
}


function osztas_lenyomas(){
    if (bekapcsol){
        muvelet = "/";
        felirat += " / ";
        szam1 = +szam;
        szam = "";
        document.getElementById("kijelzo").value = felirat;
    }
}


function szorzas_lenyomas(){
    if (bekapcsol){
        muvelet = "*";
        felirat += " * ";
        szam1 = +szam;
        szam = "";
        document.getElementById("kijelzo").value = felirat;
    }
}


function kivonas_lenyomas(){
    if (bekapcsol){
        muvelet = "-";
        felirat += " - ";
        szam1 = +szam;
        szam = "";
        document.getElementById("kijelzo").value = felirat;
    }
}


function osszeadas_lenyomas(){
    if (bekapcsol){
        muvelet = "+";
        felirat += " + ";
        szam1 = +szam;
        szam = "";
        document.getElementById("kijelzo").value = felirat;
    }
}


function egyenlo_lenyomas(){
    if (bekapcsol){
        if (szam1){
            szam2 = +szam;

            switch(muvelet){
                case "/":
                    szam = szam1 / szam2;
                    break;
                case "*":
                    szam = szam1 * szam2;
                    break;
                case "-":
                    szam = szam1 - szam2;
                    break;
                case "+":
                    szam = szam1 + szam2;
                    break;
            }

            if (szam % 1 != 0){
                szam = szam.toFixed(5);
            }

            felirat += ` = ${szam}`;
            document.getElementById("kijelzo").value = felirat;
        }
        else{
            torles();
        }
    }
}


function torles(){
    szam = "";
    szam1 = "";
    szam2 = "";
    felirat = "";
    document.getElementById("kijelzo").value = felirat;
}


function on_off(){
    if (bekapcsol == false){
        bekapcsol = true;
        document.getElementById("onoff").textContent = "OFF";
        document.getElementById("onoff").style.backgroundColor = "grey";
    }
    else{
        bekapcsol = false;
        document.getElementById("onoff").textContent = "ON";
        document.getElementById("onoff").style.backgroundColor = "red";
        szam = "";
        szam1 = "";
        szam2 = "";
        felirat = "";
        document.getElementById("kijelzo").value = felirat;
    }
}


document.addEventListener("keydown", function(a){
    if(a.key === "0"){
        nulla_lenyomas();
        nyom("nulla");
    }

    if(a.key === "1"){
        egy_lenyomas();
        nyom("egy");
    }

    if(a.key === "2"){
        ketto_lenyomas();
        nyom("ketto");
    }

    if(a.key === "3"){
        harom_lenyomas();
        nyom("harom");
    }

    if(a.key === "4"){
        negy_lenyomas();
        nyom("negy");
    }

    if(a.key === "5"){
        ot_lenyomas();
        nyom("ot");
    }

    if(a.key === "6"){
        hat_lenyomas();
        nyom("hat");
    }

    if(a.key === "7"){
        het_lenyomas();
        nyom("het");
    }

    if(a.key === "8"){
        nyolc_lenyomas();
        nyom("nyolc");
    }

    if(a.key === "9"){
        kilenc_lenyomas();
        nyom("kilenc");
    }

    if(a.key === "c"){
        torles();
        nyom("clear");
    }

    if(a.key === "/"){
        osztas_lenyomas();
        nyom("osztas");
    }

    if(a.key === "*"){
        szorzas_lenyomas();
        nyom("szorzas");
    }

    if(a.key === "-"){
        kivonas_lenyomas();
        nyom("kivonas");
    }

    if(a.key === "+"){
        osszeadas_lenyomas();
        nyom("osszeadas");
    }

    if(a.key === ","){
        pont_lenyomas();
        nyom("pont");
    }

    if(a.key === "Enter"){
        egyenlo_lenyomas();
        nyom("egyenlo");
    }

    if(a.key === "o"){
        on_off();
    }
}
);


document.addEventListener("keyup", function(a){
    if(a.key === "0"){
        felenged("nulla");
    }

    if(a.key === "1"){
        felenged("egy");
    }

    if(a.key === "2"){
        felenged("ketto");
    }

    if(a.key === "3"){
        felenged("harom");
    }

    if(a.key === "4"){
        felenged("negy");
    }

    if(a.key === "5"){
        felenged("ot");
    }

    if(a.key === "6"){
        felenged("hat");
    }

    if(a.key === "7"){
        felenged("het");
    }

    if(a.key === "8"){
        felenged("nyolc");
    }

    if(a.key === "9"){
        felenged("kilenc");
    }

    if(a.key === "c"){
        felenged("clear");
    }

    if(a.key === "/"){
        felenged("osztas");
    }

    if(a.key === "*"){
        felenged("szorzas");
    }

    if(a.key === "-"){
        felenged("kivonas");
    }

    if(a.key === "+"){
        felenged("osszeadas");
    }

    if(a.key === ","){
        felenged("pont");
    }

    if(a.key === "Enter"){
        felenged("egyenlo");
    }
}
);