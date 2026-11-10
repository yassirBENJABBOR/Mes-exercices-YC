const courses = ['Pain', 'Lait', 'Œufs', 'Tomates'];


const liste = document.querySelector("#liste")
const total = document.querySelector("#total")

console.log(courses[0]);
console.log(courses[courses.length-1]);
console.log(courses.length);

total.textContent = `${courses.length} articles`;
// for(let i = 0 ;i<courses.length ;i++){
//     const li = document.createElement('li');
//     li.textContent = courses[i];
//     liste.appendChild(li)
// }
    courses.push("Café");

courses.forEach(function(course,num) {
    const li = document.createElement('li');
    li.textContent = `${num+1}  ${course}` ;

    liste.appendChild(li)
    
    
});

