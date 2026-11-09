console.log('JS connecté')

const nom ="clavier"
let prix = 250

const Nom =document.getElementById("nom")
const Prix = document.getElementById("prix")


Prix.textContent =`${nom} , ${prix} DH`

prix =199

Prix.textContent =`${nom} , ${prix} DH`

nom ="sourie"

// en ne peut pas changer le nom car le nom est constante 