// function calculerTTC (HT){
//     const TVA = 1.20
//     const TTC = HT * TVA
//     return TTC
// }

const calculerTTC = (HT)  =>{
    const TVA = 1.20
    const TTC = HT * TVA
    return TTC 
}


console.log(calculerTTC (100))

function afficherPrix(HT,selecteur){
    const liste = document.querySelector("#liste")
    const ligne = document.querySelector(selecteur)
    


    ligne.textContent =`HT : ${HT} DH · TTC : ${calculerTTC (HT)} DH`
     
}

afficherPrix(100 ,"#p1")
afficherPrix(45,"#p2")
afficherPrix(320,"#p3")
