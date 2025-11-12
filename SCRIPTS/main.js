let tVotos = 0;
let vLinkedin = 0;
let vInstagram = 0;
let vTiktok = 0;

function votosLinkedin(){
    vLinkedin++
    document.getElementById("votos-linkedin").textContent = vLinkedin;
    totalVotos();
}

function votosInstagram(){
    vInstagram++
    document.getElementById("votos-instagram").textContent = vInstagram;
    totalVotos();
}

function votosTiktok(){
    vTiktok++
    document.getElementById("votos-tiktok").textContent = vTiktok;
    totalVotos();
}

function totalVotos(t){
    tVotos++;
    document.getElementById("conteo-votos").textContent = tVotos;
}