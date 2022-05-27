// 1) Temos que referenciar o input

let input = document.querySelector('input[name=tarefa]');

// 2) Temos que referenciar o button

let btn = document.querySelector('#botao');

// 3) Temos que referenciar a lista

let lista = document.querySelector('#lista');

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

// card
let card = document.querySelector('.card');

function renderizarTarefas(){

    // Limpar a listagem de itens antes de renderizar novamenta a tela
    lista.innerHTML = '';

    for(tarefa of tarefas){
        // Criar o item da lista
        let intemLista = document.createElement('li');

        // Adicionar classes no item da lista
        intemLista.setAttribute('class', 'list-group-item list-group-item-action')

        // Adicionar evento de clique no item da lista
        intemLista.onclick = function(){
            deletarTarefa(this);
        }

        // Criar um texto
        let itemTexto = document.createTextNode(tarefa);

        // Adicionar o texto no item da lista
        intemLista.appendChild(itemTexto);

        // Adicionar o item da lista na lista
        lista.appendChild(intemLista);

    }
}

// Executando a função para renderizar as tarefas
renderizarTarefas();

// 1) Precisamos "escutar" o evento de clique de botão
btn.onclick = function(){
    // 2) Precisamos capturar o valor digitado pelo usuário no input
    let novaTarefa = input.value;

    if(novaTarefa !== "") {

        // 3) Precisamos atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela
        tarefas.push(novaTarefa);

        renderizarTarefas();

        // Limpar o input
        input.value = '';

        // Limpar mensagens de erro
        removerSpans();

        // Salva os novos dados no banco de ados
        salvarDadosStorage()

    }else{
        // Limpar mensagens de erro
        removerSpans();

        let span = document.createElement('span');

        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Você precisa informar a tarefa!');

        span.appendChild(msg);

        card.appendChild(span);

    }

}

function removerSpans(){
    let spans = document.querySelectorAll('span');


    for(span of spans){
        card.removeChild(span);
    }

}

function deletarTarefa(tar){
    // Remove a tarefa do array
    tarefas.splice(tarefas.indexOf(tar.textContent), 1);

    // Renderiza novamente a tela
    renderizarTarefas();

    // Salva os novos dados no banco de ados
    salvarDadosStorage()
}

function salvarDadosStorage(){

    // Todo navegador web possui esta capacidade
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
