let compteur = 0
const valeur =document.querySelector("#valeur")
const moins = document.querySelector("#moins")
const plus = document.querySelector("#plus")

const reset = document.querySelector("#reset")

valeur.textContent = `${compteur}`
function afficher (){
    plus.addEventListener("click",function(){
         compteur += 1
         return valeur.textContent = `${compteur}`

    })
    moins.addEventListener("click", function(){
        if (compteur>0){
        compteur -= 1
        return valeur.textContent = `${compteur}`
        }
    })
    reset.addEventListener("click" , function(){
        if (compteur != 0){
         compteur = 0
        return valeur.textContent = `${compteur}`
        }
    })

}

afficher()