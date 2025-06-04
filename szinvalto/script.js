var code = false;

function szinvalto(){
    let szin = document.getElementById("doboz");

    if(code == false){
        szin.style.backgroundColor = "blue";
        code = true;
    }

    else{
        szin.style.backgroundColor = "red";
        code = false;
    }
}