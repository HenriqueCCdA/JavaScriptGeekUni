function removerBotao(btn){
    // Recuperar o elemento div
    //let divElement = document.querySelector('#app');

    // Remove o filho o selecionado da div
    //divElement.removeChild(btn);

    document.querySelector('#app').removeChild(btn);
}

let listBtn = document.querySelectorAll('.btn');

console.log(listBtn);

listBtn.forEach( btn => {
     btn.onclick = function() { removerBotao(this) }
 } )

// let btns = document.querySelectorAll('button');

// let divElement = document.querySelector('#app');

// for(let i = 0; i < btns.length; i++){
//     btns[i].onclick = function(){
//         divElement.removeChild(this);
//     }
// }