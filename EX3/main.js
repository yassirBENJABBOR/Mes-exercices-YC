const stock = 0

const badge =document.querySelector("#badge")

// if (stock > 0 ){
//     badge.textContent = "disponible"
//     badge.classList.add('bg-green-200')

// }else{
//  badge.textContent = "Rupture" 
// badge.classList.add('bg-red-200')
//  }

stock > 0 
    ? (badge.textContent = "disponible",badge.classList.add('bg-green-200') )
    : (badge.textContent = "Rupture" ,badge.classList.add('bg-red-200'))

