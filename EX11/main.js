const message=document.querySelector("#message")
const compteur =document.querySelector("#compteur")
const envoyer =document.querySelector("#envoyer")

message.addEventListener("change",function(){
    const NBcaractere = message.value.length
    compteur.textContent=`${NBcaractere} /50`

    if(NBcaractere >50 ){
        compteur.classList.add("text-red-600")
    }else {
        compteur.classList.remove("text-red-600")
    }


    if (message.value.trim() === "" || NBcaractere >50){
        envoyer.disabled = true;
    }else {
        envoyer.disabled = false;

    }


})