const produits = [
  { id: 1, nom: 'Clavier', prix: 250, stock: 4 },
  { id: 2, nom: 'Souris', prix: 90, stock: 0 },
  { id: 3, nom: 'Écran', prix: 1400, stock: 2 }
];

console.log(produits[1].nom)
console.log(produits[2].prix)
    const catalogue = document.querySelector("#catalogue")



function creerFiche(produit){
    const {nom, prix,stock } = produit;

    const article = document.createElement("article")
    const nomA = document.createElement("h2")
    nomA.textContent =nom
    article.append(nomA)
    const prixA = document.createElement("p")
    prixA.textContent =`${prix} DH`
    article.append(prixA)
    article.className ="border font-bold m-4 p-4 rounded-2xl"


    if (stock === 0){
        const rupture= document.createElement("p")
        rupture.textContent ="rupture"
        rupture.className="bg-red-300 border rounded-2xl p-2 m-2 text-red-800"
        article.append(rupture)
     }
    
     
    return article
}   

produits.forEach(function(produit){
    const fiche = creerFiche(produit)
     catalogue.appendChild(fiche)

     

})