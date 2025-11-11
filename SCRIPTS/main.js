let tVotos = 0;
let vLinkedin = 1;
let vInstagram = 0;
let vTiktok = 0;


function votosLinkedin(){
    vLinkedin++
    document.getElementById("votos-linkedin").textContent = vLinkedin;
    tVotos += vLinkedin;
    totalVotos(tVotos);
}

function votosInstagram(){
    vInstagram++
    document.getElementById("votos-instagram").textContent = vInstagram;
    tVotos += vInstagram;
    totalVotos(tVotos);
}

function votosTiktok(){
    vTiktok++
    document.getElementById("votos-tiktok").textContent = vTiktok;
    tVotos += vTiktok;
    totalVotos(tVotos);
}

function totalVotos(t){

document.getElementById("total-votos").value = t;
}