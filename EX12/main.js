const produits = [
  { nom: 'Clavier', prixHT: 250 },
  { nom: 'Souris', prixHT: 90 },
  { nom: 'Écran', prixHT: 1400 }
]; 

const noms =produits.map(function (produit) {
    
    return produit.nom
})
    console.log(noms);

const produitsTTC =produits.map(function(produit){
    return {
        ...produit,
        prixTTC: produit.prixHT * 1.20
    }

})

console.log(produitsTTC);

const textes  =produits.map(function(produit){
    
    return`${produit.nom} :${produit.prixHT * 1.20} DH TTC`



})
console.log(textes);


const etiquettes=document.querySelector("#etiquettes")
textes.forEach(function(texte){
    const li = document.createElement("li")
    li.textContent=texte
    etiquettes.append(li)

})