const note1 =document.querySelectorAll(".note")
const note2 = document.getElementsByClassName("note");


const surligner = document.querySelector("#surligner")

surligner.addEventListener("click", function(){
    note1.forEach(e => {
        e.classList.toggle("bg-yellow-200")

    });
    
})

const lire = document.querySelector("#lire")

lire.addEventListener("click",function(){
    const inputRD=document.getElementsByName("theme")
    inputRD.forEach(input => {
        if(input.checked){
            console.log(input.checked)
        }
    });
})

const nouvelleNote = document.createElement("p");
nouvelleNote.className = "note";
nouvelleNote.textContent = "Note D";
document.body.append(nouvelleNote);

console.log(note1.length);
console.log(note2.length);