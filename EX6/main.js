const ajouter =document.querySelector("#ajouter")
const notes = document.querySelector("#notes")
let compteur = 1

ajouter.addEventListener("click",function(){
    const ligne = document.createElement("li")
    console.log(ligne)
    ligne.textContent =`Note n° ${compteur}`
    ligne.className ="p-2 bg-yellow-100 rounded"
 
    notes.appendChild(ligne)
    // notes.prepend(ligne)
    console.log(ligne)

})