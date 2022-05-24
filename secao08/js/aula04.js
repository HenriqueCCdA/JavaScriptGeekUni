// let itexto = document.getElementById('produto');

// console.log(itexto);

// let spans = document.getElementsByTagName('span');

// console.log(spans);

// let eles = document.getElementsByClassName('texto');

// console.log(eles);

// // Ler valores

// console.log(spans[0].textContent);
// console.log(spans[1].innerHTML);

// // Alterar valores

// spans[0].textContent = 'JavaScript';
// spans[1].innerHTML = 'Geek University';

// let span = document.getElementsByTagName('span')[0];

// console.log(span.innerHTML);

// span.style.textTransform = 'uppercase';

// let inp = document.querySelector('div.row input');
// console.log(inp);

// let inp = document.querySelector('input'); // busca pela tag
// console.log(inp);

// let ele = document.querySelector('.texto'); // busca o primeiro elemento pela class
// console.log(ele);

// let eles = document.querySelectorAll('.texto'); // busca todos os elementos pela class
// console.log(eles);

// let div1 = document.querySelector("#div1"); // busta o elemento pelo id
// console.log(div1);

// let imp = document.querySelector('input[name=produto]');
// console.log(imp);

// Exemplo1

// let btn = document.querySelector('button.btn');

// btn.onclick = function(){
//     alert('Botão clicado');
// }

// Exemplo 2

let btn = document.querySelector('button.btn');

let inp = document.querySelector('input[name=produto]');

btn.onclick = function(){
    alert(`Temos o texto ${inp.value}`);
}