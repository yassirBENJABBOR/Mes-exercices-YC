const message = '<strong>Promo</strong> : -20 % sur les claviers';
// const message = '<img src=x onerror="alert(1)">';
const afficher =document.querySelector("#go")
const zoneTexte =document.querySelector("#zoneTexte")
const zoneHtml =document.querySelector("#zoneHtml")

afficher.addEventListener("click",function(){
    zoneTexte.textContent =message
    zoneHtml.innerHTML=message 
    zoneHtml.innerHTML += " Fin"

    console.log(zoneHtml.innerHTML);
})

// donc innerHTML il affiche le mesage et il crreer limage et il affiche lalerte 
// mais text.content il affiche le content en tant que message 